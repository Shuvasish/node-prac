const express = require("express");
const app = express();
// console.log(express);
// console.log(app);

const rootCall = (req, res) => res.send("thank you very ");
app.get("/", rootCall);

app.listen(3000, console.log("listening to port 3000"));
