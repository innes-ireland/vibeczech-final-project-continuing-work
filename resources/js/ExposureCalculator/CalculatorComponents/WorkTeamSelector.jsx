import axios from "axios"
import { useEffect, useState } from "react"


export default function WorkTeamSelector({ workTeams, setWork }) {

    const [teams, setTeams] = useState([]);
    const handleTeamChange = (e) => {
        setWorkerNames(e.target.value)

    }


    const getTeams = async () => {
        const response = await axios.get('/api/workteams')
        setTeams(response.data)
    }


    useEffect(() => {
        getTeams()
    }, [])





    return (

        <select onChange={handleTeamChange}>
            <option value='null'> </option>
            {
                teams.map((team) => {
                    return <option value={team.id}> {team.job}</option>

                })}
        </select>

    );
}






