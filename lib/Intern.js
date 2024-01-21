// TODO: Write code to define and export the Intern class.  
//HINT: This class should inherit from Employee.
/*
The other three classes will extend Employee.

In addition to Employee's properties and methods, Intern will also have the following:
    - school
    - getSchool()
    - getRole()—overridden to return 'Intern'
*/

class Intern extends Employee {
    constructor(school){
        super(name, id, email) //add in values here istead of (name, id, email)
        this.school = school;
    };

    getSchool() {

    };

    getRole() {
        // overridden to return 'Intern'
    };
};

// module.exports = '';