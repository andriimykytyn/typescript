function greetUser(name: string) {
    console.log(`Hello there: ${name}`);
}

const greetUserByName = function(name:string) {
    console.log(`Hello there: ${name}`);
}

greetUser('John');
greetUserByName('Jane');

// Arrow functions 
const greetUserByNameArrow = (name: string) => console.log(`Hello there, ${name}!`);

greetUserByNameArrow(`Miski`);

const edibles = [
    {
        edible: `Poke`,
        isVegan: false
    },
    {
        edible: `Coke`,
        isVegan: false
    },
    {
        edible: `Choke`,
        isVegan: true
    }
];

console.log(
    edibles.filter(function(item) {
        return item.isVegan;
    })
);

console.log(edibles.filter(item => !item.isVegan));

const user = {
    firstName: `John`,
    lastName: `Lean`,
    lazyGreet: function() {
        // possible fix - creates this to pass it into the child function
        const that = this
        setTimeout(function() {
            // this is not of scope of user, rather it is of scope of lazyGreet
            // which is undefined
            console.log(`Hey there, ${that.firstName}`)
        }, 1000);   
    }
}

user.lazyGreet();

const user2 = {
    firstName: `Jane`,
    lastName: `Morrow`,
    lazyGreet: function() {
        setTimeout(() => console.log(`Hey there, ${this.firstName}`), 1000);
    }
}

user2.lazyGreet();