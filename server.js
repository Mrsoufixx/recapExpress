const express = require("express");
const { run } = require("./db"); // Adjust the path accordingly
const port = process.env.PORT || 3000;

const app = express();
run()
app.use(express.json());







app.get("/getMovie", async (req, res) => {
  try {
    const db = await run();
    const peoples = db.collection('people');
    const query = { name: 'Frank' };
    const people = await peoples.find().toArray();
    console.log("Query selected:", people);
    res.json(people);
  } catch (error) {
    console.error("Error retrieving movie:", error);
    res.status(500).send("Internal Server Error");
  }
});












app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
