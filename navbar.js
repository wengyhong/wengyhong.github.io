let navbar = document.createElement("div");

navbar.classList.add("navbar");


navbar.innerHTML = `<p>Tan Weng Hong</p>`;

navbar.addEventListener('click', toggleGrid)
import { toggleGrid } from "./grid.js";

let body = document.body;
body.insertBefore(navbar, body.firstChild);
