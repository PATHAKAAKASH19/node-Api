import product from "../models/product.model.js"



const getAllProducts = async (req, res) => {
    try {
     
     const Products = await product.find()
 
     res.status(200).json(Products)
     
    } catch (error) {
      res.status(500).json({message: error.message})
    }
 }


 const getOneProduct =  async (req, res)=> {
  
    try {
        const {id} = req.params
        const Product = await product.findById(id)
        
        if(!Product) {
           return res.status(404).json({message:"Product does not Present"})
        }

        res.status(200).json(Product)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}


 const createProduct = async (req, res) => {
 
    try {
        const Product = await product.create(req.body)
        res.status(200).json(Product)
    } catch (error) {
        res.status(500).json({message : error.message})
    }

}

 const deleteProduct = async (req, res) => {
     
    try {
        const {id} = req.params

        const Product = await product.findByIdAndDelete(id)

        if(!Product){
           return  res.status(404).json({message: "product is not present"})
        }
        res.status(200).json({message: "product is deleted successfully"})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

 const updateProduct =  async (req, res) => {
     
    try {
        const {id} = req.params

        const Product = await product.findByIdAndUpdate(id, req.body)
        if(!Product){
            return  res.status(404).json({message: "product is not present"})
         }
         res.status(200).json(await product.findById(id))
        
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

 export {getAllProducts, getOneProduct, createProduct, deleteProduct, updateProduct}