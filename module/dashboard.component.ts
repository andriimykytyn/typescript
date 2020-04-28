import { multiply, log as mathLog } from "./math.util";
import { calculateSalary, generateSalary, log } from "./employee.service";

export default class Dashboard {
    employeeId;

    createDashboard() {
        multiply(10, 20);
        mathLog()
        calculateSalary();
        generateSalary();
        log();
    }
}

export function logDashboardActivities() {
    console.log("Logged dashboard activities!");
}