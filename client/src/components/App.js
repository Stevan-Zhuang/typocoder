import React, { useEffect, useState } from "react";
import TypingGame from "./TypingGame";
import Header from "./Header";
import { SettingsContext } from "../contexts/SettingsContext";
import "../styles/App.css";

function fetchData(endpoint, params, cb) {
  fetch(process.env.REACT_APP_BACKEND_URL + endpoint, params)
    .then((response) => response.json())
    .then((data) => cb(data))
    .catch((error) => {
      console.error(error);
    });
}

function parseLines(text) {
  text = text.split("\n");
  if (text[0].startsWith("```") && text[text.length - 1].endsWith("```")) {
    return text.slice(1, text.length - 1);
  }
  return text;
}

function App() {
  const [user, setUser] = useState(null);
  const [settings, setSettings] = useState({});
  const [currentLines, setCurrentLines] = useState("");
  const [nextLines, setNextLines] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getNextLines = (language) => {
      fetchData("/openai/" + language, {}, (linesData) => {
        setNextLines(parseLines(linesData.text));
      });
    };
    const getCurrentLines = (language) => {
      fetchData("/openai/" + language, {}, (linesData) => {
        setCurrentLines(linesData.text.split("\n"));
        setLoading(false);
      });
    };
    const getSettings = (id) => {
      fetchData(
        "/settings/" + id,
        { credentials: "include" },
        (settingsData) => {
          setSettings(settingsData);
          getCurrentLines(settingsData.language);
          getNextLines(settingsData.language);
        },
      );
    };
    const getUser = () => {
      fetchData("/auth/session", { credentials: "include" }, (userData) => {
        if (!userData._id) {
          setUser(null);
          getSettings("default");
        } else {
          setUser(userData);
          getSettings(userData._id);
        }
      });
    };
    getUser();
  }, []);

  const cycleNextLines = () => {
    setCurrentLines(nextLines);
    fetchData("/openai/" + settings.language, {}, (linesData) => {
      setNextLines(parseLines(linesData.text));
    });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className={`App ${settings.theme}`}>
      <SettingsContext.Provider value={settings}>
        <Header user={user} setSettings={setSettings} />
        <TypingGame
          currentLines={currentLines}
          cycleNextLines={cycleNextLines}
        />
      </SettingsContext.Provider>
    </div>
  );
}

export default App;
