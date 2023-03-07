import { useState } from "react";
import { BodySignin, Button, StyledLink } from "./styled";

export default function Signin() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  //onSubmit={login}
  return (
    <BodySignin>
      <form>
        <label htmlFor="email">
          <input
            id="email"
            placeholder="e-mail"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          ></input>
        </label>
        <label htmlFor="password">
          <input
            id="password"
            placeholder="Senha"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          ></input>
        </label>
        <Button type="submit">Entrar</Button>
      </form>
      <StyledLink>First time? Create an account!</StyledLink>
    </BodySignin>
  );
}
