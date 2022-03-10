const Employee = require('../lib/employee')

const name = 'some name';
const id = 1234;
const email = 'email@some.com';
const position = 'position';
   

test("getEmail", () => {
        const employee = new Employee(name, id, email, position);
        expect(employee.getEmail()).toBe(email)
    })
