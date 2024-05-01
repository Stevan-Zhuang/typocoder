import React, { useEffect, useState } from "react";
import TypingGame from "./TypingGame";
import SignInButton from "./SignInButton";
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
        setUser(data.user);
      })
      .catch((error) => {
        setUser(null);
      });
  }, []);

  return (
    <UserContext.Provider value={user}>
      <TypingGame />
      <SignInButton />
      <UserDisplay />
    </UserContext.Provider>
  );
}

export default App;
