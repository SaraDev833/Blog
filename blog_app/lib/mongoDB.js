import mongoose from "mongoose";

export const connectToMongoDB = async()=>{

  try {
    await mongoose.connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
  
      console.log('MongoDB connected');
   
  } catch (error) {
    console.log('error connecting to database' , error);
    throw new Error('MongoDB connection failed');
  }

}
