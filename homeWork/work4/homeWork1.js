// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// function area(a, b) {
//     return a * b
// }
//
// const res = area(2,5)
// console.log(res);


// - створити функцію яка обчислює та повертає площу кола з радіусом r
// function area(r){
//     const Pi = 3.14;
//     return Pi * r**2 ;
// }
// const res = area(2);
// console.log(res);


// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// function area(h, r) {
//     const Pi = 3.14;
//     return 2 * Pi * r * h ;
// }
// const res = area(4, 6)
// console.log(res);


// - створити функцію яка приймає масив та виводить кожен його елемент
// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
//
// function arrayOut(arr) {
//     for (const item of arr) {
//         console.log(item);
//     }
// }
//
// arrayOut(users)


// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// function creatText(text) {
//     document.write(`<p>${text}</p>`);
// }
// creatText("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, dolorum.")

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// function creatList(text) {
//     document.write(`
//         <ul>
//             <li>${text}</li>
//             <li>${text}</li>
//             <li>${text}</li>
//         </ul>`
//     )
// }
// creatList(`lorem dnbsvns nksfns gskfnkn`)


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// function creatList(text, count) {
//     document.write('<ul>')
//     for (let i = 0; i < count; i++) {
//         document.write(`<li>${text}</li>`)
//     }
//     document.write(`</ul>`)
// }
//
// creatList('hsg', 5)

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// function array(arr) {
//     document.write(`<ul>`)
//     for (const item of arr) {
//         document.write(`<li>${item}</li>`)
//     }
//     document.write(`</ul>`)
// }
//
// let qqq = [1, 'hello', true]
//
// array(qqq)


// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// function creatBlockForUser(arr) {
//     for (const user of arr) {
//         document.write(`<div>
//         <li>${user.id}</li>
//         <li>${user.name}</li>
//         <li>${user.age}</li>
//         <hr>
// </div>`)
//     }
// }
//
// const users = [
//     {
//         id: 1,
//         name: 'Natalia',
//         age: 23
//     },
//     {
//         id: 2,
//         name: 'Anna',
//         age: 25
//     },
//     {
//         id: 3,
//         name: 'Sasha',
//         age: 19
//     }
// ]
//
// creatBlockForUser(users)

// - створити функцію яка повертає найменьше число з масиву
// function min(arr) {
//     let min = arr[0]
//
//     for (const arrElement of arr) {
//         if (arrElement < min) {
//             min = arrElement
//         }
//     }
//     return min
// }
//
// console.log(min([4, 1, 3, 5, 9, -9]));


// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
//
// function sum(arr) {
//     let num = 0
//     for (const arrElement of arr) {
//         num = num + arrElement
//     }
//     return num
// }
//
// console.log(sum([1, 2, 10]));

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
//
// function swap(arr, index1, index2) {
//     let arrObj = arr[index1]
//     arr[index1] = arr[index2]
//     arr[index2] = arrObj
//
//     console.log(arr);
// }
//
// swap([11, 22, 33, 44], 0, 1)

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
//
function exchange(sumUAH, currencyValues, exchangeCurrency) {
    for (const currencyValue of currencyValues) {

        if (exchangeCurrency === currencyValue.currency){
            return sumUAH / currencyValue.value
        }



    }
}

console.log(exchange(10000, [{currency: 'EUR', value: 42}, {currency: 'USD', value: 40}, {currency: 'CAD', value: 29}], 'CAD'));