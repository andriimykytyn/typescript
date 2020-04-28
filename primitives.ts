// Booleans
let authorized: boolean;
authorized = false;
authorized = true;
authorized = (() => true)();
authorized = null;
authorized = undefined;

// Numbers
let myNumber: number;
myNumber = 10;
myNumber = -10;
myNumber = -10.10;
myNumber = 0x123;
myNumber = (() => 0x123)();
myNumber = undefined;
myNumber = null;

//String
let username = "amykytyn";
username = `amykytyn`;
username = 'amykytyn';
username = 'amykytyn'.toUpperCase();
username = (() => 'hello')();
username = null;
username = undefined;

// Null
let data: null;
data = null;
data = undefined;
data = (() => null)();
data = (() => undefined)();

// Undefined
let userData: undefined;
userData = null;
userData = undefined;
userData = (() => null)();
userData = (() => undefined)();
