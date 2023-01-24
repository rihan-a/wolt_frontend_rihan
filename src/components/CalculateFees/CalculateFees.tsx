// CALCULATE DELIVERY FEES COMPONENT
// a component to collect user inputs and calculate the total delivery fees

import React, { useState } from "react";
import "./CalculateFees.css";
import DeliveryFeesResult from "../DeliveryFeesResult/DeliveryFeesResult";
// import Calculate delivery fees function
import { calculateDeliveryFees } from "./calculateDeliveryFees";
import UserInputs from "../UserInputs/UserInputs";

// types interface
interface IState {
    cartValue: number;
    deliveryDistance: number;
    numberOfItems: number;
    orderTime: any;
}

const CalculateFees = () => {
    // store delivery fees
    const [deliveryFees, setDeliveryFees] = useState<number | null>(0);
    const [error, setError] = useState("");

    // function to calculate the tottal delivery fees based on the user input data
    const calculateFeesHandler = (inputValues: IState) => {
        // call calculate delivery fees function using the user inputs as an argument, store the returned value in a variable
        const totalDeliveryFees: number | null =
            calculateDeliveryFees(inputValues);

        // check if calculateDeliveryFees function returns a truthy value
        if (totalDeliveryFees) {
            setError("");
            setDeliveryFees(totalDeliveryFees);
        } else {
            // if calculateDeliveryFees function returns null, then throw an error
            console.log("error");
            setError("Input fields must be valid numbers");
        }
    };

    return (
        <section className="inputs-form">
            <UserInputs calculateFees={calculateFeesHandler} />
            <DeliveryFeesResult fees={deliveryFees} />
            <p className="error-msg">{error}</p>
        </section>
    );
};

export default CalculateFees;
