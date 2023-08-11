import React, {useState} from 'react';
import "./App.css"

const App = () => {
    const [value, setValue] = useState<number>(0)

    const incHandler = () => {
        setValue(value + 1)
    }
    const setToLocalStorageHandler = () => {
        localStorage.setItem("CurValue", JSON.stringify(value))

    }

    const getLocalStorageHandler = () => {
        let CurValueString = localStorage.getItem("CurValue")
        if (CurValueString) {
            setValue(JSON.parse(CurValueString))
        }
    }

    const clearLocalStoragehandler = () => {
        localStorage.clear()
        setValue(0)
    }

    const removeLocalStoragehandler = () => {
        localStorage.removeItem("CurValue")
    }

    return (
        <div>
            <h1>{value}</h1>
            <button onClick={incHandler}>increment</button>
            <button onClick={setToLocalStorageHandler}>set LocalStorage</button>
            <button onClick={getLocalStorageHandler}>get LocalStorage</button>
            <br/>
            <button onClick={clearLocalStoragehandler}>clear LocalStorage</button>
            <button onClick={removeLocalStoragehandler}>remove LocalStorage (CurValue)</button>
        </div>
    );
}

export default App;
