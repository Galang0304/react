// ItemList.js
import React from "react";

function ItemList() {
  const items = [
    { id: 1, name: "Kaos", price: 100000 },
    { id: 2, name: "Celana", price: 200000 },
    { id: 3, name: "Topi", price: 50000 },
  ];

  return (
    <div>
      <h2>Daftar Barang</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name} - Rp {item.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ItemList;
