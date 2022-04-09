let container = document.querySelector('.container');


for (let i = 1; i < 257; i++) {
let square = document.createElement('div');
square.classList.add('squares');
container.appendChild(square)
}

function removeSquare() {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
}

function newSketchPad(number) {
  removeSquare();
  container.style.gridTemplateColumns = `repeat(${number}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${number}, 1fr)`;
  container.style.width = '70vw';
  container.style.height = '70vh';
  for (let i = 1; i < (number * number); i++) {
    let squarelots = document.createElement('div');
    squarelots.classList.add('squares');
    container.appendChild(squarelots)
}
square2 = document.getElementsByClassName('squares');
for (let squares of square2) {
  squares.addEventListener('mouseenter', () => {
    squares.classList.add('etch');
  })
  }
  for (let squares of square2) {
    btn.addEventListener('click', () => {
      squares.classList.remove('etch');
    });
    }
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

alter.addEventListener('click', () => {
  let input = prompt('how many rows?');
  if (input > 100 || isNaN(input)) {
  alert('Only numbers and less than 100!');
  } else {
  newSketchPad(input);
  }
});

