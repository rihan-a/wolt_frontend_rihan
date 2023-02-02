import { calculateDeliveryFees } from "./calculateDeliveryFees";

test("delivery fees equals 1", async () => {
    const deliveryFees = await calculateDeliveryFees({
        cartValue: 9,
        deliveryDistance: 300,
        numberOfItems: 4,
        orderTime: "2023-01-25T17:30",
    });
    expect(deliveryFees).toBe(1);
});

// test for delivery fees incase of the friday rush time
test("delivery fees equals 1.2", async () => {
    const deliveryFees = await calculateDeliveryFees({
        cartValue: 9,
        deliveryDistance: 300,
        numberOfItems: 4,
        orderTime: "2023-01-20T17:30", // Friday rush
    });
    expect(deliveryFees).toBe(1.2);
});

// test for delivery fees incase of the cart value is 100 euro
test("delivery fees equals 0", async () => {
    const deliveryFees = await calculateDeliveryFees({
        cartValue: 100,
        deliveryDistance: 5000,
        numberOfItems: 8,
        orderTime: "2023-01-20T17:30", // Friday rush
    });
    expect(deliveryFees).toBe(0);
});

test("delivery fees equals 7.8", async () => {
    const deliveryFees = await calculateDeliveryFees({
        cartValue: 10,
        deliveryDistance: 2200,
        numberOfItems: 7,
        orderTime: "2023-01-20T17:30", // Friday rush
    });
    expect(deliveryFees).toBe(7.8);
});

// test for delivery fees can never be more than 15 euro
test("delivery fees equals 15", async () => {
    const deliveryFees = await calculateDeliveryFees({
        cartValue: 80,
        deliveryDistance: 5330,
        numberOfItems: 10,
        orderTime: "2023-01-20T17:30", // Friday rush
    });
    expect(deliveryFees).toBe(15);
});

// If the number of items is 13, 5,70€ surcharge is added ((9 * 50 cents) + 1,20€)
test("delivery fees equals 5.7", async () => {
    const deliveryFees = await calculateDeliveryFees({
        cartValue: 10,
        deliveryDistance: 900,
        numberOfItems: 13,
        orderTime: "2023-01-22T17:30",
    });
    expect(deliveryFees).toBe(5.7);
});
