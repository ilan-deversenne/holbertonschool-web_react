function printTeacher(firstName: string, lastName: string) {
  console.log(`${firstName.split('')[0]}. ${lastName}`);
}

printTeacher("John", "Doe");

interface StudentConstructor {
    new(firstName: string, lastName: string): StudentClass;
}
interface StudentInterface {
    firstName: string;
    lastName: string;
    workOnHomework(): string;
    displayName(): string;
}

class StudentClass implements StudentInterface {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomework(): string {
        return 'Currently working';
    }
    displayName(): string {
        return this.firstName;
    }
}
