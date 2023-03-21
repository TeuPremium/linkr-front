import { useState } from "react";
import { BodySignin, Button, StyledLink } from "./styled";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Signin({}) {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  async function login(e) {
    e.preventDefault();
    if (!email) return alert("Please fill in the email field.");
    if (!password) return alert("Please fill in the password field.");

    const url = `${process.env.REACT_APP_API_URL}/signin`;
    const data = { email, password };

    try {
      const promisse = await axios.post(url, data);
      console.log(promisse.data);
      if (promisse.data) {
        localStorage.setItem("token", JSON.stringify(promisse.data.token));
        localStorage.setItem("image", JSON.stringify(promisse.data.image));
        localStorage.setItem("email", JSON.stringify(promisse.data.email));
        localStorage.setItem("userId", JSON.stringify(promisse.data.userId));
        navigate("/timeline");
      }
    } catch (error) {
      console.log(error.response);
      if (error.response) return alert("Incorrect e-mail or password.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <BodySignin>
      <form onSubmit={login}>
        <label htmlFor="email">
          <input
            data-test="email"
            id="email"
            placeholder="e-mail"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </label>
        <label htmlFor="password">
          <input
            data-test="password"
            id="password"
            placeholder="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </label>
        <Button data-test="login-btn" type="submit" disabled={isLoading}>
          {isLoading ? "loading..." : "Sign In"}
        </Button>
      </form>
      <StyledLink data-test="sign-up-link" to="/sign-up">
        First time? Create an account!
      </StyledLink>
    </BodySignin>
  );
}
