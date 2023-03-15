const dino = document.getElementById('dino');
const cactus =document.getElementById('cactus');

document.addEventListener('keydown', function (event){
    jump();
    });
function jump(){
   if (dino.classList != 'jump'){
       dino.classList.add('jump')
   }
   setTimeout(function () { //setTimeOut -дозволяє нам викликати функцію один раз через первний інтервал часу(в даному випадку ми поставли 300 мілісекунди)
       dino.classList.remove('jump')
   },300)
}

let isALive = setInterval(function (){      // setInterval - дозволяє нам викликати функцію регулярно, повторюючи виклик через певний інтервал часу
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top")); //parseInt -це метод розбиває строковий елемент, і поаертає ціле число
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left")); //getComputerStyle -він повертає об'єкт, який має значення всіх ссs якостей елемента

    if (cactusLeft < 50 && cactusLeft > 0 && dinoTop>= 140){  //тут вивели підрахунки по ширині і висоті наших елементів!!!тут 50, бо наш динозаврик має ширину 50
        alert('GAME OVER!!!')
    }
},10)