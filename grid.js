let gridContainer = document.createElement("div");
gridContainer.classList.add('gridContainer')


let frag = document.createDocumentFragment();
for (let i = 0; i < games.length; i++) {
  //const link = document.createElement("a")
  //link.href=`${games[i].link}`
  const test = document.createElement('div');
  test.classList.add('gridElement')
  test.addEventListener("click", function () {
    goPage(i)
  });


  test.addev
  test.innerHTML = `
    <img src='images${games[i].media.path + games[i].media.thumbnail}' alt="tenten"/>
    <span>${games[i].title}</span>
`


  frag.appendChild(test)
}
let body = document.body.querySelector('.content');

const goPage = (index) => {
  sessionStorage.setItem("portFolioIndex", index);
  location.href = 'portfolioItem.html'

}

gridContainer.appendChild(frag)
body.appendChild(gridContainer);