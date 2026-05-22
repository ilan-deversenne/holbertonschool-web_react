interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
}
interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
}

class Director implements DirectorInterface {

    workFromHome(): string {
        return 'Working from home';
    }
    getCoffeeBreak(): string {
        return 'Getting a coffee break';
    }
    workDirectorTasks(): string {
        return 'Getting to director tasks';
    }
}
class Teacher implements TeacherInterface {

    workFromHome(): string {
        return 'Cannot work from home';
    }
    getCoffeeBreak(): string {
        return 'Cannot have a break';
    }
    workTeacherTasks(): string {
        return 'Getting to work';
    }
}

function createEmployee(salary: number | string): Teacher | Director {
    if (typeof salary === 'string' ? Number(salary) : salary < 500) return new Teacher();
    return new Director();
}

function isDirector(employee: any): boolean {
    return 'workDirectorTasks' in employee;
}
function executeWork(employee: any) {
    const msg: string = isDirector(employee) ? employee.workDirectorTasks() : employee.workTeacherTasks();
    console.log(msg);
}

executeWork(createEmployee(200));
executeWork(createEmployee(1000));
