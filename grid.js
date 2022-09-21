import { showPortfolio } from "./portfolio.js";

// let gridBackground = document.querySelector(".content");
// gridBackground.classList.add('grid-background');
// gridBackground.classList.add('imgGradient');

// gridBackground.innerHTML = `
// <img src='images${games[0].media.images[0]}' alt="tenten"/>`

const toggleGrid= ()=>{
    if (gridContainer.style.display === "none") {
        gridContainer.style=null;
        let remove = document.body.querySelector('.gameContainer');
        remove.remove()
      } else {
        let remove = document.body.querySelector('.gameContainer');
       if(remove)
        gridContainer.style.display = "none";

      }
}



let gridContainer = document.createElement("div");
gridContainer.classList.add('gridContainer')

console.log(games);
let frag = document.createDocumentFragment();
for(let i =0; i<games.length; i++)
{
    //const link = document.createElement("a")
    //link.href=`${games[i].link}`
    const test = document.createElement('div');
    test.classList.add('gridElement')
    test.addEventListener("click", showPortfolio);
    test.addEventListener("click", toggleGrid);
    test.addev
    test.innerHTML =`
    <img src='images${games[0].media.images[0]}' alt="tenten"/>
    <span>${games[i].title}</span>



`
//link.appendChild(test);

frag.appendChild(test)
}



let body = document.body.querySelector('.content');


gridContainer.appendChild(frag)
body.appendChild(gridContainer);


export {toggleGrid}
