export default function userSelector({ user, setUser }) {

    const handleUserChange = (e) => {
        setUser(e.target.value)

    }



    const users = [{
        id: 1,
        name: 'Innes',

    },
    {
        id: 2,
        name: 'Aidan',

    },
    {
        id: 3,
        name: 'Briana',

    },
    {
        id: 4,
        name: 'Sabina',
    }



    ] // this is hardcoded to represent an array of objects retrieved from database





    return (
        <select onChange={handleUserChange}>
            <option value='null'> </option>
            {
                users.map((user) => {
                    return <option value={user.name}> {user.name}</option>

                })}
        </select>

    );
}