let navbar = document.createElement("div");

navbar.classList.add("navbar-main");

let navContent = document.createElement("div");

navContent.classList.add("navbar");

navbar.appendChild(navContent)


import { toggleGrid } from "./grid.js";



navContent.innerHTML = `<p>Tan Weng Hong</p>`;
navContent.addEventListener('click', toggleGrid)

let body = document.body;
body.insertBefore(navContent, body.firstChild);
