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

let manager = [];
let engineer = [];
let intern = [];


function init() {
    console.log('Please build your team:');
    inquirer
        .prompt(questions.managerQuestions)  
        .then((answers) =>{ 
            // console.log(answers)
            manager.push(answers);
            addAnotherEmployee();
        });
};

// function addManager(){
//     inquirer
//     .prompt(questions.managerQuestions)  
//     .then((answers) =>{ 
//         console.log(answers)
//         addAnotherEmployee()
//         // answersGiven.push(answers);
//     });
// };

function addAnotherEmployee(){
    inquirer
    .prompt(questions.addEmployee)  
    .then((answers) =>{ 
        // console.log(answers)
        if(answers.employeeType == 'Engineer'){
            addEngineerQuestions();
        }else if (answers.employeeType == 'Intern'){
            addInternQuestions()
        }else{
            console.log('Building team complete')
            console.log(manager);
            console.log(engineer);
            console.log(intern);
            
            // Generate class?
            
            //what to do with the answers collated from the user?
            //writeToFile(answers)
        };
    });
};

function addEngineerQuestions() {
    inquirer
    .prompt(questions.engineerQuestions)  
    .then((answers) =>{ 
        console.log(answers)
        engineer.push(answers);
        // or generate class i.e. const engineer[1] = new Engineer ();?
        addAnotherEmployee()
        // answersGiven.push(answers);
    });
};

function addInternQuestions() {
    inquirer
        .prompt(questions.internQuestions)  
        .then((answers) =>{ 
            console.log(answers)
            intern.push(answers);
            addAnotherEmployee()
            // answersGiven.push(answers);
        });         
};

// function writeToFile(manager, engineer, intern){
//     fs.writeFile('./output/team.html', render(manager, engineer, intern), (err) => 
//     err ? console.error(err) : console.log("Success! You're team page has been created. You will find the team.html file in the output folder."))
// };


// function call to initialize program when you type node index.js into terminal
init();