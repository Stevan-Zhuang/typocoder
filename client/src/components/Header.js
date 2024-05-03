import React from "react";
import SignInButton from "./SignInButton";
import SignOutButton from "./SignOutButton";
import UserDisplay from "./UserDisplay";
import SettingsPopup from "./SettingsPopup";
import "../styles/Header.css";

function Header({ user, setSettings }) {
  return (
    <header className="header">
      <UserDisplay />
      {user ? <SignOutButton /> : <SignInButton />}
      <SettingsPopup setSettings={setSettings}/>
    </header>
  );
}

export default Header;
