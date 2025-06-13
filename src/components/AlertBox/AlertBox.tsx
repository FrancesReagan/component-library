
import React from 'react';
import type { AlertBoxProps } from '../../types';

//  React.FC---Hey React this is a function component...AlertBoxProps---use the receipe I wrote earlier in types....{{give me these ingredients from recipe}}//
export const AlertBox: React.FC<AlertBoxProps> = ({
  type,
  message,
  onClose,
  children
}) => {
  // color system---type safe//
  const alertStyles = {
    success: 'bg-green-100 border-green-500 text-green-700',
    error: 'bg-red-100 border-red-500 text-red-700',
    warning: 'bg-yellow-100 border-yellow-500 text-yellow-700',
    info: 'bg-blue-100 border-blue-500 text-blue-700'
  };

//  building the HTML//
  return (
    // the main box with colors//
    <div className={`p-4 border-l-4 ${alertStyles[type]}`}>
      {/* put message and X button side by side */}
      <div className="flex justify-between items-center">
        {/* show the message */}
        <p>{message}</p>
        {/* if there is an onClose function */}
        {onClose && (
          // then show the X button//
          <button onClick={onClose} className="ml-4 text-gray-500 hover:text-gray-700">
           x
          </button>
        )}
      </div>
      {/* show any extra content */}
      {children}
    </div>
  );
};

export default AlertBox;