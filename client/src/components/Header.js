import React from "react";
import SignInButton from "./SignInButton";
import SignOutButton from "./SignOutButton";
import UserDisplay from "./UserDisplay";
import '../styles/Header.css';

function Header({ user }) {
  return (
    <header className="header">
      <UserDisplay />
      {user ? <SignOutButton /> : <SignInButton />}
    </header>
  );
}

export default Header;
