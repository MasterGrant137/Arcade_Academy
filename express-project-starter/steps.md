+ CREATE USER arcade_academy_app WITH PASSWORD 'uehue383h83h8d' CREATEDB;
+ npx dotenv sequelize db:create

+ npx sequelize model:generate --name User --attributes fullName:string,email:string,hashedPassword:string,screenName:string
+ npx sequelize model:generate --name Game --attributes name:string,genre:string
+ npx sequelize model:generate --name GameList --attributes user_id:integer,game_id:integer,have_played:boolean
+ npx sequelize model:generate --name Review --attributes content:text,user_id:integer,game_id:integer
+ npx sequelize model:generate --name Like --attributes user_id:integer,game_id:integer,like:boolean

+ npx dotenv sequelize db:migrate

+ if needed
    + npx dotenv sequelize db:migrate:undo:all

+ npx sequelize seed:generate --name game-seeder
+ npx sequelize seed:generate --name like-seeder
+ npx sequelize seed:generate --name user-seeder
+ npx sequelize seed:generate --name review-seeder

+ npx dotenv sequelize db:seed:all

+ if needed
    + npx dotenv sequelize db:seed:undo:all
