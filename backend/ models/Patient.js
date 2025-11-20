
const mongoose = require("mongoose");

const PatientSchema = new mongoose.Schema({
  name: String,
  age: Number,
  phone: String,
  bloodType: String
});

module.exports = mongoose.model("Patient", PatientSchema);
