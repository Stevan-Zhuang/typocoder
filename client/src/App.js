import React, { useEffect, useState } from "react";
import TypingGame from "./TypingGame";
import SignInButton from "./SignInButton";
import SignOutButton from "./SignOutButton";
import UserDisplay from "./UserDisplay";
import { UserContext } from "./UserContext";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(process.env.REACT_APP_BACKEND_URL + "/auth/session", {
      credentials: "include",
    })
      .then((response) => response.json())
      .then((data) => {
        if (!data.user) {
          return setUser(null);
        }
        setUser(data.user);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <UserContext.Provider value={user}>
      <TypingGame />
      {user ? <SignOutButton /> : <SignInButton />}
      <UserDisplay />
    </UserContext.Provider>
  );
}

export default App;
