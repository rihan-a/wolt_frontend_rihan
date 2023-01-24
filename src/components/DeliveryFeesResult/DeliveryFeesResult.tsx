// DELIVERY FEES RESULT
// Component to render the calculated Delivery fees

import React from "react";
import "./DeliveryFeesResult.css";

interface IProps {
    fees: number | undefined;
}

const DeliveryFees: React.FC<IProps> = (props) => {
    return (
        <div
            className={
                props.fees || props.fees === 0
                    ? "delivery-fees-output active"
                    : "delivery-fees-output"
            }
        >
            Delivery fees: {props.fees}
            {props.fees || props.fees === 0 ? "€" : " "}
        </div>
    );
};

export default DeliveryFees;
