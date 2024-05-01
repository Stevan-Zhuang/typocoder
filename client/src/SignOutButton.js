import React from "react";

const SignOutButton = () => {
  const handleSignOut = () => {
    fetch(process.env.REACT_APP_BACKEND_URL + "/auth/signout", {
      credentials: 'include',
    })
    .then(response => {
      if (response.ok) {
        window.location.reload();
      } else {
        console.error('Sign out failed');
      }
    })
    .catch(error => console.error('An error occurred:', error));
  };

  return <button onClick={handleSignOut}>Sign out</button>;
};

export default SignOutButton;
