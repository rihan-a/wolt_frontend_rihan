import React from "react";
import "./Button.css";

interface IProps {
    id: string;
    value: string;
    btnType: any;
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
