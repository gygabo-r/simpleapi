export class Person {
    constructor(firstName, lastName, dateOfBirth) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dateOfBirth = dateOfBirth;
    }
}

export const persons = Array.from({length: 5}, (v, i) => new Person(
    `First Name ${i+1}`,
    `Last Name ${i+1}`,
    new Date(Date.parse(`197${i+1}-${i+1}-${i+1}`)).toISOString()
));