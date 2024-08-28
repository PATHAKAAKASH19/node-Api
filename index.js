import express from "express"
import mongoose from "mongoose"
import productRoute from "./routes/product.route.js"


const app = express()

// middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}))


app.use("/api/products", productRoute)





mongoose.connect("mongodb+srv://pathakaakash8900:20021902@nodedb.xzv6i.mongodb.net/node-Api?retryWrites=true&w=majority&appName=nodeDb")
.then(() => {
    console.log("database connected")
    app.listen(3000, () => {
        console.log("hey man")
    })
})
.catch(() => {
    console.log("connection failed")
})
