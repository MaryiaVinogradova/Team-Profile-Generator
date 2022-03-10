const fs = require('fs');

// const Manager = require('./lib/manager');
// const Engineer = require('./lib/employee');
// const Intern = require('./lib/intern');


const renderCard = (teamArr) =>{
  let cardHTML = ""
  let inputInfo = ""

  for (let i=0; i<teamArr.length; i++){
    const element = teamArr[i];

    let position = element.position
    

    if (element.position === "Manager") {
      inputInfo = `Office number: ${element.officeNumber()}`
      position = `Position: ${element.getPosition()}`
    }else if (element.position === "Engineer"){
      inputInfo = `GitHub: <a href="http//github.com/${element.getGitHub()}">${element.getGitHub()}</a>`
    }else if(element.position === 'Intern'){
      inputInfo = `School: ${element.getSchool()}`
      position = `Position: ${element.getPosition()}`
    }
  
   console.log("hello" + inputInfo);
    cardHTML += 
  `<div class="card" style="width: 18rem;">
     <div class="card-header">
      <h2 class="card-title">${element.getName()}</h2>
      <h2 class="card-title">${element.getPosition()}</h2>
     </div> 

   <div class="card-body">
    <ul class="list-group m-3">
      <li class="list-group-item">ID: ${element.getId()}</li>
      <li class="list-group-item">Email: ${element.getEmail()}</li>
      <li class="list-group-item">${inputInfo}</li>
    </ul>
   </div>
  </div>
  `
  }
  return cardHTML
}

const generateHTML = (teamArr) =>{

  
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" href="./dist/style.css">

  </head>
  
  
  <body>
  
  <header class="text-center">Your team</header>

  <div card-group justify-content-center">
   <div class="card d-flex flex-row justify-content-center flex-wrap">
      ${renderCard(teamArr)}
   </div>  
  </div>   
  
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>

  </body>
  </html>`

}

  module.exports = generateHTML;