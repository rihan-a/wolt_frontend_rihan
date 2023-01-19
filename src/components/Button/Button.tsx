import React from "react";
import "./Button.css";

interface IProps {
    id: string;
    value: string;
    handleClick: () => void;
}

const Button: React.FC<IProps> = (props) => {
    const handleClick = () => {
        props.handleClick();
    };

    return (
        <div className="btn-wrapper">
            <button id={props.id} className="btn" onClick={handleClick}>
                {props.value}
            </button>
        </div>
    );
};

export default Button;
