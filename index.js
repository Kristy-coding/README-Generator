// TODO: Include packages needed for this application

const fs = require('fs');

const inquirer = require('inquirer');

const generatePageMarkDown = require('./utils/generateMarkdown.js') 

// TODO: Create an array of questions for user input

// const questions = [] (not sure what they are asking here??)

    // information to gether...
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
        name: 'decription',
        message: 'Decribe your project:'
      },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project?'
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use:'
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
      choices: ['email', 'phone', 'Slack', 'smoke signal']
    },
    {
        type: 'input',
        name: 'username',
        message: 'what is your GitHub username?'
      },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    },
    
])
};




// TODO: Create a function to write README file

function writeToFile(data) {

// WRITE THIS AS A PROMISE!!! 

    fs.writeFile('./README.md', data, function(err) {
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
    
       // .thenn
// prompt the user/ ask the questions 
// then take the data returned from the prompts and use to generate the markdown (call generateMarkdown(data))
// then write a file with the completed markdown module as the data 
}

// Function call to initialize app
init();
