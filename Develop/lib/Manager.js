// Manager class that extends the employee class to get the requireed information

const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }
  getOfficeNumber() {
    return this.officeNumber;
  }
  getRole() {
    return `Manager`;
  }
}

//this set of code is to test the test files
//const e = new Manager("Luca", 1, "lucpizz@gmail.com", 101);
//console.log(e);

module.exports = Manager;
