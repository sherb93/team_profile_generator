const Employee = require("./Employee");

class Engineer extends Employee {
    constructor (name, id, email) {
        super (name, id, email) //import values to the employee properties
        this.officeNumber = Math.floor(Math.random() * 100);
    }

    getRole() {

    }
};

module.exports = Engineer;