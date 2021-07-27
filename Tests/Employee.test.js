//require Employee
const Employee = require('../Employees/Employee');


describe("Employee", () => {
    // create test for employee 
    test('creates Employee object containing "name, id, email"', () => {
            const employee = new Employee();

            expect("name" in employee).toEqual(true);
            expect("id" in employee).toEqual(true);
            expect("email" in employee).toEqual(true);
        })
        // test to see if type of new employee is an object
    test('Checks if employee is object', () => {
            const employee = new Employee();

            expect(typeof employee).toEqual("object");
        })
        // test if can set name via constructor
    test('Checks if you can set name', () => {
            const name = "Jonathan";
            const obj = new Employee(name);

            expect(obj.name).toEqual(name);
        })
        // test if can set id via constructor
    test('Checks if you can set ID', () => {
            const id = 1234;
            const obj = new Employee('name', id);

            expect(obj.id).toEqual(id);
        })
        // test if can set email via constructor
    test('Checks if you can set email', () => {
            const email = "name@gmail.com";
            const obj = new Employee('name', 1234, email);

            expect(obj.email).toEqual(email);
        })
        //test to see if getName() returns name test value
    test('Checks if you can get name from getName() function', () => {
            const name = "jonathan";
            const employee = new Employee(name);

            expect(employee.getName()).toEqual(name);
        })
        //test to see if getId() returns id test value
    test('Checks if you can get id from getID() function', () => {
            const id = 1234;
            const employee = new Employee("name", id);

            expect(employee.getID()).toEqual(id);
        })
        //test to see if getEmail() returns email test value
    test('Checks if you can get email from getEmail() function', () => {
            const email = "4joanthanfoster@gmail.com";
            const employee = new Employee("name", 1234, email);

            expect(employee.getEmail()).toEqual(email);
        })
        //test to see if getRole() returns "Employee"
    test('Checks if you can get role from getRole() function', () => {
        const role = "Employee";
        const employee = new Employee("name", 1234, "email", role);

        expect(employee.getRole()).toEqual(role);
    })
})