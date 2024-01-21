// const Manager = require("./lib/Manager");
// const Engineer = require("./lib/Engineer");
// const Intern = require("./lib/Intern");
const questions = require("./lib/questions.js");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

// const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.

let answersGiven = [];

function init() {
    console.log('Please build your team:');
    inquirer
        .prompt(questions.managerQuestions)  
        .then((answers) =>{ 
            // console.log(answers)
            // answersGiven.push(answers);
            addAnotherEmployee();
            
            //what to do with the answers collated from the user?
            //writeToFile(answers)
        });
}

function addAnotherEmployee(){
    inquirer
    .prompt(questions.addEmployee)  
    .then((answers) =>{ 
        // console.log(answers)
        if(answers.employeeType == 'Engineer'){
            askEngineerQuestions();
        }else if (answers.employeeType == 'Intern'){
            askInternQuestions()
        }else{
            console.log(`else console.log answers:${answers}`);
            // console.log(answersGiven);
        // answersGiven.push(answers);
        }
    });
}

function askEngineerQuestions() {
    inquirer
    .prompt(questions.engineerQuestions)  
    .then((answers) =>{ 
        console.log(answers)
        addAnotherEmployee()
        // answersGiven.push(answers);
    });
}

function askInternQuestions() {
    inquirer
        .prompt(questions.internQuestions)  
        .then((answers) =>{ 
            console.log(answers)
            addAnotherEmployee()
            // answersGiven.push(answers);
        });         
}

// function call to initialize program when you type node index.js into terminal
init();