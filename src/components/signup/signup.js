import { useState } from "react";
import { BodySignup, Button, StyledLink } from "./styled";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [pictureUrl, setPictureUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  async function creatAccount(e) {
    e.preventDefault();
    if (!username) return alert("Please fill in the username field.");
    if (!email) return alert("Please fill in the email field.");
    if (!password) return alert("Please fill in the password field.");
    if (!pictureUrl) return alert("Please fill in the picture field.");

    const url = `${process.env.REACT_APP_API_URL}/signup`;
    // const url = `http://localhost:5000/signup`;

    const data = { email, password, username, pictureUrl };

    try {
      const promisse = await axios.post(url, data);

      if (promisse.data) {
        navigate("/");
      }
    } catch (error) {
      if (error.response.status === 409)
        return alert("E-mail already registered.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <BodySignup>
      <form onSubmit={creatAccount}>
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
        <label htmlFor="username">
          <input
            data-test="username"
            id="username"
            placeholder="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          ></input>
        </label>
        <label htmlFor="pictureUrl">
          <input
            data-test="picture-url"
            id="pictureUrl"
            placeholder="picture url"
            type="url"
            value={pictureUrl}
            onChange={(e) => setPictureUrl(e.target.value)}
          ></input>
        </label>
        <Button data-test="sign-up-btn" type="submit" disabled={isLoading}>
          {isLoading ? "loading..." : "Sign Up"}
        </Button>
      </form>
      <StyledLink data-test="login-link" to="/">
        Switch back to log in
      </StyledLink>
    </BodySignup>
  );
}
