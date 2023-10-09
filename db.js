const { MongoClient } = require("mongodb");

const url = "mongodb://127.0.0.1:27017";
const dbName = "users"; // Replace with your actual database name

const client = new MongoClient(url, { useUnifiedTopology: true });
async function run() {

      try {
        await client.connect();
        console.log("Connected to database");
        const db = client.db(dbName);
        return db;
      } catch (error) {
        console.error("Error connecting to database:", error);
        throw error;
      }

      
}

module.exports = { run };
