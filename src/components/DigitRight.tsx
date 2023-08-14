import React from 'react';

type DigitPropsType = {
    count: number
    disabled: boolean
}

export const DigitRight: React.FC<DigitPropsType> = (props) => {

    let className = props.disabled ? "digitContainerRight disabled" : "digitContainerRight"

    return (
        <div className={className}>
            {props.count}
        </div>
    )
};
