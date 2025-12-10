import express from "express"
import sendEmail from "../utils/email.js";


const emailRouter = express.Router();

emailRouter.post("/send-email", async (req, res) => {
    try {

        const {to, subject, body} = req.body;

        await sendEmail(to, subject, body);

        return res.status(201).json({success: true, message: "email send"})

    }
    catch(err){
        console.log(err);
        
        return res.status(500).json({success: false, message: "Internal Server Error", err})

    }
});


export default emailRouter;