import React from "react";

type ButtomsPropsType = {
    increase: () => void
    reset: () => void
    incDisabled: boolean
    resDisabled: boolean
}

export const Buttoms: React.FC<ButtomsPropsType> = (props) => {

    const increaseHandler = () => props.increase()
    const resetHandler = () => props.reset()


    return (
        <>
            <button onClick={increaseHandler} disabled={props.incDisabled}>Inc</button>
            <button onClick={resetHandler} disabled={props.resDisabled}>Reset</button>
        </>
    )
}