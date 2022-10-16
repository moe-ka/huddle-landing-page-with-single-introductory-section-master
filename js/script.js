const logo = document.querySelector('.logo');

const lg = document.createElement('img');
lg.setAttribute('src', 'images/logo.svg');
logo.appendChild(lg);

const container = document.querySelector('.container');

const mockup = container.childNodes[3].children[0];
const mp = document.createElement('img');
mp.setAttribute('src', 'images/illustration-mockups.svg');
mockup.appendChild(mp);

const tombol = document.getElementById('register');
tombol.addEventListener('click', function(e){
    if(document.body.className == 'black-mode'){
        document.body.classList.remove('black-mode');
        document.body.classList.add('normal');   
    }else{
        document.body.classList.remove('normal');   
        document.body.classList.add('black-mode');
    }
});

const type = document.querySelector('.title span');


let i = 0;
var txt = 'Your Fans Will Love';
var speed = 200;

function typeWritter(){
    if(i < txt.length){
        type.innerHTML += txt.charAt(i);
        i++
        setTimeout(typeWritter, speed);
    }
}

typeWritter();