const happy = document.getElementById('btn-hapiness');
const sad = document.getElementById('btn-sadness');
const photo = document.querySelector('.img');
happy.addEventListener('click',function () {
    // document.getElementsByClassName('img');  //це перший варіант, а внизу другий
    photo.style.display = 'inline';    //але якщо в нас буде багато фото, то querySelectorAll і щоб звернутися до конкретного фото використовуємо [номер індексу]:     document.querySelector('.img');    //але якщо в нас буде багато фото, то querySelectorAll і щоб звернутися до конкретного фото використовуємо [номер індексу]: document.querySelectorAll('.img')[3];
    happy.disabled = true;
    sad.disabled = false;
});

sad.addEventListener('click',function () {
    // document.getElementsByClassName('img');  //це перший варіант, а внизу другий
    photo.style.display = 'none';    //але якщо в нас буде багато фото, то querySelectorAll і щоб звернутися до конкретного фото використовуємо [номер індексу]:     document.querySelector('.img');    //але якщо в нас буде багато фото, то querySelectorAll і щоб звернутися до конкретного фото використовуємо [номер індексу]: document.querySelectorAll('.img')[3];
    happy.disabled = false;
    sad.disabled = true;
});