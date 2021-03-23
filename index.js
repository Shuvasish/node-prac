const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");
app.use(cors());
app.use(bodyParser.json());
// console.log(express);
// console.log(app);

const product = {
  name: "table",
  price: 178,
  location: "sunamganj",
};

const users = ["shuvasish", "dipu", "supto", "topu", "prottoy", "joy", "rakib"];

const rootCall = (req, res) => res.send(product);
app.get("/", rootCall);

app.get("/fruits/banana", (req, res) => {
  res.send({ name: "banana", price: 22, quantity: 3 });
});

app.get("/users/:id", (req, res) => {
  //   const re = JSON.parse(res);
  const id = req.params.id;
  const name = users[id];
  res.send({ id, name });
  //   console.log(req.params.id);
  console.log(req.query);
});

//post request

app.post("/addUser", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

app.listen(4000, console.log("listening to port 4000"));
