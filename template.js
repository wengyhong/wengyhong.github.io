const games = [
    {
        title: "Warriors of Nova Thera",
        studio: "LiquidX Studio, Mon. Co",
        link: "/portfolioItem.html",
        media: {
            path: "/pixelmon/",

            youtube: "https://www.youtube.com/embed/BEIL2PHSeOE",
            twitter:"",
            thumbnail: "banner.jpg",
            banner: "banner.jpg",
            twitter_desc:"",
            gallery:[]

        },
        store: {steam:"https://store.steampowered.com/app/2913760/Warriors_of_Nova_Thera/"

        },
        description:"Warriors of Nova Thera is a dungeon crawler with roguelike elements. Make strategic choices and test your abilities against relentless waves of warrior denizens to see if you have what it takes to emerge victorious.<br><br> Website: <a href='https://www.pixelmon.ai/warriorsofnovathera' target='_blank'>https://www.pixelmon.ai/warriorsofnovathera/</a> <br><br> Steam: <a href='https://store.steampowered.com/app/2913760/Warriors_of_Nova_Thera/' target='_blank'>https://store.steampowered.com/app/2913760/Warriors_of_Nova_Thera/</a>" ,
        responsibility:['I have been involved in most parts of the game, including UIs and SFX.<br><br> I am highly versatile and able to take on and adapt to project demands, solve complex technical challenges, and collaborate effectively with multidisciplinary teams to deliver engaging and polished gaming experiences '],
        resPoints:[{
            title:"Gameplay",
            points:["Implemented Skill Tree upgrade system using scriptable object and supports branching paths", "Implemented UIs with controller navigation support", "Implemented HUDs, showing gameplay progress stats, character states", "Implemented keybinding customization", "Implemented rune system", "Implemented shop system", "Implemented Save system, supporting read write to and from both local and backend", "Improved performance in enemy Behavior tree AI", "Implemented login and register page integrated with backend api and authentication", "Implemented Steam leaderboard for event purposes", "Implemented SFX system via FMOD", "Implemented Loading Screen with hint display", "Implemented room progression system with weighted rulesets for room choices and rewards", "Updated character class structure to be scalable with skill tree upgrade and rune upgrade", "Implemented currency system, adaptable to having different currency type", "Map decoration system(RnD)"]
        },
   ],
        technology:"Unity, FMOD, Photon Fusion",
        position:"Senior Unity Game Developer"
    },

    {
        title: "Star Symphony",
        studio: "ISekai Studio",
        link: "/portfolioItem.html",
        media: {
            path: "/starsymphony/",
            youtube2: "https://www.youtube.com/embed/FtKqH913524",
            youtube: "https://www.youtube.com/embed/_oNwaap9nU4",
            youtube3:"https://www.youtube.com/embed/q5kAoIl_trE",
            twitter:"",
            thumbnail: "banner.jpg",
            banner: "banner.jpg",
            twitter_desc:"",
            gallery:[]

        },
        store: {

        },
        description:"(This is an older version of the game) <br>Star Symphony is meant to be a PVP rhythm battler game. However the version that I worked on is solo play with online features. <br><br> Website: <a href='https://game.starsymphony.io/' target='_blank'>https://game.starsymphony.io</a> <br><br> <br> Twitter: <a href='https://twitter.com/starsymphony_io' target='_blank'>https://twitter.com/starsymphony_io </a><br>" ,
        responsibility:[' I developed the game from scratch. I also developed a beatmap editor and got the seal of approval by Falk Au Yeong'],
        resPoints:[{
            title:"Gameplay",
            points:["Implemented player input", "Implemented note/lane system where note will travel down the lane based on their assigned timestamp","Implemented accuracy checker system based on the difference of the timestamp and the time player hit the notes, whether it's too early or too late", "Implemented leaderboard system using Firebase","Implemented player data save load system via Playfab","Implemented UI","Implemented score validation by passing game data into Playfab cloud script for score calculation, then compare with the score submitted by player","Developed song database using scriptable object",
        "Developed player skill/spell system", "Developed player equipment system", "Developed player stat system, buff/debuff", "Developed 1v1 battle gameplay P2P using Photon Fusion (prototype)"]
        },
    {
        title:"Tools",
        points:['Developed in-house beatmap editor for beatmappers to create beatmaps/charts']
    }],
        technology:"Unity, Firebase, Photon Fusion, Playfab",
        position:"Lead Unity Developer"
    },

    {
        title: "Re:Legend",
        studio: "Magnus Games Studio",
        link: "/portfolioItem.html",
        media: {

            path: "/relegend/",
            youtube: "https://www.youtube.com/embed/9VKuP_4zZz8",
            twitter:'',
            thumbnail: "relegend.jpg",
            banner: "relegend.jpg",
            twitter_desc:""

        },
        store: {
            steam: "https://store.steampowered.com/app/823950/ReLegend/"
        },
        description: "Re:Legend is a monster raising focused JRPG with features such as farming, fishing, crafting, village building, multiplayer and more!<br><br>Available on Steam now! <br><br><a href='https://store.steampowered.com/app/823950/ReLegend' target='_blank'>CLICK HERE FOR STEAM PAGE</a>",
        responsibility: [
            'When I first joined the project, even though on the surface there were some core systems in place, but the code base is not not scale-able. Therefore, basically we have to rework the entire game.',
            'As a programmer, I work with an interdisciplinary team of artists, designers and programmers to design, prototype and implement new features and rework current features.',
            'I have also worked well under pressure with constant reiteration of features.',
            'In year 2020, I also lead a team of 5.',
            'In short, I have gained valuable experiences working in this project not just in technical, but also the management side of things of bringing everyone together to work towards a common goal.'
        ],
        resPoints: [{
                    title: "Gameplay",
                    points: ['Reworked the item and inventory system using Scriptable Object.',
                        'Implemented monster AI system with behavior tree, with several behaviors of monster like Aggressive, Defensive, Pet Following Owner and Boss Fights',
                        'Implemented Monster Stats system using Scriptable Object where designer could easily modify the data of the monster including the attacks',
                        'Implemented Status Effect system',
                        'Implemented UIs',
                        'Worked with the audio team to implement voice over including localization of voice, utilizing FMOD studio as a middle-ware audio solution.',
                        'Worked on localization using dictionary key-pair values',
                        'Implemented Life Skills progression system',
                        'Implemented Achievement system with Steamworks, including tracking of stats needed for each achievement',
                        'Implemented House Customization feature where you could place and move furniture, decorate your house',
                        'Implemented racing mini-game where the racers are following a predetermined path, player has to time their boost accordingly',
                        'Implemented camera system using Cinemachine’s state driven camera',
                        'Implemented Revive system',
                        'Implemented Monster Evolution and Fusion System',
                        'Implemented multiplayer side of things on features with Forged Networking',
                        'Provided feedback to art team where they could make a sprite sheet to consume less memories.',
                        'Provided feedback on UI and UX'

                    ]
                },
                {
                    title: "Tools",
                    points: ['Created editor tools that easily generate and modify item Scriptable Objects with data from Google Drive sheet',
                        'Created editor tools for designer to generate Monster prefabs and Monster Stat Scriptable Objects with data from Google Drive sheet',
                        'Created editor tools for designer to generate Furniture prefabs needed for House Customization feature'
                    ]
                },
                {
                    title: "Leadership",
                    points: ['Identifying the weakness and strength of each team member',
                        'Task delegation of programming task based on their strength',
                        'Communicate between departments to work on features'
                    ]
                }

            ]

            ,
        technology: "Unity",
        position: "Lead Game Programmer(2020 - 2021), Game Programmer(2018-2020)"
    },
    {
        title: "Lyra ",
        studio: "No Cartridge Inc.",
        media: {
            path: "/lyra/",

            youtube: "https://www.youtube.com/embed/MdBakbt3WPk",
            twitter:"",
            thumbnail: "1500x500.jpg",
            banner: "1500x500.jpg",
            twitter_desc:""

        },
        description: "Lyra is a 2D-Pixel RPG game with farming, creature catching, battling elements. <br>It was then having its focus shifted into NFT Collection. </br></br>Website: <a href='https://mint.lyragame.com' target='_blank'>https://mint.lyragame.com/</a> <br> Twitter: <a href='https://twitter.com/nocartridgeinc' target='_blank'>https://twitter.com/nocartridgeinc </a><br> Opensea: <a href='https://opensea.io/collection/lyra-genesis' target='_blank'> https://opensea.io/collection/lyra-genesis</a> <br> "

        ,
        responsibility: ['I developed most of the systems, core gameplay mechanics by translating GDD into playable mechanics. The other developer collaborated with me in implementing the visual side of things like the UI, animations.'],
        resPoints: [{
                title: "Gameplay",
                points: ['Developed scriptable object databases for data like items, creatures stats, crafting recipes etc',
                    'Developed rhythm game ( a mini game for capturing creature )',
                    'Developed barn system',
                    'Developed turn based combat system that uses priority queue system',
                    'Developed creature abilities, a variety of different action types : damage, buff debuff, healing, status effect etc',
                    'Developed farming and plants growth system',
                    'Developed time system,  able to hook events to time changes',
                    'Developed crafting system',
                    'Developed furnace system',
                    'Developed drop system',
                    'Developed shop system',
                    'Developed spawning system'

                ]
            },
            {
title:"Website",
points:['Developed mint page and interact with smart contract', 'Developed internal battle page for player to submit team and interact with server via REST API']
            },
            {
                title: "Tools",
                points: ['Developed editor tools to easily modify the database',
                    'Developed editor tool to modify the formula of the creature growth',
                    'Developed custom Timeline track class to move object in timeline based on coordinate input, custom gizmos to show node path',
                    'Developed battle simulator to test out different team compositions'
                ]
            },
        ],
        technology: "Unity",
        position: "Unity Game Developer"

    },
    {
        title: "MVP Rhythm Game",
        studio: "Medibeats Production",
        media: {
            path: "/rhythm/",
            youtube: "https://www.youtube.com/embed/_uN8TfCQJ24",
            twitter:"",
            thumbnail: "rhythm.png",
            banner: "rhythm.png",
            twitter_desc:""

        },
        description: "A MVP project for a rhythm game",
        responsibility: ['I was the sole programmer for this project. ', 'FMOD is used for the timing mechanics of the game. The time difference between the timestamp of the beat and the timestamp the player input determines the grade of accuracy. FMOD is also used to play the sound events.',

            'The chart is created by parsing a MIDI file.'
        ],
        technology: "Unity, FMOD",
        resPoints: [{
                title: "Gameplay",
                points: ['Implemented player input',
                    'Implemented chart parsing from MIDI file to actual playable beats on the screen with the correct timestamp/timing',
                    'Implemented scoring, grade check for accuracy',
                    'Implemented different types of note, TAP and HOLD',
                    'Implemented health system',
                    'Implemented UI',
                    'Implemented VFX to work with the game mechanics'
                ]
            }

        ],
        position: "Unity Game Developer"
    },

    {
        title: "Ejen Ali MATA Training Academy ",
        studio: "TeamM8",
        media: {
            path: "/ejen/",

            youtube: "https://www.youtube.com/embed/lwnfmjnUJXE",
            twitter:'',
            thumbnail: "banner.jpg",
            banner: "banner.jpg",
            twitter_desc:""

        },
        description: "This game is developed with the grant awarded by Media Prima Sdn Bhd after winning the Ejen Ali Game Jam 2015's Student Category.  <br></br> Ejen Ali MATA Training Academy is a 2D Tapping game for kids being the main audience, featuring 45 levels with various enemy types and game modes. <br><br> It is now available on Google Play and App Store",
        responsibility: [' I was 1 of the 2 programmers in the team, collaborated closely with designer and artist.'],
        resPoints: [{
                title: "Gameplay",
                points: ['Developed and implemented whole game logic ranging from game modes, enemies, player input, quest system, achievement system, reward system, item system and leveling system',
                    'Implemented UI and animations',
                    'Implemented In-App purchases unity Unity API',
                    'Implemented Google Mobile Ads',
                    'Implemented Facebook plugin for leaderboard',
                    'Memory optimization'
                ]
            }

        ],
        technology: "Unity",
        position: "Unity Game Developer"

    }, {
        title: "The Plight",
        studio: "Cellar Vault Games",
        media: {
            path: "/plight/",

            youtube: "https://www.youtube.com/embed/8dRyx3kROKY",
            twitter:'',
            thumbnail: "thumb.jpg",
            banner: "thumb.jpg",
            twitter_desc:""

        },
        description: "A first-person horror game which follows Wu, the protagonist in his attempt to find out what haunts the house he lives in. Player will uncover Wu’s dark past and recover his lost memories. <br><br>This was a project for our submission of Final Year Project.",
        responsibility: ['I am responsible for most of the logics for the first-person character and also its custom functions such as zooming in, pick up object and able to rotate object for better inspection. I also did logics for most of the game level.',
            'Our team of 5 have no prior experience nor knowledge in Unreal Engine 4 at the starting of doing this project. We are all self taught in using this engine. With no knowledge and also very limited amount of time to deliver a decently finished game product (6 months), we took the advantage of Blueprint for both fast prototyping and full production.'
        ],
        technology: "Unreal Engine 4 and Blueprint",
        resPoints: [],
        position: "Game Programmer"
    },
    {
        title: "Caelum's Garden",
        studio: "GPS 2 (University Project)",
        media: {
            path: "/caelum/",

            youtube: "https://www.youtube.com/embed/mItGUaZmHkc",
            twitter:'',
            thumbnail: "thumb.png",
            banner: "banner2.png",
            twitter_desc:""

        },
        description: "A block based puzzle game where the player has to move the seed to the soil with the help of animals in order for it to bloom. The animals move in a similar way in how Chess and Chinese Chess pieces move.",
        responsibility: ['As the sole game programmer for this project, I coded the game logic for each animal’s movement pattern, winning condition, camera movements, implementing art assets and other minor stuffs. The most challenging yet turned out to be most satisfying is the animal movement logics.'],
        technology: "Unity",
        resPoints: [],
        position: "Unity Game Developer"

    },
    {
        title: "Space Slash",
        studio: "GPS 1 (University Project)",
        media: {
            path: "/space/",

            youtube: "https://www.youtube.com/embed/cWfRVIcQByA",
            twitter:'',
            thumbnail: "thumb.jpg",
            banner: "thumb.png",
            twitter_desc:""

        },
        description: "A 2D, 2-players brawler game. Players fight each other in an arena without gravity, with the ability of walk in 4 directions, slashing and boost in mid-air. <br><br> Inspired by Samurai Gunn and 0Space by Teknopants.",
        responsibility: ['As the main game programmer for this project, I coded the logics for the player character controls, winning condition and also implementing the art assets. This project also uses Tiled2Unity, allowing designers to design the level and import to the game easily.'],
        resPoints: [],
        technology: "Unity",
        position: "Unity Game Developer"
    }
]