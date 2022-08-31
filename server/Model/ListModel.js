const mongoose = require("mongoose");
const listSchema = mongoose.Schema({
  
  list: {
    type: String,
    required: true,
  },
  createdAt: Date,
});
const listModel = mongoose.model("Lists", listSchema);
module.exports = listModel;