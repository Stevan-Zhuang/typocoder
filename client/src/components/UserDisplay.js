import React from "react";
import "../styles/UserDisplay.css";

function UserDisplay({ user }) {
  return <h3 className="userDisplay">{user ? user.name : "Guest"}</h3>;
}

export default UserDisplay;
