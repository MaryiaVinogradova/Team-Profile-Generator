const Employee = require("./employee");
class Manager extends Employee {
    constructor(name, id, email, position, officeNumber){
        super(name, id, email)
        this.position = position
        this.officeNumber = officeNumber
    }
    getPosition(){
        return "Manager"
    }
    getOfficeNumber(){
        return this.officeNumber
    }
}
module.exports = Manager