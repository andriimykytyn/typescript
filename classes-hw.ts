class Animal {

    constructor(protected name: string, protected age: number) {}

    get getName(): string { return this.name; }
    set setName(name: string) { this.name = name; }

    getInfo(): string {
        return `Animal: ${this.name}, age: ${this.age}`;
    }
}

class Parrot extends Animal {

    constructor(private colour: string, name: string, age: number) {
        super(name, age);
    }

    getInfo(): string {
        return `Parrot: ${this.name}, colour: ${this.colour}, age: ${this.age}`;
    }

}

let animals: Array<Animal> = [];
let dog = new Animal("Fluffy", 5);
let parrot = new Parrot("Green", "Cryack", 4);
animals.push(dog, parrot);
animals.forEach(animal => {
    console.log(animal.getInfo());
});