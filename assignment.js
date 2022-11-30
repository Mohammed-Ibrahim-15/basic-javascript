// Problem No-1: radianToDegree

function radianToDegree(radian) {
    // Validation 
    if (typeof radian !== 'number') {
        return 'Please Enter Valid Value';
    }
    // Radian to Degree formula
    let radianToDegreeFormula = radian * 57.2958;
    const inDegreeWith2Decimal = radianToDegreeFormula.toFixed(2);
    // Converting from string to float
    const inDegree = parseFloat(inDegreeWith2Decimal);

    return inDegree;

}

// Calling Function

// const inRadian = 25;
// const degree = radianToDegree(inRadian);
// console.log(degree);


// Problem No-2: isJavaScriptFile

function isJavaScriptFile(filename) {
    // Validation
    if (typeof filename !== 'string') {
        return 'Please Enter Valid Value';
    }
    // Check file format name or extension
    if (filename.endsWith('.js')) {

        return true;
    }
    else {

        return false;
    }
}

// Calling Function

// const fileNameIs = 'factorial.js';
// const result = isJavaScriptFile(fileNameIs);
// console.log(result);


// Problem No-3: oilPrice

function oilPrice(diesel, petrol, octane) {
    // Validation
    if (typeof diesel !== 'number' || typeof petrol !== 'number' || typeof octane !== 'number') {
        return 'Please Enter Valid Value';
    }
    // Rate of Diesel, Petrol & Octane
    const perLiterDiesel = 114;
    const perLiterPetrol = 130;
    const perLiterOctane = 135;
    // Calculation
    const dieselCost = diesel * perLiterDiesel;
    const petrolCost = petrol * perLiterPetrol;
    const octaneCost = octane * perLiterOctane;
    // Total cost 
    const totalCost = dieselCost + petrolCost + octaneCost;
    return totalCost;

}

// Calling Function

// const dieselAmount = 10;
// const petrolAmount = 10;
// const octaneAmount = 20;
// const result = oilPrice(dieselAmount, petrolAmount, octaneAmount);
// console.log(result);


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


// Problem No-5: isBestFriend

function isBestFriend(people, bestfriend) {
    // Validation
    if (typeof people !== 'object' || typeof bestfriend !== 'object') {
        return 'Please Enter Valid Value';
    }

    // Check is there any connection between two people
    if (people.name === bestfriend.friend && people.friend === bestfriend.name) {
        return true;
    }
    else {
        return false;
    }
}

// Calling Function

// let people1 = { name: 'abul', friend: 'kabul' };
// let people2 = { name: 'kabul', friend: 'abul' };
// const result = isBestFriend(people1, people2);
// console.log(result);

