import { useState } from "react"

export default function WorkTeamSelector(workTeams, setWorkTeams) {

    const handleTeamChange = (e) => {
        setWorkTeams(e.target.value)
    }

    const getTeams = async () => {
        const response = await axios.get('/api/workteams')
        setPartys(response.data)

    }
    useEffect(() => { getTeams() }, [])





    return (

        <select onChange={handleTeamChange}>
            <option value='null'> </option>
            {
                workteams.map((workteam) => {
                    return <option value={workteam.id}>{workteam.id}: {workteam.job}</option>

                })}
        </select>

    );
}






