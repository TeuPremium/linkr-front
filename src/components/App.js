import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hashtags from "../pages/hashtag/hashtags";
import Home from "../pages/home/home";
import Signin from "../pages/signin/signin";
import Signup from "../pages/signup.js/signup";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/cadastro" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/hashtags" element={<Hashtags />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
