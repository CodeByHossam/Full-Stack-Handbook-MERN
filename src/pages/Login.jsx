// src/pages/Login.jsx
import { useDispatch } from "react-redux";
import { setCredentials } from "../store/authSlice";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = () => {
    dispatch(setCredentials({ user: { name: "Demo User" }, token: "demo-token" }));
    navigate("/dashboard", { replace: true });
  };

  return (
    <section>
      <h1>Login</h1>
      <button onClick={handleLogin}>Sign in (demo)</button>
    </section>
  );
}
