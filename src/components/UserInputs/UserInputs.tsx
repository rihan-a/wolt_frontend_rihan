// USER INPUTS
// Component to render all user inputs, validate data and handle errors

import React, { useState } from "react";
import Input from "../Input/Input";
import Button from "../Button/Button";

// Props types interface
interface IProps {
    calculateFees: (inputValues: IState) => void;
}

// State types interface
interface IState {
    cartValue: number;
    deliveryDistance: number;
    numberOfItems: number;
    orderTime: string | null;
}

// Error types interface
interface IStateErrors {
    cartValue: string;
    deliveryDistance: string;
    numberOfItems: string;
}

const UserInputs = (props: IProps) => {
    //store user input values
    const [inputValues, setInputValues] = useState<IState>({
        cartValue: 0,
        deliveryDistance: 0,
        numberOfItems: 0,
        orderTime: null,
    });

    const [inputErrors, setInputErrors] = useState<IStateErrors>({
        cartValue: "",
        deliveryDistance: "",
        numberOfItems: "",
    });

    // function to collect user input values from Input components
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

    const calculateFeesHandler = (e: any) => {
        e.preventDefault();

        // check if the user inputs are negative number or zero
        if (inputValues.cartValue <= 0) {
            setInputErrors({
                ...inputErrors,
                cartValue:
                    "Cart Value can't be empty, and must be a valid number",
            });
        } else if (inputValues.deliveryDistance <= 0) {
            setInputErrors({
                ...inputErrors,
                deliveryDistance:
                    "Delivery distance can't be empty, and must be a valid number",
            });
        } else if (inputValues.numberOfItems <= 0) {
            setInputErrors({
                ...inputErrors,
                deliveryDistance:
                    "Number of Items can't be empty, and must be a valid number",
            });
            // if user input are valid numbers more than 0
        } else {
            setInputErrors({
                cartValue: "",
                deliveryDistance: "",
                numberOfItems: "",
            });
            // pass inputValues through props to parent component
            props.calculateFees(inputValues);
            // reset all inputs on submit
            e.target.reset();
        }
    };

    return (
        <form onSubmit={calculateFeesHandler} action="#">
            <Input
                label="Cart Value"
                name="cartValue"
                type="number"
                step={0.01}
                unit="???"
                inputValue={inputValueHandler}
                placeHolder="Enter Cart Value"
                required={true}
                error={inputErrors.cartValue}
            />

            <Input
                label="Delivery Distance"
                name="deliveryDistance"
                type="number"
                unit="m"
                inputValue={inputValueHandler}
                placeHolder="Enter Delivery distance"
                required={true}
                error={inputErrors.deliveryDistance}
            />
            <Input
                label="Number of Items"
                name="numberOfItems"
                type="number"
                inputValue={inputValueHandler}
                placeHolder="Enter the number of items"
                required={true}
                error={inputErrors.numberOfItems}
            />

            <Input
                label="Order Time"
                name="orderTime"
                type="datetime-local"
                inputValue={inputValueHandler}
                required={true}
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
    );
};

export default UserInputs;
