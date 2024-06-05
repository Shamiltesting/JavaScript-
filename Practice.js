/*Практика
Задача 1: Необхідно написати програму яка буде виводити інформацію за умовами при яких число виводитиметься з правильним словом: "рік", "роки" або "років". Тобто. "29 років" чи "4 роки".
Год получать через prompt(). Проверить, что пользователь ввел число и это число не является отрицательным*/

let digitInput = +prompt("Введіть вік");
if (digitInput % 10 === 1) {
    console.log(digitInput + " рік");
} else if (digitInput % 10 == 2 || digitInput % 10 == 3 || digitInput % 10 == 4) {
    console.log(digitInput + " роки");
} else {
    console.log(digitInput + " років");
}



/*Задача 2: Напишите программу, которая будет принимать два значения, первое это единица измерения (километры, часы и килограммы), второе значение это количество, а затем переводить эти значения:
Километры в метры
часа в минуты
Килограммы в граммы
Сделать вывод полученной информации в виде – 10 км это 10000 м. 1 час это 60мин. 1 кг. это 1000 грм.*/

let unit = "километр";
let quantity = 3;

switch (unit) {
    case "километр":
        console.log(quantity + " " + unit + " это " + quantity * 1000 + " метр");
        break;
    case "час": 
        console.log(quantity + " " + unit + " это " + quantity * 60 + " минут");
        break;
    case "килограмм": 
        console.log(quantity + " " + unit + " это " + quantity * 1000 + " грамм");
        break;
        default:
        console.log("Другая еденица измерения");
        }



//Задача 3: Напишите программу на JavaScript, которая принимает число от пользователя и определяет, является ли введенное число четным или нечетным.

let userDigit = 701;
if (userDigit % 2 === 0) {
    console.log("Чиcло " + userDigit + " - парное");
} else {
    console.log("Чиcло " + userDigit + " - непарное");
}



/*Задача 4: Калькулятор скидки
Создайте программу, которая запрашивает у пользователя сумму покупки и определяет, какая скидка будет применена в зависимости от суммы:
Если сумма меньше или равна 1000 грн, скидка составляет 5%.
Если сумма больше 1000 грн, но меньше или равна 5000 грн, скидка составляет 10%.
Если сумма больше 5000 грн, скидка составляет 15%.
 */

let purchaseAmount = 4999;
let discount = 0;
if (purchaseAmount <= 1000) {
    discount = 0.05;
} else if (purchaseAmount > 1000 && purchaseAmount <= 5000) {
    discount = 0.10;
} else {
    discount = 0.15;
}

let pAWithDiscount = purchaseAmount - (purchaseAmount * discount);
console.log("The purchase amount is: " + purchaseAmount + " UAH");
console.log("The discount equal: " + discount * 100 + "%");
console.log("The amount with discount equal:  " + pAWithDiscount + " UAH");



/*Вам необходимо нарисовать в консоли прямоугольный треугольник из звездочек (или плюсиков, или какого-нибудь другого символа): 
на первой строке – одна звездочка, на второй две, и так далее. Решение оформите в виде функции, куда передаются два параметра: 
высота треугольника и символ, которым его нужно "рисовать".*/

function triangle(hight, symbol) {
    for (i = 0; i <= hight; i++) {
        let space = " ";
        for (j = 0; j <= i; j++) {
            space += symbol;
        }
        console.log(space);
    }
} 
triangle(5, "*")



//Вывести на экран сумму чисел от 1 до 100 включительно, не кратных 3://

var result = 0;
for (var i = 1; i <= 100; i++) {
    if (i % 3  && i !== 0) continue; {
    result += i;
    }
}
console.log(result);



//Написать функцию pow(x,y) которая будет принимать 2 числа, первое это число, которое мы будем сводить в степень, второе в которую степень.

function pow(x, y) {
    let result = 1;
    for (let i = 0; i < y; i++) {
        result *= x;
    }
    console.log(result);
}

pow(2, 3);