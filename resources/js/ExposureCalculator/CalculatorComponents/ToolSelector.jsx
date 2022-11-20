import axios from "axios"


export default function ToolSelector({ vibrationMagnitude, setVibrationMagnitude }) {

    const handleToolChange = (e) => {
        setVibrationMagnitude(e.target.value)

    }



    const tools = [{
        id: 1,
        name: 'drill',
        vibration: 100
    },
    {
        id: 2,
        name: 'mower',
        vibration: 110
    },
    {
        id: 3,
        name: 'chainsaw',
        vibration: 120,
    }



    ] // this is hardcoded to represent an array of objects retrieved from database





    return (
        <select onChange={handleToolChange}>
            <option value='null'> </option>
            {
                tools.map((tool) => {
                    return <option value={tool.vibration}> {tool.name}</option>

                })}
        </select>

    );
}
