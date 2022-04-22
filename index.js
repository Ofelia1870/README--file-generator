// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
// TODO: Create an array of questions for user input
const questions = [
  // user inputs a name for their project
  {
    type: "input",
    message: "What is the name of your title?",
    name: "titleName",
  },

  // User inputs the links to the Installation Section within Table of contents

  {
    type: "input",
    name: "installationLink",
    message: "Please input the link to your project Installation Section: ",
  },
];

inquirer.prompt(questions);

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
