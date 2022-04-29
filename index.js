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
    name: "usageLink",
    message: "Please input the link to your project Usage Section: ",
  },

  // User inputs the links to the Contributing Section within Table of contents
  {
    type: "input",
    name: "contributingLink",
    message: "Please input the link to your project Contributing Section: ",
  },

  // User inputs the links to the Contributing Section within Table of contents
  {
    type: "input",
    name: "testsLink",
    message: "Please input the link to your project Test Section: ",
  },

  // User inputs the links to the Questions Section within Table of contents
  {
    type: "input",
    name: "questionsLink",
    message: "Please input the link to your project Questions Section: ",
  },

  // User inputs the links to the License Section within Table of contents
  {
    type: "input",
    name: "licenseLink",
    message: "Please input the link to your project License Section: ",
  },

  //   User inputs a description of their project
  {
    type: "input",
    name: "description",
    message:
      "Enter a brief text description of the what, why, and how of your project: ",
  },

  //   User inputs instructions for installation of running project
  {
    type: "input",
    name: "installation",
    message: "Input the steps required to install your project: ",
  },

  // User inputs instructions for usage of their project
  {
    type: "input",
    name: "usage",
    message:
      "Input the instructions for your project and examples/demonstration for usage: ",
  },

  // User inputs how others can contribute to their project
  {
    type: "input",
    name: "contribute",
    message:
      "Enter guidelines for how other users can go about contributing to your project: ",
  },

  // User inputs tests and examples on how to run them for their project
  {
    type: "input",
    name: "tests",
    message:
      "Write the test instructions for your project and provide running examples: ",
  },

  // User selects a license from various options
  {
    type: "checkbox",
    name: "license",
    message: "Please select a license: ",
    choices: ["None", "MIT", "Apache", "GPL 3.0"],
  },

  // User inputs Github Username
  {
    type: "input",
    name: "githubUsername",
    message: "Type out your Github username",
  },

  // User inputs github profile link
  {
    type: "input",
    name: "profileLink",
    message: "Enter your Github profile link here: ",
  },

  // User inputs email address
  {
    type: "input",
    name: "email",
    message: "Enter your email address: ",
  },

  // User inputs contact info
  {
    type: "input",
    name: "contact",
    message: "Enter instructions for contacting you: ",
  },
];

inquirer.prompt(questions);

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
