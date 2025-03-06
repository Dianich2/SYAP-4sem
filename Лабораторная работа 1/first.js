"use strict";
function createPhoneNumber(mas) {
    if (mas.length != 10) {
        console.log("Некорректные ввод. Функция должна принимать массив из 10 целых чисел");
        return "null";
    }
    let a = `(${mas.slice(0, 3).join('')}) ${mas.slice(3, 6).join('')}-${mas.slice(6, 10).join('')}`;
    return a;
}
console.log("Задание 1");
let b = createPhoneNumber([1, 2, 3, 2, 5, 2, 2, 2, 4, 2]);
console.log("Полученный телефон");
console.log(b);
//////////////////////////////////////////////////////////////
class Challenge {
    static solution(number) {
        let sum = 0;
        let mas2 = new Array();
        for (let i = 3; i < number; i++) {
            if (i % 3 == 0 || i % 5 == 0) {
                if (!mas2.includes(i)) {
                    mas2.push(i);
                }
            }
        }
        for (let i = 0; i < mas2.length; i++) {
            sum += mas2[i];
        }
        return sum;
    }
}
let buf = new Challenge();
console.log("Задание 2");
let num = 16;
console.log(`Сумма чисел, которые кратны или 3, или 5, и меньше ${num}`);
console.log(Challenge.solution(num));
//////////////////////////////////////////////////////////////////////////////////
console.log("Задание 3");
let mas3 = [1, 2, 3, 4, 5, 6, 7];
let k = 3;
console.log("Текущий массив");
console.log(mas3.join(" "));
for (let i = 0; i < k; i++) {
    mas3 = [mas3[mas3.length - 1], ...mas3];
    mas3.pop();
}
console.log(`Массив после сдвига на ${k} вправо`);
console.log(mas3.join(" "));
///////////////////////////////////////////////////////////////////////////////////
console.log("Задание 4");
let mas4 = [1, 3, 5, 7, 9];
console.log("Первый массив");
console.log(mas4.join(" "));
let mas5 = [2, 4, 6, 8, 10];
console.log("Второй массив");
console.log(mas5.join(" "));
let mas6 = [...mas4, ...mas5];
mas6.sort((a, b) => a - b);
console.log("Объединение 2 массивов и сортировка полученного");
console.log(mas6.join(" "));
console.log("Медиана полученного массива = ");
if (mas6.length % 2 == 0) {
    console.log((mas6[mas6.length / 2] + mas6[mas6.length / 2 - 1]) / 2);
}
else {
    console.log(mas6[(mas6.length - 1) / 2]);
}
