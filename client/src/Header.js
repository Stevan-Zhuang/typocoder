import React from "react";
import SignInButton from "./SignInButton";
import SignOutButton from "./SignOutButton";
import UserDisplay from "./UserDisplay";

function Header({ user }) {
  return (
    <header>
      {user ? <SignOutButton /> : <SignInButton />}
      <UserDisplay />
    </header>
  );
}

export default Header;
