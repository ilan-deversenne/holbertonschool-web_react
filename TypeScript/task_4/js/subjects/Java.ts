namespace Subjects {
    export interface Teacher {
        experienceTeachingJava?: number;
    }

    class Java extends Subject {
        getRequirements(): string {
            return 'Here is the list of requirements for Java';
        }
        getAvailableTeacher(): string {
            return this.teacher?.experienceTeachingJava ? `Available Teacher: ${this.teacher}` : 'No available teacher';
        }
    }
}
