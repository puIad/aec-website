import { FormState } from "./types";

interface PersonalInfoFormProps {
  title: string;
  isLastForm: boolean;
  onSubmit: () => void; 
  formData: FormState;
  setFormData: (newData: FormState) => void;
  teamId: number | null;
  setTeamId: React.Dispatch<React.SetStateAction<number | null>>;
  isSolo: boolean | null;
}

const PersonalInfoForm: React.FC<PersonalInfoFormProps> = ({
  title,
  isLastForm,
  onSubmit,
  formData,
  setFormData,
  teamId,
  setTeamId,
  isSolo,
}) => {
  return (
    <div className="space-y-4 bg-purple-900/80 p-10 ">
      <h3 className="aec text-[#FFC200] text-xl font-semibold">{title}</h3>

      {/* Personal Information */}
      <div>
        <label className="block">Full Name</label>
        <input
          type="text"
          value={formData.full_name}
          onChange={(e) => setFormData({ ...formData, full_name: e.target.value })}
          className="border p-2 w-full rounded text-white"
          placeholder="Enter your full name"
        />
      </div>
      <div>
        <label className="block">Email</label>
        <input
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="border p-2 w-full rounded text-white"
          placeholder="Enter your email"
        />
      </div>
      <div>
        <label className="block">University</label>
        <input
          type="text"
          value={formData.university}
          onChange={(e) => setFormData({ ...formData, university: e.target.value })}
          className="border p-2 w-full rounded text-white"
          placeholder="Enter your university"
        />
      </div>
      <div>
        <label className="block">LinkedIn</label>
        <input
          type="text"
          value={formData.linkedin}
          onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
          className="border p-2 w-full rounded text-white"
          placeholder="Enter your LinkedIn URL"
        />
      </div>
      <div>
        <label className="block">Discord ID</label>
        <input
          type="text"
          value={formData.discord_id}
          onChange={(e) => setFormData({ ...formData, discord_id: e.target.value })}
          className="border p-2 w-full rounded text-white"
          placeholder="Enter your Discord ID"
        />
      </div>
      <div>
        <label className="block">Phone</label>
        <input
          type="text"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className="border p-2 w-full rounded text-white"
          placeholder="Enter your phone number"
        />
      </div>
      <div>
        <label className="block">National ID</label>
        <input
          type="text"
          value={formData.national_id}
          onChange={(e) => setFormData({ ...formData, national_id: e.target.value })}
          className="border p-2 w-full rounded text-white"
          placeholder="Enter your national ID"
        />
      </div>
      <div>
        <label className="block">Year of Study</label>
        <input
          type="text"
          value={formData.year_of_study}
          onChange={(e) => setFormData({ ...formData, year_of_study: e.target.value })}
          className="border p-2 w-full rounded text-white"
          placeholder="Enter your year of study"
        />
      </div>
      <div>
        <label className="block">Study Field</label>
        <input
          type="text"
          value={formData.study_field}
          onChange={(e) => setFormData({ ...formData, study_field: e.target.value })}
          className="border p-2 w-full rounded text-white"
          placeholder="Enter your field of study"
        />
      </div>

      {/* Professional Information */}
      <div>
        <label className="block">Skills</label>
        <input
          type="text"
          value={formData.skills}
          onChange={(e) => setFormData({ ...formData, skills: e.target.value })}
          className="border p-2 w-full rounded text-white"
          placeholder="Enter your skills"
        />
      </div>

      <div>
        <label className="block">
          Have you participated in similar competitions before?
        </label>
        <input
          type="text"
          value={formData.hypscb}
          onChange={(e) => setFormData({ ...formData, hypscb: e.target.value })}
          className="border p-2 w-full rounded text-white"
          placeholder="Yes or No"
        />
      </div>

      <div>
        <label className="block">If so, please elaborate</label>
        <textarea
          value={formData.elaborate}
          onChange={(e) => setFormData({ ...formData, elaborate: e.target.value })}
          className="border p-2 w-full rounded text-white"
          placeholder="Tell us more about your previous competition experience"
          rows={3}
        />
      </div>

      <div>
        <label className="block">
          Do you have experience with hands-on building and prototyping? If yes, explain.
        </label>
        <textarea
          value={formData.experience}
          onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
          className="border p-2 w-full rounded text-white"
          placeholder="Describe your building or prototyping experience"
          rows={3}
        />
      </div>

      <div>
        <label className="block">
          What software or tools are you comfortable using?
        </label>
        <textarea
          value={formData.software}
          onChange={(e) => setFormData({ ...formData, software: e.target.value })}
          className="border p-2 w-full rounded text-white"
          placeholder="E.g., Python, C++, AutoCAD, Arduino, etc."
          rows={3}
        />
      </div>

      {/* Team Name (conditionally visible for solo participants) */}
      {/* Team Name (only for team leaders) */}
{title === "Leader" && (
  <div className="form-group">
    <label className="block font-medium">Team Name</label>
    <input
      type="text"
      value={formData.team_name}
      onChange={(e) =>
        setFormData({ ...formData, team_name: e.target.value })
      }
      required
      className="border p-2 w-full rounded text-white"
      placeholder="Enter team name"
    />
  </div>
)}


      {/* Submit Button */}
      {isLastForm && (
        <button
          type="button"
          onClick={onSubmit}
          className="bg-[#FFC200] text-[#110038] px-4 py-2 rounded hover:bg-[#110038] hover:text-[#FFC200] font-semibold"
        >
          Submit
        </button>
      )}
    </div>
  );
};

export default PersonalInfoForm;
