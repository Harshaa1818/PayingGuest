
import { signUpValidationSchema, signInValidationSchema } from '../validators/auth.validator.js'
import { authService } from '../services/auth.service.js'
import Crypto from 'crypto'

const handleSignIn = async( req,res ) => {
    try{
        const validation = await signInValidationSchema.safeParseAsync(req.body)

        if(!validation.success) return res.status(400).json({message: validation.error.message})
         
         const { email, password } = req.body;
         
         const user = await authService.findbyMailId(email)

         if(!user) return res.status(404).json({message: "user not found"})
          
            const salt = user.salt

            const hashedPassword =Crypto.pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString('hex')

            if(hashedPassword !== user.password) return res.status(404).json({message: "invalid password"})
            const token = await authService.generateToken(user._id)
            

            return res.status(200).json({message: "login successfull", token:token, user })
                

    }
    catch(error){
        res.status(500).json({message: error.message})
    }
}
const handleSignUp = async( req,res ) => {
    try{
        const validation = await signUpValidationSchema.safeParseAsync(req.body)
        
        if(validation.error) return res.status(400).json({message: validation.error.message})

            const { email, username, password, contactNo } = validation.data;

            const user = await authService.findbyMailId(email)
            if(user) return res.status(400).json({message: "user already exists"})

                const salt = Crypto.randomBytes(16).toString('hex')
                const hashedPassword = Crypto.pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString('hex')
                

                const newUser = await authService.register({ email, username, password:hashedPassword, role:"visitor", contactNo, salt })

                return res.json(201).json({ message:"user created succesfully", newUser })
    }
    catch(error){
       return res.status(500).json({message: error.message})
    }
}
const handleSignOut = async( req,res ) => {
    try{
        const id = req.id
    
        const user = await authService.findById(id)

        if(!user) return res.status(404).json({message: "user not found"})

        res.status(200).json({message: "logout successfull", user }) 
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
}

export { handleSignIn, handleSignUp, handleSignOut }