const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What would you like the title of your project to be?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a short description explaining what, why and how of your project.'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions for use. Include screenshots as needed.'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license type from the list.',
        choices: ['None', 'License-MIT', 'License-Apache-2.0', 'License-Boost-1.0']
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Provide contribution guidelines.'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Describe test instructions.'
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
    }

];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            console.log(err);
        };
    });
};

// function to initialize program
function init() {
    inquirer
    .prompt(questions)
    .then((answers) => {
        console.log(answers);
        let userData = '';
        // userData = JSON.stringify(answers);
        for (const key in answers) {
            userData += `${key}: ${answers[key]}\n`
        }
        return writeToFile(data, generateMarkdown)
        })

};

// function call to initialize program
init();
