// Input component
// Reuseable Input Tag

import "./Input.css";

interface IProps {
    label: string;
    name: string;
    type: string;
    placeHolder: string;
    inputValue: (value: { [name: string]: number }) => void;
}

const Input: React.FC<IProps> = (props) => {
    const onChangeHandler = (e: any) => {
        props.inputValue({ [e.target.name]: e.target.value });
    };

    return (
        <div className="input-wrapper">
            <label> {props.label}</label>
            <input
                className="input-field"
                name={props.name}
                type={props.type}
                placeholder={props.placeHolder}
                onChange={onChangeHandler}
            />
        </div>
    );
};

export default Input;
