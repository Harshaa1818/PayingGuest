import express from 'express';
import { connectDB } from './DB/index.js'
import dotenv from 'dotenv'

dotenv.config({
    path:'./.env'
})

const app=express();

app.use(express.json());

app.use("/health",(_,res)=>{
    res.send("server running fine")

})

//import routers
import { userRouter } from './routes/auth.routes.js'
import { adminRouter } from './routes/admin.routes.js'
import { ownerRouter} from './routes/owner.routes.js'
import { visitorRouter} from './routes/visitor.routes.js'

app.use('/user',userRouter)
app.use('/admin',adminRouter)
app.use('/owner',ownerRouter)
app.use('/visitor',visitorRouter)


try {
    connectDB()
    app.listen(process.env.PORT,()=>{
        console.log(`server is running on port ${process.env.PORT}`)
    })

} catch (error) {
    err=>console.log(err)
    
}

