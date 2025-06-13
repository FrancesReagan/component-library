
import React from "react";
import type { UserProfileCardProps } from "../../types";


export const UserProfileCard: React.FC<UserProfileCardProps> = ({
  user,
  showEmail = false,
  showRole = false,
  onEdit,
  children

}) => {
 return (
  <div className="max-w-sm mx-auto bg-white rounded-lg shadow-md p-6">
    <div className="flex items-center mb-4">
      {user.avatarUrl && (
        <img
        src={user.avatarUrl}
        alt={`${user.name}'s avatar`}
        className="w-16 h-16 rounded-full object-cover"
        />
      )}
      <div className="ml-4">
        <h3 className="text-lg font-semibold text-gray-900">{user.name}</h3>
        {showEmail && (
          <p className="text-sm text-gray-600">{user.email}</p>
        )}
        {showRole && (
          <p className="text-sm text-blue-600 font-medium">{user.role}</p>
        )}
      </div>
    </div>
  
 {onEdit && (
  <button onClick={() => onEdit(user.id)}
  className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
  >
  Edit Profile
  </button>
 )}
 {children}
</div>
 );
};

export default UserProfileCard;