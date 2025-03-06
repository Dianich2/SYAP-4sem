"use strict";
;
let students = [
    { id: 1, name: 'Vasya', group: 10 },
    { id: 2, name: 'Ivan', group: 11 },
    { id: 3, name: 'Masha', group: 12 },
    { id: 4, name: 'Petya', group: 10 },
    { id: 5, name: 'Kira', group: 11 }
];
let car = {}; //объект создан!
car.manufacturer = "manufacturer";
car.model = 'model';
const car1 = {}; //объект создан!
car1.manufacturer = "manufacturer";
car1.model = 'model';
const car2 = {}; //объект создан!
car2.manufacturer = "manufacturer";
car2.model = 'model';
const arrayCars = [{
        cars: [car1, car2]
    }];
const group = {
    students: [
        { id: 1, name: "Петя", group: 6, marks: [
                { subject: "Математика", mark: 7, done: true },
                { subject: "Физика", mark: 4, done: true }
            ] },
        { id: 2, name: "Вася", group: 6, marks: [
                { subject: "Математика", mark: 2, done: false },
                { subject: "Физика", mark: 5, done: true }
            ] },
        { id: 3, name: "Миша", group: 7, marks: [
                { subject: "Математика", mark: 9, done: true },
                { subject: "Физика", mark: 7, done: true }
            ] },
    ],
    studentsFilter: function (group) {
        return this.students.filter(stud => stud.group == group);
    },
    marksFilter: function (mark) {
        return this.students.filter(stud => stud.marks.some(studmarks => studmarks.mark == mark));
    },
    deleteStudent: function (id) {
        this.students = this.students.filter(stud => stud.id != id);
    },
    mark: 5,
    group: 7,
};
console.log(group.studentsFilter(7));
group.deleteStudent(2);
console.log(group.students);
