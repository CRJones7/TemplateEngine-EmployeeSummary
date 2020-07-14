const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

let team = [];


function askIfAdd() {
        return inquirer.prompt([
            {
                type: "confirm",
                message: "Would you like to add a new employee?",
                name: "employeeYN"
            }
        ]).then(answer => {
            if(answer.employeeYN === true){
                askRole();
            }
            else{
                console.log("Your roster is up to date!")
                const teamHTML = render(team);
                fs.writeFile(outputPath, teamHTML, err => {
                    if(err){
                        throw err;
                    }
                    console.log("The file has been created");
                });
            }
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
            if (answer.role === "Manager") {
                ifManager();
                
            } else if (answer.role === "Engineer") {
                ifEngineer();
            } else { ifIntern(); }
        });
    };
    function ifManager() {
        return inquirer.prompt([
            {
                type: "input",
                message: "Please enter the employees name.",
                name: "name"
            },
            {
                type: "input",
                message: "What is their employee ID?",
                name: "id"
            },
            {
                type: "input",
                message: "What is the employees email address?",
                name: "email"
            },
            {
                type: "input",
                message: "What is their office number?",
                name: "officeNumber"
            }

        ]).then(answer => {
            // github = answer.github;
            manager = new Manager(answer.name, answer.id, answer.email, answer.officeNumber);
            team.push(manager); 
            askIfAdd();
        })
    };

    function ifEngineer() {
        return inquirer.prompt([
            {
                type: "input",
                message: "Please enter the employees name.",
                name: "name"
            },
            {
                type: "input",
                message: "What is their employee ID?",
                name: "id"
            },
            {
                type: "input",
                message: "What is the employees email address?",
                name: "email"
            },
            {
                type: "input",
                message: "What is their github username?",
                name: "github"
            }

        ]).then(answer => {
            // github = answer.github;
            engineer = new Engineer(answer.name, answer.id, answer.email, answer.github);
            team.push(engineer);
            askIfAdd(); 
        })
    };


    function ifIntern() {
        return inquirer.prompt([
            {
                type: "input",
                message: "Please enter the employees name.",
                name: "name"
            },
            {
                type: "input",
                message: "What is their employee ID?",
                name: "id"
            },
            {
                type: "input",
                message: "What is the employees email address?",
                name: "email"
            },
            {
                type: "input",
                message: "What school do they attend?",
                name: "school"
            }

        ]).then(answer => {
            // github = answer.github;
            intern = new Intern(answer.name, answer.id, answer.email, answer.school);
            team.push(intern); 
            askIfAdd();
        });
    };
    askIfAdd();

        
    

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
