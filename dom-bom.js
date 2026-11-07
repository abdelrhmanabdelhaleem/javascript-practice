// DOM

// select elements
// let p = document.querySelector(".p");
// let title = document.getElementById("title");
// let items = document.querySelectorAll(".item");

// console.log(p.innerText);
// console.log(title.textContent);

// change content
// p.innerText = "Hello JavaScript";
// p.innerHTML = "<b>Hello</b>";

// change style
// p.style.color = "red";
// p.style.backgroundColor = "yellow";

// classes
// p.classList.add("active");
// p.classList.remove("active");
// p.classList.toggle("active");
// console.log(p.classList.contains("active"));

// attributes
// let link = document.querySelector("a");
// console.log(link.getAttribute("href"));
// link.setAttribute("target", "_blank");

// create element
// let newElement = document.createElement("p");
// newElement.innerText = "New Paragraph";
// document.body.append(newElement);

// remove element
// newElement.remove();

// events
// let btn = document.querySelector("button");

// btn.addEventListener("click", function () {
//   console.log("Button clicked");
// });

// input event
// let input = document.querySelector("input");

// input.addEventListener("input", function (e) {
//   console.log(e.target.value);
// });

// form submit
// let form = document.querySelector("form");

// form.addEventListener("submit", function (e) {
//   e.preventDefault();
//   console.log("Form submitted");
// });

// select options
// let select = document.getElementById("select");
// console.log(select.options[2].value);

// DOM traversal
// let child = document.querySelector(".child");
// console.log(child.parentElement);
// console.log(child.nextElementSibling);
// console.log(child.closest(".container"));

// event bubbling
// parent.addEventListener("click", () => {
//   console.log("Parent");
// });

// child.addEventListener("click", () => {
//   console.log("Child");
// });

// BOM

// window
// console.log(window.innerWidth);
// console.log(window.innerHeight);

// location
// console.log(location.href);
// console.log(location.hostname);
// console.log(location.pathname);
// location.reload();

// history
// history.back();
// history.forward();
// history.go(-1);

// navigator
// console.log(navigator.language);
// console.log(navigator.onLine);
// console.log(navigator.userAgent);

// screen
// console.log(screen.width);
// console.log(screen.height);

// alert
// alert("Hello");

// prompt
// let name = prompt("Enter your name");
// console.log(name);

// confirm
// let result = confirm("Are you sure?");
// console.log(result);

// setTimeout
// setTimeout(() => {
//   console.log("Hello");
// }, 2000);

// setInterval
// let count = 0;

// let timer = setInterval(() => {
//   count++;
//   console.log(count);

//   if (count === 5) {
//     clearInterval(timer);
//   }
// }, 1000);

// localStorage
// localStorage.setItem("name", "abdo");
// console.log(localStorage.getItem("name"));
// localStorage.removeItem("name");
// localStorage.clear();

// sessionStorage
// sessionStorage.setItem("age", 22);
// console.log(sessionStorage.getItem("age"));
