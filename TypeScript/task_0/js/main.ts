interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}
let studentsList: Array<Student> = [];

const student1: Student = {
    firstName: 'Léon',
    lastName: 'Maillet',
    age: 24,
    location: 'Bouvier-la-Forêt'
};
const student2: Student = {
    firstName: 'Paul-Marc',
    lastName: 'Chauvet',
    age: 47,
    location: 'Boucher-sur-Maillard'
};
studentsList.push(student1, student2);

document.addEventListener('DOMContentLoaded', () => {
    let table: HTMLTableElement = document.createElement('table');

    let head: HTMLTableRowElement = document.createElement('tr');
    let fname: HTMLTableCellElement = document.createElement('th');
    let lname: HTMLTableCellElement = document.createElement('th');
    let _age: HTMLTableCellElement = document.createElement('th');
    let loca: HTMLTableCellElement = document.createElement('th');

    table.id = 'my-table';

    fname.innerText = 'First name';
    lname.innerText = 'Last name';
    _age.innerText = 'Age';
    loca.innerText = 'Location';

    head.appendChild(fname);
    head.appendChild(lname);
    head.appendChild(_age);
    head.appendChild(loca);
    table.appendChild(head);

    function addStudent(student: Student) {
        let content: HTMLTableRowElement = document.createElement('tr');
        let fname: HTMLTableCellElement = document.createElement('th');
        let lname: HTMLTableCellElement = document.createElement('th');
        let _age: HTMLTableCellElement = document.createElement('th');
        let loca: HTMLTableCellElement = document.createElement('th');

        fname.innerText = student.firstName;
        lname.innerText = student.lastName;
        _age.innerText = student.age.toString();
        loca.innerText = student.location;

        content.appendChild(fname);
        content.appendChild(lname);
        content.appendChild(_age);
        content.appendChild(loca);
        table.appendChild(content);
    }

    studentsList.forEach(addStudent);
    document.body.appendChild(table);
});
