// Масиви та об'єкти:
// 1. Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
//
// let arr;
// arr = [1,'hello',3,true,5,6,17,8,9,10];
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);
// console.log(arr[4]);
// console.log(arr[5]);
// console.log(arr[6]);
// console.log(arr[7]);
// console.log(arr[8]);
// console.log(arr[9])

// 2. Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
//
// let book1 = {
//      title:'White Horse',
//      pageCount: 150,
//      genre:'history',
//  };
//  let book2 = {
//      title:'It',
//      pageCount: 420,
//      genre:'horror',
//  };
//  let book3 = {
//      title:'Henry Ford',
//      pageCount: 270,
//      genre:'autobiography',
//  };

// 3. Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
//
// let book1 = {
//       title:'White Horse',
//       pageCount: 150,
//       genre:'history',
//       authors: [{name:'Jonh',age:35 }]
//   };
// let book2 = {
//       title:'It',
//       pageCount: 420,
//       genre:'horror',
//       authors: [{name:'king',age:60 }]
//   };
//   let book3 = {
//       title:'Henry Ford',
//       pageCount: 270,
//       genre:'autobiography',
//       authors: [{name:'Henry',age:112 }]
//   };

// 4. Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
//
//  let users = [
//      {name:'Natalia',username:'Nata', password:1111},
//      {name:'Anna',username:'Ania', password:2222},
//      {name:'Nastia',username:'Nast', password:3333},
//      {name:'Oleg',username:'Olko', password:4444},
//      {name:'Vasia',username:'Vas', password:5555},
//      {name:'Mark',username:'Marko', password:6666},
//      {name:'Oleksiy',username:'Alex', password:7777},
//      {name:'Sasha',username:'Sania', password:8888},
//      {name:'Vitalik',username:'Vita', password:9999},
//      {name:'Danulo',username:'Dania', password:1010},
//      ];
// console.log(users[0].password);
// console.log(users[1].password);
// console.log(users[2].password);
// console.log(users[3].password);
// console.log(users[4].password);
// console.log(users[5].password);
// console.log(users[6].password);
// console.log(users[7].password);
// console.log(users[8].password);
// console.log(users[9].password);

// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
//
// let x = +prompt('Number: ');
//
// if (x !== 0){
//     console.log('Virno')
// }else {
//     console.log('Ne virno');
// }

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
//
// let time = +prompt('Num(0-59): ')
//
// if (time >= 0 && time <= 15) {
//     console.log('1')
//
// }else if (time > 15 && time <= 30) {
//     console.log('2');
//
// }else if (time > 30 && time <= 45) {
//     console.log('3');
//
// }else if (time > 45 && time <= 59) {
//     console.log('4');
//
// } else{
// console.log('error');
// }

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
//
// let day = +prompt('Day(1-31): ')
//
// if (day >= 1 && day <= 10){
//     console.log('1');
// }else if (day > 10 && day <= 20){
//     console.log('2');
// }else if (day > 20 && day <= 31){
//     console.log('3');
// }else {
//     console.log('error');
// }

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
//
// let day = +prompt('Day(1-7): ')
//
// switch (day){
//     case 1:
//         console.log('Monday');
//         break
//     case 2:
//         console.log('Tuesday');
//         break
//     case 3:
//         console.log('Wednesday');
//         break
//     case 4:
//         console.log('Thursday');
//         break
//     case 5:
//         console.log('Friday');
//         break
//     case 6:
//         console.log('Saturday');
//         break
//     case 7:
//         console.log('Sunday');
//         break
//     default:
//         console.log('error');
// }

//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.
//
// let a = 1
//
// let b = 1
//
// if (a > b) {
//     console.log(a);
// } else if (b > a){
//     console.log(b);
// } else if (a === b){
//     console.log('equal');
// }else{
//     console.log('error');
// }


//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється false (хибноподібні, тобто приводиться до false)
//
// let x = 'dsf'
//
// if (x == false) {
//     x = 'default'
//     console.log(x);
// } else {
//     console.log(x);
// }
