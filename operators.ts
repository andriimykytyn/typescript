// Array

let fruits: Array<string> = ['apple', 'cherry', 'banana'];
let food: string[] = ['pizza', 'burger', 'pie'];
let edibles: Array<string> = [...fruits, ...food];

console.log(edibles);

// Object

let user = {
    firstName: 'Amanda',
    lastName: 'Watkins',
    username: 'yeyeye'
};

let userDetails = {
    ...user,
    address: 'some',
    email: 'some@some.com'
};

console.log(userDetails);

// Functions

function add(x?: number, y?: number, z?: number): number {
    return x + y + z;
}

let numbers: Array<number> = [1,2,3];
console.log('Sum of all numbers: ', add(...numbers));

// Backticks - stringify and keeps formatting

console.log(
    'The user with name: '
 + user.firstName +
  ' has an address of '
   + userDetails.address);

console.log(`The user with name: ${user.firstName} has an address of: ${userDetails.address}`);

// Destructure

let { firstName: fName, lastName: lName } = user;
console.log(fName, lName);

// Array Destructure

let [apple, grapes] = food;
console.log(apple);
console.log(grapes);

// Rest *varargs*

let [justCherry, ...restEdibles] = edibles;
// it gives first element to justCherry and 
// the rest of them to - restEdibles.
console.log(justCherry);
console.log(restEdibles);

let { firstName, ...other } = userDetails;
console.log(firstName);
console.log(other);

function getEdibles(apple?, ...restEdibles) {
    console.log(apple);
    console.log(restEdibles);
}

getEdibles(...edibles);
