import express from "express";
import routerMovies from "./src/movies/routerMovies.js"; //MOVIES ROUTERS
import routerUsers from "./src/users/routerUsers.js"; // USERS ROUTERS
import routerRent from "./src/rent/routerRent.js"; // RENT ROUTERS
import connection from "./config/BD.js"; // CONNECTION OF DB
import env from "dotenv";

const app = express();

// ENVIRONMENT VARS
env.config();

// CONNECTION DB
await connection();

// PARSE BODY TO JSON TO INTERPRETATE IT
app.use(express.json())

const myGithub = "https://github.com/AlexMonPe/apiRestfullMovies"
const text = "documentation"
// ENDPOINTS
app.get('/', (req,res)=> res.send('Welcome to my API, read ' + text.link(myGithub) + ' to start'))
app.use('/movies', routerMovies); //ENDPOINT OF MOVIES
app.use('/users', routerUsers); //ENDPOINT OF USERS
app.use('/rent', routerRent); // ENDPOINT OF RENT


app.set("port", process.env.PORT || 5000);

// HOW TO SERVER UP IN EXPRESS
app.listen(app.get("port"), () => { 
    console.log("Server up at " + process.env.SERVER_PORT)
})





