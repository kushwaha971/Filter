import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const list = ["Phone", "Charger", "Adopter", "Camera", "PhoneCable"];
  const [filterData, setFilterData] = useState(list);
  const handleFilter = (e) => {
    if (e.target.value === "") {
      setFilterData(list);
      return;
    }
    const data = list.filter(
      (d) => d.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1
    );
    setFilterData(data);
  };
  return (
    <div className="App">
      <input type="text" onChange={handleFilter} />
      {filterData.map((item, indx) => (
        <div key={indx}>{item}</div>
      ))}
    </div>
  );
}
