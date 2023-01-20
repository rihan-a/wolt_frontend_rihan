import React, { useState } from "react";
import "./CalculateFees.css";
import Input from "../Input/Input";
import Button from "../Button/Button";
import DeliveryFees from "../DeliveryFees/DeliveryFees";

interface IState {
    cartValue: number;
    deliveryDistance: number;
    numberOfItems: number;
    orderTime: any;
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
            // update the new inputs
            ...value,
        }));
    };

    // function to calculate the tottal delivery fees based on the user input data
    const calculateDeliveryFees = (e: any) => {
        e.preventDefault();
        e.target.reset();

        // intiate delivery fees counter to keep track of the different delivery fees
        let deliveryFeesCounter: number = 0;

        //check if the cart value is less 10 euros
        if (inputValues.cartValue < 10) {
            // if less than 10 add the difference between 10 and the cart value to the delivery fees counter
            deliveryFeesCounter = 10 - inputValues.cartValue;
        }
        // check if the delivery distance is more than 1km
        if (inputValues.deliveryDistance >= 1000) {
            // if more than 1km add 2 euro to the delivery fees counter
            deliveryFeesCounter += 2;

            // check how many additional 500m and round them up to the bigger number
            let additional500MCount = Math.ceil(
                (inputValues.deliveryDistance - 1000) / 500
            );
            // add 1 extra for each addiotnal 500m in delivery distance
            deliveryFeesCounter += additional500MCount;
        }

        // check if the number of items is more than 5
        if (inputValues.numberOfItems > 4) {
            // if (inputValues.numberOfItems === 5) {
            //     deliveryFeesCounter += 0.5;
            // }
            let itemsMoreThanFive = inputValues.numberOfItems - 4;
            deliveryFeesCounter += itemsMoreThanFive * 0.5;
            if (inputValues.numberOfItems > 12) {
                deliveryFeesCounter += 1.2;
            }
        }

        // check if the delivery fees is more than 15, the delivery fees can't be more than 15
        if (deliveryFeesCounter > 15) {
            // set the delivery fees to 15 euro
            deliveryFeesCounter = 15;
        }
        // check if the cart value is equal or more than 100
        if (inputValues.cartValue >= 100) {
            // set delivery fees to zero
            deliveryFeesCounter = 0;
        }

        setDeliveryFees(Number(deliveryFeesCounter.toFixed(2)));
    };

    return (
        <section>
            <form onSubmit={calculateDeliveryFees}>
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
                    // value={inputValues.orderTime}
                />

                <Button
                    id="calculateBtn"
                    value="Calculate Delivery Fees"
                    btnType="submit"
                />
            </form>
            <DeliveryFees fees={deliveryFees} />
        </section>
    );
}

export default UserInputs;
