// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
/*
The other three classes will extend Employee.

In addition to Employee's properties and methods, Engineer will also have the following:
    - github—GitHub username
    - getGithub()
    - getRole()—overridden to return 'Engineer'
*/

/*
class Employee {
    constructor(name, id, email)
    */



const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(github){
        super(name, id, email) //add in values here istead of (name, id, email)
        this.github = github;
    }

    getGithub() {

    };
    
    getRole() {
        // overridden to return 'Engineer'
    };
}

module.exports = Engineer;