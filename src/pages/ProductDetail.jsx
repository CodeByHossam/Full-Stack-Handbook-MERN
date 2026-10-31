// src/pages/ProductDetail.jsx
import { useParams } from "react-router-dom";

export default function ProductDetail() {
  const { id } = useParams();
  return (
    <section>
      <h1>Product Detail</h1>
      <p>Product id: {id}</p>
    </section>
  );
}
