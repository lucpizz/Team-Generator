const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const addEmployee = (employees = []) => {
  console.log("Welcome to the Team Generator Program!");
  console.table(employees);
  inquirer
    .prompt([
      {
        name: "title",
        type: "list",
        message: "What is your role?",
        choices: ["Manager", "Engineer", "Intern"],
      },
      {
        name: "name",
        type: "input",
        message: "Please enter your name: ",
      },
      {
        name: "id",
        type: "input",
        message: "Please enter your ID number: ",
      },
      {
        name: "email",
        type: "input",
        message: "Please enter your email address: ",
      },
      {
        name: "officeNumber",
        type: "input",
        message: "Please enter your office number: ",
        when: (answers) => answers.title === `Manager`,
      },
      {
        name: "github",
        type: "input",
        message: "Please enter your GitHub username: ",
        when: (answers) => answers.title === `Engineer`,
      },
      {
        name: "school",
        type: "input",
        message: "Please enter the name of your school: ",
        when: (answers) => answers.title === `Intern`,
      },
      {
        name: "continue",
        type: "confirm",
        message: "Would you like to add another employee?",
      },
    ])
    .then((answers) => {
      console.log(answers);
      switch (answers.title) {
        case "Manager":
          employees.push(
            new Manager(
              answers.name,
              answers.id,
              answers.email,
              answers.officeNumber
            )
          );
          break;

        case "Engineer":
          employees.push(
            new Engineer(
              answers.name,
              answers.id,
              answers.email,
              answers.github
            )
          );
          break;
        case "Intern":
          employees.push(
            new Intern(answers.name, answers.id, answers.email, answers.school)
          );
          break;
        default:
          return true;
      }
      if (answers.continue) {
        addEmployee(employees);
      } else {
        fs.writeFile(outputPath, render(employees), () => {
          console.log(`I put a file in ${outputPath}`);
        });
      }
    });
};

addEmployee();

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
