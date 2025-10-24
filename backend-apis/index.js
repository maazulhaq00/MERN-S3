import express from 'express'
import dotenv from 'dotenv'
import connectToDB from './config/connectToDb.js'
dotenv.config()

const app = express()
app.use(express.json())

connectToDB();


app.get("/", (req, res) => {
    return res.status(200).json({message: "welcome to app"})
})


app.listen(process.env.PORT, ()=>{
    console.log(`App running: http://localhost:${process.env.PORT}`);
    
})
// npm i nodemon express dotenv mongoose