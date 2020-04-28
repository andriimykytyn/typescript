import { add, subtract, log as mathLog, multiply, divide } from "./math.util";

function generateSalary() {
    console.log('Generated salary');
}

function calculateSalary() {
    add(1, 2);
    console.log('Calculated salary');
}

function log() {
    console.log("Logged from employee service!");
}

export {
    generateSalary,
    calculateSalary,
    log
}