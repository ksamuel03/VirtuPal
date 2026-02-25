const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

//tell Express to show all files inside the "public" folder
app.use(express.static(path.join(__dirname, "public")));

//starts the server
app.listen(PORT, () => {
  console.log(`VirtuPal is running at http://localhost:${PORT} 🐣`);
});