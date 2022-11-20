import axios from "axios"
import { useEffect, useState } from "react"


export default function ToolSelector({ vibrationMagnitude, setVibrationMagnitude }) {

    const [tools, setTools] = useState([]);
    const handleToolChange = (e) => {
        setVibrationMagnitude(e.target.value)

    }


    const url = "http://localhost/phpmyadmin/index.php?route=/sql&db=vibeczech&table=tools"
    const getToolData = () => {
        axios.get(`${url}`).then((response) => {
            const tools = response.data
            console.log(tools)
            setTools(tools)

        }
        )
    }
    useEffect(() => { getToolData }, [])





    return (
        <select onChange={handleToolChange}>
            <option value='null'> </option>
            {
                tools.map((tool) => {
                    return <option value={tool.vibration_level}> {tool.name}</option>

                })}
        </select>

    );
}
