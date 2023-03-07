import { useState } from "react";
import { BodySignup, Button, StyledLink } from "./styled";
import axios from "axios";

export default function Signup({ handleShowSignin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [pictureUrl, setPictureUrl] = useState("");

  async function creatAccount(e) {
    e.preventDefault();

    const url = `${process.env.REACT_APP_API_URL}/signup`;

    const data = { email, password, username, pictureUrl };

    try {
      const promisse = await axios.post(url, data);

      if (promisse.data) {
        handleShowSignin();
      }
    } catch (error) {
      console.log(error.response.status);
    }
  }

  return (
    <BodySignup>
      <form onSubmit={creatAccount}>
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
