let navbar = document.createElement("div");

navbar.classList.add("navbar-main");

let navContent = document.createElement("div");

navContent.classList.add("navbar");

navbar.appendChild(navContent)





navContent.innerHTML = `<p>Tan Weng Hong</p>`;

navContent.addEventListener('click', toggleGrid)
import { toggleGrid } from "./grid.js";

let body = document.body;
body.insertBefore(navContent, body.firstChild);
