// const groupA = [
//     'FC Arsenal london',
//     'FC Real Madrid',
//     'FC Bayern munich',
//     'FC Milan',
// ];
//
// function createTeamsForCalendarPage(teams) {
//     teams.forEach((item, index) =>{
//         const onlyClubName = item.split(" ")[1];
//         teams[index] = onlyClubName;
//     });
//     return teams;
// }
// const newArr = [...groupA];   // ... - це є спред оператор. він дозволяє нам не змінювати цей(groupA) масив, а тільки новий (newArr)
//
// console.log(createTeamsForCalendarPage(newArr));
// console.log(groupA)
//
//
//and one more but better option
// function createTeamsForCalendarPage(teams) {
//     return teams.map((item)=>item.split(' ')[1]);
// }
// console.log(createTeamsForCalendarPage(groupA));
// console.log(groupA)


//Поверхневе та глибоке(Shallow and Deep)клонування об'єктіві
// const obj1 = {
//     name: 'Natalia',
//     age: 23,
//     favouriteFood: {
//         sweet: 'chocolate',
//         salty: 'pizza',
//     },
// };
//
// const obj2 = {...obj1};                            //variant1 - it is shallow copy
// const obj2 = Object.assign({},obj1);              //variant2 - it is shallow copy
// const obj2 = JSON.parse(JSON.stringify(obj1));   //it is deep copy ! deep copy it is when te object is in the object or arrays
//                                                 //lodash -використовуємо бібліотеку lodash, якщо перед нами стане задача зробити глибоку копію об'єкта з усіма його наякними властивостями та методами
// obj2.name='Anna';
// obj2.favouriteFood.sweet = 'caramel';
// console.log(obj1);
// console.log(obj2);


//клонування масивів

const arr1 = [
    {
        name:"Natalia",
        age:23,
        sayHello(){
            console.log('Hello!');
        },
    },
    {
        name:"John",
        age: 21,
    },
    {
        name:"James",
        age: 30,
    },
];

// const arr2 = [...arr1];  ///shallow copy !  тут потрібно робити глибоке клонування
// const arr2 = JSON.parse(JSON.stringify(arr1));  //deep copy! але навіть глибоке клонування, не відтворить функцію(якщо вона там є) для цього потріно використати lodash
const arr2 = _.cloneDeep(arr1);   //with tis we kept the 'say hello' method

arr2.push({
    name:"Rick",
    age: 18,
});

arr2[0].age = 45;

console.log(arr1);
console.log(arr2);