
import React from "react";
import type { UserProfileCardProps } from "../../types";

// UserProfile component displays user information with optional email, role, and edit button
export const UserProfileCard: React.FC<UserProfileCardProps> = ({
  user, //user object with id, name, email, role, and avatarUrl ---covered in -the addtional content added--that is children//
  showEmail = false,//show if email if true//
  showRole = false,//show if role if true//
  onEdit, //optional---function to handle the edit action//
  children //represents any additional content added--like avatarUrl, etc that want to add now or later//
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
        <h3 className="text-xl font-semibold text-gray-900">{user.name}</h3>
        {showEmail && (
          <p className="text-sm text-gray-600 mb-2">{user.email}</p>
        )}
        {showRole && (
        <p className="text-sm text-blue-600 font-medium mb-2">{user.role}</p>
        )}
      </div>
    </div>
  
  {/* //added user.id to the onEdit conditional to ensure the button only renders if user.id exists// */}
 {onEdit && user.id && (
  <button 
  onClick={() => onEdit(user.id)}
  className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
  >
  Edit Profile
  </button>
 )}
 {/* //wrapped children in a div and added mt-4 to ensure consistent spacing and to avoid rendering an empty div if children are not provided.// */}
 {children && <div className="mt-4"> {children}</div>}
</div>
 );
};

export default UserProfileCard;