class Person {

    // Automatically creates this fields
    constructor(
        protected firstName: string,
        protected lastName: string, 
        protected age: number
    ) {}

    getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }

}

const person: Person = new Person('Andrew', 'Mykytyn', 22);
console.log(person.getFullName());

class Employee extends Person {

    constructor(
        private id: number,
        private position: string,
        firstName: string,
        lastName: string,
        age: number
    ) {
        super(firstName, lastName, age);
    }

    get employeeId():number {
        return this.id;
    }

    set employeeId(employeeId: number) {
        this.id = employeeId;
    }

    getFullName(): string {
        // const nameSegments: Array<string> = super.getFullName().split(' ');
        // nameSegments.splice(1,0,this.position);
        // const fullName = nameSegments.join(' ');
        // return `${fullName}`;
        return `${this.firstName} ${this.position} ${this.lastName}`
    }

}

const manager: Employee = new Employee(1, 'manager', 'jeremy', 'claky', 35);
console.log(manager.getFullName());
console.log(manager.employeeId);
manager.employeeId = 20;
console.log(manager.employeeId);