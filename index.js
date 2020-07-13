
const inquirer = require("inquirer");
let name;
let ID;
let email;
let role;
let office;
let school;
let github;

let manager;
let intern;
let engineer;


function askName() {
    return inquirer.prompt([
        {
            type: "input",
            message: "Please enter the employees name.",
            name: "name"
        }
    ]).then(answer => {
        name = answer.name;
        askID();
    })
};

function askID() {
    return inquirer.prompt([
        {
            type: "input",
            message: "What is their employee ID?",
            name: "ID"
        }
    ]).then(answer => {
        ID = answer.ID;
        askEmail();
    })
};

function askEmail() {
    return inquirer.prompt([
        {
            type: "input",
            message: "What is the employees email address?",
            name: "email"
        }
    ]).then(answer => {
        email = answer.email;
        askRole();
    })
};

function askRole() {
    return inquirer.prompt([
        {
            type: "list",
            message: "What is the employees role?",
            name: "role",
            choices: [
                "Manager",
                "Engineer",
                "Intern"
            ]
        }
    ]).then(answer => {
        console.log(answer.role, email, ID, name);
        if (answer.role === "Manager") {
            ifManager();
            console.log("Im here");
        } else if (answer.role === "Engineer") {
            ifEngineer();
        } else { ifIntern(); }
    });
};

function ifManager() {
    return inquirer.prompt([
        {
            type: "input",
            message: "What will be their office number?",
            name: "office"
        }
    ]).then(answer => {
        office = answer.office;
        manager = new Manager(name, email, ID, role, office);
    })

};

function ifEngineer() {
    return inquirer.prompt([
        {
            type: "input",
            message: "What is their github username?",
            name: "github"
        }
    ]).then(answer => {
        github = answer.github;
        engineer = new Engineer(name, email, ID, role, github);
    })
};

function ifIntern() {
    return inquirer.prompt([
        {
            type: "list",
            message: "What school do they attend?",
            name: "school"
        }
    ]).then(answer => {
        school = answer.school;
        intern = new Intern(name, email, ID, role, office);
    })
}

askName();

// function askIfAdd() {
//     return inquirer.prompt([
//         {
//             type: "confirm",
//             message: "Would you like to add a new employee?",
//             name: "employeeYN"
//         }
//     ]).then(answer => {

//     })
// };





