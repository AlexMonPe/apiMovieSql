import express from "express";
const router = express.Router();
import {getUser, getUserById, postUser, deleteUser, updateUser} from "./controllerUsers.js"
import {autentication, createToken} from "../../config/middlewares.js"

// //GET USER BY NAME/ID
router.get('/', getUser) // ALL  USERS CAN GET USERS

//GET USERS BY ID
router.get('/:id', autentication(), getUserById) // ONLY REGISTERED USERS CAN GET USERS BY ID

//POST NEW USER
router.post('/', postUser) // ALL CAN CREATE A USER

//DELETE USER BY ID
router.delete('/:id', autentication(["administrator"]), deleteUser) // ONLY ADMININISTRATOR CAN DELETE USERS

//PATCH USER
router.patch('/:id', autentication(["administrator"]), updateUser); // ONLY ADMINISTRATOR CAN UPDATE USERS

// ENDPOINT TO AUTENTICATE AND TO CREATE A TOKEN
router.post('/auth', createToken) // ALL CAN ENTER IN THIS ENDPOINT AND TAKE A TOKEN

export default router;