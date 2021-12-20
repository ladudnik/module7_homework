/* 1. Написать функцию, которая принимает в качестве аргумента
объект и выводит в консоль все ключи и значения только
собственных свойств. Данная функция не должна возвращать значение.*/

const obj = {
    a:1,
    b:2,
    c:"abc"
}
const ownObj = Object.create(obj);
ownObj.d = 4;

const logOwnKey = ownObj => {
    for (let key in ownObj) {
        if (ownObj.hasOwnProperty(key)) {
            console.log(key +': ' + ownObj[key]);
        }
    }
}
logOwnKey(ownObj)