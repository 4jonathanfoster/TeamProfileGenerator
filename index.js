const fs = require('fs');
const inquirer = require('inquirer');

const Engineer = require('./AllEmployees/Engineer');
const Intern = require('./AllEmployees/Intern');
const Manager = require('./AllEmployees/Manager');

const HTML = require('./web/HTML');

const team = [];

function newManager() {
    inquirer
        .prompt([
            { type: 'input', message: "Enter the manager's name", empName: 'name' },
            { type: 'input', message: "Enter the manager's employee ID", empName: 'employee' },
            { type: 'input', message: "Enter the manager's email address", empName: 'email' },
            { type: 'input', message: "Enter the manager's office number", empName: 'office' },
        ])
        .then((response) => {
            let employeeName = response.empName;
            let employeeID = response.employee;
            let email = response.email;
            let office = response.office;

            let manager = new Manager(employeeName, employeeID, email, office);
            team.push(manager);
            newEmployee();
        })
}

function newEmployee() {
    inquirer
        .prompt([
            { type: 'list', message: 'Is this new employee an Engineer or Intern?', empName: 'role', choices: ['Engineer', 'Intern'] },
            { type: 'input', message: "Enter the employee's name", empName: 'name' },
            { type: 'input', message: "Enter the employee's employee ID", empName: 'employee' },
            { type: 'input', message: "Enter the employee's email address", enpName: 'email' },
            { type: 'input', message: "Enter the employee's github username", when: (list) => list.role == "Engineer", empName: "github" },
            { type: 'input', message: "Enter the employee's school", when: (list) => list.role == "Intern", empName: "school" },
            { type: 'confirm', message: "Would you like to add another employee?", empName: "add" }
        ])
        .then((response) => {
            let employeeName = response.enpName;
            let employeeID = response.employee;
            let email = response.email;

            if (response.role == "Intern") {
                let school = response.school;
                let intern = new Intern(employeeName, employeeID, email, school);
                team.push(intern);
            } else if (response.role == "Engineer") {
                let github = response.github;
                let engineer = new Engineer(employeeName, employeeID, email, github);
                team.push(engineer);
            }

            if (response.add == true) { newEmployee(); } else { createHTML(); }
        })
}

const createHTML = () => {
    fs.writeFile("./dist/team.html", HTML(team), (err) => {
        err ? console.log("Error: The following program has not worked") : console.log("A HTML has been created for you!")
    })
}

newManager();