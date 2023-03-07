import { useState } from "react";
import Signin from "../../components/signin/signin";
import Signup from "../../components/signup.js/signup";
import { BodyHome, ContainerHome } from "./styled";

export default function Home() {
  const [showSignup, setShowSignup] = useState(false);

  function handleShowSignup() {
    setShowSignup(true);
  }

  function handleShowSignin() {
    setShowSignup(false);
  }

  return (
    <ContainerHome>
      <BodyHome>
        <h1>Linkr</h1>
        <h2>save, share and discover the best links on the web</h2>
      </BodyHome>
      {showSignup ? (
        <Signup handleShowSignin={handleShowSignin} />
      ) : (
        <Signin handleShowSignup={handleShowSignup} />
      )}
    </ContainerHome>
  );
}
