const Employee = require("./employee");
class Intern extends Employee{
    constructor(name, id, email, school, position){
        super(name, id, email);
        this.school = school
        this.position = position
    }
    getSchool(){
        return this.school
    }
    getPosition(){
        return "Intern"
    }
}

module.exports = Intern