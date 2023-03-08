//se user console.log(getToken() a resposta vai ser o token)
export function getToken() {
  const data = JSON.parse(localStorage.getItem("auth"));
  const token = data.token;
  return token;
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

//não sei se irão precisar dessas duas, mas ai estão. email e id do usuario recebidos no login.
export function getUserId() {
  const data = JSON.parse(localStorage.getItem("auth"));
  const userId = data.userId;
  return userId;
}
export function getEmail() {
  const data = JSON.parse(localStorage.getItem("auth"));
  const email = data.email;
  return email;
}
