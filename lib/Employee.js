// TODO: Write code to define and export the Employee class
/*
The first class is an Employee parent class with the following properties and methods:
name
    - id
    - email
    - getName()
    - getId()
    - getEmail()
    - getRole()—returns 'Employee'
*/

class Employee {
    constructor(name, id, email){
        this.name = name;
        this.id = id; 
        this.email = email;
    };

    getName() {
        console.log(this.name);
        //return
    };

    getId() {
        console.log(this.id);
        //return
    };

    getEmail() {
        console.log(this.email);
        //return
    };

    getRole(){
        return 'Employee';
    };
};

module.exports = '';