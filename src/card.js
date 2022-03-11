const fs = require('fs');

const generateHTML = ({manager, engineers, interns}) =>{

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

  <div class="card-group justify-content-center">
   <div class="card d-flex flex-row justify-content-center flex-wrap">

   <div class="card" style="width: 18rem;">
   <div class="card-header">
    <h2 class="card-title">${manager.getName()}</h2>
    <h2 class="card-title">Manager</h2>
   </div> 

   <div class="card-body">
    <ul class="list-group m-3">
    <li class="list-group-item">ID: ${manager.getId()}</li>
    <li class="list-group-item">Email: <a href="mailto: ${manager.getEmail()}">${manager.getEmail()}</a></li>
    <li class="list-group-item">Office number: ${manager.getOfficeNumber()}</li>
    </ul>
   </div>
   </div>

   ${
    engineers.map(element => {
        return renderEngineer(element)
    }).join("")
  }    
  
  ${
    interns.map(element => {
        return renderIntern(element)
    }).join("")
  }
  </div>
</div>
  
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>

  </body>
  </html>`;

};

const renderEngineer = (engineer) =>{
  return `
  <div class="card" style="width: 18rem;">
  <div class="card-header">
   <h2 class="card-title">${engineer.getName()}</h2>
   <h2 class="card-title">Engineer</h2>
  </div> 

<div class="card-body">
 <ul class="list-group m-3">
   <li class="list-group-item">ID: ${engineer.getId()}</li>
   <li class="list-group-item">Email: <a href="mailto: ${engineer.getEmail()}">${engineer.getEmail()}</a></li>
   <li class="list-group-item">GitHub: <a href="http//github.com/${engineer.getGitHub()}">${engineer.getGitHub()}</a></li>
 </ul>
</div>
</div>
  `
};

const renderIntern = (intern) => {
  return `
  <div class="card" style="width: 18rem;">
     <div class="card-header">
      <h2 class="card-title">${intern.getName()}</h2>
      <h2 class="card-title">Intern</h2>
     </div> 

   <div class="card-body">
    <ul class="list-group m-3">
      <li class="list-group-item">ID: ${intern.getId()}</li>
      <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
      <li class="list-group-item">School: ${intern.getSchool()}</li>
    </ul>
   </div>
  </div>
  `
};

  module.exports = generateHTML;