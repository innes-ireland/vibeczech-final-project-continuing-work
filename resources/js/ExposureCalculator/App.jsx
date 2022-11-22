import ToolSelector from './CalculatorComponents/ToolSelector';
import HourCount from './CalculatorComponents/HourCount';
import MinuteCount from './CalculatorComponents/MinuteCount';
import Calculator from './CalculatorComponents/Calculator';
import UserSelector from './CalculatorComponents/UserSelector';
import { useState } from 'react';
import SelectorBox from './CalculatorComponents/SelectorBox';
import SaveToPlan from './CalculatorComponents/SaveToPlan';
import DisplayGraph from './CalculatorComponents/DisplayGraph';
import WorkTeamSelector from './CalculatorComponents/WorkTeamSelector';



function App() {

    const [minuteCount, setMinuteCount] = useState(0);
    const [hourCount, setHourCount] = useState(0);
    const [vibrationMagnitude, setVibrationMagnitude] = useState(0);
    const [user, setUser] = useState([]);
    const [product, setProduct] = useState(0);
    const [planObjects, setPlanObjects] = useState([]) //default state is an empty array
    const [graphData, setGraphData] = useState({})
    const [selectedTeamId, setSelectedTeamId] = useState(0)
    const [teams, setTeams] = useState([])




    return (
        <div className="App">
            {/* <Wrapper> */}
            {/* <SelectorBox> */}
            <WorkTeamSelector teams={teams} setTeams={setTeams} selectedTeamId={selectedTeamId} setSelectedTeamId={setSelectedTeamId} />
            <UserSelector user={user} setUser={setUser} selectedTeamId={selectedTeamId} />
            <ToolSelector vibrationMagnitude={vibrationMagnitude} setVibrationMagnitude={setVibrationMagnitude} />
            <HourCount hourCount={hourCount} setHourCount={setHourCount} />
            <MinuteCount minuteCount={minuteCount} setMinuteCount={setMinuteCount} />
            {/* </SelectorBox> */}
            <Calculator product={product} setProduct={setProduct} hourValue={hourCount} minuteCount={minuteCount} vibrationMagnitude={vibrationMagnitude} />
            <SaveToPlan product={product} user={user} planObjects={planObjects} setPlanObjects={setPlanObjects} />
            <DisplayGraph graphData={graphData} setGraphData={setGraphData} planObjects={planObjects} />
            {/* </Wrapper> */}





        </div>
    );
}

export default App;