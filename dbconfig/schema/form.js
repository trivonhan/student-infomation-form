var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var students = new Schema({
  name : String,
  mssv : String,
  class : String,
  faculty : String,
  year : Number,
  month : Number,
  status : Boolean
});

module.exports = students;
