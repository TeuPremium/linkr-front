import Signin from "../../components/signin/signin";
import { BodyHome, ContainerHome } from "./styled";

export default function Home() {
  return (
    <ContainerHome>
      <BodyHome>
        <h1>Linkr</h1>
        <h2>save, share and discover the best links on the web</h2>
      </BodyHome>
      <Signin></Signin>
    </ContainerHome>
  );
}
