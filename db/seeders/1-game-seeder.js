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
          genre: "Shooter",
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
        {
          name: "Knockout City: Season 2 - Fight at the Movies",
          gameImage:
            "https://images.igdb.com/igdb/image/upload/t_cover_small/co3h3m.jpg",
          genre: "Knockout City",
          bio: `Fight at the Movies stars a new map, the Holowood Drive-In, where the playing field changes in real-time as you brawl through scenes from movies across every genre. What’s a movie without snacks, though? Grab yourself a concession-stand classic with the all-new Soda Ball. Time your throws to cover your rivals’ screens with sticky soda!

          Season 2 also brings a new season of League Play (with its own shiny rewards), tons of new ... `,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Skydrift Infinity",
          gameImage:
            "https://images.igdb.com/igdb/image/upload/t_cover_small/co3gge.jpg",
          genre: "SkyDrift",
          bio: `Skydrift Infinity is an action-packed arcade game focusing on the experience of flying alone, and with others, in a light, quick, fast-paced style.`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Anopek",
          gameImage:
            "https://images.igdb.com/igdb/image/upload/t_cover_small/co3kn1.jpg",
          genre: "Adventure",
          bio: `Venture into an ancient tomb on a distant, forgotten planet. Explore the relics of the past, and face the trials of the gods in this retro first-person shooter action/adventure mashup.`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Night Book",
          gameImage:
            "https://images.igdb.com/igdb/image/upload/t_cover_small/co3gin.jpg",
          genre: "Adventure",
          bio: `Night Book is an interactive occult thriller about an online interpreter who is tricked into reading an ancient book that summons a demon into her home. Loralyn works the night shift remotely from her home, live interpreting video calls from English to French and back again. Currently pregnant, with a husband working far away and caring for her mentally ill father, she is desperately trying to keep her family together and safe... `,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Hyper Dungeon Crawler",
          gameImage:
            "https://images.igdb.com/igdb/image/upload/t_cover_small/co3hjw.jpg",
          genre: "Adventure",
          bio: `Hyper Dungeon Crawler is a turn-based roguelike RPG with crafting. Collect materials and craft your unique tools, weapons, magic spells and other supplements and fight your way through a series of procedurally generated scenes.`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Shin Hayarigami 3",
          gameImage:
            "https://images.igdb.com/igdb/image/upload/t_cover_small/co2ytk.jpg",
          genre: "Adventure",
          bio: `Urban Legends―`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Reptiles: In Hunt",
          gameImage:
            "https://images.igdb.com/igdb/image/upload/t_cover_small/co1xls.jpg",
          genre: "Hack and slash/Beat 'em up",
          bio: `Reptiles: In Hunt gives you the opportunity to face dangerous dinosaurs in world that has fallen. It is a mix of survival and action. Hunt, explore, acquire resources, build new weapons and fight with huge reptiles and dangerous neo humans.`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Final Fantasy III: Pixel Remaster",
          gameImage:
            "https://images.igdb.com/igdb/image/upload/t_cover_small/co3gbt.jpg",
          genre: "Final Fantasy III",
          bio: `The original FINAL FANTASY III comes to life with completely new graphics and audio! A remodeled 2D take on the third game in the world-renowned FINAL FANTASY series! Enjoy the timeless story told through charming retro graphics.`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Winds & Leaves",
          gameImage:
            "https://images.igdb.com/igdb/image/upload/t_cover_small/co3hdc.jpg",
          genre: "Adventure",
          bio: `Learn to read the signs of the various climates, awaken old landmarks, and grow your own forests in this PlayStation VR flora builder.

          Stranded in a barren landscape, you are the only being capable of mastering the ancient art of growing vegetation.

          Journey across the Steppe to discover landmarks left behind from a previous time. Uncover their secrets in order to unlock new equipment and gather ancient dormant seed varieties... `,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "No More Heroes III",
          gameImage:
            "https://images.igdb.com/igdb/image/upload/t_cover_small/co2th2.jpg",
          genre: "Hack and slash/Beat 'em up",
          bio: `The latest numbered entry in the No More Heroes series.`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Chessality",
          gameImage:
            "https://images.igdb.com/igdb/image/upload/t_cover_small/co3gld.jpg",
          genre: "Indie",
          bio: `Fully packed VR chess experience for casual, enthusiasts, and serious alike! Cross-platform chess matches including integration with lichess!`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Glitchpunk",
          gameImage:
            "https://images.igdb.com/igdb/image/upload/t_cover_small/co2sp5.jpg",
          genre: "Indie",
          bio: `Inspired by classic top-down action games, Glitchpunk lets you brawl, shoot and drive your way through a dystopian future. As an android bounty hunter in a brutal world of gangs, cults and corporations there’s plenty of work for you. Lock and load, let her rip!`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "PropHunter",
          gameImage:
            "https://images.igdb.com/igdb/image/upload/t_cover_small/co3kpc.jpg",
          genre: "Adventure",
          bio: `PropHunter - a fresh representative of the genre of hide-and-seek on the net! The players are divided into two teams - one team is hiding by taking the form and properties of objects, the second team is seeking to find impostors among props. The team that eliminates its rivals wins!`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "LogScape: Puzzle Game",
          gameImage:
            "https:https://images.igdb.com/igdb/image/upload/t_cover_small/nocover_qhhlj6.jpg",
          genre: "Card & Board Game",
          bio: `Paul Bunyan is locked up in the enchanted woods. Help him solve puzzles by moving the red wooden block out of the box. Over hundreds of puzzles to play from. Can you be the puzzle master and help Paul Bunyan escape?`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Nine of Wands",
          gameImage:
            "https://images.igdb.com/igdb/image/upload/t_cover_small/co3j3k.jpg",
          genre: "Puzzle",
          bio: `Nine of Wands is an allegorical puzzle game about my thoughts on consumerism.`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Orbals",
          gameImage:
            "https://images.igdb.com/igdb/image/upload/t_cover_small/co2xy8.jpg",
          genre: "Adventure",
          bio: `Orbals is a fast-paced, rolling adventure puzzle game with wonderful graphics and sound. Quickly solve puzzles to master the Mojometer, find new Orbals characters and unlock special abilities.`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Axial Disc 1",
          gameImage:
            "https://images.igdb.com/igdb/image/upload/t_cover_small/co3lt9.jpg",
          genre: "Adventure",
          bio: `A modern turn-based deckbuilding JRPG involving party synergy for attacks that features unique pixel art and chiptune music!`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "GoBlaster",
          gameImage:
            "https://images.igdb.com/igdb/image/upload/t_cover_small/co3ily.jpg",
          genre: "Indie",
          bio: `GoBlaster is a retro bullet-hell game where you can always beat your personal best. Blast through enemies while dodging their overwhelming attacks in a fast-paced and addictive setting. Make your way to the final boss, and just try to survive!`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Kill Them With Cuteness",
          gameImage:
            "https://images.igdb.com/igdb/image/upload/t_cover_small/co3gj8.jpg",
          genre: "Adventure",
          bio: `Kill Them With Cuteness is a Semi-open world 3D Platformer where Aliens have invaded, and the only way to stop them is through cute animals! Collect pets, help the island residents, find the Aliens and KILL THEM WITH CUTENESS!!!`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Hermitage: Strange Case Files",
          gameImage:
            "https://images.igdb.com/igdb/image/upload/t_cover_small/co2ls2.jpg",
          genre: "Adventure",
          bio: `This gripping paranormal horror adventure revolves around Hermitage, the sinister bookstore that attracts most unusual customers – all of whom seem to be involved in mysterious cases bordering on the paranormal.`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Drift King",
          gameImage:
            "https://images.igdb.com/igdb/image/upload/t_cover_small/co3oz2.jpg",
          genre: "Racing",
          bio: `Grab your favorite car, tune it, challenge players in Online Drift battles and become a DRIFT KING!`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "The Prabbits: Happy Dogfights",
          gameImage:
            "https://images.igdb.com/igdb/image/upload/t_cover_small/co2hrg.jpg",
          genre: "Indie",
          bio: `Happy Dogfights! is a fast-paced, 4 player party game, where you take the air as a Prabbit.
          Always up for a friendly fight, the prabbits are organising all kinds of tournaments with their new flying machines. In a series of quick and intense matches, their sole goal is to knock their opponent out of the skies and prove that they are the best pilot in the tribe. These chaotic matches can bring the best… or the worst out of you ... `,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Eat The Wounded",
          gameImage:
            "https://images.igdb.com/igdb/image/upload/t_cover_small/co3ii8.jpg",
          genre: "Adventure",
          bio: `This is a zombie survival open world game with voxel mechanics, crafting and building components.`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Saber Style",
          gameImage:
            "https://images.igdb.com/igdb/image/upload/t_cover_small/co3git.jpg",
          genre: "Indie",
          bio: `Sabre Style VR, a fighting game that makes you nervous and stimulates adrenaline soaring。`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Dungeon of Crawl",
          gameImage:
            "https:https://images.igdb.com/igdb/image/upload/t_cover_small/nocover_qhhlj6.jpg",
          genre: "Adventure",
          bio: `Dive into the ancient dungeons, filled with both treasures and dangers. Slash your foes with oversized axes, toast with fireballs hurled from magical wands or turn them into Swiss cheese with a pair of demonic daggers. Dungeon of Crawl is a modern take on classic sub-genre of RPG games - Dungeon Crawlers. Huge replayability is ensured thanks to many player classes, various ways and paths of character progression and equipment ... `,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Minecraft Dungeons: Ultimate DLC Bundle",
          gameImage:
            "https://images.igdb.com/igdb/image/upload/t_cover_small/co3kfj.jpg",
          genre: "Xbox One",
          bio: `You've played the main story of Minecraft Dungeons, but now it's time to see it through to the End! Pick up all six DLCs with the Ultimate DLC Bundle -the complete story of the Arch-Illager and the Orb of Dominance. With the bundle, you'll get all six DLCs at a lower price than if you purchased them separately.`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Call of Duty: Black Ops Cold War - Season 5",
          gameImage:
            "https://images.igdb.com/igdb/image/upload/t_cover_small/co3lz3.jpg",
          genre: "Call of Duty: Black Ops Cold War",
          bio: `Nothing stands in the way of Stitch launching the final stages of his plan. If you want the upper hand, arm yourselves to the teeth.`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "One Night With Haro",
          gameImage:
            "https://images.igdb.com/igdb/image/upload/t_cover_small/co3jmo.jpg",
          genre: "Adventure",
          bio: `One Night With Haro it's an Indie 2d-Action-Adventure video game made by Emm Tyman in Madborn Studios. The story of this game is about Greek Mystology in modern days! Challenge yourself with Boss fights, learning skills and more!`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Zone Of War",
          gameImage:
            "https://images.igdb.com/igdb/image/upload/t_cover_small/co3gid.jpg",
          genre: "Adventure",
          bio: `Crashed in a parallel planet make your way through the diverse array of enemies already at war! Rival your opponents with your superior intellect. Solve problems, tackle difficult situations, cause havoc to get home, & most of all have fun with your friends or replay the story for hidden content.`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Sudokolorful",
          gameImage:
            "https://images.igdb.com/igdb/image/upload/t_cover_small/co3iru.jpg",
          genre: "PC (Microsoft Windows)",
          bio: `Sudokolorful is a color-based puzzle game (suitable for color blindness) which reinvents the classic Sudoku game. Instead of numbers, play with colors! Challenge your brain with different types of Sudoku: 4x4, 6x6 and 9x9, each one with easy, medium and hard difficulties.`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Saving Ghost",
          gameImage:
            "https://images.igdb.com/igdb/image/upload/t_cover_small/co3hrh.jpg",
          genre: "Indie",
          bio: `Get the ghost out of here under false charge. - Maybe it doesn't require much patience.`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Samurai Warriors 5: Digital Deluxe Edition",
          gameImage:
            "https://images.igdb.com/igdb/image/upload/t_cover_small/co3k98.jpg",
          genre: "Xbox One",
          bio: `undefined`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Get Packed: Fully Loaded",
          gameImage:
            "https://images.igdb.com/igdb/image/upload/t_cover_small/co39sx.jpg",
          genre: "Get Packed",
          bio: `Get Packed: Fully Loaded is the expanded edition of the couch co-op removals game that’s full of calamity and physics-based carnage for 1-4 players.`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Quake: Episode 6 - Dimenson of the Machine",
          gameImage:
            "https://images.igdb.com/igdb/image/upload/t_cover_small/co3m8v.jpg",
          genre: "Quake",
          bio: `Dimension of the Machine is a brand new experience created by the MachineGames team. Continue your fight through brand new dimensions, figure out the secret to restarting the machine, and come face to face with an old foe.`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Ink",
          gameImage:
            "https://images.igdb.com/igdb/image/upload/t_cover_small/co3kuz.jpg",
          genre: "Shooter",
          bio: `INK is a first person shooter about Paintball. Start or join one event to teach your rivals who you are.`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Baldo: The Guardian Owls",
          gameImage:
            "https://images.igdb.com/igdb/image/upload/t_cover_small/co3ogg.jpg",
          genre: "Adventure",
          bio: `Baldo is an action adventure Zelda-like game, with puzzles, exploration and combat all set in a beautifully crafted hand-drawn open world.`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Ghost Blood",
          gameImage:
            "https:https://images.igdb.com/igdb/image/upload/t_cover_small/nocover_qhhlj6.jpg",
          genre: "Adventure",
          bio: `undefined`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Fishards",
          gameImage:
            "https://images.igdb.com/igdb/image/upload/t_cover_small/co3gj5.jpg",
          genre: "Indie",
          bio: `In this game you are wizard fish with legs that can combine 5 elements to create unique spells! Battle strangers, friends or hordes of evils Fishards by simply joining or hosting a room.`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Have a Blast",
          gameImage:
            "https://images.igdb.com/igdb/image/upload/t_cover_small/co3gjm.jpg",
          genre: "Arcade",
          bio: `Have a Blast is a high energy, kinetic, multiplayer party game. Battle through the most ridiculously hazardous corners of the galaxy and use your surroundings to your advantage. Outmaneuver your frenemies and shatter them into colorful bits.`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Speedpunk",
          gameImage:
            "https://images.igdb.com/igdb/image/upload/t_cover_small/co3giv.jpg",
          genre: "Indie",
          bio: `Welcome to the future. In the world where cars are flying. Pickup helmet, fasten your seat belts and fly as fast as you can. Race on different planets. Earn as much stars as you can in each level. Beat other players and become most popular flying car driver. Take your car, it is free-to-play.`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Mini Madness",
          gameImage:
            "https://images.igdb.com/igdb/image/upload/t_cover_small/co3it5.jpg",
          genre: "Indie",
          bio: `Mini Madness is an arcade racing game inspired by such titles as Re-Volt or Micro Machines. Players are racing on crazy, expanded vertically tracks placed in a single-family house and in its large garden, by taking control over miniature remote cars.`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Obsideo",
          gameImage:
            "https://images.igdb.com/igdb/image/upload/t_cover_small/co3ja8.jpg",
          genre: "Indie",
          bio: `Obsideo is a 1-4 player online co-op psychological horror, where you and your team of priests explore different locations experiencing paranormal events in an attempt to figure out what ghost they're dealing with and exorcise it from the property.`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "OshiRabu: Waifus Over Husbandos - Love or Die",
          gameImage:
            "https://images.igdb.com/igdb/image/upload/t_cover_small/co31nh.jpg",
          genre: "Adventure",
          bio: `The distant sound of bells chime through a pure white chapel...`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Easy Flight Simulator",
          gameImage:
            "https://images.igdb.com/igdb/image/upload/t_cover_small/co3jiw.jpg",
          genre: "Simulator",
          bio: `Have you ever dreamed to take commands of fantastic planes like jet, super jumbo, cargo or stunt plane? This game is a real flight simulator with commands designed to be easily taken over at all age. Fly from checkpoints to checkpoints showing your pilot skills in different weather and time of the day conditions and complete all levels. If you always wanted to fly but thought it was over complicated, this game will prove you c... `,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Madness Beverage",
          gameImage:
            "https://images.igdb.com/igdb/image/upload/t_cover_small/co3k48.jpg",
          genre: "Xbox One",
          bio: `undefined`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "TurBot",
          gameImage:
            "https://images.igdb.com/igdb/image/upload/t_cover_small/co3fyz.jpg",
          genre: "Adventure",
          bio: `TurBot is a fast paced race to the finish where you'll combine a wide selection of movement options and power ups to reach the goal faster than anyone else!`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Piczle Puzzle & Watch Collection",
          gameImage:
            "https://images.igdb.com/igdb/image/upload/t_cover_small/co3ggd.jpg",
          genre: "Puzzle",
          bio: `This is the Piczle Puzzle & Watch Collection, a love-letter to the days of LCD handheld gaming! Play one of three logic-puzzles designed to look like those pioneering handheld gaming devices of yore. Piczle Cross Choose from over 200 10x10 nonograms to play. Game A requires you to clear them making fewer than 3 mistakes. Game B let's you puzzle as you please. Your fastest time for each puzzle is recorded. Piczle Pattern Tu... `,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "TeleNovela",
          gameImage:
            "https://images.igdb.com/igdb/image/upload/t_cover_small/co3hjf.jpg",
          genre: "Indie",
          bio: `Embrace your inner Latino and write the greatest love story that will run for about six months on prime time before being replaced by an even greater love story!`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Fuga: Melodies of Steel",
          gameImage:
            "https://images.igdb.com/igdb/image/upload/t_cover_small/co3gll.jpg",
          genre: "Role-playing (RPG)",
          bio: `Fuga is set in a war-ravaged world where a village is destroyed by the fascist Berman Empire. Eleven child survivors band together after the attack and board a gigantic tank known as Taranis - a relic of an ancient but technologically-advanced civilization - in order to travel across the dangerous landscape and rescue their families who were taken prisoner. The Taranis houses a super weapon called the Soul Cannon which is capa... `,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Calturin",
          gameImage:
            "https://images.igdb.com/igdb/image/upload/t_cover_small/co2z69.jpg",
          genre: "Indie",
          bio: `Calturin is a Bullet Hell Boss Rush game where you are resurrected by a necromancer who now holds you in his power. Promised your freedom if you do his bidding, you must traverse the Gauntlet of Portals to unknown lands and conquer deadly beings.

          - 10 unique boss fights and 2 paths of pain.
          - A compelling story told through fully voiced NPCs.
          - Choose how to improve your skills as you become stronger.
          - Designed to be suitabl... `,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Timothy's Night",
          gameImage:
            "https://images.igdb.com/igdb/image/upload/t_cover_small/co3n2o.jpg",
          genre: "Adventure",
          bio: `An alien invasion, gangsters, an open world and a whole lot of action.

          Welcome to Little Fish City. It’s a great place to live, especially if you own it! Timothy is an oddball gangster, whose day-to-day life is interrupted by a full-color alien invasion. They’re here and nothing will be the same again!

          We’ve returned to Little Fish City, YOUR CITY, for Timothy’s Night: an open world videogame full of action and adventure.

          T... `,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Ghost of Tsushima: Iki Island",
          gameImage:
            "https://images.igdb.com/igdb/image/upload/t_cover_small/co3gl4.jpg",
          genre: "Ghost of Tsushima",
          bio: `The Iki Island expansion pack comes with a new story, new characters, new environments to explore, new armour for Jin and his horse, new mini-games, new techniques, new enemy types, among other additions. Sucker Punch has also added new animals that Jin can pet.`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Welcome to the Polyverse",
          gameImage:
            "https://images.igdb.com/igdb/image/upload/t_cover_small/co3n3u.jpg",
          genre: "Adventure",
          bio: `Robert Kane, convinced he is living in a simulation, will do anything he has to in order to get out. He must stop at nothing to unlock the secrets of this world and accomplish his goal.`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "SpookWare",
          gameImage:
            "https://images.igdb.com/igdb/image/upload/t_cover_small/co3o3e.jpg",
          genre: "Adventure",
          bio: `Microgames done spooky! Equal parts cute, creepy, and exciting, over 200 microgames across a dozen unique levels. A fast-paced adventure game with a twist.`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Off The Road Unleashed",
          gameImage:
            "https://images.igdb.com/igdb/image/upload/t_cover_small/co3knj.jpg",
          genre: "Racing",
          bio: `Immerse yourself in realistic sandbox environments all filled with challenging tasks and collectables. Sand dunes, frozen plains, mountains to climb and conquer. Explore 5 worlds with your favorite vehicle or just take a hike on foot!`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Final Fantasy: Pixel Remaster",
          gameImage:
            "https://images.igdb.com/igdb/image/upload/t_cover_small/co3gbr.jpg",
          genre: "Final Fantasy",
          bio: `The original FINAL FANTASY comes to life with completely new graphics and audio! A remodeled 2D take on the first game in the world-renowned FINAL FANTASY series! Enjoy the timeless story told through charming retro graphics.`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Ace Attorney Turnabout Collection",
          gameImage:
            "https://images.igdb.com/igdb/image/upload/t_cover_small/co2ytl.jpg",
          genre: "Adventure",
          bio: `This bundle is a Japanese-only edition that includes The Great Ace Attorney Chronicles and Phoenix Wright: Ace Attorney Trilogy.`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "World Soccer Strikers'91",
          gameImage:
            "https://images.igdb.com/igdb/image/upload/t_cover_small/co2i2z.jpg",
          genre: "Arcade",
          bio: `WSS'91 is here! Welcome to the 90's, kid! Action and graphics on par with the arcades! Up to 8 players at the same time in your own living room! A huge bunch of teams (like, at least 40)! Game modes like tournaments, leagues & everything! What if we both pay for half and swap it every other week?`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Drama",
          gameImage:
            "https://images.igdb.com/igdb/image/upload/t_cover_small/co3oxl.jpg",
          genre: "Adventure",
          bio: `An exciting game, full of traps and mysteries to be solved in each of its 96 levels. In this hostile story you must put all your skills to the test to solve the hidden enigmas and lead Frank to the end of this compelling story in 2D.`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "ScrewUp",
          gameImage:
            "https://images.igdb.com/igdb/image/upload/t_cover_small/co3jar.jpg",
          genre: "Adventure",
          bio: `ScrewUp is a survival game where the player has to survive on a deserted island that nobody knows it’s name. There are many things that wait to be explored.`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Mahjong Masters",
          gameImage:
            "https:https://images.igdb.com/igdb/image/upload/t_cover_small/nocover_qhhlj6.jpg",
          genre: "Arcade",
          bio: `Mahjong Masters is a classic mahjong game with over 300 puzzle boards to solve. Match two of a kind to empty the whole board to progress to the next. Change background and tiles to your preferences and choose from a variety of backgrounds and tiles. Complete the daily challenges and have fun!`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "World Legends",
          gameImage:
            "https://images.igdb.com/igdb/image/upload/t_cover_small/co3ne7.jpg",
          genre: "Indie",
          bio: `World Legends Best game and high Graphic and great Gameplay`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "The Wratch's Den",
          gameImage:
            "https://images.igdb.com/igdb/image/upload/t_cover_small/co3j9d.jpg",
          genre: "Indie",
          bio: `Dig out a proper dungeon, grow your little villainous society, set up defences against heroes, and survive long enough to retrieve the Orbs of Infinite Power.

          The Wratch has been defeated, they have gone into hiding with the pitiful remains of their army. Now it's up to you to dig out a proper base for The Wratch. You'll have to defend them against the heartless heroes come for easy prestige, and retrieve the 3 legendary Orbs... `,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Mario 64 and Yoshi",
          gameImage:
            "https://images.igdb.com/igdb/image/upload/t_cover_small/co3mpz.jpg",
          genre: "Super Mario 64",
          bio: `Mario 64 and Yoshi is a ROM hack/mod by Kaze Emanuar which adds rideable Yoshis to Super Mario 64.`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Medieval Shop Simulator",
          gameImage:
            "https://images.igdb.com/igdb/image/upload/t_cover_small/co3gjo.jpg",
          genre: "Indie",
          bio: `Shop simulator in a medieval setting. You need to create products for sale, along the way equipping and improving your store and your skills.`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "MARVEL Future Revolution",
          gameImage:
            "https://images.igdb.com/igdb/image/upload/t_cover_small/co3dk9.jpg",
          genre: "Role-playing (RPG)",
          bio: `MARVEL Future Revolution is Marvel’s first Open World RPG mobile game, featuring an original storyline with fan-favorite Marvel Super Heroes and Super Villains. Written by veteran comics writer Marc Sumerak (Avengers, Thor, Iron Man, Fantastic Four, Black Panther, Captain Marvel, etc.), MARVEL Future Revolution begins with numerous Earths converging across multi-dimensions to form an entirely new ‘Primary Earth.’ As agents of ... `,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Naraka: Bladepoint",
          gameImage:
            "https://images.igdb.com/igdb/image/upload/t_cover_small/co2xrt.jpg",
          genre: "Adventure",
          bio: `Naraka: Bladepoint is a 60-player action Battle Royale offering players insane mobility powered by parkour and grappling hook, a vast arsenal of melee and ranged weapons, and a roaster of characters with powerful abilities—transform yourself into a gigantic Vajra Warrior and crush your enemies!`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "City Match: A Block Pop Puzzle Game",
          gameImage:
            "https:https://images.igdb.com/igdb/image/upload/t_cover_small/nocover_qhhlj6.jpg",
          genre: "Card & Board Game",
          bio: `Jenny the City Demolitionist needs your help! Help destroy each building infrastructure by solving each puzzle. Match at least 2 pieces together or combine more to create new power ups to be used. Explore different type of power ups available or bring your own.`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Battlemage: Magic by Mail",
          gameImage:
            "https://images.igdb.com/igdb/image/upload/t_cover_small/co3m0g.jpg",
          genre: "Adventure",
          bio: `Your magic will shape your legend! Will history remember you as a corrupt necromancer or a benevolent healer? A sly illusionist or a mighty elementalist?`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Wandering Trails: A Hiking Game",
          gameImage:
            "https://images.igdb.com/igdb/image/upload/t_cover_small/co3gjp.jpg",
          genre: "Adventure",
          bio: `Wandering Trails is a peaceful experience of venturing for a hike in the great outdoors. There are no goals, enemies, jump scares or achievements. There is only you, nature and your trusty old camera.`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Sedomairi",
          gameImage:
            "https://images.igdb.com/igdb/image/upload/t_cover_small/co3hr8.jpg",
          genre: "Indie",
          bio: `Sedomairi is a first-person action horror game in which you wander through a randomly generated world that looks like an old Japanese house. Use the radio that can detect the distance and direction of the enemy to escape from the enemy, catch all the straw figures, and escape from the Sedo.`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "SINce Memories: Off the Starry Sky - Limited Edition",
          gameImage:
            "https://images.igdb.com/igdb/image/upload/t_cover_small/co3gmz.jpg",
          genre: "Visual Novel",
          bio: `The Limited Edition contains:`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Secret of the Rendrasha Blade",
          gameImage:
            "https://images.igdb.com/igdb/image/upload/t_cover_small/co210c.jpg",
          genre: "Adventure",
          bio: `A classic JRPG at heart, but with modern game design elements baked in, with a ton of secrets, hidden humor, easter eggs, and questionable / offensive choices to be made.`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "The Plane Effect",
          gameImage:
            "https://images.igdb.com/igdb/image/upload/t_cover_small/co2ryv.jpg",
          genre: "Adventure",
          bio: `Players take on the role of Solo, a lonely office worker who's trying to get home to his family after his last day of work. Somewhat worryingly, it seems Solo experiences some trouble remembering his family, and also has to contend with the shifting balance of space and time.`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Demon's Residence",
          gameImage:
            "https://images.igdb.com/igdb/image/upload/t_cover_small/co3ocl.jpg",
          genre: "Adventure",
          bio: `You've been called in to value the residence before it gets put in sale. Explore & Unsolve the mysteries of the Residence while being watched from many angles. Sometimes it's better to stay quiet..`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Draft of Darkness",
          gameImage:
            "https://images.igdb.com/igdb/image/upload/t_cover_small/co3jg8.jpg",
          genre: "Card & Board Game",
          bio: `Draft of Darkness is a survival horror deck builder with roguelike dungeon exploration. Recruit allies, synergize their decks to create powerful card combos, manage your resources, explore procedurally generated maps and determine the outcome of the story.`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Codex",
          gameImage:
            "https://images.igdb.com/igdb/image/upload/t_cover_small/co3m7s.jpg",
          genre: "Role-playing (RPG)",
          bio: `A shared world adventure MMORPG which abandons absolute persistence in establishing shared story-telling with a beginning and an end.`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Buraigun: Galaxy Storm",
          gameImage:
            "https:https://images.igdb.com/igdb/image/upload/t_cover_small/nocover_qhhlj6.jpg",
          genre: "Arcade",
          bio: `A vertical STG that reproduces the atmosphere of an arcade game of the 90’s.`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Enchanted Kingdom: Frost Curse - Collector's Edition",
          gameImage:
            "https:https://images.igdb.com/igdb/image/upload/t_cover_small/nocover_qhhlj6.jpg",
          genre: "Puzzle",
          bio: `The King is dead! As his son, it’s up to you to rule the Empire. But any plans for a coronation are quickly thwarted when a frigid foe attacks your realm! A long-lost relative is after your crown, and their dark magic threatens to take the land into an age of cold darkness. Do you have what it takes to defeat them and save your home in time? Find out in this exhilarating Hidden-Object Puzzle adventure!`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "AutoChess of Gensokyo",
          gameImage:
            "https://images.igdb.com/igdb/image/upload/t_cover_small/co3gih.jpg",
          genre: "Strategy",
          bio: `undefined`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Stay Safe",
          gameImage:
            "https://images.igdb.com/igdb/image/upload/t_cover_small/co2rfh.jpg",
          genre: "Adventure",
          bio: `Race against an hostile world that will challenge you every freakin' time! Deadly obstacles, wicked curves, it's time to show your racing and platformer skills!`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Cliché Adventure",
          gameImage:
            "https://images.igdb.com/igdb/image/upload/t_cover_small/co3nav.jpg",
          genre: "Adventure",
          bio: `Cliché Adventure is an open world top down adventure game. It can be played as single player, or with a friend. The game has five unique regions joined by a hub world. Each area contains an over world, a cave system, and a temple to explore. There are Six main boss fights, and twenty mini bosses.`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Vomitoreum",
          gameImage:
            "https://images.igdb.com/igdb/image/upload/t_cover_small/co2tm8.jpg",
          genre: "Adventure",
          bio: `A dark and arid hellscape inspired by the likes of Metroid Prime and Dark Souls, Vomitoreum is an FPS Metroidvania set in an interconnected and nightmarish world.

          Explore a land that has been plagued with an eldritch infection, a horrible fog that blankets the world and turns it’s denizens into wretched mutants. Delve deep into the ruins of this plagued world and find a cure for this horrid blight.

          You are the Nephilem, ... `,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Truffle Hogs",
          gameImage:
            "https://images.igdb.com/igdb/image/upload/t_cover_small/co3hq8.jpg",
          genre: "Indie",
          bio: `Truffle Hogs is a free-to-play, mobile multiplayer game where you can hang out and play with friends. Search for buried truffles—or steal them from other players! Decorate your treehouse, unlock cool hats, or just run around emoting.`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Xando: Xtreme & Over the Top",
          gameImage:
            "https://images.igdb.com/igdb/image/upload/t_cover_small/co3l8n.jpg",
          genre: "Indie",
          bio: `XANDO is a turn-based strategy game that flips the game of Tic-Tac-Toe on its head. Select from 4 rule-bending ability sets in order to complete boards, reduce your opponent's HP, and become champion in this corporate-punk world. Get ready and excited because Tic-Tac-Toe has never been like this!`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Crevice Survival",
          gameImage:
            "https://images.igdb.com/igdb/image/upload/t_cover_small/co3knv.jpg",
          genre: "Xbox One",
          bio: `undefined`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Ultimate Bumper Cars: Dodgems",
          gameImage:
            "https://images.igdb.com/igdb/image/upload/t_cover_small/co3pbf.jpg",
          genre: "Racing",
          bio: `Ultimate Bumper Cars is a realistic Bumper Car Simulator with multiplayer support and realistic physics. This brilliant attraction is fun for all ages. Dodgems or Bumper Cars will always be remembered as one of the longest running and most successful attractions in the amusement industry. No other ride can compete with Dodgems when it comes to family fun and entertainment. Bumper-to-bumper traffic never been this fun – or bump... `,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Black Book",
          gameImage:
            "https://images.igdb.com/igdb/image/upload/t_cover_small/co1wve.jpg",
          genre: "Adventure",
          bio: `A fusion of card-based RPGs and Adventure games, “Black Book” is a haunting tale of a young sorceress, who gave her life to serve the dark forces. Dive into the cold, yet alluring world of folk tales - and uncover the secrets that hide in the darkness.`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Confessions",
          gameImage:
            "https:https://images.igdb.com/igdb/image/upload/t_cover_small/nocover_qhhlj6.jpg",
          genre: "Indie",
          bio: `Write down what burdens your soul or read confessions by other people.`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Foreclosed",
          gameImage:
            "https://images.igdb.com/igdb/image/upload/t_cover_small/co29md.jpg",
          genre: "Adventure",
          bio: `Foreclosed is a Cyberpunk action-shooter set in a comic book world. Follow the events of Evan Kapnos in this original comic book styled game and discover how losing your identity is all too possible.`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Waver: A Typing Adventure",
          gameImage:
            "https://images.igdb.com/igdb/image/upload/t_cover_small/co3n2l.jpg",
          genre: "Indie",
          bio: `A combination typing test and rhythm game, featuring a story mode about touring fans, a typing speed test, and a series of endurance challenges for high score.`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "PSYCRON",
          gameImage:
            "https://images.igdb.com/igdb/image/upload/t_cover_small/co2xot.jpg",
          genre: "Adventure",
          bio: `PSYCRON is a 2D action Metroidvania where you try and escape the deep space scientific research vessel CEREMOS. Explore four wildly different areas as you fight strange enemies, acquire upgrades which change how you traverse the station and discover what happened to the crew of the CEREMOS as you try to escape.`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Goroons",
          gameImage:
            "https://images.igdb.com/igdb/image/upload/t_cover_small/co359b.jpg",
          genre: "Indie",
          bio: `Morph. Act. Together. Save your planet! "These lovable creatures need to work together and stop the destruction of their planet!"`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "RiMS Racing",
          gameImage:
            "https://images.igdb.com/igdb/image/upload/t_cover_small/co2ysr.jpg",
          genre: "Racing",
          bio: `The first motorbike simulation that combines a realistic racing challenge with engineering and mechanics! Ride the world's most powerful motorbikes and optimise their performance by swapping out parts and analysing data in real time.`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Quake",
          gameImage:
            "https://images.igdb.com/igdb/image/upload/t_cover_small/co3m9g.jpg",
          genre: "Quake",
          bio: `In addition to support for modern systems and improved rendering techniques, this remastered version includes both mission packs, Scourge of Armagon and Dissolution of Eternity. It also includes two episodes created by MachineGames: the previously-released Dimension of the Past and a new one called Dimension of the Machine.`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Northern Journey",
          gameImage:
            "https://images.igdb.com/igdb/image/upload/t_cover_small/co3ltz.jpg",
          genre: "Adventure",
          bio: `A norwegian happysad game set in a northern land! Adventure through a beautiful and very varied wildereness. Dive, fly, use ziplines and find different weapons to aid your journey to reach the cold mountains and below. Encounter over 50 unique bosses and enemy types!`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Whispers in the Dark",
          gameImage:
            "https://images.igdb.com/igdb/image/upload/t_cover_small/co3pgq.jpg",
          genre: "Adventure",
          bio: `undefined`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Green Phoenix",
          gameImage:
            "https://images.igdb.com/igdb/image/upload/t_cover_small/co3gjr.jpg",
          genre: "Arcade",
          bio: `Green Phoenix is an on-rails 3D space shooter mixed with a deep narrative experience that focuses on the concept of ego and the meaning of freedom. In Green Phoenix, we are transported to a single player story where society is fully technologized and authoritarian and take us on the role of the spaceship AI, Green Phoenix, as it remembers its dead pilot, Dana, and embarks on a journey of revenge.`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Wowowow Korone Box",
          gameImage:
            "https://images.igdb.com/igdb/image/upload/t_cover_small/co3p5o.jpg",
          genre: "Adventure",
          bio: `"WOWOWOW KORONE BOX" is a hololive fangame featuring Inugami Korone, member of hololive GAMERS. The game is a top-down shooter with the objective of collecting as many Korone Boxes as possible without getting hit even once. Korone must contend with many enemies and boss battles, but is given a variety of weapons to help her survive.

          "WOWOWOW KORONE BOX" is inspired by Vlambeer's "Super Crate Box" and "Nuclear Throne".... `,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Blair Witch VR",
          gameImage:
            "https://images.igdb.com/igdb/image/upload/t_cover_small/co3mch.jpg",
          genre: "Adventure",
          bio: `Blair Witch: VR Edition is a story-driven psychological horror game from the creative minds behind the critically acclaimed The Medium. Experience first-hand the toll that fear can take on the mind in an original story inspired by the cinematic lore of Blair Witch, designed for Virtual Reality.`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Destiny 2: Beyond Light - Season of the Lost",
          gameImage:
            "https://images.igdb.com/igdb/image/upload/t_cover_small/co3nu5.jpg",
          genre: "Destiny 2: Beyond Light",
          bio: `In Season of the Lost, players will blur the line between technology and magic to find Mara Sov's lost Awoken as they search for answers.`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Axis Football 2021",
          gameImage:
            "https://images.igdb.com/igdb/image/upload/t_cover_small/co3asi.jpg",
          genre: "Indie",
          bio: `Axis Football is a simulation-style football game featuring the industry's best franchise mode, massive customization, and realistic gameplay.`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Tetris Beat",
          gameImage:
            "https://images.igdb.com/igdb/image/upload/t_cover_small/co3ofb.jpg",
          genre: "Music",
          bio: `Tetris Beat - The world famous Tetris® puzzle game is blocking to a new beat, fusing its hit gameplay with exclusive music and innovative rhythm mechanics. The game features a diverse and eclectic lineup of incredible musicians including Alison Wonderland, GARZA, Hannah Diamond, Octo Octa, Dauwd, CINTHIE and many more, with new exclusive songs added every month from today's hottest and up-and-coming talent.

          In Tetris Beat, pl... `,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Brotate",
          gameImage:
            "https://images.igdb.com/igdb/image/upload/t_cover_small/co3mlo.jpg",
          genre: "Indie",
          bio: `A casual platformer with a twist. Navigate your way through the obstacles to reach the end.`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "CAT Interstellar: Recast",
          gameImage:
            "https://images.igdb.com/igdb/image/upload/t_cover_small/co3jma.jpg",
          genre: "Indie",
          bio: `Play as a DOG-VI drone, a newly activated maintenance bot, who is assisting in the terraforming effort on Mars. After a predictable yet unfortunate accident DOG finds herself uncovering the past of a seemingly barren planet.
          This is a single player experience with a deep story and detailed environments. The game takes place over 6 chapters. Each chapter has a unique environment ranging from orbital platforms, an ammonia manufa... `,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "In My Defense",
          gameImage:
            "https://images.igdb.com/igdb/image/upload/t_cover_small/co30qc.jpg",
          genre: "Arcade",
          bio: `This is a challenging, old-school, retro, side-scrolling shooter. The player must defend the base against 28 waves of alien attackers. There are also 10 bonus twin-stick shooter levels, where the player controls a security robot defending the base from enemies tunneling in from below.`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "The Light will lead you HOME",
          gameImage:
            "https://images.igdb.com/igdb/image/upload/t_cover_small/co3p2f.jpg",
          genre: "Indie",
          bio: `Play as Brian, a teenage boy living with his parents. You wake up to find yourself trapped in your house with a horrible monster that only has one weakness: light. Can you get out?`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Horror Tales: The Wine",
          gameImage:
            "https://images.igdb.com/igdb/image/upload/t_cover_small/co2i9m.jpg",
          genre: "Adventure",
          bio: `Immerse yourself in a post-pandemic island and confront your worst fears! Explore a vast, vertical and mysterious world apparently abandoned and find the precious wine bottle to cure the illness that killed everyone. But be aware; someone is lurking in the dark.`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Pixasso",
          gameImage:
            "https://images.igdb.com/igdb/image/upload/t_cover_small/co3kg4.jpg",
          genre: "Indie",
          bio: `Pixasso is a relaxing game for lovers of the coloring of tiny pixel art. Color more than 50 pictures and have fun!`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Closer",
          gameImage:
            "https:https://images.igdb.com/igdb/image/upload/t_cover_small/nocover_qhhlj6.jpg",
          genre: "Adventure",
          bio: `Closer is a creative adventure game. This is a game with distinctive art and gameplay. It contains a lot of creative designs. The game tries to make it interesting without fighting. Players need to think about how to accomplish by "winning by cleverness". Each section of the game will have a different experience and gameplay, so that players can experience freshness in every part, and can think about emotional cues of the curr... `,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Overheat",
          gameImage:
            "https://images.igdb.com/igdb/image/upload/t_cover_small/co3jb4.jpg",
          genre: "Indie",
          bio: `Overheat is a sidescrolling platformer in which a robot climbs a city to get back to its home planet. How hard can that be?`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Pirates of the Asteroid Belt",
          gameImage:
            "https://images.igdb.com/igdb/image/upload/t_cover_small/co35b7.jpg",
          genre: "Indie",
          bio: `Role-play shooter in VR. Your personal space adventure.`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Minecraft Dungeons: Ultimate Edition",
          gameImage:
            "https://images.igdb.com/igdb/image/upload/t_cover_small/co3kdi.jpg",
          genre: "Xbox One",
          bio: `Experience the complete story of Minecraft Dungeons from the beginning to the End! Minecraft Dungeons: Ultimate Edition includes the base game and all six DLCs.`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "CrossCode: Deluxe Edition",
          gameImage:
            "https://images.igdb.com/igdb/image/upload/t_cover_small/co3ke2.jpg",
          genre: "Xbox One",
          bio: `undefined`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "The Illusion",
          gameImage:
            "https://images.igdb.com/igdb/image/upload/t_cover_small/co3hjg.jpg",
          genre: "Adventure",
          bio: `The Illusion Is a Puzzle Game Where You Have To Pass Through A Different Set Of Tests For Your Brain, Memory, senses and interactivity with the environment While You Are Trapped In mysterious mansion surrounded With Unknown Dark Forces`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Farm Together: Deluxe Edition",
          gameImage:
            "https://images.igdb.com/igdb/image/upload/t_cover_small/co3ggh.jpg",
          genre: "Indie",
          bio: `A new and unique farming experience where you grow crops, plant trees, take care of the animals and much more.

          A game where you can customize everything: the farm, your look, create your avatar, build a house and decorate it, customize your pet.

          This game is a world that follows its course even if you don't play it. So there will always be something new to do when you re-enter the game.

          The Deluxe Edition includes all 12 DL... `,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Tomb Sweeper",
          gameImage:
            "https:https://images.igdb.com/igdb/image/upload/t_cover_small/nocover_qhhlj6.jpg",
          genre: "Arcade",
          bio: `Tomb Sweeper is an intense and exciting maze game. It’s a unique and interesting title where your focus is to try to move the player from wall to all or corner to corner in order to create a path and complete the level. Once the level is full of color, you can reach the next level. There are more than 100 levels to go through, and you will have a lot of fun enjoying every moment, while also testing your skills. Do you have wha... `,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Sudoku Classic",
          gameImage:
            "https://images.igdb.com/igdb/image/upload/t_cover_small/co3jia.jpg",
          genre: "Card & Board Game",
          bio: `It's a game, but you can play it as if you were writing with a pen on a piece of paper. You can customize the assist function to your liking.`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "CUBE-e 2",
          gameImage:
            "https:https://images.igdb.com/igdb/image/upload/t_cover_small/nocover_qhhlj6.jpg",
          genre: "Shooter",
          bio: `2D shooter about robots for one and two players, made in stylish hand-drawn graphics.`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Dungeon's Hell",
          gameImage:
            "https:https://images.igdb.com/igdb/image/upload/t_cover_small/nocover_qhhlj6.jpg",
          genre: "Adventure",
          bio: `Do you have what it takes to tackle the Dungeon’s Hell? This exciting and fun game for everyone has 60+ different and really hard levels that you need to complete in order to show your prowess. It’s a very engaging game with endless gameplay, and you can always test out new ways to enjoy the experience and immerse yourself as much as possible. With Dungeon’s Hell, you always have a cool platforming experience and you need to t... `,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Smashroom",
          gameImage:
            "https://images.igdb.com/igdb/image/upload/t_cover_small/co3ie6.jpg",
          genre: "Adventure",
          bio: `The faith of the forest is threatened by evil forces. A mysterious curse has turned your human body into a small mushroom and your world is invaded by molds, but not all is lost. Your new form comes with new abilities!`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Murus",
          gameImage:
            "https://images.igdb.com/igdb/image/upload/t_cover_small/co3m4a.jpg",
          genre: "Platform",
          bio: `A hardcore speedrunning platformer where you cannot touch the ground!`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Power & Revolution: 2021 Edition",
          gameImage:
            "https://images.igdb.com/igdb/image/upload/t_cover_small/co3iqc.jpg",
          genre: "Simulator",
          bio: `A new expansion of the ultra-realistic simulator of today's world where you play as the head of state or as the opposition! New Features for 2021: administration of the EU, Covid vaccinations, Biden's Challenge, political coalitions, diplomatic negotiations, worldwide tax and free-trade agreements.`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "U.F.O. K.O. Tower Defense",
          gameImage:
            "https://images.igdb.com/igdb/image/upload/t_cover_small/co3aoh.jpg",
          genre: "Indie",
          bio: `Place lasers, missile launchers, sniper turrets, and use combat strategies such as airstrikes and the space ray to repel waves of alien invaders in this sci-fi tower defense game.`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Dungeon Break TD",
          gameImage:
            "https://images.igdb.com/igdb/image/upload/t_cover_small/co3gie.jpg",
          genre: "Indie",
          bio: `Immerse in this epic journey, where Tower Defense meets with Battle Chess. Control your Army, summon epic Heroes, build your Defenses and stop the vicious hordes of monsters. Climb the leaderboard in Multiplayer or slaughter enemies in Singleplayer.`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Starbase Admiral",
          gameImage:
            "https:https://images.igdb.com/igdb/image/upload/t_cover_small/nocover_qhhlj6.jpg",
          genre: "Indie",
          bio: `A real-time space stategy game with ship customization. Design your own ships, compose your fleet and use it to face off against other players. You will create your own in-game base with powerplants, refineries and base defences to ensure a healthy economy.`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "One: The Card Game",
          gameImage:
            "https://images.igdb.com/igdb/image/upload/t_cover_small/co3ofk.jpg",
          genre: "Card & Board Game",
          bio: `One: The Card Game is a free multiplayer online alternative based on the popular game UNO. Play One: The Card Game straight from your browser and share the link with friends and family.`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Reflections of Life: Meridiem - Collector's Edition",
          gameImage:
            "https://images.igdb.com/igdb/image/upload/t_cover_small/co3je2.jpg",
          genre: "Adventure",
          bio: `Fate hangs in the balance!`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Fishing: North Atlantic - Scallops Expansion",
          gameImage:
            "https:https://images.igdb.com/igdb/image/upload/t_cover_small/nocover_qhhlj6.jpg",
          genre: "Fishing North Atlantic",
          bio: `Expand your gaming experience with the new official Scallop DLC for Fishing: North Atlantic!`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Rescuer",
          gameImage:
            "https://images.igdb.com/igdb/image/upload/t_cover_small/co3jbh.jpg",
          genre: "Adventure",
          bio: `Ryan is a former military man who receives a job offer as a private security guard, when he arrives in Rutianland, Ryan realizes that there is something wrong, everyone is the same, as if they were robots.`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Mad Streets",
          gameImage:
            "https://images.igdb.com/igdb/image/upload/t_cover_small/co2ia4.jpg",
          genre: "Hack and slash/Beat 'em up",
          bio: `A physics-based couch multiplayer fighter game, casting a wide variety of characters and combat to bring a memorable beat-em-up party experience. Pick up some controllers and settle the score, in Mad Streets!`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Missing Bullet",
          gameImage:
            "https://images.igdb.com/igdb/image/upload/t_cover_small/co3p1d.jpg",
          genre: "Adventure",
          bio: `This is a first person action game,The player needs to survive as long as possible, the player has bow and arrow, shield, knife as weapons.,,Players are free to explore the surrounding area.Survive as long as possible!`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Rush Rally Origins",
          gameImage:
            "https://images.igdb.com/igdb/image/upload/t_cover_small/co3jig.jpg",
          genre: "Arcade",
          bio: `Rush Rally Origins combines the classic top down racing action from the original Rush Rally with the highly praised graphics and physics from Rush Rally 3. Take on 36 new and unique stages across the world, each with the ability to change the time of day and weather. Drive over many challenging surface types including snow, gravel, dirt, mud and tarmac!`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Clean Slate",
          gameImage:
            "https://images.igdb.com/igdb/image/upload/t_cover_small/co3nas.jpg",
          genre: "Indie",
          bio: `A suspense visual novel filled to the brim with life-or-death situations, puzzles and six different endings. Make your own decisions, solve riddles and reach the truth about the disapperance of the world's leading geneticist (and your best friend).`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "On Scene: The Horror Stories of Fred & Karen",
          gameImage:
            "https://images.igdb.com/igdb/image/upload/t_cover_small/co3k52.jpg",
          genre: "Adventure",
          bio: `Co-op comedy horror, Onscene will depict the stories of Fred and Karen, two local cops who after a late night get a call to go on scene.`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "PICROSS S GENESIS & Master System edition",
          gameImage:
            "https:https://images.igdb.com/igdb/image/upload/t_cover_small/nocover_qhhlj6.jpg",
          genre: "Puzzle",
          bio: `A character editor has been added to the Nintendo Switch version of Picross S! Select characters have been chosen to debut as Picross puzzles from Sega's classic consoles, the Master System and Sega Genesis! Enjoy drawing nostalgic pixel art characters while solving Picross puzzles! In addition to the Picross S Series, you can play four other popular Picross modes: Picross, Mega Picross, Color Picross, and Clip Picross! Includ... `,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Herder",
          gameImage:
            "https://images.igdb.com/igdb/image/upload/t_cover_small/co36ex.jpg",
          genre: "Indie",
          bio: `Defend your flock of sheep and goats as your traverse colorful procedural alpine meadows in the sky.`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "In Search Of...",
          gameImage:
            "https://images.igdb.com/igdb/image/upload/t_cover_small/co3hrd.jpg",
          genre: "Simulator",
          bio: `You are trapped in a room and the only rational thing is to open a safe, in the hope of being able to escape. Surely you were looking for something...`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Raster Prime: Remix",
          gameImage:
            "https://images.igdb.com/igdb/image/upload/t_cover_small/co3ipp.jpg",
          genre: "Raster Prime",
          bio: `RASTER❖PRIME [REMIX] is a new edition of the original mobile game released back in May of 2017.

          A SIGNAL WAS DETECTED NEAR THE TRAPPIST SYSTEM=
          PLANETS APPEAR UNINHABITED=
          STRANGE OBJECT FOUND ORBITING DYING STAR=
          SOME SORT OF TRANSPORTATION DEVICE=
          I CAN SEE SOMETHING=

          Welcome to the TRAPPIST System. A monolith was recently discovered dotted with obelisks emitting holographic glyphs and binary controls. What could they mean... `,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Microsoft Flight Simulator: Deluxe Edition",
          gameImage:
            "https://images.igdb.com/igdb/image/upload/t_cover_small/co3iwh.jpg",
          genre: "Simulator",
          bio: `The Deluxe Edition includes all Microsoft Flight Simulator content and five additional highly detailed aircraft with exclusive flight models and five additional handcrafted international airports.`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Dream House Days DX",
          gameImage:
            "https:https://images.igdb.com/igdb/image/upload/t_cover_small/nocover_qhhlj6.jpg",
          genre: "Puzzle",
          bio: `The house of your dreams is a dream no more! You play both architect and landlord in this fanciful new sim, and it's up to you to furnish your ideal abode with anything from arcade games to saunas to convenience stores. Certain combinations can power up your rooms...and their rent. Put an HDTV and game console together to make a game room, or a grand piano and painting together to make a fine arts room! Rise up the rankings of... `,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Grim Tales: The Heir - Collector's Edition",
          gameImage:
            "https://images.igdb.com/igdb/image/upload/t_cover_small/co3hko.jpg",
          genre: "Adventure",
          bio: `You've got one dangerous family.`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Vesper",
          gameImage:
            "https://images.igdb.com/igdb/image/upload/t_cover_small/co2fbc.jpg",
          genre: "Adventure",
          bio: `Thousands of years after the activation of the Vesper Protocol, a small android crosses a fallen world, hunted by merciless machines, to control the power of Light and decide the fate of his race.`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Jupiter Hell",
          gameImage:
            "https://images.igdb.com/igdb/image/upload/t_cover_small/co2qgw.jpg",
          genre: "Indie",
          bio: `Jupiter Hell is a classic turn-based roguelike set in a 90's flavored sci-fi universe. Rip and tear zombies, demons and unmentionable monstrosities, using shotguns, chainguns and the trusty chainsaw, to the shine of CRT monitors and the tune of heavy metal!`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
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