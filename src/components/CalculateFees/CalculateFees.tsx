import React, { useState } from "react";
import "./CalculateFees.css";
import Input from "../Input/Input";
import Button from "../Button/Button";

interface IState {
    cartValue: number;
    deliveryDistance: number;
    numberOfItems: number;
}

function UserInputs() {
    const [inputValues, setInputValues] = useState<IState>({
        cartValue: 0,
        deliveryDistance: 0,
        numberOfItems: 0,
    });

    const inputValueHandler = (
        value: { [name: string]: number } | undefined
    ) => {
        setInputValues((existingValues) => ({
            // Retain the existing values
            ...existingValues,
            // update the new input
            ...value,
        }));
    };
    const submitFormHandler = () => {
        console.log(inputValues);
    };

    return (
        <section>
            <Input
                label="Cart Value"
                name="cartValue"
                type="number"
                inputValue={inputValueHandler}
                placeHolder="Enter Cart Value"
            />

            <Input
                label="Delivery Distance"
                name="deliveryDistance"
                type="number"
                inputValue={inputValueHandler}
                placeHolder="Enter Delivery distance"
            />
            <Input
                label="Number of Items"
                name="numberOfItems"
                type="number"
                inputValue={inputValueHandler}
                placeHolder="Enter the number of items"
            />

            <Button
                id="calculateBtn"
                value="Calculate Delivery Fees"
                handleClick={submitFormHandler}
            />
        </section>
    );
}

export default UserInputs;
