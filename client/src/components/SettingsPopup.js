import React, { useContext, useState } from "react";
import { SettingsContext } from "../contexts/SettingsContext";
import { FaCog } from "react-icons/fa";
import "../styles/SettingsPopup.css";

function SettingsPopup({ setSettings }) {
  const [isOpen, setIsOpen] = useState(false);
  const settings = useContext(SettingsContext);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (event) => {
    const newSettings = {
      ...settings,
      [event.target.name]: event.target.value,
    };
    setSettings(newSettings);

    if (newSettings.userId) {
      fetch(
        `${process.env.REACT_APP_BACKEND_URL}/settings/${newSettings.userId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newSettings),
        },
      )
        .then((response) => response.json())
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  };

  return (
    <div>
      <FaCog className="settingsIcon" onClick={togglePopup} />
      {isOpen && (
        <>
          <div className="dimOverlay" onClick={togglePopup}></div>
          <div className="settingsPopup">
            <form>
              <label>
                Language:
                <select
                  name="language"
                  value={settings.language}
                  onChange={handleInputChange}
                >
                  <option value="python">Python</option>
                  <option value="javascript">JavaScript</option>
                  <option value="java">Java</option>
                  <option value="csharp">C#</option>
                  <option value="cpp">C++</option>
                  <option value="ruby">Ruby</option>
                  <option value="php">PHP</option>
                  <option value="swift">Swift</option>
                  <option value="kotlin">Kotlin</option>
                  <option value="go">Go</option>
                  <option value="rust">Rust</option>
                </select>
              </label>
            </form>
            <form>
              <label>
                Theme:
                <select
                  name="theme"
                  value={settings.theme}
                  onChange={handleInputChange}
                >
                  <option value="oneLight">Light</option>
                  <option value="oneDark">Dark</option>
                  <option value="solarizedLight">Solarized Light</option>"
                  <option value="dracula">Dracula</option>
                  <option value="nord">Nord</option>
                  <option value="vscDarkPlus">Visual Studio Code Dark+</option>
                  <option value="atomDark">Atom Dark</option>
                </select>
              </label>
            </form>
          </div>
        </>
      )}
    </div>
  );
}

export default SettingsPopup;
