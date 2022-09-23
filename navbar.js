let navbar = document.createElement("div");

navbar.classList.add("navbar");

let navContent = document.createElement("div");

navContent.classList.add("navbar-content");

navbar.appendChild(navContent)


navContent.innerHTML = `
<p>Tan Weng Hong</p>`;

let body = document.body;
body.insertBefore(navbar, body.firstChild);