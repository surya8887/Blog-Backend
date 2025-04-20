import mongoose from "mongoose";
import { DB_Name } from "../constants.js";

const connectDB = async () => {
    try {DB_Name
        const connectionIntance =  await mongoose.connect(`${process.env.MONGODB_URI}/${DB_Name}`)
        console.log(`Connection is Esstablised ${connectionIntance.connection.host}`);
        
    } catch (error) {
        console.log(`Database connection is failed! ${error}`);
        process.exit(1)    
    }
}

export default connectDB;