'use client'
import { useState } from "react";
import toast from "react-hot-toast";
import PersonalInfoForm from "./persoForm";
import { FormState } from "./types";
import { supabase } from "../lib/supabaseClient";

const initialFormState: FormState = {
  full_name: "",
  email: "",
  university: "",
  linkedin: "",
  discord_id: "",
  year_of_study: "",
  phone: "",
  national_id: "",
  study_field: "",
  skills: "",
  team_name: "",
  hypscb: "",
  elaborate: "",
  experience: "",
  software: "",
};

const Reg = () => {
  const [step, setStep] = useState<"choice" | "teamSize" | "form">("choice");
  const [isSolo, setIsSolo] = useState<boolean | null>(null);
  const [numMembers, setNumMembers] = useState<number>(1);
  const [formStates, setFormStates] = useState<FormState[]>([]);
  const [teamId, setTeamId] = useState<number | null>(null);
  const [currentFormIndex, setCurrentFormIndex] = useState(0);


  const handleChoice = (choice: "solo" | "team") => {
    if (choice === "solo") {
      setIsSolo(true);
      setFormStates([{ ...initialFormState }]);
      setStep("form");
      toast.success("Solo registration selected");
    } else {
      setIsSolo(false);
      setStep("teamSize");
      toast.success("Team registration selected");
    }
  };

  const handleTeamSizeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (numMembers > 1) {
      setFormStates(Array.from({ length: numMembers }, () => ({ ...initialFormState })));
      setStep("form");
      toast.success(`${numMembers} team members set`);
    } else {
      toast.error("Team must have at least 2 members");
    }
  };

  const handleSaveData = (newData: FormState, idx: number) => {
    const updatedStates = [...formStates];
    updatedStates[idx] = newData;
    setFormStates(updatedStates);
  };

  const handleSoloSubmit = async (data: FormState) => {
    // Check if required fields are filled (excluding team_name for solo)
    if (
      !data.full_name || !data.email || !data.university || !data.linkedin ||
      !data.discord_id || !data.phone || !data.national_id || !data.study_field
    ) {
      toast.error("Please fill in all the required fields!");
      return;
    }
  
    toast.loading("Submitting solo data...");
    try {
      // Insert member with no team
      const { error } = await supabase.from("members").insert([{
        full_name: data.full_name,
        email: data.email,
        university: data.university,
        linkedin: data.linkedin,
        discord_id: data.discord_id,
        year_of_study: data.year_of_study,
        phone: data.phone,
        national_id: data.national_id,
        study_field: data.study_field,
        skills: data.skills,
        hypscb: data.hypscb,
        elaborate: data.elaborate,
        experience: data.experience,
        software: data.software,
        team_id: null, // Explicitly set to null
      }]);
  
      if (error) {
        toast.dismiss();
        toast.error("Failed to submit member.");
        console.error("Member insert error:", error.message, error.details);
        return;
      }
  
      toast.dismiss();
      toast.success("Solo registration submitted!");
    } catch (error) {
      toast.dismiss();
      toast.error("Submission failed.");
      console.error("Unexpected error:", error);
    }
  };
  
  
  
  const handleFinalSubmit = async () => {
    if (formStates.length === 0) {
      toast.error("⚠️ No team members provided. Please add at least one member.");
      return;
    }
  
    const teamName = formStates[0].team_name;
    if (!teamName) {
      toast.error("⚠️ Team name is required.");
      return;
    }
  
    const missingFields = [];
    for (const [index, member] of formStates.entries()) {
      if (
        !member.full_name || !member.email || !member.university || !member.linkedin ||
        !member.discord_id || !member.phone || !member.national_id || !member.study_field
      ) {
        missingFields.push(`Member ${index + 1}`);
      }
    }
  
    if (missingFields.length > 0) {
      toast.error(`⚠️ Missing required fields for: ${missingFields.join(', ')}.`);
      return;
    }
  
    const emails = formStates.map(m => m.email);
    const discordIds = formStates.map(m => m.discord_id);
    const nationalIds = formStates.map(m => m.national_id);
  
    const { data: duplicateMembers, error: checkError } = await supabase
      .from("members")
      .select("email, discord_id, national_id")
      .or(`email.in.(${emails.map(e => `"${e}"`).join(',')}),discord_id.in.(${discordIds.map(d => `"${d}"`).join(',')}),national_id.in.(${nationalIds.map(n => `"${n}"`).join(',')})`);
  
    if (checkError) {
      toast.error(`❌ Validation failed: ${checkError.message || 'Unknown error'}`);
      return;
    }
  
    if (duplicateMembers?.length > 0) {
      const duplicates = [];
      for (const member of duplicateMembers) {
        if (emails.includes(member.email)) duplicates.push(`Email: ${member.email}`);
        if (discordIds.includes(member.discord_id)) duplicates.push(`Discord ID: ${member.discord_id}`);
        if (nationalIds.includes(member.national_id)) duplicates.push(`National ID: ${member.national_id}`);
      }
      toast.error(`⚠️ Duplicate entries found:\n- ${duplicates.join('\n- ')}`);
      return;
    }
  
    toast.loading("🚀 Submitting team data...");
  
    const { data: teamData, error: teamError } = await supabase
      .from("teams")
      .insert({ team_name: teamName })
      .select()
      .single();
  
    if (teamError || !teamData) {
      toast.dismiss();
      toast.error(`❌ Failed to create team: ${teamError?.message || 'Unknown error'}`);
      return;
    }
  
    const team_id = teamData.id;
    setTeamId(team_id);
  
    const membersToInsert = formStates.map((member) => ({
      year_of_study: member.year_of_study,
      full_name: member.full_name,
      email: member.email,
      university: member.university,
      linkedin: member.linkedin,
      discord_id: member.discord_id,
      phone: member.phone,
      national_id: member.national_id,
      study_field: member.study_field,
      skills: member.skills,
      hypscb: member.hypscb,
      elaborate: member.elaborate,
      experience: member.experience,
      software: member.software,
      team_id,
    }));
  
    const { error: membersError } = await supabase.from("members").insert(membersToInsert);
  
    toast.dismiss();
  
    if (membersError) {
      toast.error(`❌ Failed to submit members: ${membersError.message || 'Unknown error'}`);
      return;
    }
  
    toast.success("✅ Team registered successfully!");
  };
  

  const sections = formStates.map((_, i) =>
    isSolo ? "Member" : i === 0 ? "Leader" : `Member ${i}`
  );
  
  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="max-w-3xl mx-auto">
        {step === "choice" && (
          <div className="space-y-4 text-center">
            <h2 className="aec text-white text-xl font-bold">Register as:</h2>
            <div className="flex justify-center gap-6">
              <button
                onClick={() => handleChoice("solo")}
                className="bg-[#FFC200] text-[#110038] px-4 py-2 rounded hover:bg-[#110038] hover:text-[#FFC200]"
              >
                Solo
              </button>
              <button
                onClick={() => handleChoice("team")}
                className="bg-[#FFC200] text-[#110038] px-4 py-2 rounded hover:bg-[#110038] hover:text-[#FFC200]"
              >
                Team
              </button>
            </div>
          </div>
        )}
  
        {step === "teamSize" && (
          <form onSubmit={handleTeamSizeSubmit} className="space-y-6 text-center mt-6">
            <h2 className="text-xl font-bold text-white">Select number of team members:</h2>
            <div className="flex justify-center gap-4">
              {[2, 3, 4].map((num) => (
                <button
                  type="button"
                  key={num}
                  onClick={() => setNumMembers(num)}
                  className={`px-6 py-3 rounded-full font-semibold transition ${
                    numMembers === num
                      ? "bg-white text-[#110038]"
                      : "bg-[#FFC200] text-[#110038] hover:bg-[#110038] hover:text-[#FFC200]"
                  }`}
                >
                  {num}
                </button>
              ))}
            </div>
            <button
              type="submit"
              className="mt-4 bg-[#FFC200] text-[#110038] px-6 py-2 rounded hover:bg-[#110038] hover:text-[#FFC200] font-semibold"
            >
              Continue
            </button>
          </form>
        )}
  
        {step === "form" && (
          <div className="mt-6 space-y-4">
            <div className="max-w-2xl mx-auto">
              <PersonalInfoForm
                key={currentFormIndex}
                title={sections[currentFormIndex]}
                isLastForm={isSolo ? true : currentFormIndex === sections.length - 1}
                onSubmit={
                  isSolo
                    ? () => handleSoloSubmit(formStates[0])
                    : () => handleFinalSubmit()
                }
                formData={formStates[currentFormIndex]}
                setFormData={(newData: FormState) =>
                  handleSaveData(newData, currentFormIndex)
                }
                teamId={teamId}
                setTeamId={setTeamId}
                isSolo={isSolo}
              />
            </div>
  
            {/* Navigation buttons */}
            <div className="flex justify-between max-w-2xl mx-auto pt-4">
              <button
                type="button"
                disabled={currentFormIndex === 0}
                onClick={() => setCurrentFormIndex((prev) => prev - 1)}
                className={`px-4 py-2 rounded font-semibold transition ${
                  currentFormIndex === 0
                    ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                    : "bg-[#FFC200] text-[#110038] hover:bg-[#110038] hover:text-[#FFC200]"
                }`}
              >
                Previous
              </button>
  
              {!isSolo && currentFormIndex < sections.length - 1 && (
                <button
                  type="button"
                  onClick={() => setCurrentFormIndex((prev) => prev + 1)}
                  className="bg-[#FFC200] text-[#110038] px-4 py-2 rounded hover:bg-[#110038] hover:text-[#FFC200] font-semibold"
                >
                  Next
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
  
};

export default Reg;
