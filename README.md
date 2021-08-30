# Arcade Academy Overview
+ **Table of Contents**
    + [Project Description](#project-description)
    + [Directory Structure](#directory-structure)

### Project Description
We set out to construct a site structurally reminiscent of *Goodreads* but with a unique motif centering on games. We (Alejandro C. Grant, Andrew Derocher, Chase Kessler, and Christopher Felix) all walked the narrow stylistic beam, balancing between originality and familiarity. Since familiarity and accessibility oft go hand-in-hand in the dev world, our motivation to build an application that both reflected our distinctive tastes but could also be navigated by the user with ease was based on more than purely aesthetics.

Putting these ideas into practice, we created several routes to groups of information ranging from genres to the user's *have played* list. To maintain the accessibility aforementioned, we paid keen attention to the RESTful nature of the routes we were building. The user is able to intuitively access the application's cornucopia of information—from games and categories to self-curated content and more, thereby retaining a pleasant user experience with no forfeiture of functionality.

As you explore this application, you will discover the care imbued into every detail. Use this README as a Sherpa for that journey. Also, each item in the table of contents is an internal link so to aid you as you reference this document.

[Back to Beginning](#arcade-academy-overview)

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

### Credits

