// function sayhello(){
//     console.log('hello');
// }
// sayhello()
// //now arrow
// const sayHello2 = () =>{
//     console.log('hello2');
// };
// sayHello2()
//
// function summ(a,b){
//     console.log(a+b )
// }
// //arrow
// const summ2 = (a, b) => a+b;
// console.log(summ2(10, 5));

// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
// (['hello world', 'lorem ipsum', 'javascript is cool'].forEach((item) => console.log(item.length)));

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
// console.log(['hello world', 'lorem ipsum', 'javascript is cool'].map((item) => item.toUpperCase()));
// map - простий цикл , він перебирає. він як forEach працює від початку до кінця,але map ще повертає,
// якщо потрібно знайти і змінити тільки один елемент(в даному випадку одне слово), то map не наш варіант!

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
// console.log(['HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'].map((item) => item.toLowerCase()));

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
// let str = ' dirty string   ';
// console.log(str);
// console.log(str.trim()); // trim обрізає тільки зліва і справа, а по середині ні!
// console.log(str.trimStart()); //обрізати лише спочатку
// console.log(str.trimEnd());
// console.log(str.split(" ").filter((w) => w.length).join(' '));

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
// let str = 'Ревуть воли як ясла повні';
// const stringToarray = (string) => string.split(' ');
// let arr = stringToarray(str);
// console.log(arr);

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
// const arr = [10,8,-7,55,987,-1011,0,1050,0]
// console.log(arr.map((num) => num.toString()));

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
// let nums = [3, 21, 11];
// const sortNums = (arr, order) => {
//     switch (order) {    //те що лежить в середині switch має відповідати чомусь що лежить в якомусь кейсі
//         case'ascending' :
//             return arr.sort((a, b) => a - b)
//         case'descending' :
//             return arr.sort((a, b) => b - a)
//     }
// };
// console.log(sortNums(nums, 'ascending'));
// console.log(sortNums(nums, 'descending'));

// ==========================
// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// console.log(coursesAndDurationArray.sort((a, b) =>
//     a.monthDuration - b.monthDuration));
// // -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// console.log(coursesAndDurationArray.filter(value => value.monthDuration > 5));
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
// console.log(coursesAndDurationArray.map((value, index) => ({...value, id: index + 1}))); //тут ми беремо кожен наш об'єкт і просто руйнуємо рівень складності.
// і ми додаємо йому ще один ключ значення (айді)потім огортаємо його в новий об'єкт за допомогою {}
