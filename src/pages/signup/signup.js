import Home from "../../components/home/home";
import Signup from "../../components/signup/signup";
import { ContainerHome } from "./styled";

export default function SignUp() {
  return (
    <ContainerHome>
      <Home />
      <Signup />
    </ContainerHome>
  );
}
