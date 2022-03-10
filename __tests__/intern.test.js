const Intern = require('../lib/intern')

const name = 'some name';
const id = 1234;
const email = 'email@some.com';
const school = 'school';

test("should take input for intern class to create card", () => {
        const intern = new Intern(name, id, email, school);

        expect(intern.name).toBe(name);
        expect(intern.id).toBe(1234);
        expect(intern.email).toBe("email@some.com");
        expect(intern.school).toBe("school");
    })