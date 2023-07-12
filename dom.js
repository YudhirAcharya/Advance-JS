const nameElm = document.getElementById("inputName");
console.log(nameElm);
nameElm.innerHTML = "Hi" + { nameElm };
console.log(nameElm);

console.dir(document.head);
console.log(document.title);
console.log(document.documentURI);

console.log(document.getElementById("main"));

//dom selectors:
//by tagName- h1{}, Id- #id_name{}, ClassName- .class_name{}, querySelector, querySelector, querySelectorAll

const byTagElm = document.getElementsByTagName("h1");
console.log(byTagElm);

const byId = document.getElementById("byIdElm");
console.log(byId);

const byClassName =
  document.getElementsByClassName("byClassElm");
console.log(byClassName);

const byQuerySelector = document.querySelector("#byIdElm");
console.log(byQuerySelector);

//to select all queries use ...All
const byQAll = document.querySelectorAll(".byClassElm");

//inner contents:

const paraElm = document.querySelector(".paraElm");
console.log(paraElm.innerHTML);
console.log(paraElm.textContent);
console.log(paraElm.innerText);

const changingText = document.querySelector(".changeElm");
changingText.textContent = "It changed!";
changingText.innerHTML = "<i>italic change</i>";

const cuttingElm = document.querySelector(".cuttingElm");
console.log(cuttingElm.classList);

//how to give a class to element
cuttingElm.classList.add("cuttingElm2");
console.log(cuttingElm.classList);

//remove classes
cuttingElm.classList.remove("cuttingElm2");
console.log(cuttingElm.classList);

//toggle if exists, remove --viceversa
cuttingElm.classList.toggle("apple");
console.log(cuttingElm.classList);

cuttingElm.classList.toggle("apple");
console.log(cuttingElm.classList);

//Atrribute
const a = document.querySelector("a");
console.log(a.href); //to get address
//change link
console.log((a.href = "www.abc.com"));
//value from input
const input = document.querySelector(".input");
console.log(input.value);
console.log((input.value = "naam"));
///type
console.log(input.type);

//getAttribute
console.log(input.getAttribute("value"));

//setAttribute
input.setAttribute("type", "password");

//siblings
let firstLi = document.querySelector("li");
console.log(firstLi.parentElement.parentElement);

//also .childern .nextElementSibling .previousElementSibling

//style
let styleElm = document.querySelector(".styleElm");
styleElm.style.color = "lime";
styleElm.style.transition = " all 6s";

//create Element
let h1 = document.createElement("h1");
h1.textContent = "hellu";
console.log(h1);

//events
let button1 = () => {
  console.log("hi");
};

//inside
const button2 = document.querySelector(".button2");
button2.addEventListener("click", () => {
  console.log("btn2");
});

//outside
const button3handler = () => {
  console.log("button3");
};
const button3 = document.querySelector(".button3");
button3.addEventListener("click", button3handler);

//event (e)  object
const eventsPara = document.querySelector(".eventsPara");
eventsPara.addEventListener("click", (event) => {
  console.log(event);
});

const inputElm = document.querySelector(".inputElm");
inputElm.addEventListener("click", (event) => {
  console.log(event);
});

//events in-depth
let one = document.querySelector(".clickMouse");
let two = document.querySelector(".contextmenuMouse");
let three = document.querySelector(".dblclickMouse");
let four = document.querySelector(".mousedownMouse");
let five = document.querySelector(".mouseenterMouse");
let six = document.querySelector(".mouseleaveMouse");
let seven = document.querySelector(".mousemoveMouse");
let eight = document.querySelector(".mouseoverMouse");

one.addEventListener("click", () => {
  console.log(one.classList.toggle("red"));
});

two.addEventListener("contextmenu", () => {
  two.classList.toggle("blue");
});

three.addEventListener("dblclick", () => {
  three.classList.toggle("teal");
});

four.addEventListener("mousedown", () => {
  four.classList.toggle("steelblue");
});

five.addEventListener("mouseenter", () => {
  five.classList.toggle("orange");
});

six.addEventListener("mouseleave", () => {
  six.classList.toggle("purple");
});

seven.addEventListener("mousemove", () => {
  seven.classList.toggle("blue");
});

eight.addEventListener("mouseover", () => {
  eight.classList.toggle("orange");
});

//keyboard
const inputKey = document.querySelector(".inputKey");
inputKey.addEventListener("keypress", () => {
  console.log("key pressed");
});
//also keyup, keydown

const charkey = document.querySelector(".inputKey");
inputKey.addEventListener("keypress", (e) => {
  console.log(e.charCode);
});

const codekey = document.querySelector(".inputKey");
inputKey.addEventListener("keypress", (e) => {
  console.log(e.code);
});

const key = document.querySelector(".inputKey");
inputKey.addEventListener("keypress", (e) => {
  console.log(e.key);
});
const emoji = document.querySelector(".emoji");
console.log(emoji.innerHTML);
emoji.addEventListener("click", () => {
  emoji.innerHTML =
    emojis[Math.floor(Math.random() * emojis.length)];
});

const emojis = [
  "🙂",
  "😀",
  "😃",
  "😄",
  "😁",
  "😅",
  "😆",
  "🤣",
  "😂",
];
