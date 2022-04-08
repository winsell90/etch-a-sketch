let container = document.querySelector('.container');


for (let i = 1; i < 257; i++) {
let square = document.createElement('div');
square.classList.add('squares');
square.style.cssText = "border: 1px solid black; height: auto; width: 100%";
container.appendChild(square)
}

square1 = document.getElementsByClassName('squares');

for (let squares of square1) {
squares.addEventListener('mouseenter', () => {
  squares.classList.add('etch');
})
}

let buttonarea = document.createElement('div');
buttonarea.classList.add('buttons');
document.body.appendChild(buttonarea)

let btn = document.createElement('button')
btn.classList.add('btn');
btn.textContent = 'Clear sketch pad';
buttonarea.appendChild(btn)

for (let squares of square1) {
btn.addEventListener('click', () => {
  squares.classList.remove('etch');
});
}

btn.addEventListener('mousedown', () => {
  btn.classList.add('clicked');
})

btn.addEventListener('mouseup', () => {
  btn.classList.remove('clicked');
})

let alter = document.createElement('button')
alter.classList.add('btn');
alter.textContent = 'Alter sketch area';
buttonarea.appendChild(alter);

alter.addEventListener('mousedown', () => {
  alter.classList.add('clicked');
})

alter.addEventListener('mouseup', () => {
  alter.classList.remove('clicked');
})