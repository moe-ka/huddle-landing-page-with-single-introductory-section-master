const logo = document.querySelector('.logo');

const lg = document.createElement('img');
lg.setAttribute('src', 'images/logo.svg');
lg.setAttribute('alt', 'logo');
logo.appendChild(lg);

const container = document.querySelector('.container');

const mockup = container.childNodes[3].children[0];
const mp = document.createElement('img');
mp.setAttribute('src', 'images/illustration-mockups.svg');
mp.setAttribute('alt','mockups-ilustration');
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
let txt = 'Your Fans Will Love';
let speed = 400;

function typeWritter(){
    if(i < txt.length){
        type.innerHTML += txt.charAt(i);
        setTimeout(typeWritter, speed);
        i++
    }
}
setInterval(() => {
    typeWritter();
}, 1500);