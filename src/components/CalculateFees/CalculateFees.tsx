import React, { useState } from "react";
import "./CalculateFees.css";
import Input from "../Input/Input";
import Button from "../Button/Button";
import DeliveryFees from "../DeliveryFees/DeliveryFees";

interface IState {
    cartValue: number;
    deliveryDistance: number;
    numberOfItems: number;
    orderTime: string | null;
}

function UserInputs() {
    const [inputValues, setInputValues] = useState<IState>({
        cartValue: 0,
        deliveryDistance: 0,
        numberOfItems: 0,
        orderTime: null,
    });

    //toISOString().slice(0, -1)

    const [deliveryFees, setDeliveryFees] = useState<number>(0);

    const inputValueHandler = (
        value: { [name: string]: number } | undefined
    ) => {
        setInputValues((existingValues) => ({
            // Retain the existing values
            ...existingValues,
            // update the new inputx
            ...value,
        }));
    };
    const calculateFees = () => {
        let deliveryFeesCounter: number = 0;
        console.log(inputValues);
        if (inputValues.cartValue < 10) {
            deliveryFeesCounter = 10 - inputValues.cartValue;
        }

        if (inputValues.deliveryDistance > 1000) {
            deliveryFeesCounter = deliveryFeesCounter + 2;
        }

        setDeliveryFees(Number(deliveryFeesCounter.toFixed(2)));

        console.log(deliveryFees);
    };

    return (
        <section>
            <Input
                label="Cart Value"
                name="cartValue"
                type="number"
                unit="€"
                inputValue={inputValueHandler}
                placeHolder="Enter Cart Value"
            />

            <Input
                label="Delivery Distance"
                name="deliveryDistance"
                type="number"
                unit="Km"
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

            <Input
                label="Order Time"
                name="orderTime"
                type="datetime-local"
                inputValue={inputValueHandler}
                // value={inputValues.orderTime}
            />

            <Button
                id="calculateBtn"
                value="Calculate Delivery Fees"
                handleClick={calculateFees}
            />

            <DeliveryFees fees={deliveryFees} />
        </section>
    );
}

export default UserInputs;
