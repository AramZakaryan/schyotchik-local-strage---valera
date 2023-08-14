import React, {useState} from 'react';
import "./App.css"
import {DigitRight} from "./components/DigitRight";
import {Button} from "./components/Button";
import {DigitLeft} from "./components/DigitLeft";


const App = () => {
    const [count, setCount] = useState<number>(0)
    const [maxCount, setMaxCount] = useState<number>(1)
    const [startCount, setStartCount] = useState<number>(0)

    const setStartMaxCounts = (maxValue:number, startValue:number) => {
        setMaxCount(maxValue)
        setStartCount(startValue)
    }



    const increase = () => setCount(count + 1)
    const reset = () => setCount(0)

    let incDisabled = count >= maxCount ? true : false

    let resDisabled = count === 0 ? true : false


    return (<>
                <DigitLeft setStartMaxCounts={setStartMaxCounts}/>


            <div className={"container"}>
                <DigitRight count={count}
                            disabled={incDisabled}/>
                <div className={"buttonsContainer"}>
                    <Button name={"Inc"}
                            callback={increase}
                            disabled={incDisabled}
                    />
                    <Button name={"Reset"}
                            callback={reset}
                            disabled={resDisabled}
                    />
                </div>
            </div>
        </>
    );
}

export default App;
