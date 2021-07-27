//require Engineer
const Engineer = require('../Employees/Engineer');

describe("Engineer", () => {
    //create test on engineer class
    test('Creates an engineer object using constructor', () => {
            const engineer = new Engineer();


            expect("name" in engineer).toEqual(true);
            expect("id" in engineer).toEqual(true);
            expect("email" in engineer).toEqual(true);
            expect("github" in engineer).toEqual(true);
        })
        //test to see if you can set github using our constructor
    test('Checks if you can set github', () => {
            const github = "myGithub";
            const engineer = new Engineer("name", 123, "email", github);

            expect(engineer.github).toEqual(github);
        })
        //test to see if getRole() returns "Engineer"
    test('Checks if you can get role from getRole()', () => {
            const engineer = new Engineer('name', 1234, "email", "myGithub");

            expect(engineer.getRole()).toEqual("Engineer");
        })
        //test to see if getGithub() returns github test value
    test('Checks if you can get role from getRole()', () => {
        const myGithub = "myGithub"
        const engineer = new Engineer('name', 1234, "email", myGithub);

        expect(engineer.getGithub()).toEqual(myGithub);
    })
})