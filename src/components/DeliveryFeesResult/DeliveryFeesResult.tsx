import React from "react";
import "./DeliveryFeesResult.css";

interface IProps {
    fees: number;
}

const DeliveryFees: React.FC<IProps> = (props) => {
    return (
        <div
            className={
                props.fees
                    ? "delivery-fees-output active"
                    : "delivery-fees-output"
            }
        >
            Delivery fees: {props.fees}€
        </div>
    );
};

export default DeliveryFees;