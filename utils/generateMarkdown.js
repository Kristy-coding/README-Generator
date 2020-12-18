// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  if(license) { 
    return '![license](https://img.shields.io/badge/license-'+ license + '-yellow)'
  } else {
    return ''
  }
};



// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {

// //['MIT', 'GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3','Mozilla Public 2.0','Apache 2.0','Boost Software 1.0','The Unlicense']
//   if (license ==='MIT'){
//     return 'https://choosealicense.com/licenses/mit/'
//   }
//   if(license === 'GNU AGPLv3'){
//     return 'https://choosealicense.com/licenses/agpl-3.0/'
//   }
  
// }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}  

  ${renderLicenseBadge(data.license)}

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
  This application is covered under the [${data.license} license]()
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
