// src/components/ErrorPage.jsx
import { useRouteError, Link } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="error-page" role="alert">
      <h1>Something went wrong</h1>
      <p>
        {error?.statusText || error?.message || "An unexpected error occurred."}
      </p>
      <Link to="/">Go back home</Link>
    </div>
  );
}
