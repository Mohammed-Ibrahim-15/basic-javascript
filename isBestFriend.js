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