const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const generateHTML = require('./src/card');

let teamArr ={
  manager:"",
  engineers:[],
  interns:[],
};


function finishTeam(){

  inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your name?',
      name: 'name',
    },
    {
      type: 'input',
      message: 'What is ID?',
      name: 'id',
    },
    {
      type: "input",
      name: "email",
      message: "What is your email adress?"
   },
   {
      type: "input",
      name: "officeNumber",
      message: "What is your office number?"
   },
  ])

  .then((response) => {
    teamArr.manager = new Manager(response.name, response.id, response.email, response.officeNumber);

    nextTeamEmployee()
  });
}

    
function nextTeamEmployee(){
      inquirer
      .prompt([
        {
          type: "list",
          choices: ['Intern', 'Engineer', 'All set'],
          name: "nextTeamEmployee",
          message: "Whai is position?",
        }
      ])
      .then((response) => {
        if (response.nextTeamEmployee === "Engineer"){ nextTeamEngineer()
        }else if(response.nextTeamEmployee === "Intern"){ nextTeamIntern()
        }else{
        finished()
        }
      });
    }

function nextTeamEngineer(){
    inquirer
    .prompt([
      {
        type: 'input',
        message: 'What is your name?',
        name: 'name',
      },
      {
        type: 'input',
        message: 'What is ID?',
        name: 'id',
      },
      {
        type: "input",
        name: "email",
        message: "What is your email adress?"
     },
     {
        type: "input",
        name: "gitHub",
        message: "What is your gitHub?"
   },
    ])
    .then((response) => {
      const employee = new Engineer(response.name, response.position, response.id, response.email, response.gitHub, 'Engineer');

      teamArr.engineers.push(employee);

      nextTeamEmployee()
    })
  }

function nextTeamIntern(){
  inquirer
  .prompt ([
    {
      type: 'input',
      message: 'What is your name?',
      name: 'name',
    },
    {
      type: 'input',
      message: 'What is ID?',
      name: 'id',
    },
    {
      type: "input",
      name: "email",
      message: "What is your email adress?"
   },
   {
      type: "input",
      name: "school",
      message: "What is your school?"
 },
  ])
  .then((response) => {
    const employee = new Intern(response.name, response.id, response.email, response.school, 'Intern');
    teamArr.interns.push(employee);

    nextTeamEmployee();
  });
}
  

      
function finished() {
    const newCard = generateHTML;
    fs.writeFile("./index.html", newCard(teamArr), 
    (err) => err ? console.log(err) : console.log("All set"));
}
  
finishTeam();