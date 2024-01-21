
const managerQuestions = [
    {
        type: 'input',
        name: 'managersName',
        message: 'What is the name of the Manager?',
        validate: (input) => {
            if (input == ''){
                return 'Please enter the name of the Manager'
            } else {
                return true
            };
        }
    },
    {
        type: 'number',
        name: 'managersID',
        message: 'What is the Managers ID?',
        validate: (input) => {
            if (!input){
                return 'Please enter the ID of the Manager'
            } else {
                return true
            };
        }
    },
    {
        type: 'input',
        name: 'managersEmail',
        message: 'What is the Managers email?',
        validate: (input) => {
            if (!input.includes('@') || !input.includes('.co') || input == ''){
              return 'Please enter a valid email address'
            } else {
              return true
            };
        }
    },
    {
        type: 'number',
        name: 'managersOfficeNumber',
        message: 'What is the Managers office number?',
        validate: (input) => {
            if (!input){
                return 'Please enter the office number of the Manager'
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
        // validate: (input) => {
        //     if (input == 'Engineer'){
        //         engineer ();
        //         return 'Please enter the office number of the Manager'
        //     } else if (input == 'Intern') {
        //         intern ();
        //         return true
        //     };
        // }
    },
];

const engineerQuestions = [
    {
        type: 'input',
        name: 'EngineersName',
        message: 'What is the name of the Engineer?',
        validate: (input) => {
            if (input == ''){
                return 'Please enter the name of the Engineer'
            } else {
                return true
            };
        }
    },
    {
        type: 'number',
        name: 'engineersID',
        message: 'What is the Engineers ID?',
        validate: (input) => {
            if (input == ''){
                return 'Please enter the ID of the Engineer'
            } else {
                return true
            };
        }
    },
    {
        type: 'input',
        name: 'engineersEmail',
        message: 'What is the Engineers email?',
        validate: (input) => {
            if (!input.includes('@') || !input.includes('.co') || input == ''){
                return 'Please enter a valid email address'
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
        message: 'What is the name of the Intern?',
        validate: (input) => {
            if (input == ''){
                return 'Please enter the name of the Intern'
            } else {
                return true
            };
        }
    },
    {
        type: 'number',
        name: 'internsID',
        message: 'What is the Interns ID?',
        validate: (input) => {
            if (input == ''){
                return 'Please enter the ID of the Intern'
            } else {
                return true
            };
        }
    },
    {
        type: 'input',
        name: 'internsEmail',
        message: 'What is the Interns email?',
        validate: (input) => {
            if (!input.includes('@') || !input.includes('.co') || input == ''){
                return 'Please enter a valid email address'
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


