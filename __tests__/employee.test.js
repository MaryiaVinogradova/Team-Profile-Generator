const Employee = require('../lib/Employee')
const name = 'some name';
const id = 1234;
const email = 'email@some.com';
const position = 'position';

    test("should take input for employee class to create card", () => {
        const employee = new Employee(name, id, email, position);

        
        expect(employee.name).toBe(name);

        expect(employee.id).toBe(1234);
        expect(employee.email).toBe("email@some.com");
        expect(employee.position).toBe("position");
    })
