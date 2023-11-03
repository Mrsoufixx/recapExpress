const express=require("express")
const route= express.Router()
const Product = require("../model/products")
const checkTimeMiddleware= require("../middleware/checkTime")
const {run}=require('../db')

route.use(checkTimeMiddleware)

route.get("/", async (req,res)=>{
      const db= await run()

      const phones = await db.collection("phones").find().toArray()
      console.log(phones);
      res.send(phones)
})
route.get("/propSearch", async (req,res)=>{
      const db= await run()
      const query= {properties:"OLED display"}
      const phones = await db.collection("phones").find(query).toArray()
      console.log(phones);
      res.send(phones)
})
route.get("/one", async (req,res)=>{
      const db= await run()
      const query = {model:{$regex :/iphone/i}}
      const phones = await db.collection("phones").findOne(query)
      console.log(phones);
      res.send(phones)
})
route.get("/cat", async (req,res)=>{
      const db= await run()
      const query = {model:{$regex :/iphone/i},price:{$lte:3000},properties:"5G support"}
      const phones = await db.collection("phones").count(query)
      console.log(phones);
      // res.sendStatus(201).send(phones)
})
route.get("/filter", async (req,res)=>{
      const {minPrice, maxPrice, name}=req.body;
      let query={}
      if(minPrice && maxPrice){
            query.price={$lte:parseFloat(maxPrice),
            $gte:parseFloat(minPrice)}
      }else if(minPrice){
            query.price={$gte:parseFloat(minPrice)}

      }else if(maxPrice){
            query.price={$lte:parseFloat(maxPrice)}
      }else{
            query.name={$regex :new RegExp(name,'i')}      }

      const db= await run()
      // const query = {model:{$regex :/iphone/i},price:{$lte:3000},properties:"5G support"}

      const phones = await db.collection("phones").find(query).toArray()
      console.log(phones);
      res.send(phones)
})

route.get("/less", async (req,res)=>{
      const db= await run()
      
      const phones = await db.collection("phones").find({price: {$lte:5000, $gte:3000}}).project({model:1,price:1,_id:0}).toArray()
      console.log(phones);
      res.send(phones)
})


route.post("/", async (req,res)=>{
      
      // const productsAdded = await db.collection("phones").insertMany(products) //all data 

      const {model, price, quantity,properties, dateOfCreation} = req.body

      const newProduct = {
            model,
            price,
            quantity,
            properties,
            dateOfCreation
      }
      const productAdded = await Product.create(newProduct)
     
      res.send(productAdded)
      res.status(201).json(productAdded); 
})
route.post("/diff", async (req,res)=>{
      const db = await run()
      // const productsAdded = await db.collection("phones").insertMany(products) //all data 

      const {model, price, quantity,properties, categorie} = req.body

      const newProduct = {
            model,
            price,
            quantity,
            properties,
            categorie
      }
      const productAdded = await db.collection("phones").insertOne(newProduct)
      // console.log(newProduct);
      res.send(productAdded)
      // res.status(201).json(productsAdded); 
})

route.put("/",async(req,res)=>{
      try{
            const {id,model, price} = req.body
      const updateProduct = await Product.findByIdAndUpdate(id , {model,price})
      res.send("t updataaaa")
      }catch(e){
            console.log(e.message)
      }
      

      
      
      // }



      
})

route.delete("/",async (req,res)=>{
      const {id} = req.body
      const phones = await Product.deleteOne({_id:id})
      console.log(phones);
      res.send(phones)
      }
)

module.exports = route
