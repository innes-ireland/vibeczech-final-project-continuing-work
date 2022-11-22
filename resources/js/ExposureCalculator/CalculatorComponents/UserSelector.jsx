import axios from 'axios'
import { useEffect } from 'react'
export default function userSelector({ users, setUsers, workTeam }) {

    const handleUserChange = (e) => {
        setUsers(e.target.value)

    }

    const getUserNames = async () => {
        const response = await axios.get('/api/workteams')
        setUser(response.data)
    }

    useEffect(() => {
        getUserNames()
    })












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