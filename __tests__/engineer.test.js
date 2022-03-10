const Engineer = require('../lib/engineer')

const name = 'some name';
const id = 1234;
const email = 'email@some.com';
const position = 'position';
const gitHub = 'gitHub.com/username'

test("should take input for engineer class to create card", () => {

        const engineer = new Engineer(name, id, email, gitHub, position);

        expect(engineer.name).toBe(name);
        expect(engineer.id).toBe(1234);
        expect(engineer.email).toBe("email@some.com");
        expect(engineer.position).toBe("position");
        expect(engineer.gitHub).toBe("gitHub.com/username")
    })

test("test function to get input",() =>{
    
})    