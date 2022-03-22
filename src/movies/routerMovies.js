import express from "express"
import { autentication } from "../../config/middlewares.js";
const router = express.Router();
import { getMoviebyId, getMovie, postMovie, deleteMovie, updateMovie } from "./controllerMovies.js"

// GET BY ID WITH PATH PARAMS
router.get('/:id', autentication(["administrator","client"]), getMoviebyId); // ADMINISTRATORS AND CLIENTS CAN GET A MOVIE BYID

//GET FILTERING BY ALL KEYS AND RETURN ALL MOVIES IF KEY NO EXISTS
router.get('/', getMovie)// ALL CAN READ MOVIES

//POST NEW MOVIES
router.post('/', autentication(["administrator", "client"]), postMovie); // ADMINISTRATORS AND CLIENTS CAN CREATE A MOVIE

// DELETE MOVIES
router.delete('/:id',autentication(["administrator"]), deleteMovie); //ONLY ADMINISTRATOR CAN DELETE MOVIES

// UPDATE/PATCH A MOVIE
router.patch('/:id',autentication(["administrador"]) , updateMovie); //ONLY ADMINISTRATOR CAN UPDATE MOVIES

export default router;
