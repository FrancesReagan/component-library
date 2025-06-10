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
    <div className={`p-4 border-l-4 ${alertStyles[type]}`}
    role="alert"
    aria-live="polite"
    >
      <div className="flex justify-between items-center">
        <div className="flext items-start">
          <span className="mr-2 font-bold text-lg" aria-hidden="true">
            {iconStyles[type]}
          </span>
        </div>
        <div className="flex-1">
          <p className="font-medium">{message}</p>
          {children && (
            <div className="mt-2 text-sm opacity-90">
              {children}
              </div>
          )}
          </div>
        </div>
        
        {onClose && (
          <button
            onClick={onClose}
            className="ml-4 text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400"
            aria-label="Close alert"
            type="button"
          >
            <span className="text-xl">x</span> 
          </button>
        )}
      </div>
    </div>
  );
};

export default AlertBox;