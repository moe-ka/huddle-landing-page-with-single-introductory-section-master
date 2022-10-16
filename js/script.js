const logo = document.querySelector('.logo');

const lg = document.createElement('img');
lg.setAttribute('src', 'images/logo.svg');
logo.appendChild(lg);

const container = document.querySelector('.container');

const mockup = container.childNodes[3].children[0];
const mp = document.createElement('img');
mp.setAttribute('src', 'images/illustration-mockups.svg');
mockup.appendChild(mp);


