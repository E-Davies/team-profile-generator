let id = require('../index.js');

const managerQuestions = [
    {
        type: 'input',
        name: 'managersName',
        message: 'What is the name of the manager?',
        validate: (input) => {
            if (input == ''){
                return 'Please enter the name of the manager'
            } else {
                return true
            };
        }
    },
    {
        type: 'number',
        name: 'managersID',
        message: "What is the manager's ID?",
        validate: (input) => {
            if (!input){
                return 'Please enter the ID of the manager (this should be a number)'
            } else {
                return true
            };
        }
    },
    {
        type: 'input',
        name: 'managersEmail',
        message: "What is the manager's email?",
        validate: (input) => {
            if (!input.includes('@') || !input.includes('.co') || input == ''){
              return 'Please enter a valid email address'
            } else {
              return true
            };
        }
    },
    {
        type: 'input',
        name: 'managersOfficeNumber',
        message: "What is the manager's office number?",
        validate: (input) => {
            if (!input){
                return 'Please enter the office number of the manager'
            } else {
                return true
            };
        }
    },
];

const addEmployee = [
    {
        type: 'list',
        name: 'employeeType',
        message: 'Please select an option:',
        choices: ['Add an engineer', 'Add an intern', 'Finish building the team and create the HTML file'],
    },
];

const engineerQuestions = [
    {
        type: 'input',
        name: 'engineersName',
        message: 'What is the name of the engineer?',
        validate: (input) => {
            if (input == ''){
                return 'Please enter the name of the engineer'
            } else {
                return true
            };
        }
    },
    {
        type: 'number',
        name: 'engineersID',
        message: "What is the engineer's ID?",
        validate: (input) => {
            if (!input){
                return 'Please enter the ID of the engineer (this should be a number)'
            }else if(id.id.includes(input)){
                return 'This ID already exists. Please enter the unique ID of the engineer'
            } else {
                return true
            };
        }
    },
    {
        type: 'input',
        name: 'engineersEmail',
        message: "What is the engineer's email?",
        validate: (input) => {
            if (!input.includes('@') || !input.includes('.co') || input == ''){
                return 'Please enter a valid email address'
            } else {
                return true
            };
        }
    }, 
    {
        type: 'input',
        name: 'engineersGithub',
        message: "What is the engineer's GitHub username?",
        validate: (input) => {
            if (input == ''){
                return "Please enter the engineer's GitHub username"
            } else {
                return true
            };
        }
    },      
];


const internQuestions = [
    {
        type: 'input',
        name: 'internsName',
        message: 'What is the name of the intern?',
        validate: (input) => {
            if (input == ''){
                return 'Please enter the name of the intern'
            } else {
                return true
            };
        }
    },
    {
        type: 'number',
        name: 'internsID',
        message: "What is the intern's ID?",
        validate: (input) => {
            if (!input){
                return 'Please enter the ID of the intern (this should be a number)'
            }else if(id.id.includes(input)){
                return 'This ID already exists. Please enter the unique ID of the intern'
            }else {
                return true
            };
        }
    },
    {
        type: 'input',
        name: 'internsEmail',
        message: "What is the intern's email?",
        validate: (input) => {
            if (!input.includes('@') || !input.includes('.co') || input == ''){
                return 'Please enter a valid email address'
            } else {
                return true
            };
        }
    },    
    {
        type: 'input',
        name: 'internsSchool',
        message: "What is the intern's school?",
        validate: (input) => {
            if (input == ''){
                return "Please enter the intern's school"
            } else {
                return true
            };
        }
    },   
];

module.exports.managerQuestions = managerQuestions;
module.exports.addEmployee = addEmployee;
module.exports.engineerQuestions = engineerQuestions;
module.exports.internQuestions = internQuestions;


