import { calculateDeliveryFees } from "./calculateDeliveryFees";

test("delivery fees equals 1", () => {
    const calculateFees = calculateDeliveryFees({
        cartValue: 9,
        deliveryDistance: 300,
        numberOfItems: 4,
        orderTime: "2023-01-25T17:30",
    });
    expect(calculateFees).toEqual(1);
});

// test for delivery fees incase of the friday rush time
test("delivery fees equals 1.2", () => {
    const calculateFees = calculateDeliveryFees({
        cartValue: 9,
        deliveryDistance: 300,
        numberOfItems: 4,
        orderTime: "2023-01-20T17:30", // Friday rush
    });
    expect(calculateFees).toEqual(1.2);
});

// test for delivery fees incase of the cart value is 100 euro or more
test("delivery fees equals 0", () => {
    const calculateFees = calculateDeliveryFees({
        cartValue: 100,
        deliveryDistance: 5000,
        numberOfItems: 8,
        orderTime: "2023-01-20T17:30", // Friday rush
    });
    expect(calculateFees).toEqual(0);
});

test("delivery fees equals 7.8", () => {
    const calculateFees = calculateDeliveryFees({
        cartValue: 10,
        deliveryDistance: 2200,
        numberOfItems: 7,
        orderTime: "2023-01-20T17:30", // Friday rush
    });
    expect(calculateFees).toEqual(7.8);
});

// test for delivery fees can never be more than 15 euro
test("delivery fees equals 15", () => {
    const calculateFees = calculateDeliveryFees({
        cartValue: 80,
        deliveryDistance: 5330,
        numberOfItems: 10,
        orderTime: "2023-01-20T17:30", // Friday rush
    });
    expect(calculateFees).toEqual(15);
});

// test for delivery fees incase of an invalid input like a negative value
test("delivery fees equals 0, incase of an invalid input", () => {
    const calculateFees = calculateDeliveryFees({
        cartValue: -5,
        deliveryDistance: 2330,
        numberOfItems: 4,
        orderTime: "2023-01-20T17:30", // Friday rush
    });
    expect(calculateFees).toEqual(null);
});
