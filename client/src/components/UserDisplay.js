import React, { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';

function UserDisplay() {
  const user = useContext(UserContext);

  if (!user) {
    return <div>{user ? user.name : "Guest"}</div>;
  }
}

export default UserDisplay;
