import { ContainerTextUrl, UrlContainer } from "./styles";

export default function UrlData({ url }) {
  return (
    <UrlContainer>
      <ContainerTextUrl>
        <h1>Como aplicar o Material UI em um projeto React</h1>
        <h2>
          Hey! I have moved this tutorial to my personal blog. Same content, new
          location. Sorry about making you click through to another page.
        </h2>
        <h3>{url}</h3>
      </ContainerTextUrl>
      <img src="https://reqres.in/img/faces/1-image.jpg" />
    </UrlContainer>
  );
}
