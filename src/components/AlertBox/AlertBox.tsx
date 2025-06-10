// components/AlertBox/AlertBox.tsx
import React from 'react';
import type { AlertBoxProps } from '../../types';

// AlertBox Component//
// flexible alert component that displays messages with different visual styles and optional close functionality//
// features: -four alert types with distinct styling, -optional close button, -support for additional content via children, -accessible markup and keyboard navigation//
// @example <Alertbox type="success" messsage="Operation completed" onClose={handleClose}//
 
export const AlertBox: React.FC<AlertBoxProps> = ({
  type,
  message,
  onClose,
  children
}) => {
  // type-safe styling configuration//
  const alertStyles = {
    success: 'bg-green-100 border-green-500 text-green-700',
    error: 'bg-red-100 border-red-500 text-red-700',
    warning: 'bg-yellow-100 border-yellow-500 text-yellow-700',
    info: 'bg-blue-100 border-blue-500 text-blue-700'
  };

  const iconStyles = (
    success: "✓",
    error: "✕",
    warning: "⚠",
    info: "ℹ",
  );
 
  return (
    <div className={`p-4 border-l-4 ${alertStyles[type]}`}>
      <div className="flex justify-between items-center">
        <p>{message}</p>
        {onClose && (
          <button
            onClick={onClose}
            className="ml-4 text-gray-500 hover:text-gray-700 cursor-pointer"
          >
            ×
          </button>
        )}
      </div>
      {children}
    </div>
  );
};



export default AlertBox;