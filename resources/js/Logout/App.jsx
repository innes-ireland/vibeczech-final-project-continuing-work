import React, { useState } from 'react';
import UserContext from '../Contexts/UserContext';
import Logout from './Logout';

const App = () => {

  const { user, setUser } = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <>
        <Logout />
      </>
    </UserContext.Provider>
  )

}

export default App;