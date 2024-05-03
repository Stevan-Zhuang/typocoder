import React, { useState } from 'react';
import { FaCog } from "react-icons/fa";
import '../styles/SettingsPopup.css';

const SettingsPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <FaCog onClick={togglePopup} />
      <FaCog className="settings-icon" onClick={togglePopup} />
      {isOpen && (
          {/* Your settings form goes here */}
        </div>
      )}
    </div>
  );
};

export default SettingsPopup;
