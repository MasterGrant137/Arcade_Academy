'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Games",
      [
        {
          name: "Call of Duty: Warzone",
          gameImage:
            "https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/blog/hero/mw-wz/WZ-Season-Three-Announce-TOUT.jpg",
          genre: "Shooter",
          bio: `Experience classic Call of Duty® first-person combat in an all-new, massive arena for 150 players. Drop in, armor up, loot for rewards, and battle your way to the top. Welcome to Warzone.`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Madden 22",
          gameImage:
            "https://staticg.sportskeeda.com/editor/2021/06/21b08-16239444771808-800.jpg",
          genre: "Sport",
          bio: `All-new Dynamic Gameday† delivers gameplay powered by real-world Next Gen Stats and immersive Gameday Atmosphere across every mode. Plus, redeveloped Franchise features put you in charge of every aspect of building your NFL dynasty.`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Battlefield 2042",
          gameImage:
            "https://upload.wikimedia.org/wikipedia/en/e/ec/Battlefield_2042_cover_art.jpg",
          genre: "Shooter",
          bio: `Battlefields changing before your eyes. A cutting-edge arsenal at your disposal. The grand return of all-out warfare. Adapt and overcome in massive-scale 128 player battles* where dynamic storms, environmental hazards, total combat freedom, and Battlefield's signature destruction spark a new breed of Only in Battlefield moments.`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Call of Duty: Vanguard",
          gameImage:
            "https://upload.wikimedia.org/wikipedia/en/0/06/Call_of_Duty_Vanguard_cover_art.jpg",
          genre: "Shooter",
          bio: `Rise on every front starting November 5: Witness the origins of Special Forces in a gripping Campaign. Become a Special Forces Operator in adrenaline-fueled online Multiplayer. Experience a universe-expanding Zombies crossover. Featuring full integration with Warzone™, including a brand-new map coming later this year.`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Halo Infinte",
          gameImage:
            "https://upload.wikimedia.org/wikipedia/en/thumb/1/14/Halo_Infinite.png/220px-Halo_Infinite.png",
          genre: "Shooter",
          bio: `The legendary Halo series returns with the most expansive Master Chief campaign yet and a ground-breaking free to play multiplayer experience.`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Halo: Combat Evolved",
          gameImage:
            "https://upload.wikimedia.org/wikipedia/en/8/80/Halo_-_Combat_Evolved_%28XBox_version_-_box_art%29.jpg",
          genre: "Shooter",
          bio: `The greatest game ever made.  If you did not play this you are not a real gamer...`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "NBA 2k22",
          gameImage:
            "https://www.si.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_620/MTgyNDA0MzY4MTMyMjIwMjMy/cover---standard-edition.webp",
          genre: "Sport",
          bio: `NBA 2K22 is giving you more to do in The W this year. Balance practice, games, and off day activities to boost your player’s skill set. Work out with WNBA players to refine your game and become the best player the league has ever seen.`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Apex Legends",
          gameImage:
            "https://upload.wikimedia.org/wikipedia/en/thumb/d/db/Apex_legends_cover.jpg/220px-Apex_legends_cover.jpg",
          genre: "Shooter",
          bio: `Show 'em what you're made of in Apex Legends, a free-to-play hero shooter where contenders from across the Frontier team up to battle for glory, fame, and fortune.`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Overwatch",
          gameImage:
            "https://upload.wikimedia.org/wikipedia/en/thumb/5/51/Overwatch_cover_art.jpg/220px-Overwatch_cover_art.jpg",
          genre: "Shooter",
          bio: `Overwatch is a colorful team-based action game starring a diverse cast of powerful heroes. Travel the world, build a team, and contest objectives in exhilarating 6v6 combat.`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Rust",
          gameImage:
            "http://www.cpgaming.gg/w/wp-content/uploads/2018/01/0-915x514.jpg",
          genre: "Role-playing (RPG)",
          bio: `
The only aim in Rust is to survive. Everything wants you to die - the island’s wildlife and other inhabitants, the environment, other survivors. Do whatever it takes to last another night.`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Mount & Blade II: Bannerlord",
          gameImage:
            "https://upload.wikimedia.org/wikipedia/en/thumb/4/45/Mount_%26_Blade_II_-_Bannerlord_cover.jpg/220px-Mount_%26_Blade_II_-_Bannerlord_cover.jpg",
          genre: "Role-playing (RPG)",
          bio: `Mount & Blade II: Bannerlord is the eagerly awaited sequel to the acclaimed medieval combat simulator and role-playing game Mount & Blade: Warband. Set 200 years before, it expands both the detailed fighting system and the world of Calradia. Bombard mountain fastnesses with siege engines, establish secret criminal empires in the back alleys of cities, or charge into the thick of chaotic battles in your quest for power.`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "World of Warcraft",
          gameImage:
            "https://i.pcmag.com/imagery/articles/01DT6925CNSbhDhYF6vCY7F-1.1569486318.fit_lim.size_850x490.jpg",
          genre: "Role-playing (RPG)",
          bio: `Relive an era lost to legend. Explore Azeroth as it was in its earliest days, when the world was new and unknown challenges lurked around every corner. WoW Classic Era servers offer content through the Shadows of Necropolis content update.`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Cyberpunk 2077",
          gameImage:
            "https://theaggie.org/wp-content/uploads/2021/01/cyberpunk2077_ar-1.jpg",
          genre: "Shooter",
          bio: `Cyberpunk 2077 is an open-world, action-adventure story set in Night City, a megalopolis obsessed with power, glamour and body modification. You play as V, a mercenary outlaw going after a one-of-a-kind implant that is the key to immortality. You can customize your character’s cyberware, skillset and playstyle, and explore a vast city where the choices you make shape the story and the world around you.`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Outlast",
          gameImage:
            "https://upload.wikimedia.org/wikipedia/en/thumb/8/81/The_Outlast_Trials_cover.jpg/220px-The_Outlast_Trials_cover.jpg",
          genre: "Adventure",
          bio: `Hell is an experiment you can't survive in Outlast, a first-person survival horror game developed by veterans of some of the biggest game franchises in history. As investigative journalist Miles Upshur, explore Mount Massive Asylum and try to survive long enough to discover its terrible secret... if you dare.`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Grand Theft Auto: San Andreas",
          gameImage:
            "https://upload.wikimedia.org/wikipedia/en/c/c4/GTASABOX.jpg",
          genre: "Role-playing (RPG)",
          bio: `Five years ago Carl Johnson escaped from the pressures of life in Los Santos, San Andreas — a city tearing itself apart with gang trouble, drugs, and corruption. Where film stars and millionaires do their best to avoid the dealers and gangbangers.`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Dread Templar",
          gameImage:
            "https://images.igdb.com/igdb/image/upload/t_cover_small/co2vm8.jpg",
          genre: "Indie",
          bio: `Dread Templar is a fast-paced retro FPS that combines 90s classic shooter elements with modern skill-based FPS controls. You are a Dread Templar who entered Hell seeking revenge. But in order to get it, you have to fight your way through the dark realm!`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Theofil",
          gameImage:
            "https://images.igdb.com/igdb/image/upload/t_cover_small/co3hyh.jpg",
          genre: "Adventure",
          bio: `Theofil is an action arcade game in which you'll guide a hooded hero wearing an ancient robe. Your weapon is a magical wooden staff that brave Theofil uses to destroy his enemies. His abilities will help you fight against dangerous enemies. The action takes place somewhere in ancient Egypt, full of mysterious temples and caves, which are protected by deadly traps. Access to them is defended by powerful opponents who will not g... `,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Mega Cat Studios Collection 2",
          gameImage:
            "https://images.igdb.com/igdb/image/upload/t_cover_small/co2xza.jpg",
          genre: "Adventure",
          bio: `The Mega Cat Studios Collection 2 cartridge brings 8 more classic Mega Cat Studios games to the Evercade! Great independent titles such as Roniu’s Tale, Yazzie, Misplaced, Arkagis Revolution and more are brought together in a retro style, collectable physical package.

          Included Games:
          - Alter Ego Dreamwalker
          - Arkagis Revolution
          - DevWill Too
          - Gluf
          - Misplaced
          - Romeow & Julicat
          - Roniu’s Tale
          - Yazzie... `,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Revo",
          gameImage:
            "https://images.igdb.com/igdb/image/upload/t_cover_small/co3dab.jpg",
          genre: "Arcade",
          bio: `You’ve drifted into a sinister space storm far from civilization. Dark ships quickly close in on you. Rescued by a mysterious symbiotic vessel, your only hope of escape is to equip for combat and fight for your life. Neon shoot ‘em up to a retro fueled synthwave soundtrack.`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "{Undefined}",
          gameImage:
            "https://images.igdb.com/igdb/image/upload/t_cover_small/co3gzq.jpg",
          genre: "Adventure",
          bio: `{Undefined} is a sandbox survival game like no other, set on life-sized voxel planets with realistic phyisics with the possibility to shape your own building blocks. From your custom made furniture, walls, crafting stations to vehicle parts. You shape the blocks which can then be used to build buildings, spacecraft and aircraft. Endless possibilites with as little limitations as possible!`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "太古情缘之青云剑侠传奇",
          gameImage:
            "https://images.igdb.com/igdb/image/upload/t_cover_small/co3ilw.jpg",
          genre: "PC (Microsoft Windows)",
          bio: `《太古情缘之青云剑侠传奇》是一款及时战斗类MMORPG游戏。一朝入道修坤乾，两瓢浊酒尽余欢。 前缘已是昔日事，今朝渡劫道自然。 人法地，地法天，天法道，道法自然。人生数载皆虚妄，斗破苍穹，不如得道百炼成仙。神兵、灵药、绝世武功，结伴、创帮、武林大会，重现江湖中的刀光剑影、爱恨情仇！职业、工会、绝世武功，多种武学绝技任你学，结合隐藏武技，搭配出最强武学招式，逍遥江湖，剑荡八方！`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Tavern of Gods",
          gameImage:
            "https://images.igdb.com/igdb/image/upload/t_cover_small/co367w.jpg",
          genre: "Adventure",
          bio: `"Tavern of Gods" is a roguelite auto battle game. Players collect heroes, skills, followers, and equipment to form various builds to fight with random monsters. Every expedition can get new items, and then you can experience more different builds next time.`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Rent's Due: The Game",
          gameImage:
            "https://images.igdb.com/igdb/image/upload/t_cover_small/co3hje.jpg",
          genre: "Adventure",
          bio: `Rent's Due: The Game is a third-person platformer game where you take control of protagonist Tesha Robinson. Tesha is in need of some money and in order to get it, she must complete different levels with various obstacles that provide a huge challenge.`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Kakenuke Seishun Sparking!",
          gameImage:
            "https://images.igdb.com/igdb/image/upload/t_cover_small/co3gon.jpg",
          genre: "Visual Novel",
          bio: `The protagonist, Toono Yuu, is a junior at Kazami Academy,
          At the age of puberty and youth. But...

          "Youth? What's that? You know I'm busy with my part-time job."

          He's an extreme realist who devotes his youth to his part-time job.
          He's doing well with his schoolwork and spends all his free time earning money at his job every day.
          His hobby is checking his bank balance.
          His childhood friend Hibiki who couldn't overlook this an... `,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Candy gun",
          gameImage:
            "https://images.igdb.com/igdb/image/upload/t_cover_small/co3mpn.jpg",
          genre: "Indie",
          bio: `Welcome to Candy gun!You have to shoot caramels, and chains of sweets of the same color (three or more pieces) disappear when they are hit by caramels of the same color. The colors of the thrown caramels can be changed for convenience.`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "23 seconds to 5",
          gameImage:
            "https://images.igdb.com/igdb/image/upload/t_cover_small/co3k4k.jpg",
          genre: "PlayStation VR",
          bio: `Experience (crazy,) bizarre, surreal environments in virtual reality.
          Watch your way carefully! Jump, slide, avoid the obstacles … Master the challenges in the different obstacle courses and hope that you will reach the elevator of the tower.

          In "23 seconds to 5" you run linearly through desert environments, pirate areas and greenhouses with dangerous pitfalls. You explore the surface of the moon, underwater landscapes and fu... `,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "The Thief Girl",
          gameImage:
            "https://images.igdb.com/igdb/image/upload/t_cover_small/co323n.jpg",
          genre: "Indie",
          bio: `The Thief Girl is a stealth mission game in which you control a thief girl to collect treasure and get to the goal. Use the mouse to guide the girl to the goal while keeping her hidden from the monsters. Use emergency evasion actions when the monsters are about to find you to conquer the stage.`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Kimi wa Yukima ni Koinegau",
          gameImage:
            "https://images.igdb.com/igdb/image/upload/t_cover_small/co2w3a.jpg",
          genre: "Visual Novel",
          bio: `This is a story in which the girl encounters "non-humans," and learns about love.`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Orbibot",
          gameImage:
            "https://images.igdb.com/igdb/image/upload/t_cover_small/co3m6r.jpg",
          genre: "Xbox One",
          bio: `Solve gravity-based physics and logic puzzles as a rolling ball.`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Silicon City",
          gameImage:
            "https://images.igdb.com/igdb/image/upload/t_cover_small/co1r58.jpg",
          genre: "Indie",
          bio: `Silicon City is a retro city building game and focuses on indivuduals and all their data and statistics. Build a city block by block and discover the life going on under your mayor’s eye. Analyse data from your citizen and adjust your urban strategy to optimize your results.`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Hell's Island",
          gameImage:
            "https://images.igdb.com/igdb/image/upload/t_cover_small/co3lh8.jpg",
          genre: "Strategy",
          bio: `"Hell's Island" is a pc island survival game, based on a island in the blue Caribbean waters where you are stranded and need to gather resources to build and survive.`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Abyss Vein",
          gameImage:
            "https://images.igdb.com/igdb/image/upload/t_cover_small/co3kym.jpg",
          genre: "Adventure",
          bio: `This is an open world sandbox game. Currently, it's the first big release. The content of the game includes: domestication, genes, relics, excavation, building, construction and theft`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "LaserZone",
          gameImage:
            "https://images.igdb.com/igdb/image/upload/t_cover_small/co3hdq.jpg",
          genre: "Adventure",
          bio: `LaserZone is a puzzle game with action elements and a storyline. Play as Handel, avoid traps, fight enemies, and escape. Upgrade your tools to overcome escalating danger. Recover his lost memory and reclaim something invaluable, even more than his life.`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Blaster Master Zero III",
          gameImage:
            "https://images.igdb.com/igdb/image/upload/t_cover_small/co2wkz.jpg",
          genre: "Adventure",
          bio: `The Pinnacle of Mutant Blasting Action — Blaster Master Zero's hybrid side-scrolling and top-down action is back for its 3rd chapter! Series protagonist Jason travels to where the series all began, the planet Sophia, in order to save the heroine Eve in this final installment of the trilogy.`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "B.ARK",
          gameImage:
            "https://images.igdb.com/igdb/image/upload/t_cover_small/co2phv.jpg",
          genre: "Arcade",
          bio: `Team B.ARK is reporting for duty! Pugs, cats, bears, and bunnies are saving the solar system in a space-exploring adventure that you and your pals won’t forget!

          Pilot powerful yet adorable ships as you team up against waves of revenge-seeking underwater animal life. Navigate the galaxy, create unique attack strategies with your crew, upgrade your ships, and explore the solar system to find challenging intergalactic tales!... `,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Song of Horror: Deluxe Edition",
          gameImage:
            "https://images.igdb.com/igdb/image/upload/t_cover_small/co3bbq.jpg",
          genre: "Adventure",
          bio: `Song of Horror is a psychological horror adventure. Face the manifestations of the Presence, an unpredictable, eldritch AI that reacts to your way of playing: you won't experience two exact gameplays. Death is permanent: you may die, but the horror continues.`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Madden NFL 22",
          gameImage:
            "https://images.igdb.com/igdb/image/upload/t_cover_small/co3a7l.jpg",
          genre: "Simulator",
          bio: `Madden NFL 22 is where gameday happens. All-new features in Franchise include staff management, an enhanced scenario engine, and weekly strategy. Share avatar progress and player class between Face of The Franchise and The Yard with unified progression.`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        { name: "Wizard's Quest", gameImage: "https://images.igdb.com/igdb/image/upload/t_cover_small/co3gje.jpg", genre: "Adventure", bio: `A young Wizard travelling with a savory group of friends ventures through the countryside in pursuit of a dark hooded man. Explore the small world of Wizard's Quest with everything you'd expect in a classic JRPG style game!`, createdAt: new Date(), updatedAt: new Date() },
        { name: "No More Heroes III", gameImage: "https://images.igdb.com/igdb/image/upload/t_cover_small/co2th2.jpg", genre: "Hack and slash/Beat 'em up", bio: `The latest numbered entry in the No More Heroes series.`, createdAt: new Date(), updatedAt: new Date() },
        { name: "Luffy: Way Back Home", gameImage: "https://images.igdb.com/igdb/image/upload/t_cover_small/co3gj0.jpg", genre: "Adventure", bio: `Help Luffy - a little but brave kitten - return home to his family on an extraordinary journey through some stunning, yet dangerous and challenging places, all gathered in this relaxing sliding puzzle game.`, createdAt: new Date(), updatedAt: new Date() },
        { name: "The Skinwalkers", gameImage: "https://images.igdb.com/igdb/image/upload/t_cover_small/co3ma3.jpg", genre: "Indie", bio: `The Skinwalkers is an ambient focused retro styled horror game. (Not related to the skinwalker creppy pasta)`, createdAt: new Date(), updatedAt: new Date() },
        { name: "Witty witch", gameImage: "https://images.igdb.com/igdb/image/upload/t_cover_small/co3gl9.jpg", genre: "Platform", bio: `Witty witch is a 2D puzzle platformer with handpainted graphics. Suitable for a wide audience of all ages and preferences. 100 levels, filled with a variety of monsters will force you to show ingenuity and dexterity. And a funny story will give motivation to reach the end.`, createdAt: new Date(), updatedAt: new Date() },
        { name: "Kakenuke Seishun Sparking!: Limited Edition", gameImage: "https://images.igdb.com/igdb/image/upload/t_cover_small/co3goj.jpg", genre: "Visual Novel", bio: `The limited edition comes with:`, createdAt: new Date(), updatedAt: new Date() },
        { name: "T-Minus 30", gameImage: "https://images.igdb.com/igdb/image/upload/t_cover_small/co3ph5.jpg", genre: "Simulator", bio: `Plan a city and build a space fleet to escape a dying Earth before time runs out. You have 30 minutes to scavenge a post-apocalyptic environment to build infrastructure, grow crops, generate power, and assemble rockets to save as many people as you can.`, createdAt: new Date(), updatedAt: new Date() },
        { name: "Farmer Life Simulator", gameImage: "https://images.igdb.com/igdb/image/upload/t_cover_small/co3ag8.jpg", genre: "Adventure", bio: `Run your farm , plant , fertilize and harvest crops , or open bigger businesses in the town and have fun living the real life of a farmer .`, createdAt: new Date(), updatedAt: new Date() },
        { name: "Vine Worlds", gameImage: "https://images.igdb.com/igdb/image/upload/t_cover_small/co3ma4.jpg", genre: "Adventure", bio: `The sequel to 2020's Vine Realms, Vine Worlds is a 3D MMO-like collectathon based on the Vinesauce community. Inspired by walking simulators, embark on a journey by yourself (or up to 200 players on a server) through many worlds, unlock emotes based on the streamers, collect EXP by exploring or playing minigames to spend on cosmetics, and meet hundreds of characters with unique and humourous dialogue.`, createdAt: new Date(), updatedAt: new Date() },
        { name: "Chupacabras: Night Hunt", gameImage: "https://images.igdb.com/igdb/image/upload/t_cover_small/co3n5k.jpg", genre: "Indie", bio: `Hunt the chupacabras alone or with your friends, explore the map and find the weapons to kill the monster.`, createdAt: new Date(), updatedAt: new Date() },
        { name: "CUBE-e 2", gameImage: "https:https://images.igdb.com/igdb/image/upload/t_cover_small/nocover_qhhlj6.jpg", genre: "Shooter", bio: `2D shooter about robots for one and two players, made in stylish hand-drawn graphics.`, createdAt: new Date(), updatedAt: new Date() },
        { name: "Nine to Five", gameImage: "https://images.igdb.com/igdb/image/upload/t_cover_small/co2t9f.jpg", genre: "Shooter", bio: `Nine to Five is a tactical first-person shooter where smart teamwork triumphs over brute force and reflexes. In the game’s near-future world, it’s the corporations that rule, and being a mercenary for them is just another job.`, createdAt: new Date(), updatedAt: new Date() },
        { name: "Dungeoneers", gameImage: "https://images.igdb.com/igdb/image/upload/t_cover_small/co3csk.jpg", genre: "Adventure", bio: `Dragons have been attacking the village, then retreating to their dungeon lair. Send in the Human Swordsman, Dwarven Brawler, or Elven Huntress - swapping them as needed. BEWARE: You will encounter hex grids, poly dice, and turn-based combat.`, createdAt: new Date(), updatedAt: new Date() },
        { name: "Dagon", gameImage: "https://images.igdb.com/igdb/image/upload/t_cover_small/co3gl2.jpg", genre: "Adventure", bio: `Face unspeakable horrors. Succumb to madness. Welcome to a truly daemonic narrative experience inspired by H. P. Lovecraft.`, createdAt: new Date(), updatedAt: new Date() },
        { name: "Ink", gameImage: "https://images.igdb.com/igdb/image/upload/t_cover_small/co3kuz.jpg", genre: "Shooter", bio: `INK is a first person shooter about Paintball. Start or join one event to teach your rivals who you are.`, createdAt: new Date(), updatedAt: new Date() },
        { name: "VR Pianist", gameImage: "https://images.igdb.com/igdb/image/upload/t_cover_small/co3ghy.jpg", genre: "Indie", bio: `VR Pianist is a VR music game where you can play on virtual piano. Enjoy unique line-art graphic style together with contemporary, classical and orchestral music. Maybe you are the hidden talent waiting to be discovered!`, createdAt: new Date(), updatedAt: new Date() },
        { name: "Sefir: Mafia Story", gameImage: "https://images.igdb.com/igdb/image/upload/t_cover_small/co3kxq.jpg", genre: "Indie", bio: `Sefir: Mafia Story is a reflex and fast thinking based 2D top down shooter game.`, createdAt: new Date(), updatedAt: new Date() },
        { name: "On The Go", gameImage: "https://images.igdb.com/igdb/image/upload/t_cover_small/co3mul.jpg", genre: "Platform", bio: `Help the Minis to reach the portal. Solve clever puzzles by placing new tiles and poking the bots. Become the very best Mini-Operator the world has ever seen!`, createdAt: new Date(), updatedAt: new Date() },
        { name: "Rush Rally Origins", gameImage: "https://images.igdb.com/igdb/image/upload/t_cover_small/co3jig.jpg", genre: "Arcade", bio: `Rush Rally Origins combines the classic top down racing action from the original Rush Rally with the highly praised graphics and physics from Rush Rally 3. Take on 36 new and unique stages across the world, each with the ability to change the time of day and weather. Drive over many challenging surface types including snow, gravel, dirt, mud and tarmac!`, createdAt: new Date(), updatedAt: new Date() },
        { name: "Aurum Online", gameImage: "https://images.igdb.com/igdb/image/upload/t_cover_small/co3gac.jpg", genre: "Role-playing (RPG)", bio: `Game that is being made live in Twitch by JeroMono. An action-MMORPG with cartoon style.`, createdAt: new Date(), updatedAt: new Date() },
        { name: "Endless Boss Fight", gameImage: "https:https://images.igdb.com/igdb/image/upload/t_cover_small/nocover_qhhlj6.jpg", genre: "Adventure", bio: `Endless Boss Fight is a weird 3D hack'n'slash game. A dishonorable bedouin gets trapped in the cave and now he has to take a fight and beat the host of the cave 16 times.`, createdAt: new Date(), updatedAt: new Date() },
        { name: "SpookWare", gameImage: "https://images.igdb.com/igdb/image/upload/t_cover_small/co3o3e.jpg", genre: "Adventure", bio: `Microgames done spooky! Equal parts cute, creepy, and exciting, over 200 microgames across a dozen unique levels. A fast-paced adventure game with a twist.`, createdAt: new Date(), updatedAt: new Date() },
        { name: "Medieval Shop Simulator", gameImage: "https://images.igdb.com/igdb/image/upload/t_cover_small/co3gjo.jpg", genre: "Indie", bio: `Shop simulator in a medieval setting. You need to create products for sale, along the way equipping and improving your store and your skills.`, createdAt: new Date(), updatedAt: new Date() },
        { name: "Fuga: Melodies of Steel - Deluxe Edition", gameImage: "https://images.igdb.com/igdb/image/upload/t_cover_small/co3k71.jpg", genre: "Xbox One", bio: `"We have to fight! If we don't, everyone we love will be taken away!"

        One fateful night, a peaceful village is thrown into the flames of war. Determined to save their families, a group of children boards a giant tank and begins an offensive charge!

        Fuga: Melodies of Steel is an RPG where you place children, each with their own unique characteristics and skills, at different gun turrets in a tank to fight against the enemy.

        ... `, createdAt: new Date(), updatedAt: new Date() },
        { name: "Recompile", gameImage: "https://images.igdb.com/igdb/image/upload/t_cover_small/co1pwf.jpg", genre: "Adventure", bio: `Explore the birth of sapient AI in this atmospheric hacking adventure set in the sprawling world of Recompile.`, createdAt: new Date(), updatedAt: new Date() },
        { name: "Lingering Legacy", gameImage: "https://images.igdb.com/igdb/image/upload/t_cover_small/co3egh.jpg", genre: "Adventure", bio: `The Dark God has ravaged the lands against his brother, letting his demons wage war through the once peaceful world. As the Guardian, you travel the land, purging the foul stain of the demons while in pursuit of the Fallen Guardian to restore balance once again.`, createdAt: new Date(), updatedAt: new Date() },
        { name: "Hit Confirmed", gameImage: "https://images.igdb.com/igdb/image/upload/t_cover_small/co3k4y.jpg", genre: "Indie", bio: `Hit Confirmed is an arcade survival game and scoring.`, createdAt: new Date(), updatedAt: new Date() },
        { name: "Ultimate Bumper Cars: Dodgems", gameImage: "https://images.igdb.com/igdb/image/upload/t_cover_small/co3pbf.jpg", genre: "Racing", bio: `Ultimate Bumper Cars is a realistic Bumper Car Simulator with multiplayer support and realistic physics. This brilliant attraction is fun for all ages. Dodgems or Bumper Cars will always be remembered as one of the longest running and most successful attractions in the amusement industry. No other ride can compete with Dodgems when it comes to family fun and entertainment. Bumper-to-bumper traffic never been this fun – or bump... `, createdAt: new Date(), updatedAt: new Date() },
        { name: "Furry Feet", gameImage: "https://images.igdb.com/igdb/image/upload/t_cover_small/co3jkb.jpg", genre: "Indie", bio: `Furry Feet...Or Paws if you prefer. Does anything else has to be said?`, createdAt: new Date(), updatedAt: new Date() },
        { name: "Battlemage: Magic by Mail", gameImage: "https://images.igdb.com/igdb/image/upload/t_cover_small/co3m0g.jpg", genre: "Adventure", bio: `Your magic will shape your legend! Will history remember you as a corrupt necromancer or a benevolent healer? A sly illusionist or a mighty elementalist?`, createdAt: new Date(), updatedAt: new Date() },
        { name: "Tetragon", gameImage: "https://images.igdb.com/igdb/image/upload/t_cover_small/co1w7g.jpg", genre: "Adventure", bio: `Tetragon is a vast mysterious universe of unique puzzles, magical mazes, and challenges! Your goal is to move the plane realities using the spinning world gravity wisely. Test your mind and guide the brave lumberjack through the scattered worlds in search of his lost son!`, createdAt: new Date(), updatedAt: new Date() },
        { name: "Monster Train First Class", gameImage: "https://images.igdb.com/igdb/image/upload/t_cover_small/co3knc.jpg", genre: "Strategy", bio: `Monster Train brings a new strategic layer to roguelike deckbuilding, with a tactical twist: defend not one, but three vertical battlegrounds simultaneously as you fight to protect the final pyre against the forces of heaven. No playthrough is ever the same, it’s a fresh challenge every time. You’ll never play the same deck twice! Hell has frozen over. Only you can protect the final burning pyre from the forces of heaven and r... `, createdAt: new Date(), updatedAt: new Date() },
        { name: "Guess Picture", gameImage: "https://images.igdb.com/igdb/image/upload/t_cover_small/co3l8i.jpg", genre: "Arcade", bio: `Find the image before your friends to win the game!`, createdAt: new Date(), updatedAt: new Date() },
        { name: "Enchanted Kingdom: Frost Curse - Collector's Edition", gameImage: "https:https://images.igdb.com/igdb/image/upload/t_cover_small/nocover_qhhlj6.jpg", genre: "Puzzle", bio: `The King is dead! As his son, it’s up to you to rule the Empire. But any plans for a coronation are quickly thwarted when a frigid foe attacks your realm! A long-lost relative is after your crown, and their dark magic threatens to take the land into an age of cold darkness. Do you have what it takes to defeat them and save your home in time? Find out in this exhilarating Hidden-Object Puzzle adventure!`, createdAt: new Date(), updatedAt: new Date() },
        { name: "World Soccer Strikers'91", gameImage: "https://images.igdb.com/igdb/image/upload/t_cover_small/co2i2z.jpg", genre: "Arcade", bio: `WSS'91 is here! Welcome to the 90's, kid! Action and graphics on par with the arcades! Up to 8 players at the same time in your own living room! A huge bunch of teams (like, at least 40)! Game modes like tournaments, leagues & everything! What if we both pay for half and swap it every other week?`, createdAt: new Date(), updatedAt: new Date() },
        { name: "Far Away", gameImage: "https://images.igdb.com/igdb/image/upload/t_cover_small/co2lq5.jpg", genre: "Adventure", bio: `The visual novel Far Away tells the thrilling adventure of Krosa, an ordinary girl in a port city, with intersection of police, gangsters, detectives, spies, the rich and the poor. Her fate is decided by your choice.`, createdAt: new Date(), updatedAt: new Date() },
        { name: "Arcade Archives Kuri Kinton", gameImage: "https:https://images.igdb.com/igdb/image/upload/t_cover_small/nocover_qhhlj6.jpg", genre: "Kuri Kinton", bio: `Kuri Kinton is an action game released by TAITO in 1988. The game follows the martial artists of KURI KINTON in their brutal battles with evil fighters, set amid chaos and violence at the end of the millennium. Use special breathing techniques to power up and unleash amazing energy blasts to come out on top!`, createdAt: new Date(), updatedAt: new Date() },
        { name: "Crevice Survival", gameImage: "https://images.igdb.com/igdb/image/upload/t_cover_small/co3knv.jpg", genre: "Xbox One", bio: `undefined`, createdAt: new Date(), updatedAt: new Date() },
        { name: "Squares: Brain Game", gameImage: "https://images.igdb.com/igdb/image/upload/t_cover_small/co3m6w.jpg", genre: "Xbox One", bio: `undefined`, createdAt: new Date(), updatedAt: new Date() },
        { name: "Gelly Break Deluxe", gameImage: "https://images.igdb.com/igdb/image/upload/t_cover_small/co3k4x.jpg", genre: "Adventure", bio: `Gelly Break Deluxe is a couch co-op platformer in which you, as Gel and Lee, have to save the Gellies' home planet from Evil Blob. As a team, use your shooting and switching skills in challenging jump'n'run passages to survive together against the ever-changing enemy types.`, createdAt: new Date(), updatedAt: new Date() },
        { name: "The Daunting House", gameImage: "https://images.igdb.com/igdb/image/upload/t_cover_small/co3gjj.jpg", genre: "Adventure", bio: `You are a Paranormal Researcher who accidently crashed in a village near foothills of Himalayas along with his colleague, you find yourself trapped in a chaos. Something seems very strange about this place, you have to make a safe escape, try finding some help in the mysterious house. Good Luck.`, createdAt: new Date(), updatedAt: new Date() },
        { name: "Sudoku Classic", gameImage: "https://images.igdb.com/igdb/image/upload/t_cover_small/co3jia.jpg", genre: "Card & Board Game", bio: `It's a game, but you can play it as if you were writing with a pen on a piece of paper. You can customize the assist function to your liking.`, createdAt: new Date(), updatedAt: new Date() },
        { name: "Xando: Xtreme & Over the Top", gameImage: "https://images.igdb.com/igdb/image/upload/t_cover_small/co3l8n.jpg", genre: "Indie", bio: `XANDO is a turn-based strategy game that flips the game of Tic-Tac-Toe on its head. Select from 4 rule-bending ability sets in order to complete boards, reduce your opponent's HP, and become champion in this corporate-punk world. Get ready and excited because Tic-Tac-Toe has never been like this!`, createdAt: new Date(), updatedAt: new Date() },
        { name: "White Hell", gameImage: "https://images.igdb.com/igdb/image/upload/t_cover_small/co3ins.jpg", genre: "Adventure", bio: `A retro-style first-person shooter set in a frost-bound Finland after the apocalypse.`, createdAt: new Date(), updatedAt: new Date() },
        { name: "Critadel", gameImage: "https://images.igdb.com/igdb/image/upload/t_cover_small/co3nw6.jpg", genre: "Adventure", bio: `Critadel is a futuristic platform/shooter/roguelike with three playable characters, hundreds of branching paths and over 100,000 unique weapon configurations!`, createdAt: new Date(), updatedAt: new Date() },
        { name: "Marble Pop Paradise", gameImage: "https://images.igdb.com/igdb/image/upload/t_cover_small/co3nok.jpg", genre: "Strategy", bio: `Looking for some stress relief? Sit back, relax and explore mesmerizing scenery while solving stimulating marble pop challenges. Let your worries disappear as you travel to different calming environments and work through the levels with your favorite music playing in the background.`, createdAt: new Date(), updatedAt: new Date() },
        { name: "Islanders: Console Edition", gameImage: "https://images.igdb.com/igdb/image/upload/t_cover_small/co3jln.jpg", genre: "ISLANDERS", bio: `ISLANDERS is a relaxing, minimalist strategy game about building cities on colourful islands. With simple and intuitive building mechanics, you have the freedom to create your own cities on the rugged cliffs of the game’s islands in half an hour or less. Explore these procedurally generated Islands from lush green grasslands to dry deserts and snowy mountainscapes and expand your settlements from sprawling villages to vast cit... `, createdAt: new Date(), updatedAt: new Date() },
        { name: "Quake", gameImage: "https://images.igdb.com/igdb/image/upload/t_cover_small/co3m9g.jpg", genre: "Quake", bio: `In addition to support for modern systems and improved rendering techniques, this remastered version includes both mission packs, Scourge of Armagon and Dissolution of Eternity. It also includes two episodes created by MachineGames: the previously-released Dimension of the Past and a new one called Dimension of the Machine.`, createdAt: new Date(), updatedAt: new Date() },
        { name: "Ghost of Tsushima: Iki Island", gameImage: "https://images.igdb.com/igdb/image/upload/t_cover_small/co3gl4.jpg", genre: "Ghost of Tsushima", bio: `The Iki Island expansion pack comes with a new story, new characters, new environments to explore, new armour for Jin and his horse, new mini-games, new techniques, new enemy types, among other additions. Sucker Punch has also added new animals that Jin can pet.`, createdAt: new Date(), updatedAt: new Date() },
        { name: "Boyfriend Dungeon", gameImage: "https://images.igdb.com/igdb/image/upload/t_cover_small/co1xvt.jpg", genre: "Adventure", bio: `In this title not only are you able to work your way through a variety of procedural dungeons taking on enemies and collecting loot you’re able to spend that loot dating your weapons.`, createdAt: new Date(), updatedAt: new Date() },
        { name: "Northern Journey", gameImage: "https://images.igdb.com/igdb/image/upload/t_cover_small/co3ltz.jpg", genre: "Adventure", bio: `A norwegian happysad game set in a northern land! Adventure through a beautiful and very varied wildereness. Dive, fly, use ziplines and find different weapons to aid your journey to reach the cold mountains and below. Encounter over 50 unique bosses and enemy types!`, createdAt: new Date(), updatedAt: new Date() },
        { name: "Pathological Tires", gameImage: "https://images.igdb.com/igdb/image/upload/t_cover_small/co3iyo.jpg", genre: "Puzzle", bio: `In Pathological Tires you're challenged with finding the route for a car to complete a course in the shortest possible time. Find the optimal balance of minimizing distance and maintaining momentum by avoiding sharp turns and other obstacles. Throughout the game, you'll have to contend with using different cars and driving on road surfaces with different properties, as well as one-way ramps, boost pads, teleporters, and more. ... `, createdAt: new Date(), updatedAt: new Date() },
        { name: "Typing Incremental", gameImage: "https:https://images.igdb.com/igdb/image/upload/t_cover_small/nocover_qhhlj6.jpg", genre: "Indie", bio: `In Typing Incremental, type words to earn money, spend money to unlock new words. Repeat until you can prestige to gain permanent bonuses.`, createdAt: new Date(), updatedAt: new Date() },
        { name: "Slime Rancher: Plortable Edition", gameImage: "https://images.igdb.com/igdb/image/upload/t_cover_small/co3jlo.jpg", genre: "Slime Rancher", bio: `Slime Rancher is a charming, first-person, sandbox experience. Play as Beatrix LeBeau: a plucky, young rancher who sets out for a life a thousand light years away from Earth on the ‘Far, Far Range.’

        Each day will present new challenges and risky opportunities as you attempt to amass a great fortune in the business of slime ranching. Collect colourful slimes, grow crops, harvest resources, and explore the untamed wilds through... `, createdAt: new Date(), updatedAt: new Date() },
        { name: "Demon's Residence", gameImage: "https://images.igdb.com/igdb/image/upload/t_cover_small/co3ocl.jpg", genre: "Adventure", bio: `You've been called in to value the residence before it gets put in sale. Explore & Unsolve the mysteries of the Residence while being watched from many angles. Sometimes it's better to stay quiet..`, createdAt: new Date(), updatedAt: new Date() },
        { name: "Touhou DollDraft", gameImage: "https://images.igdb.com/igdb/image/upload/t_cover_small/co3k7f.jpg", genre: "Indie", bio: `Touhou DollDraft is a game in which you form teams comprising “dollified” Touhou Project characters and send them into battle against each other.`, createdAt: new Date(), updatedAt: new Date() },
        { name: "Humankind: Limited Edition", gameImage: "https:https://images.igdb.com/igdb/image/upload/t_cover_small/nocover_qhhlj6.jpg", genre: "PC (Microsoft Windows)", bio: `undefined`, createdAt: new Date(), updatedAt: new Date() },
        { name: "Doki Doki Gravity Dive", gameImage: "https://images.igdb.com/igdb/image/upload/t_cover_small/co3jqx.jpg", genre: "Arcade", bio: `Doki Doki Gravity Dive is a Score Attack Shoot 'em Up with tiny solar systems as your playground which are populated with tiny worlds and a singularity at their center.

        Enemies relentlessly invade and it is up to you to keep them at bay. At least for as long as you can!

        Each celestial body has its own gravitational pull and to stand even the slightest chance to survive the never ending onslaught, you have to adapt to changes... `, createdAt: new Date(), updatedAt: new Date() },
        { name: "Checkers for Kids", gameImage: "https://images.igdb.com/igdb/image/upload/t_cover_small/co3m6t.jpg", genre: "Xbox One", bio: `undefined`, createdAt: new Date(), updatedAt: new Date() },
        { name: "Old Friends Dog Game", gameImage: "https://images.igdb.com/igdb/image/upload/t_cover_small/co3hfb.jpg", genre: "Simulator", bio: `A cozy game about friendship for people who love dogs. Based on the real life Old Friends Senior Dog Sanctuary!`, createdAt: new Date(), updatedAt: new Date() },
        { name: "Call of Duty: Black Ops Cold War - Season 5", gameImage: "https://images.igdb.com/igdb/image/upload/t_cover_small/co3lz3.jpg", genre: "Call of Duty: Black Ops Cold War", bio: `Nothing stands in the way of Stitch launching the final stages of his plan. If you want the upper hand, arm yourselves to the teeth.`, createdAt: new Date(), updatedAt: new Date() },
        { name: "Axial Disc 1", gameImage: "https://images.igdb.com/igdb/image/upload/t_cover_small/co3lt9.jpg", genre: "Adventure", bio: `A modern turn-based deckbuilding JRPG involving party synergy for attacks that features unique pixel art and chiptune music!`, createdAt: new Date(), updatedAt: new Date() },
        { name: "Marvel's Avengers: Black Panther - War for Wakanda", gameImage: "https://images.igdb.com/igdb/image/upload/t_cover_small/co3kun.jpg", genre: "Marvel's Avengers", bio: `Black Panther - War for Wakanda is an expansion for Marvel's Avengers. It introduces a new playable character, Black Panther, complete with his own gear and cosmetics. This expansion also includes new Villains like Klaw, a new enemy Faction, the new Wakandan Jungle Biome, a new Outpost, a Power Level cap increase, and much more.`, createdAt: new Date(), updatedAt: new Date() },
        { name: "Volleyball Challenge", gameImage: "https://images.igdb.com/igdb/image/upload/t_cover_small/co3knb.jpg", genre: "Adventure", bio: `Activate SUPERPOWERS – in this sports game you can add fireballs, vanishing balls, superspeed, blocks, and many others to your arsenal – play now and discover them for yourself! Develop your player's SKILLS – raise your stats across categories such as serve power and strength, stamina, or attack! You will have a bundle of additional outfits to choose from as well as bags with super contents to open – as long as you win matches... `, createdAt: new Date(), updatedAt: new Date() },
        { name: "Fishing: North Atlantic - Scallops Expansion", gameImage: "https:https://images.igdb.com/igdb/image/upload/t_cover_small/nocover_qhhlj6.jpg", genre: "Fishing North Atlantic", bio: `Expand your gaming experience with the new official Scallop DLC for Fishing: North Atlantic!`, createdAt: new Date(), updatedAt: new Date() },
        { name: "Bullfrogs", gameImage: "https://images.igdb.com/igdb/image/upload/t_cover_small/co3mmy.jpg", genre: "Indie", bio: `Bullfrogs is the flagship title from Thunderworks Games designed by Keith Matejka. It’s a light, family-friendly card game that offers strategic gameplay through simple rules.`, createdAt: new Date(), updatedAt: new Date() },
        { name: "Cat Milk", gameImage: "https://images.igdb.com/igdb/image/upload/t_cover_small/co3ji9.jpg", genre: "Adventure", bio: `This is a white little cat who loves to jump and to get into adventures around the town until he finds milk to drink. Once he accomplishes his mission, then it is time to go home. A fluffy white cat.`, createdAt: new Date(), updatedAt: new Date() },
        { name: "Madden NFL 22: Dynasty Edition", gameImage: "https://images.igdb.com/igdb/image/upload/t_cover_small/co3gl1.jpg", genre: "Simulator", bio: `The Dynasty Edition comes with:
        - 3 Day early access
        - Dual Entitlement
        - Franchise: 100 Staff Points
        - Face of the Franchise & The Yard: The General Player Class starting at Level 10
        - Tom Brady Gear Capsule
        - Choice of 1 out of 32 NFL Stars
        - Choice of Brady or Mahomes Elite Item
        - Exclusive Challenges during early access window
        - Choice of Brady or Mahomes Curated Legends Pack
        - 22 Team Fantasy Packs... `, createdAt: new Date(), updatedAt: new Date() },
        { name: "Almost My Floor", gameImage: "https://images.igdb.com/igdb/image/upload/t_cover_small/co24yj.jpg", genre: "Adventure", bio: `Almost my floor - classic point&click adventure with horror atmosphere. Alex (main character) is a simple man who lives a simple life. But one day everything will change. Is he actually so simple?`, createdAt: new Date(), updatedAt: new Date() },
        { name: "SnowRunner - Season 5: Build & Dispatch", gameImage: "https:https://images.igdb.com/igdb/image/upload/t_cover_small/nocover_qhhlj6.jpg", genre: "SnowRunner", bio: `undefined`, createdAt: new Date(), updatedAt: new Date() },
        { name: "Confessions", gameImage: "https:https://images.igdb.com/igdb/image/upload/t_cover_small/nocover_qhhlj6.jpg", genre: "Indie", bio: `Write down what burdens your soul or read confessions by other people.`, createdAt: new Date(), updatedAt: new Date() },
        { name: "Instant Sports Paradise", gameImage: "https://images.igdb.com/igdb/image/upload/t_cover_small/co3gla.jpg", genre: "Sport", bio: `Instant Sports Paradise makes the sun shine bright on your family workouts! Travel to the other side of the planet and enjoy an experience up to to 4 local players, all on your cosy couch.`, createdAt: new Date(), updatedAt: new Date() },
        { name: "Brotate", gameImage: "https://images.igdb.com/igdb/image/upload/t_cover_small/co3mlo.jpg", genre: "Indie", bio: `A casual platformer with a twist. Navigate your way through the obstacles to reach the end.`, createdAt: new Date(), updatedAt: new Date() },
        { name: "UFO vs Bikini", gameImage: "https://images.igdb.com/igdb/image/upload/t_cover_small/co3a9g.jpg", genre: "Adventure", bio: `Act as an alien driving a UFO and collect materials to upgrade the spacecraft. Kidnap bikini girls, extract purple energy, and study the function of purple energy. Avoid human attacks, strengthen the defense of spacecraft and alien technology.`, createdAt: new Date(), updatedAt: new Date() },
        { name: "Mario 64 and Yoshi", gameImage: "https://images.igdb.com/igdb/image/upload/t_cover_small/co3mpz.jpg", genre: "Super Mario 64", bio: `Mario 64 and Yoshi is a ROM hack/mod by Kaze Emanuar which adds rideable Yoshis to Super Mario 64.`, createdAt: new Date(), updatedAt: new Date() },
        { name: "Ghost Blood", gameImage: "https:https://images.igdb.com/igdb/image/upload/t_cover_small/nocover_qhhlj6.jpg", genre: "Adventure", bio: `undefined`, createdAt: new Date(), updatedAt: new Date() },
        { name: "Tormented Souls", gameImage: "https://images.igdb.com/igdb/image/upload/t_cover_small/co2txl.jpg", genre: "Adventure", bio: `While investigating the disappearance of twin girls at Winterlake - something terrible happens to Caroline Walker.`, createdAt: new Date(), updatedAt: new Date() },
        { name: "Never Return", gameImage: "https://images.igdb.com/igdb/image/upload/t_cover_small/co3kq9.jpg", genre: "Adventure", bio: `Never Return is a 3D free-to-view randomised dungeon action game with light Roguelike elements. With a rich weapon and talent system, the game's real-time combat feels solid and varied, allowing players to build according to their own fighting style and gaming habits. every battle is a dizzying experience, and the challenge of random maps and enemies keeps going further and further.`, createdAt: new Date(), updatedAt: new Date() },
        { name: "Fallow", gameImage: "https://images.igdb.com/igdb/image/upload/t_cover_small/co3ntz.jpg", genre: "Adventure", bio: `Isabelline Fallow lived with her sisters in an isolated corner of a world that had begun to forget itself. Soon, it forgot her sisters as well. Now Isabelline walks in her sleep, every morning a new road home, every morning that home a little different than she remembers it. In her dreams, a shadow twists in agony through the smoke-steeped orange sky. With 80+ hand-drawn pixel art backgrounds, explore and solve puzzles across ... `, createdAt: new Date(), updatedAt: new Date() },
        { name: "Mouse adventure", gameImage: "https://images.igdb.com/igdb/image/upload/t_cover_small/co3aqm.jpg", genre: "Adventure", bio: `3D adventure, platformer. A mouse wants to help a mechanic to repair cheese machine.`, createdAt: new Date(), updatedAt: new Date() },
        { name: "Assimilate! (A Party Game)", gameImage: "https://images.igdb.com/igdb/image/upload/t_cover_small/co2lyi.jpg", genre: "Card & Board Game", bio: `Play with 5-10 players online or locally in this 50s-themed, social deduction party game about a cleverly-disguised robot infiltrating a local, "humans only" sockhop!`, createdAt: new Date(), updatedAt: new Date() },
        { name: "Buck Up And Drive!", gameImage: "https://images.igdb.com/igdb/image/upload/t_cover_small/co3gnr.jpg", genre: "Arcade", bio: `Buck Up And Drive! is an endless driving game inspired by arcade classics, with simple yet intense gameplay featuring a total slap in the face of realism. It includes procedurally generated track with multiple environments to visit, ranging from the somewhat realistic to the completely absurd.`, createdAt: new Date(), updatedAt: new Date() },
        { name: "Green Phoenix", gameImage: "https://images.igdb.com/igdb/image/upload/t_cover_small/co3gjr.jpg", genre: "Arcade", bio: `Green Phoenix is an on-rails 3D space shooter mixed with a deep narrative experience that focuses on the concept of ego and the meaning of freedom. In Green Phoenix, we are transported to a single player story where society is fully technologized and authoritarian and take us on the role of the spaceship AI, Green Phoenix, as it remembers its dead pilot, Dana, and embarks on a journey of revenge.`, createdAt: new Date(), updatedAt: new Date() },
        { name: "Hoa", gameImage: "https://images.igdb.com/igdb/image/upload/t_cover_small/co2f7w.jpg", genre: "Adventure", bio: `Hoa is a platform-adventure game featuring beautiful hand-painted art and a calm, relaxing atmosphere. The game follows the main character, Hoa, as she discovers her own story on a journey through a breathtaking and magical world back to her homeland.`, createdAt: new Date(), updatedAt: new Date() },
        { name: "Aliens: Fireteam Elite", gameImage: "https://images.igdb.com/igdb/image/upload/t_cover_small/co3gu0.jpg", genre: "Shooter", bio: `2202. A mysterious distress call reroutes your Marine Assault Unit to LV-895 in the outer colonies, where deadly Xenomorph legions, hidden corporate secrets, and ancient alien ruins await your arrival. Set in the iconic Alien universe, Aliens: Fireteam Elite is a cooperative 3rd-person survival shooter that drops your fireteam of hardened marines into a desparate fight to contain the evolving Xenomorph threat. Create and custo... `, createdAt: new Date(), updatedAt: new Date() },
        { name: "Night Flight", gameImage: "https://images.igdb.com/igdb/image/upload/t_cover_small/zhmpcayjgbvtwpwc8zmq.jpg", genre: "Adventure", bio: `Japanese Tomy Pyuuta title, part number 007E, released in 1982.`, createdAt: new Date(), updatedAt: new Date() },
        { name: "Axis Football 2021", gameImage: "https://images.igdb.com/igdb/image/upload/t_cover_small/co3asi.jpg", genre: "Indie", bio: `Axis Football is a simulation-style football game featuring the industry's best franchise mode, massive customization, and realistic gameplay.`, createdAt: new Date(), updatedAt: new Date() },
        { name: "Cosmo's Quickstop", gameImage: "https://images.igdb.com/igdb/image/upload/t_cover_small/co28wt.jpg", genre: "Indie", bio: `"Welcome to the fast-paced world of interstellar gas station management! As the new owner and operator of Cosmo’s Quickstop, your skills in customer service and multitasking will be your keys to success. Keep your establishment equipped with the finest amenities for customers on the go, including hot coffee showers, diamond deluxe shipwashes, and sparkling clean glorp rooms! With hard work and a bit of luck, you’ll be well on ... `, createdAt: new Date(), updatedAt: new Date() },
        { name: "Alice Trapped Beyond Wonderland", gameImage: "https://images.igdb.com/igdb/image/upload/t_cover_small/co3kne.jpg", genre: "Adventure", bio: `Discover and solve the extraordinary mysteries from the magical kingdoms beyond the incredible Wonderland, Find where the evil red queen banished your friends, gather clues about their whereabouts, and solve multiple puzzles to rescue them once and for all to get them back to their home in Wonderland.`, createdAt: new Date(), updatedAt: new Date() },
        { name: "Mercenary Operator: Wolves", gameImage: "https://images.igdb.com/igdb/image/upload/t_cover_small/co3gja.jpg", genre: "Indie", bio: `Mercenary Operator: Wolves is a 2D top-down shooter with a focus on methodical, tactical gameplay.`, createdAt: new Date(), updatedAt: new Date() },
        { name: "The Vale", gameImage: "https://images.igdb.com/igdb/image/upload/t_cover_small/co2u0l.jpg", genre: "Adventure", bio: `A sightless warrior’s world is that of intimate detail: An enemy’s, rasping breath; a foot shifts on swampy ground; the crack of steel on leather. The Vale is a audio based action adventure game that sets out to breathe new life into medieval combat.`, createdAt: new Date(), updatedAt: new Date() },
        { name: "The Vale: Shadow of the Crown", gameImage: "https://images.igdb.com/igdb/image/upload/t_cover_small/co3m6u.jpg", genre: "Xbox One", bio: `CLOSE YOUR EYES. BECOME A WARRIOR:`, createdAt: new Date(), updatedAt: new Date() },
        { name: "Space to Grow", gameImage: "https://images.igdb.com/igdb/image/upload/t_cover_small/co3kd8.jpg", genre: "Simulator", bio: `A visual novel where you play as a farmer, father, and community member. Decide what to plant, which faction to support, and what kind of dad you want to be. How will you react when your daughter won't stop crying? When she bullies her friend? Or when she wants to hang out with the cool kids?`, createdAt: new Date(), updatedAt: new Date() },
        { name: "City Driving Simulator 2", gameImage: "https://images.igdb.com/igdb/image/upload/t_cover_small/co3kng.jpg", genre: "Racing", bio: `This isn't one of those fantasy scenarios, where cars behave like children's toys and all you have to do is drive as fast as you can. This is a game for true car enthusiasts. Select one of many meticulously rendered vehicles and take it for a spin in a lifelike environment. Cruise in the suburbs, tear through the city streets and show you have what it takes to call yourself a real driver.`, createdAt: new Date(), updatedAt: new Date() },
        { name: "The Plane Effect", gameImage: "https://images.igdb.com/igdb/image/upload/t_cover_small/co2ryv.jpg", genre: "Adventure", bio: `Players take on the role of Solo, a lonely office worker who's trying to get home to his family after his last day of work. Somewhat worryingly, it seems Solo experiences some trouble remembering his family, and also has to contend with the shifting balance of space and time.`, createdAt: new Date(), updatedAt: new Date() },
        { name: "King's Bounty II", gameImage: "https://images.igdb.com/igdb/image/upload/t_cover_small/co1xs4.jpg", genre: "Adventure", bio: `The King's Bounty turn-based tactics series returns with King’s Bounty 2! In addition to the tactical depth fans expect from its combat, immerse yourself in the fantasy world of Antara with a whole new, non-linear narrative and deep RPG mechanics that give weight to your every decision.`, createdAt: new Date(), updatedAt: new Date() },
        { name: "From View", gameImage: "https://images.igdb.com/igdb/image/upload/t_cover_small/co3ji3.jpg", genre: "Indie", bio: `Explore more than 30 simple but beautiful diorama-like rooms in this relaxing adventure / puzzle / hidden object game hybrid.`, createdAt: new Date(), updatedAt: new Date() },
        { name: "Aliens: Fireteam Elite - Deluxe Edition", gameImage: "https://images.igdb.com/igdb/image/upload/t_cover_small/co3h6v.jpg", genre: "Shooter", bio: `The Deluxe Edition includes the Endeavor Pass + Endeavor Veteran Pack, essentially granting players additional customization options and all future DLC.`, createdAt: new Date(), updatedAt: new Date() },
        { name: "Yuoni", gameImage: "https://images.igdb.com/igdb/image/upload/t_cover_small/co3gjf.jpg", genre: "Adventure", bio: `Yuoni is a first-person narrative horror game that whisks you away to a sunset-stained world to play a deadly game of hide and seek. As grade-schooler Ai, navigate authentic Japanese environments and utilise every hiding space you can find to survive the horrors ahead. And if they find you… run.`, createdAt: new Date(), updatedAt: new Date() },
        { name: "Greak: Memories of Azur", gameImage: "https://images.igdb.com/igdb/image/upload/t_cover_small/co1q3o.jpg", genre: "Adventure", bio: `Greak: Memories of Azur is a beautiful single-player puzzle platformer adventure. You will take the role of three siblings: Greak, Adara and Raydel to guide them through the lands of Azur. Alternate control between them and use their unique abilities to escape from the Urlag invasion.`, createdAt: new Date(), updatedAt: new Date() },
        { name: "Custom Machinery", gameImage: "https://images.igdb.com/igdb/image/upload/t_cover_small/co3jbf.jpg", genre: "Indie", bio: `Custom Machinery is a block based building game in which you can build vehicles and other machines, configure their parts and use them.`, createdAt: new Date(), updatedAt: new Date() },
        { name: "Conquest of Elysium 5", gameImage: "https://images.igdb.com/igdb/image/upload/t_cover_small/co3nij.jpg", genre: "Indie", bio: `Conquest of Elysium 5 is a quick turn based fantasy strategy game with a touch of rogue-like. The game is full of depth, details and monsters. There are also a huge number of factions, each with its own unique gameplay and magic rituals.`, createdAt: new Date(), updatedAt: new Date() },
        { name: "Madden NFL 22: MVP Edition", gameImage: "https://images.igdb.com/igdb/image/upload/t_cover_small/co3d4x.jpg", genre: "Simulator", bio: `The MVP Edition includes:`, createdAt: new Date(), updatedAt: new Date() },
        { name: "Psychonauts 2", gameImage: "https://images.igdb.com/igdb/image/upload/t_cover_small/co1sod.jpg", genre: "Adventure", bio: `Psychonauts 2 is a mind-bending trip through the strange worlds hiding inside our brains. Freshly-minted special agent and acrobat extraordinaire Razputin “Raz” Aquato returns to unpack emotional baggage and expand mental horizons. Along the way he’ll help new friends, like this magical mote of light voiced (and sung) by Jack Black. Raz must use his powers to unravel dark mysteries about the Psychonauts team and his own family... `, createdAt: new Date(), updatedAt: new Date() },
        { name: "Codex", gameImage: "https://images.igdb.com/igdb/image/upload/t_cover_small/co3m7s.jpg", genre: "Role-playing (RPG)", bio: `A shared world adventure MMORPG which abandons absolute persistence in establishing shared story-telling with a beginning and an end.`, createdAt: new Date(), updatedAt: new Date() },
        { name: "Twelve Minutes", gameImage: "https://images.igdb.com/igdb/image/upload/t_cover_small/co3lz1.jpg", genre: "Adventure", bio: `A romantic evening with your wife turns into a violent invasion, as a man breaks into your home, accuses your wife of murder and beats you to death. Only for you to wake up and find yourself stuck in a twelve-minute time loop, doomed to relive the same terror again and again.`, createdAt: new Date(), updatedAt: new Date() },
        { name: "Wandering Trails: A Hiking Game", gameImage: "https://images.igdb.com/igdb/image/upload/t_cover_small/co3gjp.jpg", genre: "Adventure", bio: `Wandering Trails is a peaceful experience of venturing for a hike in the great outdoors. There are no goals, enemies, jump scares or achievements. There is only you, nature and your trusty old camera.`, createdAt: new Date(), updatedAt: new Date() },
        { name: "RiMS Racing", gameImage: "https://images.igdb.com/igdb/image/upload/t_cover_small/co2ysr.jpg", genre: "Racing", bio: `The first motorbike simulation that combines a realistic racing challenge with engineering and mechanics! Ride the world's most powerful motorbikes and optimise their performance by swapping out parts and analysing data in real time.`, createdAt: new Date(), updatedAt: new Date() },
        { name: "Car Mechanic Simulator 2021", gameImage: "https://images.igdb.com/igdb/image/upload/t_cover_small/co3acn.jpg", genre: "Indie", bio: `Work your way to service empire. Get your hands dirty in highly realistic simulation game with great attention to details. Pay a visit to a new Auction house and buy cars in various condition. Expand your range of services by investing in new work space and equipment.`, createdAt: new Date(), updatedAt: new Date() },
        { name: "HALF DEAD 3", gameImage: "https://images.igdb.com/igdb/image/upload/t_cover_small/co3kp3.jpg", genre: "Adventure", bio: `Become a member of the highly anticipated sequel of the co-op sci-fi show. Gather a team of four friends. The more partners the more chances to survive. Find your way out in a deadly new room complex filled with even more sophisticated traps.`, createdAt: new Date(), updatedAt: new Date() },
        { name: "UpGun", gameImage: "https://images.igdb.com/igdb/image/upload/t_cover_small/co3a4o.jpg", genre: "Arcade", bio: `Face your friends in UpGun! Use each round to accumulate skills and overtake your opponents in this crazy deathmatch!`, createdAt: new Date(), updatedAt: new Date() },
        { name: "Zool Redimensioned", gameImage: "https://images.igdb.com/igdb/image/upload/t_cover_small/co3koj.jpg", genre: "Zool", bio: `The Ninja of the Nth Dimension is back! Explore vibrant retro landscapes, discover hidden secrets and take down menacing bosses in a modern reimagining of the classic action platforming adventure Zool.`, createdAt: new Date(), updatedAt: new Date() },
        { name: "Volseons", gameImage: "https://images.igdb.com/igdb/image/upload/t_cover_small/co3gjn.jpg", genre: "Adventure", bio: `Volseons is a turn-based strategy RPG with a rich and vast story, comprised of six epic chapters of intricate plots, lots of monsters to fight and a handful of characters to play!`, createdAt: new Date(), updatedAt: new Date() },
        { name: "Space Scavenger", gameImage: "https://images.igdb.com/igdb/image/upload/t_cover_small/co1pe3.jpg", genre: "Adventure", bio: `Space Scavenger is a game about building up and blowing up spaceships in tight gravity based levels. Survive the unique and increasingly alien-infested galaxies by scavenging powerful spaceship parts and sparse resources.`, createdAt: new Date(), updatedAt: new Date() },
      ],
      {}
    );
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Games', null, {
      truncate: true,
      cascade: true,
      restartIdentity: true
    });
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
