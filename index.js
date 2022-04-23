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

  // User inputs the links to the Usage Section within Table of contents
  {
    type: "input",
    name: "UsageLink",
    message: "Please input the link to your project Usage Section: ",
  },

  // User inputs the links to the Contributing Section within Table of contents
  {
    type: "input",
    name: "ContributingLink",
    message: "Please input the link to your project Contributing Section: ",
  },

  // User inputs the links to the Contributing Section within Table of contents
  {
    type: "input",
    name: "TestsLink",
    message: "Please input the link to your project Test Section: ",
  },

  // User inputs the links to the Questions Section within Table of contents
  {
    type: "input",
    name: "QuestionsLink",
    message: "Please input the link to your project Questions Section: ",
  },

  // User inputs the links to the License Section within Table of contents
  {
    type: "input",
    name: "LicenseLink",
    message: "Please input the link to your project License Section: ",
  },
];

inquirer.prompt(questions);

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
