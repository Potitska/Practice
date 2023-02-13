
//example 1
// let numberOfSiblings = 1+3;
// let numberOfCandies = 8;
// console.log(numberOfCandies / numberOfSiblings);

// //Example 2 - With the help of a variable we will find out how many seconds in a year!
//  let secondsInAMinute = 60;
//  let minuteInAHour = 60;
//  let secondsInAHour = secondsInAMinute * minuteInAHour;
//  console.log(secondsInAHour);

// //Example 3 - how many seconds in a day!
// let hoursInADay = 24;
// let secondsInADay = secondsInAHour * hoursInADay;
// console.log(secondsInADay);

// //Example 4 - how many seconds in a year!
// let daysInAYear = 365;
// let secondsInAYear = secondsInADay * daysInAYear;
// console.log(secondsInAYear);

// //Example 5 - my age in a seconds!
// let age = 23;
// let secondsInMyAge = age * secondsInAYear;
// console.log(secondsInMyAge);

//Example 6 -
// let x = 10;
// x = x + 5;
// console.log(x); //answer: 15

//another way
// let x = 10;
// x = x += 5;
// console.log(x); //answer: 15

// Example 7 - string
// let greeting = 'hello ';
// let myName = 'Natalia';
// let res = greeting + myName ;
// console.log(res);

//Example 8 - text in capital letters
// let x = 'hello everybody!'.toUpperCase();
// console.log(x);

//Example 9 - text in small letters
// let a = 'HELLO EVERYBODY!'.toLowerCase();
// console.log(a);


//JavaScript-Задачі на цикли:                                       //WebDev з нуля.канал Алекса Лущенко!
//вивести число від 4 до 400 на екран
/*
let out = document.getElementById('out');
let tmp = '';

for(let i=4; i<=400; i++){       //з і=4 це вже йдуть умови, до скільки працювати? до 400(тому в нас і<=400)! i++ - це означає кожен раз нарощувати на одиницю!
    tmp = tmp + i + ' ';
}
out.innerHTML = tmp;*/

//вивести числа в послідовності: 4 7 10 13 з допомогою цикла
/*

let out = document.getElementById('out');
let tmp = '';

for(let i=4; i<=13; i=i+3) {   //і=і+3 = тому що нам потрібно оприділити крок, а в нас від 3 (4->7->10->13)
    tmp = tmp + i + ' ';
}
out.innerHTML = tmp;*/

//вивести числа 654 653 652 до нуля
/*
let out = document.getElementById('out');
let tmp = '';

for(let i=654; i>=0; i=i-1) {   //починаємо з 654,і працюємо до тих пір поки і більше нуля, і починаємо зменшуємо на 1
    tmp = tmp + i + ' <br>';   //щоб зробити їх в стопчик, замість пробілу ставим <br>
}
out.innerHTML = tmp;*/

//вивести всі роки з 1983 до 2017
/*

let out = document.getElementById('out');
let tmp = '';

for(let i=1983; i<=2017; i=i+1) {   //початкова умова рік 1983, тому там де і= пишемо 1983,і працюємо до тих пір поки і менша 2017, і збільшуємо на одиницю(ще можна було писати і++)
    tmp = tmp + i + ' <br>';
}
out.innerHTML = tmp;*/

//вивести числа -4 -20 2 4 6...100.

/*
let out = document.getElementById('out');
let tmp = '';

for(let i=-4; i<=100; i=i+1) {
    tmp = tmp + i + ' <br>';
}
out.innerHTML = tmp;*/

//Задопомогою цикла надрокуйте таблицю множення на 7 від 1 до 9.

/*
let out = document.getElementById('out');
let tmp = '';

for(let i=1; i<=9; i=i+1) {
    tmp = tmp +7 +' * '+i+ ' = '+ 7*i + '<br>'; //задопомогою + ми з'єднюємо стрінг
}
out.innerHTML = tmp;*/

//виведіть за допомоги цикла коди спецсимволів від 1000 до 2000. Нагадую, що спецсимволи отримується комбінацією &#число; наприклад &#1222

/*
let out = document.getElementById('out');
let tmp = '';

for(let i=1000; i<=2000; i=i+1) {
    tmp = tmp +'&#'+i+ ' ';
}
out.innerHTML = tmp;*/
