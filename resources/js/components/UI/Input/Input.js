import React from 'react';

import './Input.css';
import Auxiliary from "../../../hoc/Auxiliary/Auxiliary";

const input = (props) => {
    let inputElement = null;
    const inputClasses = ["form-control","input-text-cls"];
    let LabelClasses = null;
    if (props.labelClassName) {
        LabelClasses = [...props.labelClassName];
    }

    if (props.invalid && props.shouldValidate && props.touched) {
        inputClasses.push("Invalid");
    }

    switch (props.elementType) {
        case ('input'):
            inputElement = <input
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed}/>;
            break;
        case ('checkbox'):
            inputElement = <Auxiliary>
                <div className="form-check">
                    <input
                        className="form-check-input"
                        {...props.elementConfig}
                        value={props.value}
                        onChange={props.changed}/>
                    <label className="form-check-label">{props.elementConfig.label}</label>
                </div>
            </Auxiliary>;
            break;
        case ('textarea'):
            inputElement = <textarea
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed}/>;
            break;
        case ('select'):
            inputElement = (
                <select
                    className={inputClasses.join(' ')}
                    value={props.value}
                    onChange={props.changed}>
                    {props.elementConfig.options.map(option => (
                        <option key={option.value} value={option.value}>
                            {option.displayValue}
                        </option>
                    ))}
                </select>
            );
            break;
        default:
            inputElement = <input
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed}/>;
    }

    return (
        <div className="form-group">
            {props.label ? <label className={LabelClasses ? LabelClasses.join(' ') : null}>{props.label}</label> : null}
            {inputElement}
        </div>
    );

};

export default input;
