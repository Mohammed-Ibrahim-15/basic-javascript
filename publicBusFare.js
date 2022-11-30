// Problem No-4: publicBusFare

function publicBusFare(people) {
    // Validation
    if (typeof people !== 'number') {
        return 'Please Enter Valid Value';
    }

    // Capacity of Bus & Microbus
    const reservedBus = 50;
    const microBus = 11;

    // Fare Of Public Bus
    const publicBusPerPersonRate = 250;

    // Calculation of the public bus fare
    const remainingBus = people % reservedBus;
    const remainingMicroBus = remainingBus % microBus;
    const publicBus = remainingMicroBus;

    // Total public bus fare
    const publicBusTotalFare = publicBus * publicBusPerPersonRate

    return publicBusTotalFare;

}

// Calling Function

// const totalPeople = 524;
// const result = publicBusFare(totalPeople);
// console.log(result);