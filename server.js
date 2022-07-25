import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import helmet from 'helmet'

const app = express()
const PORT = 8001

// middlewares
app.use(express.json())
app.use(cors())
app.use(morgan('dev'))
app.use(helmet())

// database
import { connectionDB } from './src/config/db.js'
connectionDB()

// Connection to routers
import automationRouter from './src/routers/automationRouter.js'
app.use('/api/data',automationRouter)

app.get("/",(req,res)=>{
   res.json({
    message:"You have reached the server api"
   })
})

// global error handling

app.use((error,req,res,next)=>{
    console.log(error)
        res.status(error.status || 404)
        res.json({
            status:'error',
            message:error.message
        })
    })
    


app.listen(PORT, error=>{
    error && console.log(error)
    console.log(`Your server is running on PORT: ${PORT}`)
})