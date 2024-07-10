import express from 'express';
import dotenv from 'dotenv';
import midregister from './registermiddleware.js';
import midlogin from './loginmiddleware.js';
import midlogout from './logoutmiddleware.js';
import home from './homemiddleware.js';
import cors from 'cors';

dotenv.config();

const app=express();
const PORT=process.env.PORT || 3000;



app.use(express.json());
app.use(cors('http://localhost:5173/'));

app.get("/home",home);
app.post("/register", midregister);
app.post("/login",midlogin);
app.post('/logout', midlogout);

app.listen(PORT,()=>{
    console.log("SERVER RUNNING")
});
