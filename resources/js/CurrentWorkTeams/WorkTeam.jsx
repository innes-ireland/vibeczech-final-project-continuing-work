import Worker from './Worker';

export default function WorkTeam({ team }) {

    const workDate = new Date(team.work_date);
    const currentDate = new Date();

    return (
        <>
            {
                currentDate.getTime() >= workDate.getTime()
                    ? <></>
                    : <div className='workteam'> <h4>{team.job}  | <small>{workDate.toDateString()}</small></h4>
                        {/* <small>{workDate.toDateString()}</small> */}
                        {/* <br /> */}
                        {team.users.map(worker => {
                            return <Worker worker={worker} />
                        })}
                        <hr />
                    </div>
            }
        </ >
    )
}