const express=require("express")
const app= express()
const port = process.env.PORT || 3000
const route = require("./routes/route")

app.use(express.json());
app.use(route)

app.listen(port,()=>{
      console.log(`server is on http://localhost:${port}`);
})