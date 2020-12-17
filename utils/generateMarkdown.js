// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}  

  
  ### Description
  ${data.description}
  
  
  ### Table of Contents (Table of Contents in list form with working links to direct to each section)
  * [Description](https://github.com/Kristy-coding/README-Generator/blob/main/README.md#description)
  * [Installation](https://github.com/Kristy-coding/README-Generator/blob/main/README.md#installation)
  * [Usage](https://github.com/Kristy-coding/README-Generator/blob/main/README.md#usage)
  * [License](https://github.com/Kristy-coding/README-Generator/blob/main/README.md#license)
  * [Contributing](https://github.com/Kristy-coding/README-Generator/blob/main/README.md#contributing)
  * [Tests](https://github.com/Kristy-coding/README-Generator/blob/main/README.md#tests)
  * [Questions](https://github.com/Kristy-coding/README-Generator/blob/main/README.md#questions)
  
  ### Installation
  ${data.installation}
  

  ### Usage
  ${data.usage}

 
  ### License
  This application is covered under the ${data.license} license
  // Liscense section 
  // user story: when I chose a license for my application from alist of options, THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
  
  
  ### Contributing
  ${data.contribution}
  
   
  ### Tests
  ${data.test}
  
  ### Questions
  
  Find me on GitHub [HERE](https://github.com/${data.username})<br/>
  If you have any addition questions about the project feel free to reach out via my email: ${data.email}
  

  `;
}

module.exports = generateMarkdown;
