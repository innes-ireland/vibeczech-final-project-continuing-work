import axios from "axios"
import { useEffect, useState } from "react"


export default function WorkTeamSelector({ teams, setTeams, selectedTeamId, setSelectedTeamId }) {

    // const [teams, setTeams] = useState([]);
    const handleTeamChange = (e) => {
        setSelectedTeamId(e.target.value)

    }


    const getTeams = async () => {
        const response = await axios.get('/api/workteams')
        setTeams(response.data)
    }


    useEffect(() => {
        getTeams()
    }, [])





    return (

        <select onChange={handleTeamChange} value={selectedTeamId}>
            <option value='0'> </option>
            {
                teams.map((team) => {
                    return <option value={team.id}> {team.job}</option>

                })}
        </select>

    );
}






