import express from 'express'
import dotenv from 'dotenv'
import connectDb from './config/db.js'
import authRouter from './routes/auth.routes.js'
import cookieParser from 'cookie-parser'

const app = express()
dotenv.config()

app.use("/api/auth",authRouter)
app.use(express.json())
app.use(cookieParser())

const port = process.env.PORT || 5000
app.get("/",(req, res)=>{
    res.send('hello!')
})


app.listen(port, ()=>{
    connectDb()
    console.log('Server started!');  
})
