import React, { useEffect, useState } from "react";
import TypingGame from "./TypingGame";
import Header from "./Header";
import { UserContext } from "../contexts/UserContext";

function App() {
  const [user, setUser] = useState(null);
  const [settings, setSettings] = useState(null);

  useEffect(() => {
    fetch(process.env.REACT_APP_BACKEND_URL + "/auth/session", {
      credentials: "include",
    })
      .then((response) => response.json())
      .then((userData) => {
        if (!userData._id) {
          return setUser(null);
        }
        setUser(userData);

        fetch(process.env.REACT_APP_BACKEND_URL + "/settings/" + userData._id, {
          credentials: "include",
        })
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
    <UserContext.Provider value={user}>
      <Header user={user} />
      <TypingGame settings={settings}/>
    </UserContext.Provider>
  );
}

export default App;
