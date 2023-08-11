import React, {useState} from 'react';
import "./App.css"

const App = () => {
    const [value, setValue] = useState<number>(0)

    const incHandler = () => {
        setValue(value + 1)
    }
    const setToSessionStorageHandler = () => {
        // localStorage.setItem("CurValue", JSON.stringify(value))
        sessionStorage.setItem("CurValue", JSON.stringify(value))
    }

    const getSessionStorageHandler = () => {
        // let CurValueString = localStorage.getItem("CurValue")
        let CurValueString = sessionStorage.getItem("CurValue")
        if (CurValueString) {
            setValue(JSON.parse(CurValueString))
        }
    }

    const clearSessionStorageHandler = () => {
        // localStorage.clear()
        sessionStorage.clear()
        setValue(0)
    }

    const removeSessionStoragehandler = () => {
        // localStorage.removeItem("CurValue")
        sessionStorage.removeItem("CurValue")

    }

    return (
        <div>
            <h1>{value}</h1>
            <button onClick={incHandler}>increment</button>
            <button onClick={setToSessionStorageHandler}>set SessionStorage</button>
            <button onClick={getSessionStorageHandler}>get SessionStorage</button>
            <br/>
            <button onClick={clearSessionStorageHandler}>clear SessionStorage</button>
            <button onClick={removeSessionStoragehandler}>remove SessionStorage (CurValue)</button>
        </div>
    );
}

export default App;
