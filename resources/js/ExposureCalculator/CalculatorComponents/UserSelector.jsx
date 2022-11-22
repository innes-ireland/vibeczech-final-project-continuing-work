import axios from 'axios'
export default function userSelector({ users, setUsers, workParty }) {

    const handleUserChange = (e) => {
        setUsers(e.target.value)

    }

    const getUserNames = async () => {
        const response = await axios.get('/api/workteams')
        setUsers(response.data)
    }












    return (
        <select onChange={handleUserChange}>
            <option value='null'> </option>
            {
                workTeam.map((user) => {
                    return <option value={user.name}> {user.name}</option>

                })}
        </select>

    );
}