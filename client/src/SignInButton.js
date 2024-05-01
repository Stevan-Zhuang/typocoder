import React from "react";

const SignInButton = () => {
  const handleSignIn = () => {
    window.location.href = process.env.REACT_APP_BACKEND_URL + "/auth/google";
  };

  return <button onClick={handleSignIn}>Sign in with Google</button>;
};

export default SignInButton;
