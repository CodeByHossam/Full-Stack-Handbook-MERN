// src/pages/Products.jsx
import { Link } from "react-router-dom";

export default function Products() {
  const items = [
    { id: 1, name: "Widget" },
    { id: 2, name: "Gadget" },
  ];
  return (
    <section>
      <h1>Products</h1>
      <ul>
        {items.map((p) => (
          <li key={p.id}>
            <Link to={`/products/${p.id}`}>{p.name}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
