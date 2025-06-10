
import React from "react";
import type { UserProfileCardProps } from "../../types";

// UserProfileCard Component//
// displays user information//
// features: //
// -avatar display with fallback initials//
// -optimal email and role display//
// -edit functionality//
// -responsive design//
// -support for additional content//
// @example 
// <UserProfileCard
// user={userData}
// showEmail={true}
// onEdit={handleEdit}
// />

const UserProfileCard: React.FC<UserProfileCardProps> = ({
  user,
  showEmail = true,
  showRole = true,
  onEdit,
  children
}) => {
  // generate initals form name for avatar fallback//
  const getInitials = (name: string): string => {
    return name
    .split(" ")
    .map(part => part.charAt(0).toUpperCase())
    .slice(0,2)
    .join(" ");
  };
} 