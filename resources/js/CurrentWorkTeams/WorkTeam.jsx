import Worker from './Worker';

export default function WorkTeam({ team }) {

    const workDate = new Date(team.work_date);
    const currentDate = new Date();

    return (
        <div>
            {
                currentDate.getTime() >= workDate.getTime()
                    ? <></>
                    : <> <h4>{team.job}</h4>
                        <small>{workDate.toDateString()}</small>
                        <br />
                        {team.users.map(worker => {
                            return <Worker worker={worker} />
                        })}
                        <hr />
                    </>
            }
        </div >
    )
}