import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config({
    path: '../.env'
})

const verifyJWT = ( req,res,next ) => {

    const token = req.headers['authorization']?.split(' ')[1]
    console.log(token);
    
    if(!token) return res.status(404).json({message: "invalid token"})

    const decodedToken = jwt.verify(token,process.env.JWT_SECRET)

    if(!decodedToken) return res.status(404).json({message: "invalid token"})
        
      
     req.id = decodedToken.id;
     
     next();


}

export {verifyJWT}