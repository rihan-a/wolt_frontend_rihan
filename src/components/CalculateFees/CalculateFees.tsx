// CALCULATE DELIVERY FEES COMPONENT
// a component to collect user inputs and calculate the total delivery fees

import React, { useState } from "react";
import DeliveryFeesResult from "../DeliveryFeesResult/DeliveryFeesResult";
import { calculateDeliveryFees } from "./calculateDeliveryFees";
import "./CalculateFees.css";
import UserInputs from "../UserInputs/UserInputs";
import { RotatingLines } from "react-loader-spinner";

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
    // loading spinner boolean
    const [loadingSpinner, setLoadingSpinner] = useState<boolean>(false);

    // function to calculate the tottal delivery fees based on the user input data
    const calculateFeesHandler = async (inputValues: IState) => {
        setLoadingSpinner(true);
        // call calculate delivery fees function using the user inputs as an argument, store the returned value in a variable
        const deliveryFees = await calculateDeliveryFees(inputValues);
        setDeliveryFees(deliveryFees);
        setLoadingSpinner(false);
    };

    return (
        <>
            <UserInputs calculateFees={calculateFeesHandler} />
            <DeliveryFeesResult fees={deliveryFees} />

            <div className="loading-spinner">
                <RotatingLines
                    strokeColor="rgb(0, 194, 232)"
                    strokeWidth="5"
                    animationDuration="0.75"
                    width="96"
                    visible={loadingSpinner}
                />
            </div>
        </>
    );
};

export default CalculateFees;
