// src/pages/Users.jsx
import { Link } from "react-router-dom";

export default function Users() {
  const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
  ];
  return (
    <section>
      <h1>Users</h1>
      <ul>
        {users.map((u) => (
          <li key={u.id}>
            <Link to={`/users/${u.id}`}>{u.name}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
