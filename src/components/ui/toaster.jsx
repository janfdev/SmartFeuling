// src/components/ui/toaster.jsx
import React, { useState, useEffect } from 'react';

const Toaster = ({ message, type = 'success', duration = 3000 }) => {
  const [isVisible, setIsVisible] = useState(true);

  // Auto-hide setelah durasi tertentu
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, duration);
    return () => clearTimeout(timer);
  }, [duration]);

  if (!isVisible) return null;

  // Warna & ikon berdasarkan tipe
  const bgColor = type === 'success' ? 'bg-green-600' : 'bg-blue-600';
  
  const icon = type === 'success' ? (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2z" clipRule="evenodd" />
    </svg>
  ) : (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 10a1 1 0 011 1v6a1 1 0 11-2 0v-6a1 1 0 011-1zm1-3a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
    </svg>
  );

  return (
    <div className={`fixed top-4 right-4 max-w-md p-4 rounded-lg shadow-lg ${bgColor} text-white flex items-start gap-3 z-50 animate-fade-in-up`}>
      <div className="flex-shrink-0">{icon}</div>
      <div className="flex-1">
        <p className="text-sm font-medium">{message}</p>
      </div>
      <button
        onClick={() => setIsVisible(false)}
        className="ml-auto text-white hover:text-gray-200"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </button>
    </div>
  );
};

export default Toaster;