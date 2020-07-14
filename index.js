// require

const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

// array of questions for user
// const questions = [];

//

function promptUser() {
  return inquirer.prompt([
    {
      type: "input",
      message: "What is the title for your ReadMe?",
      name: "title",
    },
    {
      type: "input",
      message: "please enter a description for your project",
      name: "description",
    },
    {
      type: "input",
      message:
        "Do you have any instructions for installation? What are they? if no type NO.",
      name: "instructions",
    },
    {
      type: "input",
      message: "what is the usage of your project?",
      name: "usage",
    },
    {
      type: "input",
      message:
        "Do you have any contributions to add? if yes please write them in here",
      name: "contributions",
    },
    {
      type: "input",
      message: "what are your test instructions?",
      name: "testing",
    },
    {
      type: "checkbox",
      message: "choose license type",
      choices: [
        "MIT License",
        "GNU (GPL) 2.0",
        "Apache License 2.0",
        "GNU (GPL) 3.0",
      ],
      name: "license",
    },
    {
      type: "input",
      name: "username",
      message: "What is your GitHub username?",
    },
    {
      type: "input",
      name: "email",
      message: "provide your email address",
    },
  ]);
}

// function to write README file
function writetoFile(answers) {
  return `
# ${answers.title}
      
 ## Description:
    ${answers.description}   
# Table of Contents
* [Installation] 
* [Usage] 
* [Contributions]
* [Test]
* [License]
* [Questions] 



## Installation:
    ${answers.instructions}
## Usage:
    ${answers.usage}
## Tests:
    ${answers.testing}
## Contributions: 
     ${answers.contributions}
## License:
- 
![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)


    
## Questions:
    If you have any further questions please refer to the information below:
* [GitHub](https://github.com/${answers.username})

* Email: ${answers.email})
`;
}

// function to initialize program
async function init() {
  const answers = await promptUser();

  const readMe = writetoFile(answers);

  fs.writeFile("README.md", readMe, function (err) {
    if (err) throw err;
    console.log("Saved!");
  });
}

// function call to initialize program
init();
