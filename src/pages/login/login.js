import Home from "../../components/home/home";
import Signin from "../../components/signin/signin";

import { ContainerHome } from "./styled";

export default function Login() {
  return (
    <ContainerHome>
      <Home />
      <Signin />
    </ContainerHome>
  );
}
