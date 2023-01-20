import React from "react";
import "./DeliveryFees.css";

interface IProps {
    fees: number;
}

const DeliveryFees: React.FC<IProps> = (props) => {
    return <div>Delivery Fees is {props.fees} €</div>;
};

export default DeliveryFees;
