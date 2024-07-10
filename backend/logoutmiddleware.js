import express from 'express';
import dotenv from 'dotenv';
import Jwt from 'jsonwebtoken';

dotenv.config();


const midlogout= async (req, res) => {
    const token = req.header('authorization-token');
    if (!token) return res.status(401).send("Access Denied!");

    try {
        const verified = Jwt.verify(token, process.env.secret);
        res.status(200).send("Logout realizado com sucesso!");
    } catch (error) {
        res.status(400).send("Invalid Token");
    }
};



export default midlogout;
