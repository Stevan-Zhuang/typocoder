import React from "react";
import SignInButton from "./SignInButton";
import SignOutButton from "./SignOutButton";
import UserDisplay from "./UserDisplay";
import SettingsPopup from "./SettingsPopup";
import "../styles/Header.css";

function Header({ user, setSettings }) {
  return (
    <header className="header">
      <SettingsPopup setSettings={setSettings} />
      <div className="userProfile">
        <UserDisplay user={user} />
        {user ? <SignOutButton /> : <SignInButton />}
      </div>
    </header>
  );
}

export default Header;
