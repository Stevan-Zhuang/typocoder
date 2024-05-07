import React, { useState } from "react";
import "../styles/UserDisplay.css";

function UserDisplay({ user, stats }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const username = user ? user.name : "Guest";

  return (
    <div
      className="userDisplayContainer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <h3 className="userDisplay">{username}</h3>
      {isHovered && (
        <div className="userStats">
          <h3>{username}</h3>
          <div className="statRow">
            <p>Snippets Typed:</p>
            <p>{stats.snippetsTyped}</p>
          </div>
          <div className="statRow">
            <p>Lines Typed:</p>
            <p>{stats.linesTyped}</p>
          </div>
          <div className="statRow">
            <p>Average Lines Per Minute:</p>
            <p>
              {stats.secondsSpentTyping === 0
                ? 0
                : Math.round(
                  stats.linesTyped / (stats.secondsSpentTyping / 60),
                )}
            </p>
          </div>
          <div className="statRow">
            <p>Highest Lines Per Minute:</p>
            <p>{stats.highestLinesPerMinute}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default UserDisplay;
