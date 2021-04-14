const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const port = process.env.PORT || 2201;
const app = express();
const DB =
  "mongodb+srv://Achievers:Achievers@cluster0.xg4zd.mongodb.net/money?retryWrites=true&w=majority";
mongoose
  .connect(DB, {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to Data Base successfully!");
  });
app.use(cors());
app.use(express.json());

app.use("/", require("./MVC/Controller"));

app.listen(port, () => {
  console.log(`${port} is ready...!`);
});
