// Практика
// Задача 1: Напишите программу на JavaScript, которая принимает число от пользователя и определяет, является ли введенное число четным или нечетным.

let userDigit = 701;
if (userDigit % 2 === 0) {
    console.log("Чило " + userDigit + " - парное");
} else {
    console.log("Чило " + userDigit + " - непарное");
}


/*Задача 2: Калькулятор скидки
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

for (i = 1; i <= 100; i++) {
    for (j )
    if (i % 3) continue;
}