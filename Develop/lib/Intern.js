// Intern class that extends the Employee class to get the required information

const Employee = require("./Employee");

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }
  getSchool() {
    return this.school;
  }
  getRole() {
    return `Intern`;
  }
}

//this set of code is to test the test files
//const e = new Intern("Luca", 1, "lucpizz@gmail.com", "UCONN");
//console.log(e);

module.exports = Intern;
