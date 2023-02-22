// ВСЕ ЗРОБИТИ СТРІЛОЧНИМИ ФУНКЦІЯМИ!
//     - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// const area = (a, b) => a * b;
// console.log(area(10, 5));

// - створити функцію яка обчислює та повертає площу кола з радіусом r
// const area = (r) => Math.PI * r ** 2;
// console.log(area( 5));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// const area = (h, r) => (r + h) * r * 3.14;
//     console.log(area(5,15));

// - створити функцію яка приймає масив та виводить кожен його елемент
// const array = (arr) => {
//     for (const item of arr) {
//         console.log(item);
//     }
// }
// console.log(array([111, 222, 333, 444, 555]));

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// const creatorP = (text) => document.write(`<p>${text}</p>`)
// console.log(creatorP(`fbfnndd fjfkgl fhklfn fjfkkf mffnjj fgdh`));

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// const list = (text) => {
//     document.write(`<ul>`);
//     document.write(`<li>${text}</li>`);
//     document.write(`<li>${text}</li>`);
//     document.write(`<li>${text}</li>`);
//     document.write(`</ul>`);
//     };
// list(`Hello Everybody!`);

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// const list = (text, count) => {
//     document.write(`<ul>`)
//     for (let i = 0; i < count; i++) {
//         document.write(`<li>${text}</li>`)
//     }
//     document.write(`</ul>`)
// }
// list(`Hello Everybody!`, 5);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// const list = (arr) => {
//     document.write(`<ul>`)
//     for (let i = 0; i < arr.length; i++) {
//         document.write(`<li>${arr[i]}</li>`)
//     }
//     document.write(`</ul>`)
// }
// list([`text`,12,true]);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.
// const arrOfObj = [
//     {id: 1, name: `Anna`, age: 18},
//     {id: 2, name: `Natalia`, age: 25},
//     {id: 3, name: `Nadia`, age: 19}
// ];
//
// const blockCreator = (arr) => {
//     for (const item of arr) {
//         document.write(`<hr/>`)
//         document.write(`<div>id: ${item.id}<br/>name: ${item.name}<br/>age:${item.age}<br/></div>`)
//         document.write(`<hr/>`)
//     }
// }
//     blockCreator(arrOfObj)

// - створити функцію яка повертає найменьше число з масиву
// const min = (arr) => {
//     let result = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//         if (result > arr[i]) result = arr[i];
//     }
//         return result;
// }
// console.log(min([-112, 5467, -34, 44, 7]));

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// Приклад sum([1,2,10]) //->13
// const sum = (arr) => {
//     let result = 0;
//     for (const num of arr) {
//         result += num;
//     }
//     return result;
// }
// console.log(sum([12, 3, 5]));

// - Написати функцію обміну валюти exchange()
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
// const exchange = (sumUAH,currencyValues,exchangeCurrency) => {
//     for (item of currencyValues) {
//         if(item.currency === exchangeCurrency){
//             return sumUAH / item.value;
//         }
//     }
// }
// console.log(exchange(10000, [{currency: 'USD', value: 40}, {currency: 'EUR', value: 42}], 'USD'));