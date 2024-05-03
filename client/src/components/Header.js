import React from "react";
import SignInButton from "./SignInButton";
import SignOutButton from "./SignOutButton";
import UserDisplay from "./UserDisplay";
import SettingsPopup from "./SettingsPopup";
import '../styles/Header.css';

function Header({ user }) {
  return (
    <header className="header">
      <UserDisplay />
      {user ? <SignOutButton /> : <SignInButton />}
              <SettingsPopup />
    </header>
  );
}

export default Header;
