import React from "react";
import "./DeliveryFees.css";

interface IProps {
    fees: number;
}

const DeliveryFees: React.FC<IProps> = (props) => {
    return (
        <div className="delivery-fees-output">Delivery fees: {props.fees}€</div>
    );
};

export default DeliveryFees;
