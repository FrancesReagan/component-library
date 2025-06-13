
import React from "react";
import { UserProfileCardProps } from "../../types";


export const UserProfileCardProps: React.FC<UserProfileCardProps> = ({
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
        classNam="w-16 h-16 rounded-full object-cover"
        />
      )}
    </div>
  </div>
 
)} 