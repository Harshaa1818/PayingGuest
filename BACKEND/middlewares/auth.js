import jwt from 'jsonwebtoken'

const verifyJWT = ( req,res,next ) => {

    const token = req.headers["Authorization"]?.split(" ")[1] || req.headers["Authorization"]?.replace("Bearer ","")

    if(!token) return res.status(404).json({message: "invalid token"})

    const decodedToken = jwt.verify(token,process.env.SECRET_KEY)

    if(!decodedToken) return res.status(404).json({message: "invalid token"})
      
     req.id = decodedToken._id;
     
     next();


}

export {verifyJWT}