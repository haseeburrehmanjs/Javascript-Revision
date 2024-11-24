console.log("hello world i am javascript");

// push method === array ka last ma add krna ka liya
// unshift method === array ka start ma add krna ka liya
// length method === array ki length malom krna ka liya
// pop methodh === array ka last sa remove krna ka liya
// unshift method === array ka start sa remove krna ka liya

const softwear = ["Photoshop", "Figma", "In Desgin", "Corel Draw"];

// console.log(softwear.length);

//  softwear.push('primear pro')
//  console.log(softwear);

//  softwear.unshift('primear pro')
//  console.log(softwear);

// softwear.pop()
// softwear.shift()

console.log(softwear);

const form = document.querySelector("form");
const inputValue = document.querySelector("#todoValue");
const list = document.querySelector("#list");

const myTodos = [];

form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(inputValue.value);
  myTodos.push(inputValue.value);
  console.log(myTodos);
  renderScreen()
  inputValue.value = "";
});

const renderScreen = () => {
    list.innerHTML = ''
  myTodos.map((item, index) => {
    list.innerHTML += `
        <li>${item}</li>
        `
  });
};
