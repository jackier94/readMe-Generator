// require

const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

// array of questions for user
const questions = [];

//

function promptUser() {
    return inquirer.prompt([
        {
            type: "input",
            message:"What is the title for your ReadMe?",
            name: "title"
        },
        {
            type:"input",
            message: "please enter a description for your project",
            name:"description"
        },
        {
            type:"input",
            message: "Do you have any instructions for installation? What are they? if no type NO.",
            name:"instructions"
        },
        {
            type:"input",
            message: "what is the usage of your project?",
            name: "usage"
        },
        {
            type: "input",
            message: "Do you have any contributions to add? if yes please write them in here",
            name:"contributions"
        },
        {
            type:"input",
            message: "what are your test instructions?",
            name:" Testing"
        },
        {
            type:"checkbox",
            message:"choose license type",
            choices: [
                "MIT License",
                "GNU (GPL) 2.0",
                "Apache License 2.0",
                "GNU (GPL) 3.0"
            ],
            name: "license"
        },
        {
            type:"input",
            name: "username",
            message:"What is your GitHub username?"
        },
        {
            type:"input",
            name:"email",
            message:"provide your email address"
        }
}

// function to write README file
function writeToFile(fileName, data) {}

// function to initialize program
function init() {}

// function call to initialize program
init();
