import mongoose from "mongoose";

const productSchema = mongoose.Schema({

    name: {
        type: String,
        required: [true, "please enter product name"]
    },

    price: {
        type: Number,
        required: true

    }, 

    quantity: {
       type: Number,
       required: true,
       default: 0

    }, 

    image: {
        type: String, 
        
    }
}, {timestamps: true});

const product = mongoose.model("product" , productSchema)

export default product

