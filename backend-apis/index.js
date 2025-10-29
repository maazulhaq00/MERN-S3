import express from 'express'
import dotenv from 'dotenv'
import connectToDB from './config/connectToDb.js'
import Category from './models/categoryModel.js'
dotenv.config()

const app = express()
app.use(express.json())

connectToDB();


app.get("/", (req, res) => {
    return res.status(200).json({ message: "welcome to app" })
})

app.post("/categories", async (req, res) => {

    try {

        let { name, description } = req.body

        const existedCategory = await Category.findOne({ name })

        if (existedCategory) {
            return res.status(409).json({ success: false, message: `Category ${name} alreay exists` })
        }

        // const category = await Category.create({name: name, description: description})
        const category = await Category.create({ name, description })

        return res.status(201).json({ success: true, category })
    }
    catch (err) {
        return res.status(500).json({ success: false, message: "Internal Server error", error: err })
    }
})

app.get("/categories", async (req, res) => {
    try {
        const categories = await Category.find();
        return res.status(200).json({ success: true, categories })
    }
    catch (err) {
        return res.status(500).json({ success: false, message: "Internal Server error", error: err })
    }
})

app.get("/categories/:id", async (req, res) => {
    try {
        const categoryId = req.params.id

        const category = await Category.findById(categoryId);

        return res.status(200).json({ success: true, category })
    }
    catch (err) {
        return res.status(500).json({ success: false, message: "Internal Server error", error: err })
    }
})

app.put("/categories/:id", async (req, res) => {
    try {
        const categoryId = req.params.id

        const existedCategory = await Category.findOne({ _id: categoryId })

        if (!existedCategory) {
            return res.status(404).json({ success: false, message: `Category doesnot exists` })
        }

        
        const {name, description} = req.body

        await Category.findByIdAndUpdate(categoryId, {name, description});

        const updatedCategory = await Category.findOne({_id: categoryId})


        return res.status(200).json({ success: true, updated_category: updatedCategory })
    }
    catch (err) {
        return res.status(500).json({ success: false, message: "Internal Server error", error: err })
    }
})


app.delete("/categories/:id", async (req, res) => {
    try {
        const categoryId = req.params.id

        const existedCategory = await Category.findOne({ _id: categoryId })

        if (!existedCategory) {
            return res.status(404).json({ success: false, message: `Category doesnot exists` })
        }

        await Category.findByIdAndDelete(categoryId)

        return res.status(200).json({ success: true, message: "Category deleted successfully" })
    }
    catch (err) {
        return res.status(500).json({ success: false, message: "Internal Server error", error: err })
    }
})


app.listen(process.env.PORT, () => {
    console.log(`App running: http://localhost:${process.env.PORT}`);

})
// npm i nodemon express dotenv mongoose