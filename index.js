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

let team = []; // this will hold the team member objects created by the user
let id = []; // this will hold id numbers so that checks can be run to ensure the user inputs unique id no.'s

//function to initiate the inquirer prompts
const init = () => {
    console.log("Let's start building your team:");
    inquirer
        .prompt(questions.managerQuestions)  
        .then((answers) =>{ 
            const manager = new Manager(answers.managersName, answers.managersID, answers.managersEmail, answers.managersOfficeNumber);
            team.push(manager);
            id.push(answers.managersID);
            addAnotherEmployee();
        });
};

// function to present further questions to the user based on their answer to 'Please select an option:' 
const addAnotherEmployee = () => {
    inquirer
    .prompt(questions.addEmployee)  
    .then((answers) =>{ 
        if(answers.employeeType == 'Add an engineer'){
            addEngineerQuestions();
        }else if(answers.employeeType == 'Add an intern'){
            addInternQuestions()
        }else{
            console.log('You have finished building your team:')
            console.log(team);
            console.log(id);
            //Func call to use the team array (that's been created based on user input) to create a HTML file
            writeToFile(team);
        };
    });
};

//function to present the user with questions regarding an engineer they'd like to add to their team
const addEngineerQuestions = () => {
    inquirer
    .prompt(questions.engineerQuestions)  
    .then((answers) =>{ 
        const engineer = new Engineer(answers.engineersName, answers.engineersID, answers.engineersEmail, answers.engineersGithub);
        team.push(engineer);
        id.push(answers.engineersID);
        addAnotherEmployee();
    });
};

//function to present the user with questions regarding an intern they'd like to add to their team
const addInternQuestions = () => {
    inquirer
        .prompt(questions.internQuestions)  
        .then((answers) =>{ 
            const intern = new Intern(answers.internsName, answers.internsID, answers.internsEmail, answers.internsSchool); 
            team.push(intern);
            id.push(answers.internsID);
            addAnotherEmployee();
        });         
};

//Function to use the team array (that's been created based on user input) to create a HTML file
function writeToFile(team){
    fs.writeFile(outputPath, render(team), (err) => 
    err ? console.error(err) : console.log("Success! Your team page has been created. You will find the team.html file in the output folder."))
};


// function call to initialize program when you type node index.js into terminal
init();

//export the id variable
module.exports.id = id;





