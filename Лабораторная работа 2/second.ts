interface IStudent{
    id: number,
    name: string,
    group: number 
};

type studentArray = IStudent[];

let students:studentArray = [
    {id: 1, name: 'Vasya', group: 10}, 
    {id: 2, name: 'Ivan', group: 11},
    {id: 3, name: 'Masha', group: 12},
    {id: 4, name: 'Petya', group: 10},
    {id: 5, name: 'Kira', group: 11}
];
///////////////////////////////////////

type CarsType = {
    manufacturer?: string,
    model?: string
};

let car: CarsType = {}; //объект создан!
car.manufacturer = "manufacturer";
car.model = 'model';

/////////////////////////////////////

type ArrayCarsType = {
    cars: Array<CarsType>
};

const car1: CarsType = {}; //объект создан!
car1.manufacturer = "manufacturer";
car1.model = 'model';

const car2: CarsType = {}; //объект создан!
car2.manufacturer = "manufacturer";
car2.model = 'model';

const arrayCars: Array<ArrayCarsType> = [{
    cars: [car1, car2]
}];

///////////////////////////////////


type MarkFilterType = 1|2|3|4|5|6|7|8|9|10;
type DoneType = true|false;
type GroupFilterType = 1|2|3|4|5|6|7|8|9|10|11|12;

type MarkType = {
    subject: string,
    mark: MarkFilterType, // может принимать значения от 1 до 10
    done: DoneType,
}
type StudentType = {
    id: number,
    name: string,
    group: GroupFilterType, // может принимать значения от 1 до 12
    marks: Array<MarkType>,
}



type GroupType = {
    students: Array<StudentType>// массив студентов типа StudentType
    studentsFilter: (group: number) => Array<StudentType>, // фильтр по группе
    marksFilter: (mark: number) => Array<StudentType>, // фильтр по  оценке
    deleteStudent: (id: number) => void, // удалить студента по id из  исходного массива
    mark: MarkFilterType,
    group: GroupFilterType,
}

const group: GroupType = {
    students:[
        {id: 1, name: "Петя", group: 6, marks:[
            {subject: "Математика", mark: 7, done:true},
            {subject: "Физика", mark: 4, done:true}
        ]},
        {id: 2, name: "Вася", group: 6, marks:[
            {subject: "Математика", mark: 2, done:false},
            {subject: "Физика", mark: 5, done:true}
        ]},
        {id: 3, name: "Миша", group: 7, marks:[
            {subject: "Математика", mark: 9, done:true},
            {subject: "Физика", mark: 7, done:true}
        ]},
    ],
    studentsFilter:function(group:number) {
        return this.students.filter(stud => stud.group == group);
    },

    marksFilter:function(mark:number) {
        return this.students.filter(stud => stud.marks.some(studmarks => studmarks.mark == mark));
    },

    deleteStudent:function(id:number): void{
        this.students = this.students.filter(stud => stud.id != id);
    },
    mark: 5,
    group: 7,
}

console.log(group.studentsFilter(7));
group.deleteStudent(2);
console.log(group.students);