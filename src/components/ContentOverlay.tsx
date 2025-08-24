import React from 'react';

interface ContentOverlayProps {
  children: React.ReactNode;
  className?: string;
}

const ContentOverlay: React.FC<ContentOverlayProps> = ({ 
  children, 
  className = '' 
}) => {
  return (
    <div className={`relative z-20 min-h-screen pointer-events-none ${className}`}>
      {children}
    </div>
  );
};

export default ContentOverlay;