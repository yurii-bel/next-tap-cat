// components/ui/tap/user/user-label.tsx
"use client"; // Add this line if this component uses hooks or client-specific code

interface UserLabelProps {
  username?: string;
}

export const UserLabel: React.FC<UserLabelProps> = ({ username }) => {
  return (
    <div>
      {/* Username & avatar */}
      <div className="flex justify-center items-center gap-4">
        <span className="bg-white rounded-full p-4"></span>
        <p>{username}</p>
      </div>
    </div>
  );
};
