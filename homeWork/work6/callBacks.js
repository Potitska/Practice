// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
// let x = 'hello world,lorem ipsum,javascript is cool';
// let len = x.length;
// console.log(len);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
// let x = 'hello world,lorem ipsum,javascript is cool';
// let upperCase = x.toUpperCase();
// console.log(upperCase);

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
// let x = 'hello world,lorem ipsum,javascript is cool';
// let upperCase = x.toUpperCase();
// console.log(upperCase);
// console.log(upperCase.toLowerCase());

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
// let str = ' dirty string   ';
// let vidstyp = str.indexOf(' ');
// console.log(vidstyp);
// let prob = str.substring(vidstyp);
// console.log(prob);
//
// ще один варіант
// let str = ' dirty string   ';
// let x = str.replace(' ','');
// console.log(x);

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
// let str = 'Ревуть воли як ясла повні';
// function stringTaarray(str) {
//     let aar_words = str.split(' ')
//     console.log(aar_words);
// }
// stringTaarray(str);

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
// array = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
// let str = array.map(item => {
//     return item + ''
//     });
// console.log( str);

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
//     або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
//
// let nums = [11,21,3];
// function sortNums(nums,direction) {
//     if (direction === 'ascending'){
//         console.log(nums.sort((a, b) => a - b ));
//
//     }else if (direction === 'descending'){
//         console.log(nums.sort( (a, b) => b - a));
//     }
// }
// sortNums(nums,'ascending');

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
// coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration)
// console.log(coursesAndDurationArray);
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// const users = coursesAndDurationArray.filter(function (item){
//     return item.monthDuration > 5
// });
// console.log(users);
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
// const addId = coursesAndDurationArray.map(function (item, index){
//    return {id:index + 1, title: item.title, monthDuration: item.monthDuration};
// });
// console.log(addId);

// =========================
//     описати колоду карт (від 6 до туза без джокерів)
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі трефи від 9 та більше
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
// let deck = [
//     {cardSuit: 'Spade', value: 6, color: 'Black'},
//     {cardSuit: 'Clubs', value: 6, color: 'Black'},
//     {cardSuit: 'Hearts', value: 6, color: 'Red'},
//     {cardSuit: 'Diamonds', value: 6, color: 'Red'},
//     {cardSuit: 'Spade', value: 7, color: 'Black'},
//     {cardSuit: 'Clubs', value: 7, color: 'Black'},
//     {cardSuit: 'Hearts', value: 7, color: 'Red'},
//     {cardSuit: 'Diamonds', value: 7, color: 'Red'},
//     {cardSuit: 'Spade', value: 8, color: 'Black'},
//     {cardSuit: 'Clubs', value: 8, color: 'Black'},
//     {cardSuit: 'Hearts', value: 8, color: 'Red'},
//     {cardSuit: 'Diamonds', value: 8, color: 'Red'},
//     {cardSuit: 'Spade', value: 9, color: 'Black'},
//     {cardSuit: 'Clubs', value: 9, color: 'Black'},
//     {cardSuit: 'Hearts', value: 9, color: 'Red'},
//     {cardSuit: 'Diamonds', value: 9, color: 'Red'},
//     {cardSuit: 'Spade', value: 10, color: 'Black'},
//     {cardSuit: 'Clubs', value: 10, color: 'Black'},
//     {cardSuit: 'Hearts', value: 10, color: 'Red'},
//     {cardSuit: 'Diamonds', value: 10, color: 'Red'},
//     {cardSuit: 'Spade', value: 'Jack', color: 'Black'},
//     {cardSuit: 'Clubs', value: 'Jack', color: 'Black'},
//     {cardSuit: 'Hearts', value: 'Jack', color: 'Red'},
//     {cardSuit: 'Diamonds', value: 'Jack', color: 'Red'},
//     {cardSuit: 'Spade', value: 'Queen', color: 'Black'},
//     {cardSuit: 'Clubs', value: 'Queen', color: 'Black'},
//     {cardSuit: 'Hearts', value: 'Queen', color: 'Red'},
//     {cardSuit: 'Diamonds', value: 'Queen', color: 'Red'},
//     {cardSuit: 'Spade', value: 'King', color: 'Black'},
//     {cardSuit: 'Clubs', value: 'King', color: 'Black'},
//     {cardSuit: 'Hearts', value: 'King', color: 'Red'},
//     {cardSuit: 'Diamonds', value: 'King', color: 'Red'},
//     {cardSuit: 'Spade', value: 'Ace', color: 'Black'},
//     {cardSuit: 'Clubs', value: 'Ace', color: 'Black'},
//     {cardSuit: 'Hearts', value: 'Ace', color: 'Red'},
//     {cardSuit: 'Diamonds', value: 'Ace', color: 'Red'}
// ];
// const ace = deck.find(value => value.value === `Ace` && value.cardSuit === `Clubs`)
// console.log(ace);
// const six = deck.filter(value => value.value === 6)
// console.log(six);
// const col = deck.filter(value => value.color === `Red` )
// console.log(col);
// const sorter = deck.filter(value => value.cardSuit === 'Clubs' && [9, 10, 'Ace', 'Jack', 'Queen', 'King'].includes(value.value));
// console.log(sorter);
//
//     Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// const box = deck.reduce((pr, cu)=>{
//     pr[cu.cardSuit].push(cu);
//     return pr;
// },{ Spade:[], Diamonds:[], Hearts:[], Clubs:[] });
// console.log(box);
//2V
// const box = deck.reduce((acc , currentValue)=>{
//     switch (currentValue.cardSuit) {
//         case 'Spade':
//             acc.Spade.push(currentValue);
//             break;
//         case 'Diamonds':
//             acc.Diamonds.push(currentValue);
//             break;
//         case 'Hearts':
//             acc.Hearts.push(currentValue);
//             break;
//         case 'Clubs':
//             acc.Clubs.push(currentValue);
//             break;
//     }
//     return acc;
// }, { Spade:[], Diamonds:[], Hearts:[], Clubs:[] });
// console.log(box);

// =========================
//     взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
// --написати пошук всіх об'єктів, в який в modules є sass
// let coursesArray = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'java core',
//             'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'python core',
//             'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'node.js',
//             'python',
//             'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//     }
// ];
// console.log(coursesArray.filter((item) => item.modules.includes('sass')));
// --написати пошук всіх об'єктів, в який в modules є docker
// console.log(coursesArray.filter((item) => item.modules.includes('docker')));