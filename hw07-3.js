/*

Задание 3.

Написать функцию, которая создает пустой объект,
но без прототипа.*/

const obj = function newObject() {
    let emptyObject = Object.create(null);
    console.log(emptyObject);

}

newObject();