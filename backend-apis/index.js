import express from 'express'
import dotenv from 'dotenv'
import connectToDB from './config/connectToDb.js'
import Category from './models/categoryModel.js'
dotenv.config()

const app = express()
app.use(express.json())

connectToDB();


app.get("/", (req, res) => {
    return res.status(200).json({message: "welcome to app"})
})

app.post("/categories", async (req, res) => {

    let {name, description} = req.body

    // const category = await Category.create({name: name, description: description})
    const category = await Category.create({name, description})

    return res.status(201).json({success: true, category})
})

app.get("/categories", async (req, res)=>{
    const categories = await Category.find();
    return res.status(200).json({success: true, categories  })
})


app.listen(process.env.PORT, ()=>{
    console.log(`App running: http://localhost:${process.env.PORT}`);
    
})
// npm i nodemon express dotenv mongoose