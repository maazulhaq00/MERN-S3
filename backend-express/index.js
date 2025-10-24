import express from "express";
import dotenv from "dotenv";

dotenv.config()

const app = express();
app.use(express.json())

app.get("/", (req, res) => {
    res.send("Hello 2309C1")
})
app.get("/about", (req, res) => {
    res.send("Hello 2309C1 About")
})

app.post("/student", (req, res) => {
    // let name = req.body.name
    // let email = req.body.email
    // let contact = req.body.contact
    let {name, email, contact} = req.body

    // return res.json({
    //     "student_name": name,
    //     "email_address": email,
    //     "contact_number": contact
    // })

    return res.json({name, email, contact})
})

app.listen(process.env.PORT, () => {
    console.log(`Server running at http://localhost:${process.env.PORT}`);
})