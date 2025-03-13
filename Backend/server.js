const express = require("express");
const cors=require("cors")
const app = express();
const port = 3000;
const { connectDatabase, getDatabaseStatus } = require("./Database");
const routes = require('./routes'); 
app.use(express.json());
app.use(cors());
app.use(routes);

// app.use(routes) => is like saying, "Hey server, whenever a request comes in, check the routes I defined in routes.js to decide what to do!"

if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({ path: ".env" });
}

connectDatabase();


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
