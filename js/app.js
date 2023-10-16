// 1.

const uList = document.querySelector("ul");

const noCar1 = uList.querySelectorAll("li")[2];
const noCar2 = uList.querySelectorAll("li")[4];
const removeItem1 = uList.removeChild(noCar1);
const removeItem2 = uList.removeChild(noCar2);


// 3.
const newLi = document.createElement('li');
newLi.innerText = 'Bugatti';
uList.insertBefore(newLi, document.querySelector('li'));
// 4.
const firstLi = document.createElement('li');
firstLi.innerText = 'Ford';
uList.appendChild(firstLi)


// 2.
uList.classList.add("list");
const allLi = uList.querySelectorAll("li");
for(let i = 0; i < allLi.length; i++) {
    let everyLi = allLi[i];
    everyLi.classList.add("listItem");
}

// 5.
const form = document.querySelector('form');
const inputName = document.createElement('input');
const inputSurName = document.createElement('input');
const inputPass = document.createElement('input');
const inputConfirmPass = document.createElement('input');

form.append(inputName, inputSurName, inputPass, inputConfirmPass);

const allInputs = form.querySelectorAll("input");
for(let i = 0; i < allInputs.length; i++) {
    let everyInput = allInputs[i];
    everyInput.classList.add("formItems");
}

inputName.placeholder = 'Your name';
inputSurName.placeholder = 'Your surname';
inputPass.placeholder = 'Password';
inputConfirmPass.placeholder = 'Confirm password';

inputPass.setAttribute('type', 'password');
inputConfirmPass.setAttribute('type', 'password');

// 6.
const img = document.createElement('img');
img.src = '../images/images.jpg';
img.alt = '#';
const imageWrapper = document.querySelector('.catImage')
imageWrapper.append(img);

// 7.

const p = document.querySelector('p');

//  Вариант 1 

p.classList.toggle('red')
p.classList.toggle('italic')

//  Вариант 2 

p.setAttribute('class', 'bold')

// 8.

const h1 = document.createElement('h1');
h1.textContent = 'this is h1 tag';
const h1Wrapper = document.querySelector('#h1Wrapper');
h1Wrapper.append(h1);

// 9. 

h1.style.color = 'blue';
h1.style.fontSize = '40px'


