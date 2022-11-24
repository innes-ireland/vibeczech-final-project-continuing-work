import React, { useState, useEffect } from 'react';
import Logout from './Logout';
import logo from '../../../public/logo.png';
import getCurrentUser from '../getCurrentUser';

const App = () => {

  const [user, setUser] = useState(null);

  // uses getCurrentUser js file to retrieve user data, sets state
  useEffect(async () => {
    const currentUser = await getCurrentUser();
    setUser(currentUser);
  }, [])

  return (
    <>
      {
        // checks if there is a user: null takes you to login, otherwise to user landing page
        user == null
          ? <div className="logo">
            <a href="/login">
              <img src={logo} alt="VibeCzech logo" id="logo" />
            </a>
          </div>
          : user.is_admin == 1
            ? <div className="logo">
              <a href="/admin">
                <img src={logo} alt="VibeCzech logo" id="logo" />
              </a>
            </div>
            : <div className="logo">
              <a href="/worker">
                <img src={logo} alt="VibeCzech logo" id="logo" />
              </a>
            </div>

      }
      <>
        {/* passes current user info to logout component */}
        <Logout user={user} setUser={setUser} />
      </>
    </>
  )

}

export default App;