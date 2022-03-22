import Users from "../users/modelUsers.js"
import Movies from "../movies/modelMovies.js"
import Rent from "./modelRent.js"


const getRent = async (req,res) => {
    res.json(await Rent.find({}).populate(["idMovie", "idUser"]))
}
const getRentById = async (req,res) => {
    res.json(await Rent.find({_id: req.params.id }).populate(["idMovie", "idUser"]))
}
const postRent = async (req,res) => {   
    const rentToCreate = {
        idMovie: req.body.idMovie,
        idUser: req.body.idUser,
        date: new Date(),
    }
    try{
        const postedRent = await Rent.create(rentToCreate)
        res.status(201).json(await postedRent.populate(["idMovie", "idUser"]))
    }catch(error){
        res.json(error)
    }
}

const deleteRent = async (req,res) =>{
    try{
        if(req.params.id){
            res.json(await Rent.deleteOne({ _id: req.params.id }))
        }
    }catch(error){
        res.json(error)
    }
}

const updateRent = async (req,res) => {
    try{
        if(req.params.id){
            await Rent.updateOne({_id: req.params.id}, req.body)
            res.status(200).json('Updated rent id = ' + req.params.id)
        }
    }catch(error){
        res.json(error)
    }
}

export { getRent, postRent, updateRent, deleteRent, getRentById };