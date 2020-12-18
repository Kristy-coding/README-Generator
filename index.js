// TODO: Include packages needed for this application

const fs = require('fs');

const inquirer = require('inquirer');

// generatePAgeMarkDown is grabbing generateMarkDown() which is being exported as a file and saving it in the variable generatePageMarkDown

const generatePageMarkDown = require('./utils/generateMarkdown.js') 

// TODO: Create an array of questions for user input

    // information to gather...
    // What is the name of your project? (required)
    // Describe your project (required)
    // What are the steps required to install your project? (intallation instructions)
    // Provide instructions and examples for use (usage information)
    // Enter contribution guidelines for your project
    // Enter test instructions for your project
    // What license do you want to use for your project (choose from list)
    // what is your GitHub username?
    // What is your email address?

promptUser = () => {
return inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Describe your project:'
      },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project?'
      },
      {
        type: 'input',
        name: 'usage',
        message: 'What does the user need to know about using your repo?:'
      },
      {
        type: 'input',
        name: 'contribution',
        message: 'What are the contribution guidelines for your project?'
      },
      {
        type: 'input',
        name: 'test',
        message: 'What are the test instructions for your project?'
      },
    {
      type: 'list',
      message: 'What license do you want to use for your project?',
      name: 'license',
      choices: ['MIT', 'GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3','Mozilla Public 2.0','Apache 2.0','Boost Software 1.0','The Unlicense','None']
    },
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username?'
      },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    },
    
])
};


// TODO: Create a function to write README file

function writeToFile(pageMarkDown) {

    fs.writeFile('./README.md', pageMarkDown, function(err) {
        if (err) {
          return console.log(err);
        }
  
        console.log('Success!');
      });
}



// TODO: Create a function to initialize app
function init() {

    promptUser()
    .then (promptData =>{
        return generatePageMarkDown(promptData)
    })
    .then(pageMarkDown => {
        return writeToFile(pageMarkDown)
      })
    
}

// Function call to initialize app
init();
