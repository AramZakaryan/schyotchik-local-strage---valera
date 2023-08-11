import React from 'react';

type DigitPropsType = {
    count: number
    disabled: boolean
}

export const Digit: React.FC<DigitPropsType> = (props) => {

    let className = props.disabled ? "number disabled" : "number"

    return (
        <div className={className}>
            {props.count}
        </div>
    )
};
