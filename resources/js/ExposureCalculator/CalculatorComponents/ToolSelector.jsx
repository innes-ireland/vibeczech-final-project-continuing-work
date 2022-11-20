

export default function ToolSelector(vibrationMagnitude, setVibrationMagnitude) {


    const handleToolSelected = (e) => {
        setTool({ ...tool, vibration_rating: e.target.vibration_rating })
    }

    return (
        <select name="tool" onchange={handleToolSelected} value={vibrationMagnitude.vibration_rating}>
            <option>{tool.name}</option>
        </select>
    )

}
