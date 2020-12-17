const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
const fs = require('fs');

// array of questions for user
inquirer.prompt(
[
    {
        type: 'input',
        name: 'title',
        message: "Please enter your project's title: "
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please a description for your project:'
    },
    {
        type: 'input',
        name: 'installationInfo',
        message: 'Please enter information on how to install your app:'
    },
    {
        type: 'input',
        name: 'usageInfo',
        message: 'Please enter information on how to use your app:'
    },
    {
        type: 'list',
        name: 'licenseInfo',
        message: 'Please select the type of license that pertains to your app:',
        choices: ['Public Domain','Permissive','LGPL','Copyleft','Proprietary']
    },
    {
        type: 'input',
        name: 'contributionRules',
        message: 'Please enter contribution guidelines for your app:'
    },
    {
        type: 'input',
        name: 'githubUsername',
        message: 'Please enter your GitHub username:'
    },
    {
        type: 'input',
        name: 'emailAddress',
        message: 'Please enter your email address:'
    }

]).then((data) => {

const readMe = generateMarkdown(data);

const fileName = `${data.title.toLowerCase().split(' ').join('')}.md`;

// function to write README file
    fs.writeFile(fileName, readMe, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
      });

}); 

/* // function to initialize program
function init() {
}

// function call to initialize program
init(); */
