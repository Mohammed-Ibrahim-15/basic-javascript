function isBestFriend(people, bestfriend) {

    if (typeof people !== 'object' || typeof bestfriend !== 'object') {
        return 'Please Enter Valid Value';
    }


    if (people1.name === people2.friend && people1.friend === people2.name) {
        return true;
    }
    else {
        return false;
    }
}

let people1 = { name: 'tom', friend: 'jon' };
let people2 = { name: 'jond', friend: 'tom' };
const result = isBestFriend(people1, people2);
console.log(result);