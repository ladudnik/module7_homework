/* Задание 5 (из 4, но с классами).

Реализовать следующее консольное приложение подобно примеру, который разбирался в видео.
Реализуйте его на прототипах.
Определить иерархию электроприборов. Включить некоторые в розетку. Посчитать потребляемую мощность.
Таких приборов должно быть, как минимум, два (например, настольная лампа и компьютер).
Выбрав прибор, подумайте, какими свойствами он обладает.*/

class ElectricalAppliance  {
    constructor(){
        this.property = 'electrical';
        this.on = false;
    }
};

class Appliance extends ElectricalAppliance {
    constructor(name, current, voltage, property, on){
        super(property);
        super(on);
        this.name = name;
        this.current = current;
        this.voltage = voltage;
    }
    getPower() {
        if (this.on === true)  {
            console.log('Power of '+ this.name +' is ' + this.current*this.voltage+' W');
        }
    }
}

const computer = new Appliance('computer', 1.5, 220);
const lamp = new Appliance('lamp', 1, 220);
lamp.on = true;


console.log(computer);
computer.getPower();

console.log(lamp);
lamp.getPower();
