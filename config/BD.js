import mongoose from "mongoose";
import env from 'dotenv';

env.config();

//DB CONNECTION TO ATLAS
const connection = async () => {
    try {
        await mongoose.connect(process.env.DB_URI);
        console.log('DB connected')
    } catch (error){ 
        console.log(error)
    }
}

export default connection;