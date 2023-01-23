// CALCULATE DELIVERY FEES COMPONENT
// a component to collect user inputs and calculate the total delivery fees

import React, { useState } from "react";
import "./CalculateFees.css";
import Input from "../Input/Input";
import Button from "../Button/Button";
import DeliveryFeesResult from "../DeliveryFeesResult/DeliveryFeesResult";
// import Calculate delivery fees function
import { calculateDeliveryFees } from "./calculateDeliveryFees";

// types interface
interface IState {
    cartValue: number;
    deliveryDistance: number;
    numberOfItems: number;
    orderTime: any;
}

const CalculateFees = () => {
    //store user input values
    const [inputValues, setInputValues] = useState<IState>({
        cartValue: 0,
        deliveryDistance: 0,
        numberOfItems: 0,
        orderTime: null,
    });

    // function to collect user input values from Input components onChange event
    const inputValueHandler = (
        value: { [name: string]: number } | undefined
    ) => {
        setInputValues((existingValues) => ({
            // Retain the existing values
            ...existingValues,
            // update with new inputs
            ...value,
        }));
    };

    // store delivery fees
    const [deliveryFees, setDeliveryFees] = useState<number | null>(0);

    const [error, setError] = useState("");

    // function to calculate the tottal delivery fees based on the user input data
    const calculateFeesHandler = (e: any) => {
        e.preventDefault();
        // call calculate delivery fees function using the user inputs as an argument, store the returned value in a variable
        const totalDeliveryFees: number | null =
            calculateDeliveryFees(inputValues);

        // check if calculateDeliveryFees function returns a truthy value
        if (totalDeliveryFees) {
            // reset all inputs on submit
            e.target.reset();
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
            <form onSubmit={calculateFeesHandler} action="#">
                <Input
                    label="Cart Value"
                    name="cartValue"
                    type="number"
                    step={0.01}
                    unit="€"
                    inputValue={inputValueHandler}
                    placeHolder="Enter Cart Value"
                    required="required"
                />

                <Input
                    label="Delivery Distance"
                    name="deliveryDistance"
                    type="number"
                    unit="m"
                    inputValue={inputValueHandler}
                    placeHolder="Enter Delivery distance"
                    required="required"
                />
                <Input
                    label="Number of Items"
                    name="numberOfItems"
                    type="number"
                    inputValue={inputValueHandler}
                    placeHolder="Enter the number of items"
                    required="required"
                />

                <Input
                    label="Order Time"
                    name="orderTime"
                    type="datetime-local"
                    inputValue={inputValueHandler}
                    required="required"
                    value={
                        inputValues.orderTime
                            ? undefined
                            : new Date().toISOString().slice(0, -8)
                    }
                />

                <Button
                    id="calculateBtn"
                    value="Calculate Delivery Fees"
                    btnType="submit"
                />
            </form>
            <DeliveryFeesResult fees={deliveryFees} />
            <p className="error-msg">{error}</p>
        </section>
    );
};

export default CalculateFees;
