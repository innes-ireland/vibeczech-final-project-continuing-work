import axios from 'axios'
import { useEffect, useState } from 'react'

export default function userSelector({ selectedTeamId }) {
    const [workers, setWorkers] = useState([])
    const [selectedWorkerId, setSelectedWorkerId] = useState(0)
    // const [workteamId, setWorkTeamId] = useState(null)

    const handleUserChange = (e) => {
        setSelectedWorkerId(e.target.value)
    }

    const getWorkers = async () => {
        const response = await axios.get('/api/workteam-names/' + selectedTeamId)
        console.log(response)
        setWorkers(response.data)
    }

    useEffect(() => {
        if (selectedTeamId) {
            getWorkers()
        }
    }, [selectedTeamId])











    return (
        // console.log(getUserNames())


        <select onChange={(e) => { handleUserChange(e) }} value={selectedWorkerId}>
            <option value='0'> </option>
            {
                workers.map((worker) => {
                    return <option value={worker.id}> {worker.first_name} " " {worker.last_name}</option>

                })}
        </select>

    );
}