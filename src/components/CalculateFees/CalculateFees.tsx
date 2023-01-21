// CALCULATE DELIVERY FEES COMPONENT
// a component to collect user inputs and calculate the total delivery fees

import React, { useState } from "react";
import "./CalculateFees.css";
import Input from "../Input/Input";
import Button from "../Button/Button";
import DeliveryFeesResult from "../DeliveryFeesResult/DeliveryFeesResult";
// import calculate delivery fees function
import { calculateDeliveryFees } from "../calculateDeliveryFees";

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
            // update the new inputs
            ...value,
        }));
    };

    // store delivery fees
    const [deliveryFees, setDeliveryFees] = useState<number>(0);

    const [error, setError] = useState("");

    // function to calculate the tottal delivery fees based on the user input data
    const calculateFeesHandler = (e: any) => {
        e.preventDefault();
        if (
            inputValues.cartValue <= 0 ||
            inputValues.deliveryDistance <= 0 ||
            inputValues.numberOfItems <= 0
        ) {
            console.log("error");
            setError("Input fields must be valid numbers");
        } else {
            // reset all inputs on submit
            setError("");
            e.target.reset();
            // call calculate delivery fees function using the user inputs as an argument, store the returned value in a variable
            const totalDeliveryFees: number =
                calculateDeliveryFees(inputValues);
            setDeliveryFees(totalDeliveryFees);
        }
    };

    return (
        <section className="inputs-form">
            <form onSubmit={calculateFeesHandler}>
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
