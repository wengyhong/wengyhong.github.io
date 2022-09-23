var currIndex = sessionStorage.getItem('portFolioIndex');

if(currIndex == null)
{
    currIndex = 0;
}
const showPortfolio = (index)=>
{
    let doc = document.createElement("div");
    doc.classList.add("gameContainer")
    console.log(games);


    const currGame = games[index];
    let resText= "";
    for(let k=0; k< currGame.responsibility.length; k++)
    {
        resText = resText + currGame.responsibility[k]+ "</br></br>"
    }

    let pointList = document.createDocumentFragment();

    for(let i=0; i<currGame.resPoints.length; i++)
    {

        let title = document.createElement('div')
        title.innerHTML = `<h2>${currGame.resPoints[i].title}</h2>`
        let points = document.createElement('ul');
        for(let m=0; m<currGame.resPoints[i].points.length; m++)
        {
            points.innerHTML = points.innerHTML + "<li>" + currGame.resPoints[i].points[m] + "</li>";
        }

        title.appendChild(points);
        pointList.appendChild(title)


    }

    doc.innerHTML=`

    <div class="gameBanner imgGradient">
        <div class="gameTitle">
            <h1>${currGame.title}</h1>
            <h2>${currGame.studio}</h2>
            <h3>${currGame.position}</h3>
        </div>
        <img src="/images/${currGame.media.path+ currGame.media.banner}" alt="tenten" />
    </div>

    <div class="gameBody">
        <div class="gameDesc">
            <div class="gameMedia">
                <iframe src="${currGame.media.youtube}"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen>
                </iframe>
            </div>
            <div class="descItem">
            <span>${currGame.description}</span>
            </br></br
            <h1>Made With:</h1>
            <span>${currGame.technology}</span>
         </div>
            <div class="descItem gameRes">
                <h1>Responsibilities</h1>
                <span>
                ${resText}
                </span>
            </div>
        </div>
    </div>
    </div>`




    if(currGame.media.youtube === '')
    {
        doc.querySelector('.gameMedia').remove()
    }
    let moreBody = document.body.querySelector('.content');

    moreBody.appendChild(doc);

    document.body.querySelector('.gameRes').appendChild(pointList)
}

showPortfolio(currIndex);



// <div class="gameButton">
// <a href=${currGame.store.steam} target="_blank">
// <input type="image" src="/images/logo/steam.png" />
// </a>
// </div>

