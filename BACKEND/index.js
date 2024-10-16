import express from 'express';
import { connectDB } from './DB/index.js'
import dotenv from 'dotenv'
import cors from 'cors'
import bodyParser from 'body-parser'

dotenv.config({
    path:'./.env'
})

const app = express();

//middlewares
app.get(express.json());

app.use(cors({
    origin: '*'
}))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

//health check

app.use("/health",(_,res)=>{
    res.send("server running fine")

})

//import routers
import { userRouter } from './routes/auth.routes.js'
import { adminRouter } from './routes/admin.routes.js'
import { ownerRouter} from './routes/owner.routes.js'
import { visitorRouter} from './routes/visitor.routes.js'
import { bookingRouter } from './routes/booking.routes.js';

//Routes declaration

app.use('/user',userRouter)
app.use('/admin',adminRouter)
app.use('/owner',ownerRouter)
app.use('/visitor',visitorRouter)
app.use('/book',bookingRouter)



//DB connection and server start
try {
    connectDB()
    app.listen(process.env.PORT,()=>{
        console.log(`server is running on port ${process.env.PORT}`)
    })

} catch (error) {(err)=>{
        console.log(err)
    }
    
}

