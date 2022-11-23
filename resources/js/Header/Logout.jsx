import axios from "axios";
import { useContext, useEffect, useState } from 'react';

const Logout = ({ user, setUser }) => {

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

    setUser(null);
  }

  return (
    <>
      {!user
        ?
        <></>
        :
        <div id='logout-holder'>
          <p>{user.username}</p>
          <p id='logout' onClick={handleLogout}>LOGOUT</p>
        </div>
      }
    </>
  )

}

export default Logout;