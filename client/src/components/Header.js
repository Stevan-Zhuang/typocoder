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
        <UserDisplay user={user} />
        {user ? <SignOutButton /> : <SignInButton />}
        <SettingsPopup setSettings={setSettings} />
      </div>
    </header>
  );
}

export default Header;
