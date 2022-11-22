import React, { useState } from 'react';
import UserContext from '../Contexts/UserContext';
import Login from './Login';

export default function App() {

  // UserContext is not currently being used
  const [user, setUser] = useState(null);

  return (
    // UserContext is not currently being used
    <UserContext.Provider value={{ user, setUser }}>
      <>
        <Login />
      </>
    </UserContext.Provider>
  )
}