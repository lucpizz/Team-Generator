// Engineer clas that extends Employee class to get the required information

const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }
  getGithub() {
    return this.github;
  }
  getRole() {
    return `Engineer`;
  }
}

//this set of code is to test the test files
//const e = new Engineer("Luca", 1, "lucpizz@gmail.com", "lucpizz");
//console.log(e);

module.exports = Engineer;
