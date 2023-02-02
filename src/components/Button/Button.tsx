// BUTTON COMPONENT
// Reuseable button

import React from "react";
import "./Button.css";

// Props types interface
interface IProps {
    id: string;
    value: string;
    btnType: "button" | "submit" | "reset" | undefined;
}

const Button: React.FC<IProps> = (props) => {
    return (
        <div className="btn-wrapper">
            <button id={props.id} className="btn" type={props.btnType}>
                {props.value}
            </button>
        </div>
    );
};

export default Button;
