import React, {useState} from 'react';
import {Button} from "./Button";

type DigitPropsType = {
    setStartMaxCounts: (maxValue: number, startValue: number) => void
}

export const DigitLeft: React.FC<DigitPropsType> = (props) => {
    const [valueM, setValueM] = useState<any>(1)
    const [valueS, setValueS] = useState<any>(0)

    let className = "digitContainerLeft"

    return (
        <div className={"container"}>
        <div className={className}>
            <span>Max Value </span>
            <input value={valueM} type="number" onChange={ev => setValueM(ev.currentTarget.value)}/>
            <br/>
            <span>Start Value </span>
            <input value={valueS} type="number" onChange={ev => setValueS(ev.currentTarget.value)}/>
            <Button name={"Set"}
                    callback={()=>props.setStartMaxCounts(valueM, valueS)}
                    disabled={false}
            />
        </div>
        </div>
    )
};
