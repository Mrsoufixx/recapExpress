const app = require("./app");
const port = process.env.PORT || 4000;

app.listen(port, (error) => {
  if (error) {
    console.error(`Error starting the server: ${error.message}`);
  } else {
    console.log(`Server is running at http://localhost:${port}`);
  }
});
