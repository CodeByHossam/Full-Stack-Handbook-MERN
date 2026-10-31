// src/pages/UserDetail.jsx
import { useParams } from "react-router-dom";

export default function UserDetail() {
  const { id } = useParams();
  return (
    <section>
      <h1>User Detail</h1>
      <p>User id: {id}</p>
    </section>
  );
}
