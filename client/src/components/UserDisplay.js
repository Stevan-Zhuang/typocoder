import React from "react";

function UserDisplay({ user }) {
  return (
    <div>
      <h2>{user ? user.name : "Guest"}</h2>
    </div>
  );
}

export default UserDisplay;
