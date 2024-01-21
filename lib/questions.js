let id = require('../index.js');

// console.log(id);

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
                return 'Please enter the ID of the manager'
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
        message: 'Which type of team member would you like to add?',
        choices: ['Engineer', 'Intern', "I don't want to add any more team members"],
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
            if (input == ''){
                return 'Please enter the ID of the engineer'
            // }else if(id.includes(input)){
            //     return 'This ID already exists. Please enter the unique ID of the engineer' //TypeError: id.includes is not a function
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
                return 'Please enter the engineers GitHub username'
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
            if (input == ''){
                return 'Please enter the ID of the intern'
            // }else if(id.includes(input)){
            //     return 'This ID already exists. Please enter the unique ID of the intern'
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
                return 'Please enter the interns school'
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


