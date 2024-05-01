import React, { useEffect, useState } from "react";
import TypingGame from "./TypingGame";
import SignInButton from "./SignInButton";
import UserDisplay from "./UserDisplay";
import { UserContext } from "./UserContext";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(process.env.BACKEND_URL + "/auth/session")
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
