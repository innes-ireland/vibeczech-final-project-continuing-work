import axios from "axios"
import { useEffect, useState } from "react"


export default function ToolSelector({ vibrationMagnitude, setVibrationMagnitude }) {

    const [tools, setTools] = useState([]);
    const handleToolChange = (e) => {
        setVibrationMagnitude(e.target.value)

    }


    const getTools = async () => {
        const response = await axios.get('/api/tools')
        setTools(response.data)

    }
    useEffect(() => { getTools() }, [])





    return (

        <select onChange={handleToolChange}>
            <option value='null'> </option>
            {
                tools.map((tool) => {
                    return <option value={tool.vibration_rating}> {tool.name}</option>

                })}
        </select>

    );
}
