const fs = require("fs");
const path = require("path");
const api = require("./utils/api");
const generateMarkdown = require("./utils/generateMarkdown");
const inquirer = require('inquirer');
inquirer.createPromptModule()
    .prompt([
        { message: "What is your GitHub username?" },
        { message: "Do you have a GitHub profile picture?" },
        { message: "What is your GitHub email address?" },

    ])
    .then(answers => {
        const response = answers;
        // Use user feedback for... whatever!!
    })
    .catch(error => {
        if (error.isTtyError) {

            // Prompt couldn't be rendered in the current environment
        } else {
            // Something else when wrong
        }
    });

// function writeFile(fileName, data)
// setup writefile
fs.writeFile("api.js", process.argv[0, 1], function (err) {

    if (err) {
        return console.log(err);
    }
    console.log("GitHub Information");

});





// function init() 
//     //build out intialize



// init();
