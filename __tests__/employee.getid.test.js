const Employee = require('../lib/employee')

const name = 'some name';
const id = 1234;
const email = 'email@some.com';
const position = 'position';
   

test("getId", () => {
        const employee = new Employee(name, id, email, position);
        expect(employee.getId()).toBe(1234)
    })
