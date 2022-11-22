import axios from 'axios'
export default function userSelector({ users, setUsers, workParty }) {

<<<<<<< HEAD
    const handleUserChange = (e) => {
        setUsers(e.target.value)
=======
  const handleUserChange = (e) => {
    setUser(e.target.value)
>>>>>>> main

  }



  const users = [{
    id: 1,
    name: 'Innes',

  },
  {
    id: 2,
    name: 'Aidan',

  },
  {
    id: 3,
    name: 'Briana',

  },
  {
    id: 4,
    name: 'Sabina',
  }



  ] // this is hardcoded to represent an array of objects retrieved from database

    const getUserNames = async () => {
        const response = await axios.get('/api/workteams')
        setUsers(response.data)
    }







<<<<<<< HEAD
=======
  return (
    <select onChange={handleUserChange}>
      <option value='null'> </option>
      {
        workParty.map((user) => {
          return <option value={user.name}> {user.name}</option>
>>>>>>> main

        })}
    </select>

<<<<<<< HEAD



    return (
        <select onChange={handleUserChange}>
            <option value='null'> </option>
            {
                workTeam.map((user) => {
                    return <option value={user.name}> {user.name}</option>

                })}
        </select>

    );
=======
  );
>>>>>>> main
}