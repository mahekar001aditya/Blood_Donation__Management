
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Donor = require("./models/Donor");
const Patient = require("./models/Patient");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/bloodcare");

app.post("/api/submit", async (req, res) => {
  const data = req.body;
  if (data.type === "donor") {
    await Donor.create(data);
  } else {
    await Patient.create(data);
  }
  res.send("Saved");
});

app.get("/api/inventory", (req, res) => {
  res.json([
    { type: "A+", units: 10 },
    { type: "B+", units: 6 }
  ]);
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
