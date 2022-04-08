let container = document.querySelector('.container');

for (let i = 1; i < 257; i++) {
let square = document.createElement('div');
square.style.cssText = "border: 1px solid black; height: auto; width: 100%";
container.appendChild(square)
}