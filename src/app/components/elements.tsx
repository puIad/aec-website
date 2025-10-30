// components/ui/input.tsx
export function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
    return <input className="w-full p-2 text-white bg-transparent placeholder-white focus:outline-none focus:ring-2 focus:ring-yellow-400" {...props} />;
  }

// components/ui/textarea.tsx
export function Textarea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
    return <textarea className="w-full p-2 text-white bg-transparent placeholder-white focus:outline-none focus:ring-2 focus:ring-yellow-400" {...props} />;
  }
  
// components/ui/button.tsx
export function Button({ className = "", ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
      <button
        className={`px-4 py-2 bg-[#FFC200] text-indigo-900 rounded hover:bg-blue-700  hover:text-white ${className}`}
        {...props}
      />
    );
  }
  