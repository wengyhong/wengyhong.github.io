export const profile = {
  name: "Tan Weng Hong",
  role: "Senior Unity Developer",
  image: "/images/1773627477341.jpg",
  heroBackgroundIntervalSeconds: 6,
  headline:
    "Senior Unity Developer building polished, scalable, production-ready games.",
  intro:
    "I build production Unity games and tools across gameplay systems, multiplayer, mobile live service features, backend API integrations, editor tooling, audio, and performance optimization.",
  summary:
    "I am a Senior Unity Developer with professional experience across live service mobile games, RPGs, rhythm games, creature battlers, editor tools, multiplayer systems, and backend-connected gameplay. I have worked as both an individual contributor and technical lead, including leading a team of five programmers and collaborating closely with designers, artists, producers, backend engineers, and audio teams.",
  backendFocus:
    "My work is grounded in production-minded C# architecture, clean gameplay systems, practical tooling, and strong cross-discipline communication. I am especially comfortable turning design requirements into playable systems and improving workflows so teams can ship faster.",
};

export const strengths = [
  "Unity and C# gameplay architecture",
  "Multiplayer, backend APIs, and live service systems",
  "Editor tools and workflow automation",
  "Mobile optimization, UI, and production delivery",
];

export type Project = {
  slug: string;
  name: string;
  description: string;
  stack: string[];
  challenge: string;
  outcome: string;
  contributionSummary: string;
  thumbnail: string;
  headerImage: string;
  gallery: {
    src: string;
    alt: string;
  }[];
  youtubeVideos: {
    id: string;
    title: string;
  }[];
  overview: string[];
  responsibilities: string[];
  details: {
    label: string;
    value: string;
  }[];
  links?: {
    label: string;
    href: string;
  }[];
};

