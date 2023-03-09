import Home from "../../components/home/home";
import Signup from "../../components/signup/signup";
import { tokenExist } from "../../hooks/auth";
import { ContainerHome } from "./styled";

export default function SignUp() {
  tokenExist();
  return (
    <ContainerHome>
      <Home />
      <Signup />
    </ContainerHome>
  );
}
