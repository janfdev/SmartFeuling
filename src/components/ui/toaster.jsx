// src/components/ui/toaster.jsx
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFloppyDisk, faCheck } from "@fortawesome/free-solid-svg-icons";

const Toaster = ({ message, type = 'success', duration = 3000, onClose }) => {
  const [isVisible, setIsVisible] = useState(true);

  // Auto-hide setelah durasi
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      if (onClose) onClose(); // 🔥 Panggil callback saat selesai
    }, duration);
    return () => clearTimeout(timer);
  }, [duration, onClose]);

  // Jika user klik X
  const handleClose = () => {
    setIsVisible(false);
    if (onClose) onClose(); // 🔥 Juga panggil di sini
  };

  if (!isVisible) return null;

  const bgColor = type === 'success' ? '#39c964' : '#3b82f6';

  return (
    <div style={{
      position: 'fixed',
      top: '1rem',
      right: '1rem',
      maxWidth: '28rem',
      padding: '1rem',
      borderRadius: '0.5rem',
      backgroundColor: bgColor,
      color: 'white',
      display: 'flex',
      gap: '0.75rem',
      zIndex: 50,
      boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
    }}>
      <span style={{ fontSize: '1.25rem' }}>
        {type === 'success' ? (
          <FontAwesomeIcon icon={faCheck} />
        ) : (
          <FontAwesomeIcon icon={faFloppyDisk} />
        )}
      </span>
      <div style={{ flex: 1, fontSize: '0.875rem', fontWeight: 500 }}>
        {message}
      </div>
      <button
        onClick={handleClose}
        style={{
          background: 'none',
          border: 'none',
          color: 'white',
          cursor: 'pointer',
          fontSize: '1.25rem',
        }}
      >
        ✕
      </button>
    </div>
  );
};

export default Toaster;