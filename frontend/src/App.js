import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import DonationForm from "./components/DonationForm";
import Inventory from "./components/Inventory";
import Donors from "./components/Donors";
import Patients from "./components/Patients";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <DonationForm />
      <Inventory />
      <Donors />
      <Patients />
    </div>
  );
}

export default App;
