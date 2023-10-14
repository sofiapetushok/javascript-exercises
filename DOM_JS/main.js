console.log("js connected");

const body = document.querySelector('body');
const container = document.createElement('div');
const box = document.createElement('div');

body.appendChild(container);
body.appendChild(box);

// Container styles
container.className = "red-text";
box.className = "pink-box";

// Paragraph & Header
const createElement = (tag, text, color = 'black', className = tag, id) => { 
    el = document.createElement(tag);
    el.className = className; 
    el.textContent = text;
    el.setAttribute('id', id);
    applyTextColor(el,color);
    return el;
}
const applyTextColor = (el, color) => {
    el.style.color = color;
}

const redP = createElement('p', 'Hey I’m red!', 'red');
const blueH3 = createElement('h3', 'I’m a blue h3!', 'blue', 'h3');
const div = createElement('div');
const h1 = createElement('h1', "I'm in the div");
const meToo = createElement('p', "ME TOO!");

const button1 = createElement('button', 'Click Me', 'teal');
button1.setAttribute('onclick', 'alert("Hello, World!")');

const btn = createElement('button', 'Click Me too!','teal', 'btn', 'btn');
// btn.onclick = () => {
    //     alert("Hi, i'm here!");
    // }

btn.addEventListener('click', function(e) {
    alert("list item");
});
container.appendChild(redP);
container.appendChild(blueH3);
box.appendChild(h1);
box.appendChild(meToo);
box.appendChild(button1);
box.appendChild(btn);

box.style.backgroundColor = 'pink';
box.style.padding = '15px';
box.style.border = 'solid 1px #111';
 
const buttons = document.querySelectorAll('button');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    alert(button.id);
  });
});