import mongoose from "mongoose"


export const connectDB =async () => {
try {
   await mongoose.connect (process.env.MONGO_URI);
   console.log("MongoDb Connected succsesfully!")
} catch (error) {
    console.error("error connecting to MongoDB" , error);

}

};