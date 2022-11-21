import Worker from './Worker';

export default function WorkTeam({ team }) {

    return (
        <div>
            <h4>{team.job}</h4>
            {
                team.users.map(worker => {
                    return <Worker worker={worker} />
                })
            }
        </div>
    )
}