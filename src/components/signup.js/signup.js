import { useState } from "react";
import { BodySignup, Button, StyledLink } from "./styled";

export default function Signup({ handleShowSignin }) {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [pictureUrl, setPictureUrl] = useState("");

  //onSubmit={signup}
  return (
    <BodySignup>
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
            placeholder="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          ></input>
        </label>
        <label htmlFor="username">
          <input
            id="username"
            placeholder="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          ></input>
        </label>
        <label htmlFor="pictureUrl">
          <input
            id="pictureUrl"
            placeholder="picture url"
            type="url"
            value={pictureUrl}
            onChange={(e) => setPictureUrl(e.target.value)}
            required
          ></input>
        </label>
        <Button type="submit">Entrar</Button>
      </form>
      <StyledLink onClick={handleShowSignin}>Switch back to log in</StyledLink>
    </BodySignup>
  );
}
