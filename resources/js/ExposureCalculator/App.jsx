import ToolSelector from './CalculatorComponents/ToolSelector';
import HourCount from './CalculatorComponents/HourCount';
import MinuteCount from './CalculatorComponents/MinuteCount';
import Calculator from './CalculatorComponents/Calculator';
import UserSelector from './CalculatorComponents/UserSelector';
import { useEffect, useState } from 'react';
import SelectorBox from './CalculatorComponents/SelectorBox';
import SaveToPlan from './CalculatorComponents/SaveToPlan';
import DisplayGraph from './CalculatorComponents/DisplayGraph';
import WorkTeamSelector from './CalculatorComponents/WorkTeamSelector';




function App() {

    const [minuteCount, setMinuteCount] = useState(0);
    const [hourCount, setHourCount] = useState(0);
    const [vibrationMagnitude, setVibrationMagnitude] = useState(0);
    const [user, setUser] = useState(null);
    const [product, setProduct] = useState(0);
    const [planObjects, setPlanObjects] = useState([]) //default state is an empty array
    const [graphData, setGraphData] = useState({})
    const [selectedTeamId, setSelectedTeamId] = useState(0)
    const [teams, setTeams] = useState([])
    // playing with these 2 
    const [workers, setWorkers] = useState([])
    const [selectedWorkerId, setSelectedWorkerId] = useState(0)

    useEffect(() => {
        let selectedWorker = workers.filter((worker) => (worker.id == selectedWorkerId))[0]
        setUser(selectedWorker)
    }, [selectedWorkerId])




    return (
        <div className="App">
            {/* <Wrapper> */}
            {/* <SelectorBox> */}
            <WorkTeamSelector teams={teams} setTeams={setTeams} selectedTeamId={selectedTeamId} setSelectedTeamId={setSelectedTeamId} />
            <UserSelector selectedTeamId={selectedTeamId} workers={workers} setWorkers={setWorkers} selectedWorkerId={selectedWorkerId} setSelectedWorkerId={setSelectedWorkerId} />
            <ToolSelector vibrationMagnitude={vibrationMagnitude} setVibrationMagnitude={setVibrationMagnitude} />
            <HourCount hourCount={hourCount} setHourCount={setHourCount} />
            <MinuteCount minuteCount={minuteCount} setMinuteCount={setMinuteCount} />
            {/* </SelectorBox> */}
            <Calculator product={product} setProduct={setProduct} hourValue={hourCount} minuteCount={minuteCount} vibrationMagnitude={vibrationMagnitude} />
            <SaveToPlan product={product} user={user} planObjects={planObjects} setPlanObjects={setPlanObjects} hourCount={hourCount} minuteCount={minuteCount} tool={tool} />
            <DisplayGraph graphData={graphData} setGraphData={setGraphData} planObjects={planObjects} />
            {/* </Wrapper> */}






        </div>
    );
}

export default App;