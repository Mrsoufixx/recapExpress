const express = require("express");
const port = process.env.PORT || 3000;
const route =  require("./routes/route")

const app = express();
app.use(route)
app.use(express.json());

// app.get("/getPhone", async (req, res) => {
//   try {
//     const db = await run();
//     const phones = db.collection('phones');

//     const phone = await phones.find().toArray();
//     console.log("Query selected:", phone);
//     res.status(200).send(phone);
//   } catch (error) {
//     console.error("Error retrieving phone:", error);
//     res.status(500).send("Internal Server Error");
//   }
// });

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
