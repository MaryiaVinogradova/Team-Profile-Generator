const Employee = require("./employee");
class Manager extends Employee {
    constructor(name, id, email, position, officeNumber){
        super(name, id, email)
        this.officeNumber = officeNumber
        this.position = position
    }
    getOfficeNumber(){
        return this.officeNumber
    }
    getPosition(){
        return "Manager"
    }
}
module.exports = Manager