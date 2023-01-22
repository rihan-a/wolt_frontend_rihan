// types interface
interface InputTypes {
    cartValue: number;
    deliveryDistance: number;
    numberOfItems: number;
    orderTime: any;
}

// functon to check if the order time is During the Friday rush (3 - 7 PM UTC) and it returns true / false
const checkForFridayRush = (inputValues: InputTypes) => {
    let orderTime = new Date(inputValues.orderTime);
    // check if the order day is on friday
    if (orderTime.getUTCDay() === 5) {
        //check if the order is during Friday rush (3 - 7 PM UTC)
        let orderHourUTC = orderTime.getUTCHours() - 12;
        if (orderHourUTC > 2 && orderHourUTC < 8) {
            // During friday rush multiply the delivery fees by 1.2x
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
};

// Calculate Delivery Fees Function
//--------------------------------------------------------------------------------------->
export const calculateDeliveryFees = (inputValues: InputTypes) => {
    // validate that the user inputs are valid postive numbers
    if (
        inputValues.cartValue <= 0 ||
        inputValues.deliveryDistance <= 0 ||
        inputValues.numberOfItems <= 0
    ) {
        return null;
    }

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
        let itemsMoreThanFive = inputValues.numberOfItems - 4;
        deliveryFeesCounter += itemsMoreThanFive * 0.5;
        if (inputValues.numberOfItems > 12) {
            deliveryFeesCounter += 1.2;
        }
    }

    // check if the order time is During the Friday rush, if yes multiply the total fees by 1.2x
    if (checkForFridayRush(inputValues)) {
        deliveryFeesCounter *= 1.2;
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

    return Number(deliveryFeesCounter.toFixed(2));
};
