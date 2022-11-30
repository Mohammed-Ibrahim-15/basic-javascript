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