// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
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

const e = new Manager("Luca", 1, "lucpizz@gmail.com", 101);
console.log(e);

module.exports = Manager;
