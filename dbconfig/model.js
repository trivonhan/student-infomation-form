var mongoose = require("mongoose");
module.exports = {
  students : mongoose.model("students", require("./schema/form"))
};