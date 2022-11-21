export default function userSelector({ user, setUser, workParty }) {

    const handleUserChange = (e) => {
        setUser(e.target.value)

    }





    // this is hardcoded to represent an array of objects retrieved from database





    return (
        <select onChange={handleUserChange}>
            <option value='null'> </option>
            {
                workParty.map((user) => {
                    return <option value={user.name}> {user.name}</option>

                })}
        </select>

    );
}