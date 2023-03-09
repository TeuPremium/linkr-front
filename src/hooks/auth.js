import jwt_decode from "jwt-decode";

//verificar se o token ainda é valido, se não for valido remove tudo do localStorage
export function tokenIsValid() {
  const { token } = localStorage;

  if (token) {
    const decodedToken = jwt_decode(token);

    const currentTime = Date.now() / 1000;
    if (decodedToken.exp < currentTime) {
      localStorage.removeItem("token");
      localStorage.removeItem("email");
      localStorage.removeItem("userId");
      window.location.href = "/";
    } else {
    }
  } else {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    localStorage.removeItem("userId");
    window.location.href = "/";
  }
}

//se o token existir redireciona para time line
export function tokenExist() {
  const token = localStorage.token;

  if (token) {
    window.location.href = "/timeline";
  }
}

//configuração para enviar requisições para ter a config pasta usar authToken(getToken())
export function authToken(token) {
  const config = {
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
      authorization: token,
    },
  };
  return config;
}
