const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber){
        super(name, id, email) //add in values here istead of (name, id, email)
        this.officeNumber = officeNumber;
    };

    getOfficeNumber() {
        this.officeNumber;
    }

    getRole() {
        return 'Manager';
    };
}

module.exports = Manager;