/*
Задание 2.

Написать функцию, которая принимает в качестве аргументов строку
и объект, а затем проверяет есть ли у переданного объекта свойство с данным именем.
Функция должна возвращать true или false.*/

const user1 = {
    name: 'Andrei',
    surname: 'Ivanov',
    age: 18,
    position: 'developer',
};
let str1 = "gxfgfg";

function proverka(str, user) {

    let count = 0;
    for (let key in user) {
        if (key == str) {
            count++;
        }
    }
    if (count > 0) {console.log(true)}
    else {console.log(false)}
}

proverka(str1, user1);