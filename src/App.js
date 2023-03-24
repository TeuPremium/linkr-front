import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./assets/styles/globalStyle";

import Feed from "./pages/feed/feed";
import Hashtags from "./pages/hashtag/hashtags";
import Login from "./pages/login/login";
import SignUp from "./pages/signup/signup";
import UserPage from "./pages/user/user";

function App() {
  //notei que o signin e sigup são componentes da primeira pagina, vou colocar na home por hora.
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/timeline" element={<Feed timeline={true} />} />
        <Route path="/user" element={<Feed timeline={false} />} />
        <Route path="/hashtag/:hashtag" element={<Hashtags />} />
        <Route path="/user/:id" element={<UserPage />} />
      </Routes>

      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