export const projects: Project[] = [
  {
    slug: "pixelmon-tcg",
    name: "Pixelmon TCG",
    description:
      "A mobile live service online multiplayer trading card game with real-time 1v1 gameplay, backend socket synchronization, responsive card interactions, dynamic attack animations, and polished UI/audio feedback.",
    stack: ["Unity", "C#", "WebSocket", "Backend APIs", "FMOD", "Live Service"],
    challenge:
      "Build responsive local gameplay presentation on top of backend-authoritative real-time data while keeping card interactions, visuals, UI state, and combat feedback synchronized for online 1v1 matches.",
    outcome:
      "Helped ship a mobile online multiplayer TCG with 10K+ downloads, integrating gameplay sockets, UI data sync, player input, SFX, and a flexible ScriptableObject-driven attack animation system.",
    contributionSummary:
      "Integrated backend gameplay sockets, parsed and sent gameplay data, updated the Unity client in real time, implemented 1v1 mechanics, synchronized UI state, added SFX, built responsive card input, and created a dynamic attack animation design system.",
    thumbnail: "/images/tcg/1500x500.jpg",
    headerImage: "/images/tcg/1500x500.jpg",
    gallery: [
      {
        src: "/images/tcg/1500x500.jpg",
        alt: "Pixelmon TCG banner artwork",
      },
    ],
    youtubeVideos: [
      {
        id: "VvGfIN7MbRQ",
        title: "Pixelmon TCG gameplay video",
      },
    ],
    overview: [
      "Pixelmon TCG is a mobile live service online multiplayer trading card game developed at LiquidX / Mon Co. The project combines backend-driven multiplayer gameplay with responsive local visuals, UI, audio, card input, and combat feedback.",
      "As Senior Unity Developer, I worked closely with the backend team to integrate gameplay socket communication, parse and send gameplay data, and update the Unity client in real time so gameplay mechanics and visuals could play locally in sync with server state.",
      "My work focused on making backend-authoritative gameplay feel responsive and polished on the client: real-time data updates, 1v1 mechanics, card dragging and dropping, UI display synchronization, SFX, and dynamic attack animations.",
    ],
    responsibilities: [
      "Worked with the backend team to integrate backend socket communication for gameplay.",
      "Parsed incoming gameplay data, sent client-side gameplay data, and updated the client in real time.",
      "Implemented 1v1 gameplay mechanic systems for an online multiplayer TCG flow.",
      "Integrated UI screens and synchronized UI display state with backend data updates.",
      "Integrated SFX to support gameplay feedback and combat presentation.",
      "Built a ScriptableObject-driven animation design system so attacks could have unique animations.",
      "Made attack animations dynamically respond to their targets regardless of target position.",
      "Implemented player input and response for card interactions, including dragging cards and dropping cards.",
    ],
    details: [
      { label: "Company", value: "LiquidX / Mon Co." },
      { label: "Role", value: "Senior Unity Developer" },
      { label: "Project Type", value: "Online multiplayer mobile TCG" },
      { label: "Focus", value: "Real-time gameplay sync, 1v1 mechanics, UI, input, animation systems" },
    ],
    links: [
      {
        label: "Website",
        href: "https://pixelmontcg.com/",
      },
    ],
  },
  {
    slug: "warriors-of-nova-thera",
    name: "Warriors of Nova Thera",
    description:
      "A dungeon crawler with roguelike elements where players make strategic choices and test their abilities against relentless waves of warrior denizens.",
    stack: ["Unity", "C#", "FMOD", "Photon Fusion", "Steam", "Backend APIs"],
    challenge:
      "Support a broad production feature set across gameplay, UI, audio, backend integration, progression, and performance while keeping systems scalable and polished.",
    outcome:
      "Contributed across major areas of the game as a versatile senior Unity developer, helping deliver engaging gameplay systems, polished interfaces, and production-ready technical foundations.",
    contributionSummary:
      "Owned and supported a wide range of production systems across gameplay, UI, progression, backend-connected flows, Steam features, FMOD audio, optimization, and scalable character architecture.",
    thumbnail: "/images/pixelmon/banner.jpg",
    headerImage: "/images/pixelmon/banner.jpg",
    gallery: [
      {
        src: "/images/pixelmon/banner.jpg",
        alt: "Warriors of Nova Thera banner artwork",
      },
    ],
    youtubeVideos: [
      {
        id: "BEIL2PHSeOE",
        title: "Warriors of Nova Thera gameplay video",
      },
    ],
    overview: [
      "Warriors of Nova Thera is a dungeon crawler with roguelike elements developed at LiquidX Studio, Mon. Co. The game challenges players to make strategic choices and survive relentless waves of warrior denizens while progressing through combat, upgrades, rooms, rewards, and class-based systems.",
      "As Senior Unity Game Developer, I was involved in most parts of the game, including gameplay systems, UI, HUDs, SFX, backend-connected flows, save data, Steam leaderboard integration, optimization, and scalable character progression architecture.",
      "The role required versatility: adapting to changing project demands, solving complex technical challenges, and collaborating with multidisciplinary teams to deliver a polished and engaging player experience.",
    ],
    responsibilities: [
      "Implemented a ScriptableObject-driven skill tree upgrade system with branching progression paths.",
      "Built UI flows with controller navigation support, including HUDs for gameplay progress, stats, and character state.",
      "Implemented keybinding customization, rune systems, shop systems, loading screens with hints, and adaptable currency systems.",
      "Built save system support for reading and writing data locally and through backend-connected services.",
      "Integrated login and registration pages with backend APIs and authentication workflows.",
      "Implemented Steam leaderboard support for event-focused gameplay needs.",
      "Implemented SFX systems through FMOD and supported audio integration across gameplay features.",
      "Improved enemy behavior tree AI performance.",
      "Implemented room progression with weighted rulesets for room choices and rewards.",
      "Updated character class structure to scale with skill tree and rune upgrades.",
      "Researched and developed map decoration system approaches.",
    ],
    details: [
      { label: "Company", value: "LiquidX Studio, Mon. Co" },
      { label: "Role", value: "Senior Unity Game Developer" },
      { label: "Project Type", value: "Dungeon crawler / roguelike systems" },
      { label: "Focus", value: "Gameplay, UI, SFX, backend integration, optimization" },
    ],
    links: [
      {
        label: "Website",
        href: "https://www.pixelmon.ai/warriorsofnovathera/",
      },
      {
        label: "Steam",
        href: "https://store.steampowered.com/app/2913760/Warriors_of_Nova_Thera/",
      },
    ],
  },
  {
    slug: "star-symphony",
    name: "Star Symphony",
    description:
      "A solo-play version of a PvP rhythm battler with online features, leaderboard systems, PlayFab-backed progression, and a custom in-house beatmap editor.",
    stack: ["Unity", "C#", "Firebase", "Photon Fusion", "PlayFab"],
    challenge:
      "Build a rhythm game foundation from scratch while supporting precise timing, online services, secure score validation, player progression, and internal content tools.",
    outcome:
      "Delivered the core solo rhythm gameplay, online feature integrations, validation systems, and a beatmap editor that supported beatmapper workflows.",
    contributionSummary:
      "Built the game from scratch as Lead Unity Developer, covering rhythm gameplay, timing accuracy, player systems, Firebase and PlayFab integrations, score validation, Photon Fusion prototyping, and an in-house beatmap editor.",
    thumbnail: "/images/starsymphony/banner.jpg",
    headerImage: "/images/starsymphony/banner.jpg",
    gallery: [
      {
        src: "/images/starsymphony/banner.jpg",
        alt: "Star Symphony banner artwork",
      },
      {
        src: "/images/starsymphony/game_01.png",
        alt: "Star Symphony gameplay screenshot",
      },
      {
        src: "/images/starsymphony/game_02.png",
        alt: "Star Symphony gameplay systems screenshot",
      },
    ],
    youtubeVideos: [
      {
        id: "q5kAoIl_trE",
        title: "Star Symphony gameplay video",
      },
      {
        id: "_oNwaap9nU4",
        title: "Star Symphony feature video",
      },
      {
        id: "FtKqH913524",
        title: "Star Symphony systems video",
      },
    ],
    overview: [
      "Star Symphony is designed as a PvP rhythm battler. The version I worked on focused on solo play with online features, combining precise rhythm-game timing with player progression, leaderboard systems, cloud validation, and multiplayer battle prototyping.",
      "As Lead Unity Developer at Isekai Studio, I developed the game from scratch and built the technical foundation across gameplay, data, UI, backend-connected systems, and tools.",
      "I also developed an in-house beatmap editor for beatmappers to create charts, with the editor receiving approval from Falk Au Yeong.",
    ],
    responsibilities: [
      "Implemented player input and the core note/lane system, where notes travel through lanes based on assigned timestamps.",
      "Built an accuracy checker that evaluates whether player hits are early, late, or accurate based on timing differences.",
      "Implemented leaderboard functionality using Firebase.",
      "Built player save/load systems through PlayFab.",
      "Implemented UI flows for the solo rhythm gameplay experience.",
      "Implemented score validation by passing gameplay data into PlayFab CloudScript for server-side score calculation and comparison against submitted player scores.",
      "Developed a ScriptableObject-based song database.",
      "Built player skill/spell, equipment, stat, buff, and debuff systems.",
      "Developed a prototype 1v1 peer-to-peer battle mode using Photon Fusion.",
      "Developed an in-house beatmap editor for beatmappers to create beatmaps and charts.",
    ],
    details: [
      { label: "Company", value: "Isekai Studio" },
      { label: "Role", value: "Lead Unity Developer" },
      { label: "Project Type", value: "Rhythm battler / online systems" },
      { label: "Focus", value: "Rhythm gameplay, backend services, tools, validation" },
    ],
    links: [
      {
        label: "Website",
        href: "https://game.starsymphony.io",
      },
      {
        label: "Twitter",
        href: "https://twitter.com/starsymphony_io",
      },
    ],
  },
  {
    slug: "lyra",
    name: "Lyra",
    description:
      "A 2D pixel RPG with farming, creature catching, battling systems, and later NFT collection support through a web minting experience.",
    stack: ["Unity", "C#", "ScriptableObjects", "REST APIs", "Smart Contracts"],
    challenge:
      "Translate a game design document into playable RPG systems while also supporting web-facing NFT minting and internal tooling needs.",
    outcome:
      "Developed most core gameplay systems, built tools for data and balancing workflows, and implemented web pages that interacted with smart contracts and backend services.",
    contributionSummary:
      "Translated the GDD into playable systems across RPG gameplay, creature capture, farming, crafting, turn-based combat, smart contract minting, REST-backed web tools, editor utilities, and battle simulation.",
    thumbnail: "/images/lyra/1500x500.jpg",
    headerImage: "/images/lyra/banner.jpg",
    gallery: [
      {
        src: "/images/lyra/1500x500.jpg",
        alt: "Lyra wide promotional artwork",
      },
      {
        src: "/images/lyra/banner.jpg",
        alt: "Lyra banner artwork",
      },
      {
        src: "/images/lyra/thumb2.jpg",
        alt: "Lyra gameplay artwork",
      },
    ],
    youtubeVideos: [
      {
        id: "MdBakbt3WPk",
        title: "Lyra gameplay video",
      },
    ],
    overview: [
      "Lyra is a 2D pixel RPG from No Cartridge Inc. with farming, creature catching, and battling elements. The project later shifted focus toward an NFT collection, which introduced additional web and smart contract interaction work.",
      "As Unity Game Developer, I developed most of the core gameplay systems by translating the GDD into playable mechanics. Another developer collaborated with me on the visual side of the game, including UI presentation and animations.",
      "The work covered gameplay architecture, ScriptableObject-driven data, creature systems, farming and crafting loops, website integrations, and editor tools to make balancing and content iteration easier.",
    ],
    responsibilities: [
      "Developed ScriptableObject databases for items, creature stats, crafting recipes, and other core game data.",
      "Developed a rhythm mini-game used for creature capture.",
      "Built barn, farming, plant growth, crafting, furnace, drop, shop, and spawning systems.",
      "Developed a turn-based combat system using a priority queue approach.",
      "Implemented creature abilities with action types including damage, buffs, debuffs, healing, and status effects.",
      "Developed a time system that allowed gameplay events to hook into time changes.",
      "Developed the mint page and integrated it with smart contract interactions.",
      "Built an internal battle page for players to submit teams and communicate with the server through REST APIs.",
      "Developed editor tools to modify game databases more easily.",
      "Developed an editor tool for modifying creature growth formulas.",
      "Developed a custom Timeline track class to move objects based on coordinate input, including custom gizmos for node path visualization.",
      "Developed a battle simulator for testing different team compositions.",
    ],
    details: [
      { label: "Company", value: "No Cartridge Inc." },
      { label: "Role", value: "Unity Game Developer" },
      { label: "Project Type", value: "2D pixel RPG / creature catching systems" },
      { label: "Focus", value: "Gameplay systems, tools, web integration, smart contracts" },
    ],
    links: [
      {
        label: "Website",
        href: "https://mint.lyragame.com/",
      },
      {
        label: "Twitter",
        href: "https://twitter.com/nocartridgeinc",
      },
      {
        label: "OpenSea",
        href: "https://opensea.io/collection/lyra-genesis",
      },
    ],
  },
  {
    slug: "re-legend",
    name: "Re:Legend",
    description:
      "A monster-raising JRPG featuring farming, fishing, crafting, village building, multiplayer, life skills, house customization, and creature progression systems.",
    stack: ["Unity", "C#", "FMOD", "Steamworks", "Cinemachine", "Forged Networking"],
    challenge:
      "Rework and scale a large existing Unity codebase while shipping broad gameplay features, tools, multiplayer systems, localization, audio integration, and team leadership responsibilities.",
    outcome:
      "Helped rebuild core systems for a production JRPG, contributed across gameplay and tools, and later led a programming team of five through feature delivery and cross-department collaboration.",
    contributionSummary:
      "Reworked major systems in a large Unity JRPG, including inventory, monster AI, stats, progression, achievements, customization, localization, FMOD voice-over, multiplayer support, editor tools, and team leadership.",
    thumbnail: "/images/relegend/relegend.jpg",
    headerImage: "/images/relegend/relegend.jpg",
    gallery: [
      {
        src: "/images/relegend/relegend.jpg",
        alt: "Re:Legend promotional artwork",
      },
      {
        src: "/images/relegend/ss_4bda4d970f7e0551de398e0bef8677ad3b32fe29.1920x1080.jpg",
        alt: "Re:Legend gameplay screenshot",
      },
      {
        src: "/images/relegend/ss_91c05e749a591749ad147a72c86ac3a3364759ae.1920x1080.jpg",
        alt: "Re:Legend creature and farming gameplay screenshot",
      },
      {
        src: "/images/relegend/ss_92ebfa5bac67bdfd90d78bdb01cd91e5b2449a94.1920x1080.jpg",
        alt: "Re:Legend village and exploration screenshot",
      },
      {
        src: "/images/relegend/ss_aa802672b8a30c77de7644befa8bab6b61a0ddd5.1920x1080.jpg",
        alt: "Re:Legend combat and party gameplay screenshot",
      },
    ],
    youtubeVideos: [
      {
        id: "9VKuP_4zZz8",
        title: "Re:Legend gameplay video",
      },
    ],
    overview: [
      "Re:Legend is a monster-raising focused JRPG developed by Magnus Games Studio. The game combines creature raising with farming, fishing, crafting, village building, multiplayer, combat, life skills, and customization systems.",
      "I joined the project as Game Programmer from 2018 to 2020, then served as Lead Game Programmer from 2020 to 2021. While some core systems existed when I joined, the codebase was not scalable enough for the project's production needs, so major parts of the game had to be reworked and rebuilt.",
      "The role involved working closely with artists, designers, programmers, and audio teams to design, prototype, implement, and repeatedly refine features under pressure. In 2020, I also led a programming team of five, gaining both technical and management experience in aligning people around shared production goals.",
    ],
    responsibilities: [
      "Reworked the item and inventory systems using ScriptableObjects.",
      "Implemented monster AI through behavior trees, including aggressive, defensive, pet-following, and boss fight behaviors.",
      "Built ScriptableObject-driven monster stat systems so designers could modify monster data and attacks efficiently.",
      "Implemented status effects, UI systems, life skills progression, revive flow, monster evolution, and monster fusion.",
      "Implemented Steamworks achievements, including stat tracking required for achievement unlocks.",
      "Built house customization features that allowed players to place, move, and arrange furniture.",
      "Implemented a racing mini-game using predetermined racer paths and timed player boost interactions.",
      "Implemented a camera system using Cinemachine state-driven cameras.",
      "Supported multiplayer feature work with Forged Networking.",
      "Worked with the audio team to implement localized voice-over using FMOD Studio as middleware.",
      "Worked on localization using dictionary key-value workflows.",
      "Created editor tools to generate and modify item ScriptableObjects from Google Drive sheet data.",
      "Created editor tools for designers to generate monster prefabs and monster stat ScriptableObjects from Google Drive sheet data.",
      "Created editor tools for furniture prefab generation needed by the house customization feature.",
      "Provided technical feedback to art and UI teams, including sprite sheet memory considerations and UI/UX improvements.",
      "Led a programming team of five by identifying team strengths, delegating tasks, and coordinating between departments.",
    ],
    details: [
      { label: "Company", value: "Magnus Games Studio" },
      { label: "Roles", value: "Lead Game Programmer (2020 - 2021), Game Programmer (2018 - 2020)" },
      { label: "Project Type", value: "Monster-raising JRPG / life simulation systems" },
      { label: "Focus", value: "Core systems, tools, multiplayer, localization, leadership" },
    ],
    links: [
      {
        label: "Steam",
        href: "https://store.steampowered.com/app/823950/ReLegend/",
      },
    ],
  },
  {
    slug: "ejen-ali-mata-training-academy",
    name: "Ejen Ali MATA Training Academy",
    description:
      "A 2D tapping game for kids featuring 45 levels, multiple enemy types, varied game modes, mobile monetization, and social leaderboard integrations.",
    stack: ["Unity", "C#", "Unity IAP", "Google Mobile Ads", "Facebook SDK"],
    challenge:
      "Build a complete kid-friendly mobile game experience with varied modes, progression, rewards, monetization, ads, and memory-conscious mobile performance.",
    outcome:
      "Delivered core gameplay and mobile systems as one of two programmers on a grant-supported project after winning the Ejen Ali Game Jam 2015 Student Category.",
    contributionSummary:
      "Implemented core mobile gameplay, progression, UI, monetization, ads, Facebook leaderboard integration, and memory optimization as one of two programmers on a released kid-focused Unity game.",
    thumbnail: "/images/ejen/banner.jpg",
    headerImage: "/images/ejen/banner.jpg",
    gallery: [
      {
        src: "/images/ejen/banner.jpg",
        alt: "Ejen Ali MATA Training Academy banner artwork",
      },
    ],
    youtubeVideos: [
      {
        id: "lwnfmjnUJXE",
        title: "Ejen Ali MATA Training Academy gameplay video",
      },
    ],
    overview: [
      "Ejen Ali MATA Training Academy was developed by TeamM8 with a grant awarded by Media Prima Sdn Bhd after winning the Ejen Ali Game Jam 2015 Student Category.",
      "The game is a 2D tapping mobile game designed primarily for kids, featuring 45 levels, multiple enemy types, and varied game modes. It was released on Google Play and the App Store.",
      "As one of two programmers on the team, I collaborated closely with designers and artists to implement gameplay logic, UI, progression, monetization, social leaderboard support, and mobile optimization.",
    ],
    responsibilities: [
      "Developed and implemented the full game logic across game modes, enemy behavior, player input, quests, achievements, rewards, items, and leveling systems.",
      "Implemented UI flows and animations for the mobile gameplay experience.",
      "Integrated in-app purchases through Unity APIs.",
      "Implemented Google Mobile Ads for mobile ad support.",
      "Integrated the Facebook plugin for leaderboard functionality.",
      "Handled memory optimization for mobile performance constraints.",
      "Collaborated closely with designers and artists as one of two programmers on the project.",
    ],
    details: [
      { label: "Company", value: "TeamM8" },
      { label: "Role", value: "Unity Game Developer" },
      { label: "Project Type", value: "2D mobile tapping game" },
      { label: "Focus", value: "Gameplay logic, mobile systems, monetization, optimization" },
    ],
  },
  {
    slug: "the-plight",
    name: "The Plight",
    description:
      "A first-person horror game built in Unreal Engine 4, following Wu as he uncovers what haunts his house and recovers fragments of his lost memories.",
    stack: ["Unreal Engine 4", "Blueprint"],
    challenge:
      "Learn Unreal Engine 4 from scratch and deliver a finished first-person horror experience within a six-month final-year project timeline.",
    outcome:
      "Built core first-person interaction logic, object inspection mechanics, and level logic while using Blueprint for rapid prototyping and production implementation.",
    contributionSummary:
      "Self-taught Unreal Engine 4 with the team and implemented first-person character logic, object inspection mechanics, zoom, pickup interactions, and level scripting for a six-month horror game project.",
    thumbnail: "/images/plight/thumb.jpg",
    headerImage: "/images/plight/thumb.jpg",
    gallery: [
      {
        src: "/images/plight/thumb.jpg",
        alt: "The Plight project thumbnail",
      },
      {
        src: "/images/plight/ue4game-win32-shipping-2015-08-15-16-06-15-03.png",
        alt: "The Plight first-person horror gameplay screenshot",
      },
      {
        src: "/images/plight/ue4game-win32-shipping-2015-08-15-16-06-57-86.png",
        alt: "The Plight object inspection gameplay screenshot",
      },
      {
        src: "/images/plight/ue4game-win32-shipping-2015-08-15-16-10-44-46.png",
        alt: "The Plight level environment screenshot",
      },
    ],
    youtubeVideos: [
      {
        id: "8dRyx3kROKY",
        title: "The Plight gameplay video",
      },
    ],
    overview: [
      "The Plight is a first-person horror game developed as a final-year project by Cellar Vault Games. The story follows Wu, the protagonist, as he investigates what haunts his house, uncovers his dark past, and recovers lost memories.",
      "Our team of five started with no prior Unreal Engine 4 experience, so we self-taught the engine while building the game under a limited six-month production timeline.",
      "I was responsible for much of the first-person character logic and several level logic systems, using Blueprint for fast prototyping and full production implementation.",
    ],
    responsibilities: [
      "Implemented first-person character logic and custom interaction functions.",
      "Built zoom-in functionality for closer environmental inspection.",
      "Implemented object pickup and rotation mechanics so players could inspect objects more carefully.",
      "Implemented logic for multiple game levels and horror progression moments.",
      "Used Unreal Engine 4 Blueprint for rapid prototyping and production gameplay logic.",
      "Collaborated with a five-person team to learn the engine and deliver a complete final-year project within six months.",
    ],
    details: [
      { label: "Company", value: "Cellar Vault Games" },
      { label: "Role", value: "Game Programmer" },
      { label: "Project Type", value: "First-person horror / final-year project" },
      { label: "Focus", value: "Character logic, interaction systems, level scripting" },
    ],
  },
];

