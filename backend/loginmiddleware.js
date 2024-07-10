import register from "./connection.js";
import bcrypt from 'bcryptjs';
import  Jwt  from "jsonwebtoken";
import dotenv from 'dotenv';

dotenv.config();

    const midlogin = async (req, res) => {

    const verificationEmail = await register.findOne({ email: req.body.email });
    const Password = verificationEmail.senha;
    const verificationPassword = await bcrypt.compareSync(req.body.senha, Password);

    if (!verificationEmail) return res.status(400).send("ERRO, Email ou Senha Invalidos!")
    if (verificationPassword == false) return res.status(400).send("ERRO, Email ou Senha Invalidos!")
    else {
       const token=Jwt.sign({_id:verificationEmail._id},process.env.secret);
       
       res.header("autorization-token",token);
       localStorage.setItem("autorization-token")
        res.status(200).send("Logado Com Sucesso!");
    }


};
export default midlogin