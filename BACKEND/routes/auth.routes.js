import router from 'express';
import { handleSignIn, handleSignUp, handleSignOut } from '../controllers/auth.controller.js'
import { verifyJWT } from '../middlewares/auth.js'
const userRouter = router();

userRouter.post('/signin',handleSignIn)
userRouter.post('/signup',handleSignUp)
userRouter.get('/signout', verifyJWT, handleSignOut)

export { userRouter}


/*


POST user/signin ==> sign in
POST user/signup ==> sign up
GET user/signout ==> sign out

*/
