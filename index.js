import Express from "express";
//import Products from "./products.js";


const app = Express();
const port = 3000;


// GET, PUT, POST, DELETE

app.get("/", (req, res)=> {
  res.send("Hello World");
  //res.json(Products);
} )

app.post("/add", (req, res) => {
  res.send(req.body);
})

app.listen(port, () => console.log("Listening on port " + port))