import React, { useState, useEffect } from 'react';
import UserContext from '../Contexts/UserContext';
import Logout from './Logout';
import logo from '../../../public/logo.png';
import getCurrentUser from '../getCurrentUser';

const App = () => {

  const [user, setUser] = useState(null);

  useEffect(async () => {
    const something = await getCurrentUser();
    setUser(something);
  }, [])

  return (
    <>
      {console.log(user)}
      {
        user == null
          ? <div className="logo">
            <a href="http://www.vibeczech.test/">
              <img src={logo} alt="VibeCzech logo" id="logo" />
            </a>
          </div>
          : user.is_admin == 1
            ? <div className="logo">
              <a href="http://www.vibeczech.test/admin">
                <img src={logo} alt="VibeCzech logo" id="logo" />
              </a>
            </div>
            : <div className="logo">
              <a href="http://www.vibeczech.test/worker">
                <img src={logo} alt="VibeCzech logo" id="logo" />
              </a>
            </div>

      }

      {/* <UserContext.Provider value={{ user, setUser }}> */}
      <>
        <Logout user={user} setUser={setUser} />
      </>
      {/* </UserContext.Provider> */}
    </>
  )

}

export default App;