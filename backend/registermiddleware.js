import register from "./connection.js";
import bcrypt from 'bcryptjs';


const midregister=async(req,res)=>{
    const nome=req.body.nome
    const email=req.body.email
    const senha=bcrypt.hashSync(req.body.senha)
    
    const people=new register({
        nome:nome,
        email:email,
        senha:senha
    })
    try {
        const sucess=await people.save()
        res.send("Sucesso!")
    } catch (error) {
        console.log(error)
    }
    }
    export default midregister