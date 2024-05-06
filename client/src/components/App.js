import React, { useEffect, useState } from "react";
import TypingGame from "./TypingGame";
import Header from "./Header";
import { SettingsContext } from "../contexts/SettingsContext";
import "../styles/App.css";

function requestData(endpoint, params, cb) {
  fetch(process.env.REACT_APP_BACKEND_URL + endpoint, params)
    .then((response) => response.json())
    .then((data) => cb(data))
    .catch((error) => {
      console.error(error);
    });
}

function parseLines(text) {
  const textLines = text.trim().split("\n");
  if (
    textLines[0].startsWith("```") &&
    textLines[textLines.length - 1].endsWith("```")
  ) {
    return textLines.slice(1, textLines.length - 1);
  }
  return textLines;
}

function App() {
  const [user, setUser] = useState(null);
  const [settings, setSettings] = useState({});
  const [stats, setStats] = useState({});
  const [currentLines, setCurrentLines] = useState("");
  const [nextLines, setNextLines] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getNextLines = (language) => {
      requestData("/openai/" + language, {}, (linesData) => {
        setNextLines(parseLines(linesData.text));
      });
    };
    const getCurrentLines = (language) => {
      requestData("/openai/" + language, {}, (linesData) => {
        setCurrentLines(parseLines(linesData.text));
        setLoading(false);
      });
    };
    const getSettings = (id) => {
      requestData(
        "/settings/" + id,
        { credentials: "include" },
        (settingsData) => {
          setSettings(settingsData);
          getCurrentLines(settingsData.language);
          getNextLines(settingsData.language);
        },
      );
    };
    const getStats = (id) => {
      requestData("/stats/" + id, { credentials: "include" }, (statsData) => {
        setStats(statsData);
      });
    };
    const getUser = () => {
      requestData("/auth/session", { credentials: "include" }, (userData) => {
        if (!userData._id) {
          setUser(null);
          getSettings("default");
          getStats("default");
        } else {
          setUser(userData);
          getSettings(userData._id);
          getStats(userData._id);
        }
      });
    };
    getUser();
  }, []);

  const cycleNextLines = () => {
    setCurrentLines(nextLines);
    requestData("/openai/" + settings.language, {}, (linesData) => {
      setNextLines(parseLines(linesData.text));
    });
  };
  function updateStats(linesTyped, secondsSpentTyping) {
    let newStats = { ...stats };
    newStats.snippetsTyped += 1;
    newStats.linesTyped += linesTyped;
    newStats.secondsSpentTyping += secondsSpentTyping;
    const LinesPerMinute = Math.round(linesTyped / (secondsSpentTyping / 60));
    if (newStats.highestLinesPerMinute < LinesPerMinute) {
      newStats.highestLinesPerMinute = LinesPerMinute;
    }
    setStats(newStats);

    if (user) {
      requestData(
        "/stats/" + user._id,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newStats),
        },
        () => { },
      );
    }
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className={`App ${settings.theme}`}>
      <SettingsContext.Provider value={settings}>
        <Header user={user} stats={stats} setSettings={setSettings} />
        <TypingGame
          currentLines={currentLines}
          cycleNextLines={cycleNextLines}
          updateStats={updateStats}
        />
      </SettingsContext.Provider>
    </div>
  );
}

export default App;
