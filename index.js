const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const questions = require("./lib/questions.js");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.

let team = [];
// let manager = [];
// let engineer = [];
// let intern = [];
let id = [];


const init = () => {
    console.log('Please build your team:');
    inquirer
        .prompt(questions.managerQuestions)  
        .then((answers) =>{ 
            // console.log(answers)
            const manager = new Manager(answers.managersName, answers.managersID, answers.managersEmail, answers.managersOfficeNumber);
            team.push(manager);
            id.push(answers.managersID);
            addAnotherEmployee();
        });
};

const addAnotherEmployee = () => {
    inquirer
    .prompt(questions.addEmployee)  
    .then((answers) =>{ 
        // console.log(answers)
        if(answers.employeeType == 'Engineer'){
            addEngineerQuestions();
        }else if(answers.employeeType == 'Intern'){
            addInternQuestions()
        }else{
            console.log('You have finished building your team.')
            console.log(team);
            console.log(id);
           
            //Func call to use the team array (that's been created based on user input) to create a HTML file
            writeToFile(team);
        };
    });
};

const addEngineerQuestions = () => {
    inquirer
    .prompt(questions.engineerQuestions)  
    .then((answers) =>{ 
        // console.log(answers);
        const engineer = new Engineer(answers.engineersName, answers.engineersID, answers.engineersEmail, answers.engineersGithub);
        team.push(engineer);
        id.push(answers.engineersID);
        addAnotherEmployee();
    });
};

const addInternQuestions = () => {
    inquirer
        .prompt(questions.internQuestions)  
        .then((answers) =>{ 
            // console.log(answers);
            const intern = new Intern(answers.internsName, answers.internsID, answers.internsEmail, answers.internsSchool); 
            team.push(intern);
            id.push(answers.internsID);
            addAnotherEmployee();
        });         
};

//Func to use the team array (that's been created based on user input) to create a HTML file
function writeToFile(team){
    fs.writeFile('./output/team.html', render(team), (err) => 
    err ? console.error(err) : console.log("Success! You're team page has been created. You will find the team.html file in the output folder."))
};


// function call to initialize program when you type node index.js into terminal
init();

module.exports.id = id;




//TODO:
//  - in the questions.js file - how can I check ID input against ID array?
