import Express from "express";
//import Products from "./products.js";


const app = Express();
const port = 3000;
app.use(Express.json());
app.use(Express.urlencoded({ extended: true }))


// GET, PUT, POST, DELETE

app.get("/", (req, res)=> {
  console
  res.json(Products.find(product) , {
    return: +req.params.id === product.id
  })
} )

app.post("/add", (req, res) => {
  console.log(req.body.id)
  res.sendStatus(200);
})

app.listen(port, () => console.log("Listening on port " + port))