
import React, { useEffect, useState } from "react";

export default function Inventory() {
  const [stock, setStock] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/inventory")
      .then(res => res.json())
      .then(data => setStock(data));
  }, []);

  return (
    <div className="section">
      <h2>Blood Inventory</h2>
      <ul>
        {stock.map((b, i) => (
          <li key={i}>{b.type} : {b.units}</li>
        ))}
      </ul>
    </div>
  );
}
