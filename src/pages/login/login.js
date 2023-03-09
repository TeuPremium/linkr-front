import Home from "../../components/home/home";
import Signin from "../../components/signin/signin";
import { tokenExist } from "../../hooks/auth";

import { ContainerHome } from "./styled";

export default function Login() {
  tokenExist();
  return (
    <ContainerHome>
      <Home />
      <Signin />
    </ContainerHome>
  );
}
