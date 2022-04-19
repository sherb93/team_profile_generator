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
                message: "What is your manager's name?"
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
            createSubordinates();
        });
    }

    const createSubordinates = function() {
        
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