
import React, { useState } from "react";

export default function DonationForm() {
  const [form, setForm] = useState({
    name: "",
    age: "",
    phone: "",
    bloodType: "",
    type: "donor"
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function submitForm(e) {
    e.preventDefault();
    await fetch("http://localhost:5000/api/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    });
    alert("Submitted Successfully!");
  }

  return (
    <div className="section">
      <h2>Donate / Request Blood</h2>
      <form onSubmit={submitForm}>
        <input name="name" placeholder="Name" onChange={handleChange} />
        <input name="age" placeholder="Age" onChange={handleChange} />
        <input name="phone" placeholder="Phone" onChange={handleChange} />
        <select name="bloodType" onChange={handleChange}>
          <option value="">Select Blood Type</option>
          <option>A+</option>
          <option>B+</option>
          <option>O+</option>
        </select>
        <select name="type" onChange={handleChange}>
          <option value="donor">Donor</option>
          <option value="patient">Patient</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
