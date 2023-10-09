const express=require("express")
const route= express.Router()
const products= require("../model/products")
const checkTimeMiddleware= require("../middleware/checkTime")

route.use(checkTimeMiddleware)

route.get("/", (req,res)=>{
      res.send(products)
})


route.post("/", (req,res)=>{

      const {name, price} = req.body

      // if (!name || !price) {
      //       return res.status(400).send("Invalid request body. 'name' and 'price' are required.");
      //     }

      const newProduct={
            id:products.length+1,
            name,
            price
      }

      products.push(newProduct)
      res.status(201).json(newProduct); 
})

route.put("/:id",(req,res)=>{
      const {id} = req.params
      const {name, price} = req.body

      const productIndex = products.findIndex((product)=>product.id===parseInt(id))
      
      const updateProduct= {
            ...products[productIndex],
            name:name,
            price:price
      }
      console.log(updateProduct)
      products[productIndex] = updateProduct;

      res.json(updateProduct)
})

route.delete("/",(req,res)=>{
      const {id}=req.body
      const index = products.findIndex((product)=>product.id===id)

      if(index !== -1){
            products.splice(index,1)
            res.status(201).send("product deleted")
      }


















      // const {id} = req.params


      // const index = products.findIndex(product => product.id === parseInt(id));

      // if (index === -1) {
      //   return res.status(404).send("Product not found.");
      // }
    
      // // Remove the product from the array
      // products.splice(index, 1);
    
      // // Update the file with the modified products array
    
      // res.send("Product deleted successfully.");
})
module.exports = route
