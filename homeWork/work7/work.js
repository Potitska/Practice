// // - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// class User{
//
//     constructor(id, name, surname , email, phone){
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
//     }
// }
// // створити пустий масив, наповнити його 10 об'єктами new User(....)
// let user = new User(1,'Stepan','Bandera', 'stepan1909@icloud.com', 0939991909);
// console.log(user);
// let user1 = [
//     new User(1,'Stepan','Bandera', 'stepan1909@icloud.com', 0939991909),
//     new User(2,'Stepan','Bandera', 'stepan1909@icloud.com', 0939991909),
//     new User(3,'Stepan','Bandera', 'stepan1909@icloud.com', 0939991909),
//     new User(4,'Stepan','Bandera', 'stepan1909@icloud.com', 0939991909),
//     new User(5,'Stepan','Bandera', 'stepan1909@icloud.com', 0939991909),
//     new User(6,'Stepan','Bandera', 'stepan1909@icloud.com', 0939991909),
//     new User(7,'Stepan','Bandera', 'stepan1909@icloud.com', 0939991909),
//     new User(8,'Stepan','Bandera', 'stepan1909@icloud.com', 0939991909),
//     new User(9,'Stepan','Bandera', 'stepan1909@icloud.com', 0939991909),
//     new User(10,'Stepan','Bandera', 'stepan1909@icloud.com', 0939991909)
//     ];
// console.log(user1);

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
// let userList = user1.filter(value => value.id % 2 === 0);
// console.log(userList);

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
// let users = user1.sort((a, b) => b.id - a.id);
// console.log(users);

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
// class Client {
//     constructor(id, name, surname , email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
// }
// }
// let list = []
// let client1 = new Client(1, 'Natalia','Potitska','potiska418@.com', '097466574' , ['bread','milk'])
// let client2 = new Client(2, 'Natalia','Potitska','potiska418@.com', '097466574' , ['bread','milk', 'bear','pasta','water','wine'])
// let client3 = new Client(3, 'Natalia','Potitska','potiska418@.com', '097466574' , ['bread','milk', 'bear'])
// let client4 = new Client(4, 'Natalia','Potitska','potiska418@.com', '097466574' , ['bread','milk','butter'])
// let client5 = new Client(5, 'Natalia','Potitska','potiska418@.com', '097466574' , ['bread','milk','butter'])
// let client6 = new Client(6, 'Natalia','Potitska','potiska418@.com', '097466574' , ['bread'])
// let client7 = new Client(7, 'Natalia','Potitska','potiska418@.com', '097466574' , ['bread','milk','cucamber','potato'])
// let client8 = new Client(8, 'Natalia','Potitska','potiska418@.com', '097466574' , ['bread','milk','cucamber','potato'])
// let client9 = new Client(9, 'Natalia','Potitska','potiska418@.com', '097466574' , ['bread','milk','cucamber','potato','cheese'])
// let client10 = new Client(10, 'Natalia','Potitska','potiska418@.com', '097466574' , ['bread','milk','butter'])
// list.push(client1,client2,client3,client4,client5,client6,client7,client8,client9,client10);
// console.log(list);
//
// // - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
// const arrays = list.sort((a, b) => a.order.length - b.order.length);
// console.log(arrays);

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
// function Car(model, producer, year, maxSpeed, engine) {
//     this.model = model;
//     this.producer = producer;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.engine = engine;
//
//     Car.prototype.drive = function () {
//         console.log(`їдемо зі швидкістю ${maxSpeed} на годину`)
//     }
//     Car.prototype.info = function () {
//         console.log(`model:${model},producer:${producer},year:${year},maxSpeed:${maxSpeed},engine:${engine}`)
//     }
//     Car.prototype.increaseMaxSpeed = function (newSpeed) {
//         maxSpeed = newSpeed;
//     }
//     Car.prototype.changYear = function (newValue) {
//         year = newValue;
//     }
//     Car.prototype.addDriver = function (driver) {
//         this.driver = driver;
//     }
//
// }
//
// const auto = new Car('BMW', 'qqq', 2000, 220, 2.4);
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна
// швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car


// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
// class Popelushka {
//     constructor(name,age,size) {
//         this.name = name;
//         this.age = age;
//         this.size = size;
//     }
// }
// let array = []
// let user1 = new Popelushka( 'Anna',25,36);
// let user2 = new Popelushka( 'Anna',25,37);
// let user3 = new Popelushka( 'Anna',25,40);
// let user4 = new Popelushka( 'Anna',25,35);
// let user5 = new Popelushka( 'Anna',25,42);
// let user6 = new Popelushka( 'Anna',25,41);
// let user7 = new Popelushka( 'Anna',25,44);
// let user8 = new Popelushka( 'Anna',25,43);
// let user9 = new Popelushka( 'Anna',25,39);
// let user10 = new Popelushka( 'Anna',25,38);
// array.push(user1,user2,user3,user4,user5,user6,user7,user8,user9,user10);
// console.log(array);
//
//
// class Prince {
//     constructor(name,age,shoe) {
//         this.name = name;
//         this.age = age;
//         this.shoe = shoe;
//     }
// }
// const prince = new Prince('William', 28,36);
// console.log(prince);
//
//
// for (const arrayElement of array) {
//     if (arrayElement.size === 36){
//         console.log(arrayElement)
//     }
// }
//
//
// const add = array.find(value => value.size === 36);
// console.log(add);