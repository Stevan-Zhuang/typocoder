import React, { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

function UserDisplay() {
  const user = useContext(UserContext);

  return (
    <div>
      <h2>{user ? user.name : "Guest"}</h2>
    </div>
  );
}

export default UserDisplay;
