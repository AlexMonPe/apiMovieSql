import { hashPsswd } from "../../config/middlewares.js";
import Users from "./modelUsers.js"

//CRUD USERS

//OTHER METHOD TO POST NEW USERS
// const postUser = async (req,res) => { 
//     console.log(req.body)
//     const User = new Users(req.body);
//     await User.save();
//     res.json(User)
// }
// ANOTHER METHOD TO CREATE USERS
 
const postUser = async (req,res,next) => { // con sequelize act
    try{
        const userToCreate = {
            name: req.body.name,
            email: req.body.email,
            password: await hashPsswd(req.body.password)
        }
        const userCreated = await Users.create(userToCreate);
        res.status(200).json(userCreated)
    }catch(error){
        res.json(error)
    }
}

//BUSCAR USUARIOS POR ID
const getUserById = async (req, res) => {
    try{
        res.json(await Users.find({_id: req.params.id}))
    }catch(error){
        res.json(error)
    }  
}

//GET FILTER BY ALL KEYS AND RETURN ALL MOVIES IF KEY NO EXISTS
const getUser = async (req,res) => {
    try {
        const queryUser = {};
        if (req.query.name) queryUser.name = req.query.name;
        if (req.query.email) queryUser.email = req.query.email;
        if (req.query.role) queryUser.role = req.query.role;
        res.json(await Users.findAll(queryUser))    
    }catch(error){
        res.json(error)
    }
}
    
// DELETE USER BY ID
const deleteUser = async (req,res) => {
    try{
        if(req.params.id){
            res.json(await Users.deleteOne({_id: req.params.id}))
        }
    }catch(error){
        res.json(error)
    } 
}

// PATCH/UPDATE USER 
const updateUser = async (req,res) => {
    try {
        await Users.updateOne({_id: req.token.id}, req.body)
        res.status(200).json('Updated id = ' + req.token.id)
    } catch(error){
        res.json(error)
    }
}

export {getUser, getUserById, postUser, deleteUser, updateUser};