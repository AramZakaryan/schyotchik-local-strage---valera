import React, {useState} from 'react';
import "./App.css"
import {Digit} from "./components/Digit";
import {Buttoms} from "./components/Buttoms";
import {Simulate} from "react-dom/test-utils";
import reset = Simulate.reset;

const App = () => {
    const [count, setCount] = useState<number>(0)

    const maxCount = 5
    const increase = () => setCount(count + 1)
    const reset = () => setCount(0)

    let incDisabled = count >= maxCount ? true : false

    let resDisabled = count===0?true:false


    return (
        <div className={"container"}>
            <Digit count={count}
                   disabled={incDisabled}/>
            <Buttoms increase={increase}
                     reset={reset}
                     incDisabled={incDisabled}
                     resDisabled={resDisabled}
            />
        </div>
    );
}

export default App;
