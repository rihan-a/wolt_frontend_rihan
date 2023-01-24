// CALCULATE DELIVERY FEES COMPONENT
// a component to collect user inputs and calculate the total delivery fees

import React, { useState } from "react";

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
    const [deliveryFees, setDeliveryFees] = useState<number | undefined>();

    // function to calculate the tottal delivery fees based on the user input data
    const calculateFeesHandler = (inputValues: IState) => {
        // call calculate delivery fees function using the user inputs as an argument, store the returned value in a variable
        const totalDeliveryFees: number = calculateDeliveryFees(inputValues);

        console.log(totalDeliveryFees);

        // check if calculateDeliveryFees function returns a truthy value

        setDeliveryFees(totalDeliveryFees);

        // if calculateDeliveryFees function returns null, then throw an error
        // setError("Input fields must be valid numbers");
    };

    return (
        <>
            <UserInputs calculateFees={calculateFeesHandler} />
            <DeliveryFeesResult fees={deliveryFees} />
        </>
    );
};

export default CalculateFees;
