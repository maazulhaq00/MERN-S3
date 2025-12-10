import nodemailer from "nodemailer"

import dotenv from "dotenv"
import { text } from "express";
dotenv.config();

const sendEmail = async (to, subject, body) => {

    const transport = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    })

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: to,
        subject: subject,
        html: body
    }

    await transport.sendMail(mailOptions)

}

export default sendEmail;