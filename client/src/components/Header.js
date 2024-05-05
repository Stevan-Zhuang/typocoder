import React from "react";
import SignInButton from "./SignInButton";
import SignOutButton from "./SignOutButton";
import UserDisplay from "./UserDisplay";
import SettingsPopup from "./SettingsPopup";
import "../styles/Header.css";

function Header({ user, setSettings }) {
  const reloadPage = () => {
    window.location.reload();
  };
  return (
    <header className="header">
      <button onClick={reloadPage} className="siteTitle">
        TypoCoder
      </button>
      <div className="userProfile">
        <SettingsPopup setSettings={setSettings} />
        <UserDisplay user={user} />
        {user ? <SignOutButton /> : <SignInButton />}
      </div>
    </header>
  );
}

export default Header;
