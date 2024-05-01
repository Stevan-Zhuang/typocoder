import React, { useContext } from 'react';
import { UserContext } from './UserContext';

function UserDisplay() {
  const user = useContext(UserContext);

  if (!user) {
    return <div>No user is currently logged in.</div>;
  }

  return (
    <div>
      <h2>Welcome, {user.name}!</h2>
      <p>Email: {user.email}</p>
    </div>
  );
}

export default UserDisplay;
