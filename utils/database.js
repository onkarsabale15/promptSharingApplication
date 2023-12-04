import mongoose from "mongoose";
let isConnected = false;

export const connectToDB = async ()=>{
    mongoose.set('strictQuery',true);
    if(isConnected){
        return;
    }else{
        try {
            await mongoose.connect(process.env.MONGO_URI,{
                useNewUrlParser:true,
                useUnifiedTopology:true,
            })
            isConnected = true;
        } catch (error) {
            console.log(error);
        }
    }
}