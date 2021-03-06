import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuthContext } from "./AuthContext";

export const LoginPage = (): JSX.Element => {
  const { login } = useAuthContext();
  const navigate = useNavigate();
  const location = useLocation();

  const [loading, setLoading] = React.useState<boolean>(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // fake api request
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      login(
        {
          id: 1,
          name: "Jordan Sim-Smith",
        },
        "my access token"
      );
      navigate((location.state as any)?.from || "/", {
        replace: true,
      });
    }, 1000);
  };

  return (
    <div>
      <h2>Login</h2>

      <form onSubmit={handleLogin}>
        {loading && <p>Loading...</p>}

        <label htmlFor="login-username">Username</label>
        <input id="login-username" type="text" disabled={loading} />

        <label htmlFor="login-password">Password</label>
        <input id="login-password" type="password" disabled={loading} />

        <button type="submit">Login</button>
      </form>
    </div>
  );
};
