const { TestWatcher } = require('jest');
const Engineer = require('../lib/engineer')

const name = 'some name';
const position = 'position';
const id = 1234;
const email = 'email@some.com';
const gitHub = 'gitHub.com/username';

test("should take input for engineer class to create card", ()=>{
    const engineer = new Engineer(name, position, id, email, gitHub);

    expect(engineer.name).toBe(name);
    expect(engineer.position).toBe("position");
    expect(engineer.id).toBe(1234);
    expect(engineer.email).toBe("email@some.com");
    expect(engineer.gitHub).toBe("gitHub.com/username")

})