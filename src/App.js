import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./assets/styles/globalStyle";

import Feed from "./pages/feed/feed";
import Hashtags from "./pages/hashtag/hashtags";
import Login from "./pages/login/login";
import SignUp from "./pages/signup/signup";

function App() {
  //notei que o signin e sigup são componentes da primeira pagina, vou colocar na home por hora.
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/timeline" element={<Feed userProfile={false}/>} />
        <Route path="/timeline" element={<Feed userProfile={true}/>} />
        <Route path="/hashtags" element={<Hashtags />} />
      </Routes>

      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
