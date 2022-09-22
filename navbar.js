import {
    toggleGrid
} from "./grid.js";


let navbar = document.createElement("div");

navbar.classList.add("navbar");

let navContent = document.createElement("div");

navContent.classList.add("navbar-content");

navbar.appendChild(navContent)




navContent.innerHTML = `

<img class="back-button" src="/images/logo/back-icon.jpg" alt="back">
<p>Tan Weng Hong</p>`;

let body = document.body;
body.insertBefore(navbar, body.firstChild);

let backButton = document.querySelector('.back-button');
const toggleButton = () => {

    let style = (getComputedStyle(backButton));
    if(style.getPropertyValue('visibility') === 'hidden')
    {
       backButton.style.setProperty('visibility', 'visible');
    }
    else
    {
        backButton.style.setProperty('visibility', 'hidden');
    }


}
backButton.addEventListener('click', function(){toggleGrid()})
backButton.addEventListener('click', function(){toggleButton()})

export {toggleButton}