export const timeline = [
  {
    role: "Senior Unity Developer",
    company: "LiquidX - Hybrid, Kuala Lumpur",
    years: "Nov 2023 - Present",
    responsibilities:
      "Build production game systems and mechanics, integrate backend WebSocket/API services, implement UI with controller navigation, integrate FMOD audio, create editor tools, and support multiplayer features with Photon Fusion.",
    achievements:
      "Shipped Pixelmon TCG, an online multiplayer TCG mobile live service game with 10K+ downloads, and used OpenAI Codex to accelerate integration, prototyping, and production delivery.",
  },
  {
    role: "Lead Unity Developer",
    company: "Star Symphony - Remote, Kuala Lumpur",
    years: "Dec 2022 - Oct 2023",
    responsibilities:
      "Developed a PvP rhythm game, designed and implemented core gameplay systems, built an in-house beatmap editor, implemented Firebase leaderboards, and integrated PlayFab save/load systems.",
    achievements:
      "Improved beatmap creation workflows and collaborated with artists and designers to optimize performance and production iteration.",
  },
  {
    role: "Game Developer",
    company: "No Cartridge Inc. - Remote, Canada",
    years: "Apr 2021 - Jun 2023",
    responsibilities:
      "Developed a turn-based creature battler, implemented gameplay mechanics and ScriptableObject database frameworks, created editor tools, and contributed to Web3 features.",
    achievements:
      "Built a mint page with smart contract integration and collaborated with a distributed team across gameplay, tools, and feature delivery.",
  },
  {
    role: "Game Developer",
    company: "Medibeats Production - Freelance, Kuala Lumpur",
    years: "Dec 2021 - Jan 2022",
    responsibilities:
      "Built an MVP for a rhythm game and developed tooling to parse MIDI files into gameplay charts.",
    achievements:
      "Delivered a focused playable prototype and chart-generation workflow for early rhythm game development.",
  },
  {
    role: "Lead Game Programmer / Game Programmer",
    company: "Magnus Games Studio, Kuala Lumpur",
    years: "Apr 2018 - Mar 2021",
    responsibilities:
      "Implemented production game features and systems for Re:Legend, improved workflows with custom editor tools, collaborated with designers and artists, then later led a team of five programmers and worked with producers to align development with the production roadmap.",
    achievements:
      "Contributed to major gameplay, tooling, localization, audio, multiplayer, and progression systems while also growing into technical leadership and cross-department coordination.",
  },
  {
    role: "Game Programmer",
    company: "Cellar Vault Games, Kuala Lumpur",
    years: "Jan 2017 - Dec 2017",
    responsibilities:
      "Maintained and updated content for the mobile game Ejen Ali MATA Training Academy.",
    achievements:
      "Supported live content and maintenance work for a released Unity mobile title.",
  },
  {
    role: "Game Programmer",
    company: "TeamM8, Kuala Lumpur",
    years: "Jan 2016 - Dec 2016",
    responsibilities:
      "Developed Ejen Ali MATA Training Academy from concept to release and integrated IAP, Google Mobile Ads, and Facebook leaderboard systems.",
    achievements:
      "Helped deliver a grant-supported mobile game after winning the Ejen Ali Game Jam 2015 Student Category.",
  },
];

export const credentials = {
  education: {
    title: "Bachelor of Game Development",
    school: "University of Wollongong Malaysia",
    years: "2013 - 2015",
  },
  awards: [
    {
      title: "Winner of Ejen Ali Game Jam, Student Category 2015",
      href: "http://www.nst.com.my/news/2015/11/common-extract-team-m8-win-ejen-ali-game-jam",
    },
  ],
};

export const contact = {
  email: "wengyhongwork@gmail.com",
  linkedin: "https://www.linkedin.com/in/wengyhong",
  github: "https://github.com/wengyhong",
  location: "Kuala Lumpur, Malaysia",
};
