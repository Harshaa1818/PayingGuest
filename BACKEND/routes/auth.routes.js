import router from 'express';
import { handleSignIn, handleSignUp, handleSignOut } from '../controllers/auth.controller'

const userRouter = router();

userRouter.post('/signin',handleSignIn)
userRouter.post('/signup',handleSignUp)
userRouter.get('/signout',handleSignOut)

export { userRouter}



