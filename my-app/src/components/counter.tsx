import {useState} from "react";



const Counter = () => {
    const [counterData, setcounterData] = useState(0);
    return( 
        <div>
            <h1>{counterData}</h1>
            <button onClick={() => setcounterData(counterData + 1)}> + </button>
       </div>
    )
}

export default Counter