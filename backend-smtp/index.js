import express from "express"
import emailRouter from "./routers/emailRouter.js";
import dotenv from "dotenv"
dotenv.config();

const app = express();

app.use(express.json());
app.use(emailRouter)


app.listen(process.env.PORT, ()=>{
    console.log(`Server running at http://localhost:${process.env.PORT}/`);
    
})