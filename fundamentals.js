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
///type
console.log(input.type);
