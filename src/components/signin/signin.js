import { useState } from "react";
import { BodySignin, Button, StyledLink } from "./styled";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Signin({ handleShowSignup }) {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

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
        navigate("/timeline");
      }
    } catch (error) {
      if (error.response) return alert("Incorrect e-mail or password.");
    }
  }

  return (
    <BodySignin>
      <form onSubmit={login}>
        <label htmlFor="email">
          <input
            id="email"
            placeholder="e-mail"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </label>
        <label htmlFor="password">
          <input
            id="password"
            placeholder="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </label>
        <Button type="submit">Entrar</Button>
      </form>
      <StyledLink onClick={handleShowSignup}>
        First time? Create an account!
      </StyledLink>
    </BodySignin>
  );
}