const express = require("express");
const app = express();
const port = 3000;
const { connectDatabase, getDatabaseStatus } = require("./Database");

if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({ path: ".env" });
}

connectDatabase();

app.use(express.json());

app.get("/", (req, res) => {
  console.log("Connected the server to the Database.")
  res.json({ database_status: getDatabaseStatus() });
});

app.get("/ping", (req, res) => {
  res.send("Welcome to my weird Taste World!");
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
