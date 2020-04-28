interface Human {
    readonly age: number;
    walk(): void;
}

interface Person extends Human {
    fName: string;
    lName?: string;
}

const user: Person = {
    fName: ``,
    age: 10,
    walk: () => { return; }
};

class Employee implements Person {
    fName = ``;
    age = 10;
    walk(): void {
        return;
    }
}