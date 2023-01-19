// Input component
// Reuseable Input Tag

import "./Input.css";

interface IProps {
    label: string;
    name: string;
    type: string;
    placeHolder?: string;
    value?: string;
    unit?: string;
    inputValue: (value: { [name: string]: number }) => void;
}

const Input: React.FC<IProps> = (props) => {
    const onChangeHandler = (e: any) => {
        props.inputValue({ [e.target.name]: e.target.value });
    };

    return (
        <div className="input-wrapper">
            <label className="input-label"> {props.label}</label>
            <input
                className="input-field"
                name={props.name}
                type={props.type}
                placeholder={props.placeHolder}
                onChange={onChangeHandler}
                value={props.value}
            />
            <label className="input-unit"> {props.unit}</label>
        </div>
    );
};

export default Input;
