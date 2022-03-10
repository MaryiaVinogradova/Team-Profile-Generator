const Manager = require('../lib/manager')

const name = 'some name';
const id = 1234;
const email = 'email@some.com';
const position = 'position';
const officeNumber = 12345678;

test("should take input for manager class to create card", () => {
        const manager = new Manager(name, id, email, position, officeNumber);

        expect(manager.name).toBe(name);
        expect(manager.id).toBe(1234);
        expect(manager.email).toBe("email@some.com");
        expect(manager.position).toBe("position");
        expect(manager.officeNumber).toBe(12345678);
    })