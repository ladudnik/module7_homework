/* Задание 4.

Реализовать следующее консольное приложение подобно примеру, который разбирался в видео.
Реализуйте его на прототипах.
Определить иерархию электроприборов. Включить некоторые в розетку. Посчитать потребляемую мощность.
Таких приборов должно быть, как минимум, два (например, настольная лампа и компьютер).
Выбрав прибор, подумайте, какими свойствами он обладает.*/

const ElectricalAppliance = {
    property: 'electrical',
    on: false
};

function  Appliance(name, current, voltage){
    this.name = name,
        this.current = current,
        this.voltage = voltage
    this.getPower = function(){
        if (this.on == true)  {
            console.log('Power of ' + name +' is ' + current*voltage + 'W');
        }
    }
}

Appliance.prototype = ElectricalAppliance;

const computer = new Appliance('computer', 1.5, 220);
const lamp = new Appliance('lamp', 1, 220);
lamp.on = true;

console.log(computer);
computer.getPower();

console.log(lamp);
lamp.getPower();