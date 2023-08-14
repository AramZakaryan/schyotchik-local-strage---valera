import React from "react";

type ButtomsPropsType = {
    name: string
    callback: () => void
    disabled: boolean
}

export const Button: React.FC<ButtomsPropsType> = (props) => {

    const onClickHandler = () => props.callback()


    return (<>
            <button onClick={onClickHandler} disabled={props.disabled}>{props.name}</button>
        </>
    )
}