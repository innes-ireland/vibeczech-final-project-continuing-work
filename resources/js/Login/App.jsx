import React, { useState } from 'react';
import UserContext from '../Contexts/UserContext';
import Login from './Login';

export default function App() {

  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <>
        <Login />
      </>
    </UserContext.Provider>
  )
}