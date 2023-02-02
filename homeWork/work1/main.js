// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log

let hello ='hello';
console.log(hello);

let owu = 'owu';
console.log(owu);

let com = 'com';
console.log(com);

let ua = 'ua';
console.log(ua);

let one = 1;
console.log(one);

// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)
//
// let firstName = 'Natalia';
// let middleName = 'Myhaylivna';
// let lastName = 'Potitska';
//
// let res = firstName + ' ' + middleName + ' ' + lastName;
// console.log(res);
//
// let res1 = `${firstName} ${middleName} ${lastName}`
// console.log(res1);

// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
    let a = 100; let b = '100'; let c = true;

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);

// Додаткове для тих хто цікавився prompt`oм
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль

let firstName = prompt('enter your Firstname');
let lastName = prompt('enter your lastName');
let age = parseInt(prompt('enter your age'));  //тут parseInt щоб вибивало як число в консолі

let res = `${firstName} ${lastName} ${age}`;
console.log(res);
