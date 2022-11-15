// import { useContext } from 'react';

import axios from "axios";
const App = () => {

  // const { user, setUser } = useContext(UserContext);
  // used for redirecting back to login page later

  const logout = async () => {
    try {

      const res = await axios.post('/logout');

      return res.data
    } catch (err) {
      console.log(err.message)
    };
  }

  const handleLogout = async () => {

    await logout();
    console.log('logging out');
    window.location.replace('/');

    // setUser(null)
  }

  return (

    <p onClick={handleLogout}>LOGOUT</p>
    // !user ? null :

    //   <>
    //     <span className="logout-button" onClick={() => handleLogout()}>Log out</span>
    //   </>
  )

}

export default App;