const express=require("express")
const route= express.Router()
const products= require("../model/products")

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

module.exports = route
