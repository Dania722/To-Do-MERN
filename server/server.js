

  const express = require("express");
  const app = express();
  const mongoose = require("mongoose");
  const cors = require("cors");
  const listRouter = require("./Router/listRouter");


    mongoose.connect(
    "mongodb+srv://Todo:todoapp@cluster0.2vqptmn.mongodb.net/?retryWrites=true&w=majority",
    (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Mongo DB Connected Successfully");
      }
    }
  );
  app.use(express.json());
app.use(cors());
app.use("/todo",listRouter);
app.listen(5000,() => console.log('Server running on port 5000!'))

