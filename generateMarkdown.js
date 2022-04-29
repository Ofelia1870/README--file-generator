// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license, data) {
  const licensePicked = data.license[0];
  let licenseBadge = "";
  if (licensePicked === "None") {
    licenseBadge = "";
  }
  if (licensePicked === "MIT") {
    licenseBadge =
      "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)";
  }
  if (licensePicked === "Apache") {
    licenseBadge =
      "![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)";
  }
  if (licensePicked === "Boost") {
    licenseBadge =
      "![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license, data) {
  const licensePicked = data.license[0];
  let licenseLink = "";
  if (licensePicked === "None") {
    licenseLink = "";
  }
  if (licensePicked === "MIT") {
    licenseLink = "![License: MIT](https://opensource.org/licenses/MIT)";
  }
  if (licensePicked === "Apache") {
    licenseLink = "![License](https://opensource.org/licenses/Apache-2.0)";
  }
  if (licensePicked === "Boost") {
    licenseLink = "![License](https://www.boost.org/LICENSE_1_0.txt)";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  const licensePicked = data.license[0];
  let licenseSection = "";
  if (licensePicked === "None") {
    licenseSection = "";
  }
  if (licensePicked === "MIT") {
    licenseSection = "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.titleName}

  ## Description

  ${data.description}

  ## Table of Contents

  - [Installation](${data.installationLink})
  - [Usage](${data.usageLink})
  - [Contributing](${data.contributingLink})
  - [Tests](${data.testsLink})
  - [Questions?](${data.questionsLink})
  - [License](${data.licenseLink})

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## Contributing

  ${data.contribute}

  ## Tests

  ${data.tests}

  ## License

  ${renderLicenseBadge(data)}
  ${renderLicenseLink(data)}

  ## Questions?

  GitHub Pages: ${data.githubUsername} ${data.profileLink}

  Email: ${data.email}

  How to Reach Me with Additional Questions: ${data.contact}



 


`;
}

module.exports = generateMarkdown;
