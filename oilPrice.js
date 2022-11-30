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