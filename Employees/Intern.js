const Employee = require('./Employee');

class Intern extends Employee {
    constructor(empName, id, email, school) {
        super(empName, id, email);

        this.school = school
    }

    getRole() {
        return ("Intern");
    }

    getSchool() {
        return this.school;
    }
}

module.exports = Intern;