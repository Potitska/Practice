// // - створити блок,
// const block = document.createElement('div');
//
// //     - додати йому класи wrap, collapse, alpha, beta
// block.classList.add('wrap','collapse','alpha','beta');
//
// // - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// block.style.background='gray';
// block.style.color = 'white';
// block.style.fontSize = '30px';
// block.innerText = 'HELLO';
//
// // - додати цей блок в body.
// const body = document.querySelector('body');
// body.appendChild(block);
// // - клонувати його повністю, та додати клон в body.
// const clone = block.cloneNode(true);
// block.style.background='black';
// block.style.color = 'green';
// body.appendChild(clone);

// - Є масив:
//     ['Main','Products','About us','Contacts']
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)
// const LiArr = ['Main','Products','About us','Contacts'];
// const body = document.querySelector('body');
// const ul = document.createElement('ul');
// for (const item of LiArr) {
//     const li = document.createElement('li');
//     li.innerText =item;
//     ul.appendChild(li);
// }
// body.appendChild(ul);

// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// const body = document.querySelector('body');
// for (const item of coursesAndDurationArray) {
//     const  div = document.createElement('div');
//     div.innerText = `title: ${item.title} - monthDuration: ${item.monthDuration}`
//     body.appendChild(div);
// }

//     - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// const body = document.querySelector('body');
// for (const item of coursesAndDurationArray) {
//     const  div = document.createElement('div');
//     const  h1 = document.createElement('h1');
//     const  p = document.createElement('p');
//
//     div.classList.add('item');
//    h1.classList.add('heading');
//     p.classList.add('description');
//
//     h1.innerText = item.title;
//      p.innerText = item.monthDuration;
//
//      div.append(h1,p);
//     body.appendChild(div);
// }

// - є масив simpsons, котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
// Проітерувати його, створиши для кожного об'єкту  масиву <div class='member'> та наповнити його данними з об'єкту.
//     Якщо людською мовою: під кожного члена родини зробити блок та наповнити його інформацією з цього об'єкту
//
// =========================
//     Цикл в циклі
// - Є масив coursesArray котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
//
// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png який лежить в папці з поточним фйлом
// ------------------

//     - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".
// const body = document.querySelector('body');
// const p = document.createElement('p');
// const btn = document.createElement('button');
// p.innerText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.';
// btn.innerText = 'CLICK';
// btn.onclick = () =>{
//     p.style.display = 'none';
// }
//     body.append(p, btn);

//     - створити інпут який приймає вік людини та кнопку яка підтверджує дію.
//     При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
// const form = document.forms.checker;
// form.onsubmit = function () {
// if (this.age.value < 18){
//    return  alert('Go away')
// }
// alert('Welcome')
// }

// *** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)