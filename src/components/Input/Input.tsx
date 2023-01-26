// INPUT COMPONENT
// Reuseable user Input field
import { useState } from "react";
import "./Input.css";

// Props types interface
interface IProps {
    label: string;
    name: string;
    type: string;
    placeHolder?: string;
    value?: string | undefined;
    unit?: string;
    step?: number;
    required?: any;
    error?: string;
    inputValue: (value: { [name: string]: number }) => void;
}

// Basic numbers only regex
let numberRegex = /^\d+$/;

const Input: React.FC<IProps> = (props) => {
    const [error, setError] = useState("");

    // Function to handle input change events and pass it to parent through props
    const onChangeHandler = (e: any) => {
        // check if the input is avalid number and not empty other wise throw and error msg
        if (
            e.target.value > 0 &&
            numberRegex.test(e.target.value) &&
            e.target.value.trim() !== ""
        ) {
            console.log(numberRegex.test(e.target.value));
            props.inputValue({ [e.target.name]: e.target.value });
            setError("");
        } else {
            setError("Input must be valid number");
        }
    };
    return (
        <div className="input-wrapper">
            <label htmlFor={props.name} className="input-label">
                {props.label}:
                {props.required && <span className="required-star">*</span>}
            </label>

            <div className="input-inputUnit-container">
                <input
                    className="input-field"
                    id={props.name}
                    name={props.name}
                    type={props.type}
                    placeholder={props.placeHolder}
                    onChange={onChangeHandler}
                    value={props.value}
                    step={props.step}
                    required={props.required}
                />
                <label className="input-unit"> {props.unit}</label>
            </div>
            <span className="error-msg">{error ?? props.error}</span>
        </div>
    );
};

export default Input;
