
const mongoose = require("mongoose");

const DonorSchema = new mongoose.Schema({
  name: String,
  age: Number,
  phone: String,
  bloodType: String
});

module.exports = mongoose.model("Donor", DonorSchema);
