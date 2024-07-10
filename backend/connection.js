import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const IP=process.env.MONGO_DB;

mongoose.connect(IP);

const register=mongoose.model("LOGOn",({
nome:{type:String,required:true},
email:{type:String,required:true},
senha:{type:String,required:true}
}));

export default register