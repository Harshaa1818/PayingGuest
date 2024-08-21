
import { signUpValidationSchema, signInValidationSchema } from '../validators/auth.validator.js'
import { authService } from '../services/auth.service.js'

const handleSignIn = async( req,res ) => {
    try{
        const validation = signInValidationSchema.safeParseAsync(req.body)

        if(!validation.success) return res.status(400).json({message: validation.error.message})
         
         const { email, password } = req.body;
         
         const user = await authService.findbyMailId(email)

         if(!user) return res.status(404).json({message: "user not found"})
          
            const salt = user.salt

            const hashedPassword = Crypto.hmac('sha256', salt).update(password).digest('hex')

            if(hashedPassword !== user.password) return res.status(404).json({message: "invalid password"})

            return res.status(200).json({message: "login successfull"})
                

    }
    catch(error){
        res.status(500).json({message: error.message})
    }
}
const handleSignUp = async( req,res ) => {
    try{
        const validation = signUpValidationSchema.safeParseAsync(req.body)
        if(validation.error) return res.status(400).json({message: validation.error.message})

            const { username, email, password, contactNo } = validation.data;

            const user = await authService.findbyMailId(email)
            if(user) return res.status(400).json({message: "user already exists"})

                const salt = Crypto.randomBytes(16).toString('hex')
                const hashedPassword = Crypto.hmac('sha256, salt').update(password).digest('hex')

                const newUser = await authService.register({ username, email, password: hashedPassword, role:user, contactNo, salt })

                return res.json(201).json({ message:"user created succesfully", newUser })
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
}
const handleSignOut = ( req,res ) => {
    try{
        res.status(200).json({message: "logout successfull"})
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
}

export { handleSignIn, handleSignUp, handleSignOut }