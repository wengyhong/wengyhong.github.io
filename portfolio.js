const showPortfolio = ()=>
{
    let doc = document.createElement("div");
    doc.classList.add("gameContainer")
    console.log(games);

    const currGame = games[0];
    doc.innerHTML=`

    <div class="gameBanner imgGradient">
        <div class="gameTitle">
            <p>${currGame.title}</p>
            <br>
            <h1>${currGame.studio}</h1>
        </div>
        <img src="/images/${currGame.media.images[0]}" alt="tenten" />
    </div>

    <div class="gameBody">
        <div class="gameDesc">
            <div class="descItem">
                Re:Legend is a monster raising focused JRPG with features such as farming, fishing, crafting, village building, multiplayer and more                </div>

                When I first joined the project, even though on the surface there were some core systems in
                place, but the code base is not not scale-able. Therefore, basically we have to rework the
                entire game.

                As a programmer, I work with an interdisciplinary team of artists, designers and programmers to
                design, prototype and implement new features and rework current features.

                I have also worked well under pressure with constant reiteration of features.
            <div class="gameMedia">
                <iframe width="1024" height="720" src="${currGame.media.youtube}"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen>
                </iframe>
            </div>
            <div class="descItem">
                <h1>Technology used</h1>
                <span>Unity</span>

            </div>

            <div class="descItem">
                <h1>Responsibilities</h1>
                <br>
                <span>
                    When I first joined the project, even though on the surface there were some core systems in
                    place, but the code base is not not scale-able. Therefore, basically we have to rework the
                    entire game.

                    As a programmer, I work with an interdisciplinary team of artists, designers and programmers to
                    design, prototype and implement new features and rework current features.

                    I have also worked well under pressure with constant reiteration of features.
                </span>
                <ul>
                    <il>Lmao</il>
                </ul>
            </div>
        </div>
    </div>
    </div>`
    let moreBody = document.body.querySelector('.content');


    moreBody.appendChild(doc);
}


export {showPortfolio}




