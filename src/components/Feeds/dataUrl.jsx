import { ContainerTextUrl, UrlContainer } from "./styles";

export default function UrlData(prop) {
  console.log(prop.url)
  
  return (
    <UrlContainer>
      <ContainerTextUrl>
        <h1>{prop.urlData.title ? prop.urlData.title : "undefined"}</h1>
        <h2>
        {prop.urlData.description ? prop.urlData.description : "undefined"}
        </h2>
        <h3>{prop.url}</h3>
      </ContainerTextUrl>
      <img src={prop.urlData.image} style={{objectFit:"cover"}}/>
    </UrlContainer>
  );
}
