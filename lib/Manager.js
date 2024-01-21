// TODO: Write code to define and export the Manager class. 
//HINT: This class should inherit from Employee.

/*
The other three classes will extend Employee.

In addition to Employee's properties and methods, Manager will also have the following:
    - officeNumber
    - getRole()—overridden to return 'Manager'
*/

class Manager extends Employee {
    constructor(officeNumber){
        super(name, id, email) //add in values here istead of (name, id, email)
        this.officeNumber = officeNumber;
    };

    getRole() {
        // overridden to return 'Manager'
    };
}

// module.exports = '';