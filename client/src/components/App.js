import React, { useEffect, useState } from "react";
import TypingGame from "./TypingGame";
import Header from "./Header";
import { SettingsContext } from "../contexts/SettingsContext";

function App() {
  const [user, setUser] = useState(null);
  const [settings, setSettings] = useState({});

  useEffect(() => {
    fetch(process.env.REACT_APP_BACKEND_URL + "/auth/session", {
      credentials: "include",
    })
      .then((response) => response.json())
      .then((userData) => {
        if (!userData._id) {
          setUser(null);
        } else {
          setUser(userData);
        }

        fetch(
          process.env.REACT_APP_BACKEND_URL +
          "/settings/" +
          (userData._id || "default"),
          {
            credentials: "include",
          },
        )
          .then((response) => response.json())
          .then((settingsData) => {
            setSettings(settingsData);
          })
          .catch((error) => {
            console.error(error);
          });
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <SettingsContext.Provider value={settings}>
      <Header user={user} setSettings={setSettings} />
      <TypingGame />
    </SettingsContext.Provider>
  );
}

export default App;
