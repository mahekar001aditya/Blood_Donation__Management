# 🩸 Blood Donation Management System
## DBMS Project

The Blood Donation Management System is a web application developed to streamline and digitalize the blood donation process. The system enables donors to register, update, and manage their profiles, while recipients can request and track blood availability with ease.


---

## 🌐 Live Demo  
🔗 [Blood Donation Management System](https://adityamahekar.github.io/Blood_Donation__Management/)

---

## 🚀 Features
- 🧍 User registration & login (with sessions)  
- 👤 Donor profile & details management  
- 🩸 Blood request submission & tracking  
- 🔍 Search donors by blood group
- 📊 Admin view for managing data  

---

## 📷 Gallery 

| Home Page | Blood Request Form |
|------------|--------------------|
| ![Home Page](bb1.png) | ![Blood Request Form](bb2.png) |

| Patient List | Donor List |
|--------------|------------|
| ![Patient List](bb5.png) | ![Donor List](bb4.png) |

| Inventory Page |
|--------------|
| ![Inventory List](bb3.png) |
---

▶️ Start Backend Server

Go to the backend folder:

cd backend
npm install
node server.js

Backend runs at:
http://localhost:5000


▶️ Start Frontend (React App)

Go to frontend folder:

cd frontend
npm install
npm start

Frontend runs at:
http://localhost:3000


📦 MongoDB Query Examples

✅ Insert (Create) Queries

Add a Donor
db.donors.insertOne({
  name: "Aditya",
  age: 21,
  phone: "9876543210",
  bloodType: "A+",
  units: 2,
  date: new Date()
})

Add a Patient
db.patients.insertOne({
  name: "Rahul",
  age: 30,
  phone: "9999999999",
  bloodType: "B+",
  units: 1,
  date: new Date()
})


✅ Read (Find) Queries

Get All Donors
db.donors.find()

Get All Patients
db.patients.find()

Find by Blood Group
db.donors.find({ bloodType: "A+" })

Find by Phone Number
db.donors.find({ phone: "9876543210" })


✅ Update Queries

Update Donor Units
db.donors.updateOne(
  { name: "Aditya" },
  { $set: { units: 3 } }
)

Increment Blood Units
db.inventory.updateOne(
  { bloodType: "A+" },
  { $inc: { units: 1 } }
)

Decrease Blood Units
db.inventory.updateOne(
  { bloodType: "A+" },
  { $inc: { units: -1 } }
)


✅ Delete Queries

Delete a Donor
db.donors.deleteOne({ name: "Aditya" })

Delete All Patients
db.patients.deleteMany({})


✅ Aggregation Queries

Count Blood Units by Type
db.donors.aggregate([
  { $group: { _id: "$bloodType", totalUnits: { $sum: "$units" } } }
])


✅ MongoDB Atlas Connection Example

mongoose.connect("mongodb+srv://username:password@cluster.mongodb.net/bloodcare")


✅ Mongoose Schema Example

const mongoose = require("mongoose");

const DonorSchema = new mongoose.Schema({
  name: String,
  age: Number,
  phone: String,
  bloodType: String,
  units: Number,
  date: Date
});

module.exports = mongoose.model("Donor", DonorSchema);










