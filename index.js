const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const api = require("./utils/api");
const generateMarkdown = require("./utils/generateMarkdown");
const questions = [
    {
        type: "input",
        name: "github",
        message: "What is your GitHub username?",
        message: "Do you have a photo?",
        message: "What is your email address?"
    },
    //add questions

]

// function writeToFile(fileName, data)
//     //setup writefile
//     // fs.writeToFile(generateMarkdown, data, function(err))


// function init() {
//     //build out intialize

// }

// // init();
