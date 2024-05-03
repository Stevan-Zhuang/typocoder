import React, { useContext, useState } from "react";
import { SettingsContext } from "../contexts/SettingsContext";
import { FaCog } from "react-icons/fa";
import '../styles/SettingsPopup.css';

function SettingsPopup({ setSettings }) {
  const [isOpen, setIsOpen] = useState(false);
  const settings = useContext(SettingsContext);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (event) => {
    setSettings({
      ...settings,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div>
      <FaCog className="settings-icon" onClick={togglePopup} />
      {isOpen && (
        <div className="settings-popup">
          <form>
            <label>
              Theme:
              <select
                name="theme"
                value={settings.theme}
                onChange={handleInputChange}
              >
                <option value="light">Light</option>
                <option value="dark">Dark</option>
              </select>
            </label>
            <label>
              Language:
              <select
                name="language"
                value={settings.language}
                onChange={handleInputChange}
              >
                <option value="en">English</option>
                <option value="es">Spanish</option>
              </select>
            </label>
          </form>
        </div>
      )}
    </div>
  );
}

export default SettingsPopup;
