import './App.css';
import ToolSelector from './components/ToolSelector';
import HourCount from './components/HourCount';
import MinuteCount from './components/MinuteCount';
import Calculator from './CalculatorComponents/Calculator';
import UserSelector from './CalculatorComponents/UserSelector';
import { useState } from 'react';
import SelectorBox from './CalculatorComponents/SelectorBox';
import SaveToPlan from './CalculatorComponents/SaveToPlan';
import DisplayGraph from './CalculatorComponents/DisplayGraph';


function App() {

    const [minuteCount, setMinuteCount] = useState(0);
    const [hourCount, setHourCount] = useState(0);
    const [vibrationMagnitude, setVibrationMagnitude] = useState(0);
    const [user, setUser] = useState(0);
    const [product, setProduct] = useState(0);
    const [planObjects, setPlanObjects] = useState([]) //default state is an empty array 
    const [graphData, setGraphData] = useState({})



    return (
        <div className="App">
            <SelectorBox>
                <UserSelector user={user} setUser={setUser} />
                <ToolSelector vibrationMagnitude={vibrationMagnitude} setVibrationMagnitude={setVibrationMagnitude} />
                <HourCount hourCount={hourCount} setHourCount={setHourCount} />
                <MinuteCount minuteCount={minuteCount} setMinuteCount={setMinuteCount} />
            </SelectorBox>
            <Calculator product={product} setProduct={setProduct} hourValue={hourCount} minuteCount={minuteCount} vibrationMagnitude={vibrationMagnitude} />
            <SaveToPlan product={product} user={user} planObjects={planObjects} setPlanObjects={setPlanObjects} />
            <DisplayGraph graphData={graphData} setGraphData={setGraphData} planObjects={planObjects} />






        </div>
    );
}

export default App;