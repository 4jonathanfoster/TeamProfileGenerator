// a emplyee class is needed 
class Employee {
    constructor(empName, id, email) {
        this.empName = empName;
        this.id = id;
        this.email = email;
    }

    getName() {
        return this.empName;
    }

    getID() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return 'Employee';
    }
};

module.exports = Employee;