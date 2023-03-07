import { useState } from "react";
import { BodySignin, Button, StyledLink } from "./styled";

export default function Signin({ handleShowSignup }) {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  async function login(e) {
    e.preventDefault();
    if (!email) return alert("Please fill in the email field.");
    if (!password) return alert("Please fill in the password field.");
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
