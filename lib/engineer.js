const Employee = require("./employee")
class Engineer extends Employee {
    constructor (name, position, id, email, gitHub){
        super(name,id, email)
        this.gitHub = gitHub
        this.position = position
    }

    getGitHub(){
        return this.gitHub
    }
    getPosition(){
        return "Engineer"
    }
}

module.exports = Engineer;