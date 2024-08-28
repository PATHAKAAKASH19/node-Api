import express from "express"
import mongoose from "mongoose"
import productRoute from "./routes/product.route.js"
import dotenv from 'dotenv';

dotenv.config();

const app = express()
const mongoURI = process.env.MONGODB_URI;

// middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}))


app.use("/api/products", productRoute)





mongoose.connect(mongoURI)
.then(() => {
    console.log("database connected")
    app.listen(3000, () => {
        console.log("hey man")
    })
})
.catch(() => {
    console.log("connection failed")
})
