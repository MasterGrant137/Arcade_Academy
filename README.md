# Arcade Academy Overview
+ **Table of Contents**
    + [Project Description](#project-description)
    + [Directory Structure](#directory-structure)
    + [Dependencies](#dependencies)
    + [Contributions](#contributions)

### Project Description
We set out to construct a site structurally reminiscent of *Goodreads* but with a unique motif centering on games. We (Alejandro C. Grant, Andrew Derocher, Chase Kessler, and Christopher Felix) all walked the narrow stylistic beam, balancing between originality and familiarity. Since familiarity and accessibility oft go hand-in-hand in the dev world, our motivation to build an application that both reflected our distinctive tastes but could also be navigated by the user with ease was based on more than purely aesthetics.

Putting these ideas into practice, we created several routes to groups of information ranging from genres to the user's *played* list. To maintain the accessibility aforementioned, we paid keen attention to the RESTful nature of the routes we were building. The user is able to intuitively access the application's cornucopia of information—from games and categories to self-curated content and more, thereby retaining a pleasant user experience with no forfeiture of functionality.

As you explore this application, you will discover the care imbued into every detail. Use this README as a Sherpa for that journey. Also, each item in the table of contents is an internal link so to aid you as you reference this document.

[Back to the Beginning](#arcade-academy-overview)

### Directory Structure
```
.
├── ancillary
├── bin
├── colorThemes(WIP)
├── config
├── db
│   ├── migrations
│   ├── models
│   └── seeders
├── node_modules
├── public
│   ├── images
│   ├── javascripts
│   └── stylesheets
├── routes
├── views
└── wireFrames

16 directories
```
[Back to the Beginning](#arcade-academy-overview)
### Dependencies
Server
```
"express": "~4.16.1",
"debug": "~2.6.9",
"http-errors": "~1.6.3",
"morgan": "~1.9.1",
"nodemon": "^2.0.6"
```

Database
```
"pg": "^8.6.0",
"sequelize": "^5.22.3",
"sequelize-cli": "^5.5.1"
```

Environment
```
"dotenv": "^8.2.0",
"dotenv-cli": "^4.0.0",
"per-env": "^1.0.2",
```

Security
```
"bcryptjs": "^2.4.3",
"connect-session-sequelize": "^7.0.4",
"cookie-parser": "~1.4.4",
"csurf": "^1.11.0",
"express-session": "^1.17.1",
"express-validator": "^6.12.1",
```
Data Gathering
```
"axios": "^0.21.1",
"cheerio": "^1.0.0-rc.10",
"pretty": "^2.0.0",
```
Client
```
"pug": "2.0.4",
```
[Back to the Beginning](#arcade-academy-overview)


### Notable Difficulties
Bridging the gap between frontend and backend was a challenging task. For each member of the team this endeavor manifested itself differently, but the radix was the same. Whether it was the dynamic element creation in the DOM which had to be coupled with a database entry. Or, the extensive routing that had to accurately render client-side. Or even the search form which is dynamically created along with all of its children and must accurately send a request to the backend for information relating to the user's query. The list continues. We all tasted the difficulties associated with this in one way or another. However, as a team, we were able to surmount every obstacle in our path and push forward to build an application of which we are all proud.

[Back to the Beginning](#arcade-academy-overview)

### Contributions
We alternated between frontend and backend work periodically. Even within those scopes, there was a veritable amount of mixing and matching. Our coding was done in pairs most of the time and we would frequently switch partners and tasks around to ensure each of us was having a well-rounded programming experience. We also did this to bolster efficiency as narrow task assignment easily begets stagnancy.

Notwithstanding, there were specializations that organically developed, alongside areas of the project to which some contributed a noteworthy amount. Here is some information detailing this:

+ Christopher Felix
    + Review section functionality
    + Noteworthy styling to the game and review section

+ Chase Kessler
    + Game list functionality
    + Considerable user authorization work

+ Andrew Derocher
    + Played and want to play functionality
    + Extensive dynamic creation and project styling

+ Alejandro C. Grant
    + Built web scraper from scratch for site content
    + Built search bar from the ground up for site querying
    + Made this markdown :D

[Back to the Beginning](#arcade-academy-overview)
