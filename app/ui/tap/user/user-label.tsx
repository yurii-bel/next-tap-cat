// components/ui/tap/user/user-label.tsx
"use client"; // Add this line if this component uses hooks or client-specific code

import { UserLabelProps } from "@/app/lib/definitions";
import useStore from "@/app/store/store";

export const UserLabel: React.FC<UserLabelProps> = () => {
  const user = useStore((state) => state.user);

  return (
    <div>
      {/* Username & avatar */}
      <div className="flex justify-center items-center gap-4">
        {user?.photo_url && (
          <img
            src={user.photo_url}
            alt={`${user.username}'s avatar`}
            className="w-16 h-16 rounded-full"
          />
        )}
        <div>
          <p>
            {user?.first_name} {user?.last_name}
          </p>
          <p>{user?.id}</p>
        </div>
      </div>
    </div>
  );
};
