// Employee class to get the required information

class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }

  getName() {
    return this.name;
  }

  getId() {
    return this.id;
  }

  getEmail() {
    return this.email;
  }

  getRole() {
    return `Employee`;
  }
}

//this set of code is to test the test files
//const e = new Employee("Luca", 1, "lucpizz@gmail.com");
//console.log(e);

module.exports = Employee;
