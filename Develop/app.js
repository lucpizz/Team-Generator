/*
    Variables for the various employees and services used to generate the Team.html site
*/

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

/*
    Inquirer is used to prompt the user a list of questoins to create the Team.html site

    Switch is used to parse, store, and push the answers/responses to the html render function
    to generate the webpage 
*/

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

// addEmployee is called to start the program to capture input and generate Team html webpage

addEmployee();
