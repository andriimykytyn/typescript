// void
function logToConsole(): void {
    console.log("Hello world");
    return;
}

// Array
let fruits: string[];
fruits = ['apple','banana','strawberry'.toLowerCase(), (() => 'Berry')(), null, undefined]; 

let food: Array<string>;
food = ['pizza', 'soup'];

let genericArray: Array<string | number | boolean>
genericArray = ['food', 10, true, null, undefined];

// Tuple
let coordinates: [number, string, number];
coordinates = [11,'12',13];

// Objects

let user = {
    firstName: 'Jordano',
    lastName: 'Montano',
    username: 'Sultano',
    getUsername: (): string => this.username
};

// Enums

enum DaysOfTheWeek {
    MONDAY = 'Monday',
    TUESDAY = 'Tuesday',
    WEDNESDAY = 'Wednesday'
};

let dayOfToday: DaysOfTheWeek;
dayOfToday = DaysOfTheWeek.MONDAY;


// any

let authUser: any = {
    firstName: 'Jeremy',
    lastName: 'Walking'
}
