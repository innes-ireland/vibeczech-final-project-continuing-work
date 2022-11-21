import { useState, useEffect } from 'react';
import axios from 'axios';
import WorkTeam from './WorkTeam';


export default function CurrentWorkTeams() {

    const [teams, setTeams] = useState([]);

    const getWorkTeams = async () => {
        const response = await axios('api/list-work-parties');
        setTeams(response.data);
    }

    useEffect(() => {
        getWorkTeams();
    }, [])

    return (
        <div>
            {
                !teams
                    ? <></>
                    : teams.map(team => {
                        return <WorkTeam
                            team={team}
                        />
                    })
            }
        </div>
    )
}