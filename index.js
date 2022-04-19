const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const fs = require("fs");
const inquirer = require("inquirer");

const team = [];

const createTeam = function() {

    const createManager = function() {
        inquirer.prompt([
            {
                type: "input",
                name: "name",
                message: "What is the manager's name?"
            },
            {
                type: "input",
                name: "id",
                message: "What is the manager's ID?"
            },
            {
                type: "input",
                name: "email",
                message: "What is the manager's email?"
            },
            {
                type: "input",
                name: "officeNo",
                message: "What is the manager's office number?"
            }
        ])
        .then(data => {
            const manager = new Manager(data.name, data.id, data.email, data.officeNo);
            team.push(manager);
            console.log(`=== Manager position created! ===`);
            createSubordinates();
        });
    }

    const createSubordinates = function() {

        const newEmployee = function() {
            inquire
                .prompt([
                    {
                        type: "list",
                        name: "title",
                        message: "What type of employee would you like to add to the team?",
                        choices: ["Engineer", "Intern", "None (finish)"]
                    }
                ])
                .then(data => {
                    if (data.name === "Engineer") {
                        createEngineer();
                    } else if (data.name === "Intern") {
                        createIntern();
                    } else {
                        // finishBuildingTeam();
                    }
                });
            };

        const createEngineer = function() {
            inquirer
                .prompt([
                    {
                        type: "input",
                        name: "name",
                        message: "What is the engineer's name?"
                    },
                    {
                        type: "input",
                        name: "id",
                        message: "What is the engineer's ID?"
                    },
                    {
                        type: "input",
                        name: "email",
                        message: "What is the engineer's email?"
                    },
                    {
                        type: "input",
                        name: "github",
                        message: "What is the engineer's github username?"
                    }
                ])
                .then(data => {
                    const engineer = new Engineer(data.name, data.id, data.email, data.github);
                    team.push(engineer);
                    console.log(`=== Engineer position created! ===`);
                    newEmployee();
                });
        }

        const createIntern = function() {
            inquirer
                .prompt([
                    {
                        type: "input",
                        name: "name",
                        message: "What is the intern's name?"
                    },
                    {
                        type: "input",
                        name: "id",
                        message: "What is the intern's ID?"
                    },
                    {
                        type: "input",
                        name: "email",
                        message: "What is the intern's email?"
                    },
                    {
                        type: "input",
                        name: "school",
                        message: "Name the most recent school the intern has attended."
                    }
                ])
                .then(data => {
                    const intern = new Intern(data.name, data.id, data.email, data.school);
                    team.push(intern);
                    console.log(`=== Intern position created! ===`);
                    newEmployee();
                });
        }

        chooseTitle();
    }

    createManager();
}

createTeam();

//NEED:
//function to make rest of the team
//separate functions for engineer and intern
//create classes out of data
//a way to let the user finish building team
//end result needs to be an array of objects in team variable
//send these results to a 