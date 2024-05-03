import React, { useState } from 'react';
import { FaCog } from 'react-icons/fa'; // This is the gear icon from react-icons

const SettingsPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <FaCog onClick={togglePopup} />
      {isOpen && (
        <div style={{
          position: 'fixed',
          top: 0,
          right: 0,
          width: '20%',
          height: '100%',
          backgroundColor: 'lightgrey',
          overflow: 'auto',
          padding: '1em',
        }}>
          {/* Your settings form goes here */}
        </div>
      )}
    </div>
  );
};

export default SettingsPopup;
