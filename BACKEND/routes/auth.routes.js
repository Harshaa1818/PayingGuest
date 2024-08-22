import router from 'express';
import { handleSignIn, handleSignUp, handleSignOut } from '../controllers/auth.controller.js'
import { verifyJWT } from '../middlewares/auth.js'
const userRouter = router();

userRouter.post('/signin',handleSignIn)
userRouter.post('/signup',handleSignUp)
userRouter.get('/signout', verifyJWT, handleSignOut)

export { userRouter}



