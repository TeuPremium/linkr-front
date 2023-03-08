import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./assets/styles/globalStyle";

import Feed from "./pages/feed/feed";
import Hashtags from "./pages/hashtag/hashtags";
import Home from "./pages/home/home";

function App() {
  //notei que o signin e sigup são componentes da primeira pagina, vou colocar na home por hora.
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/timeline" element={<Feed />} />
        <Route path="/hashtags" element={<Hashtags />} />
      </Routes>

      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
