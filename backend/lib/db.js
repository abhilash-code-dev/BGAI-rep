import mongoose from "mongoose"

export const connectDB = async ()=> {
    try{
       const conn=  await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB is connected gandu : ${conn.connection.host}`);
    }
    catch(error) {
        console.log("Error in connecting MongoDB ", Error);
        process.exit(1);
    }
}