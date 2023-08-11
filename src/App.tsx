import React, {useEffect, useState} from 'react';
import "./App.css"

const App = () => {
    const [value, setValue] = useState<number>(0)

    useEffect(() => {
            let CurValueString = localStorage.getItem("CurValue")
            if (CurValueString) {
                setValue(JSON.parse(CurValueString))
            }
        },
        []
    )


    const incHandler = () => {
        setValue(value + 1)
    }

    useEffect(() => {
            localStorage.setItem("CurValue", JSON.stringify(value))
        },
        [value]
    )



    return (
        <div>
            <h1>{value}</h1>
            <button onClick={incHandler}>increment</button>
        </div>
    );
}

export default App;
