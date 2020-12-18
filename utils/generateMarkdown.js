// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  // couldn't use replaceAll because I don't have version 15 or node so tutor helped bew find regular expression using g flag(global) to replace all instances of spaces with %20
  license = license.replace(/ /g,'%20')

  if(license === 'None' || license === '') { 
    return ''
  } else {
    
    return '![license](https://img.shields.io/badge/license-'+ license + '-yellow)'
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
 function renderLicenseLink(license) {

// //['MIT', 'GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3','Mozilla Public 2.0','Apache 2.0','Boost Software 1.0','The Unlicense','None]
  if (license ==='MIT'){
    return 'https://choosealicense.com/licenses/mit/'
   }
  else if (license === 'GNU AGPLv3'){
      return 'https://choosealicense.com/licenses/agpl-3.0/'
  }
  else if (license === 'GNU GPLv3') {
     return 'https://choosealicense.com/licenses/gpl-3.0/'
  }
  else if (license === 'GNU LGPLv3') {
    return 'https://choosealicense.com/licenses/lgpl-3.0/'
  }
   else if (license === 'Mozilla Public 2.0') {
    return 'https://choosealicense.com/licenses/mpl-2.0/'
  }
   else if (license === 'Apache 2.0') {
    return 'https://choosealicense.com/licenses/apache-2.0/'
  }
   else if (license === 'Boost Software 1.0') {
    return 'https://choosealicense.com/licenses/bsl-1.0/'
  }
   else if (license === 'The Unlicense') {
    return 'https://choosealicense.com/licenses/unlicense/'
  }
  else {
    return ''
  }
 }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  
  if(license === 'None') {
    return ''
  }
  else{
  return ` 
  ### License 
  This application is covered under the [${license} license](${renderLicenseLink(license)})
  `}
}

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

  ${renderLicenseSection(data.license)}
    
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
