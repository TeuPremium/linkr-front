import { ContainerTextUrl, UrlContainer } from "./styles";

export default function UrlData(prop) {
  
  return (
    <UrlContainer>
      <ContainerTextUrl>
        <h1>{prop.urlData.title ? prop.urlData.title : "undefined"}</h1>
        <h2>
        {prop.urlData.description ? prop.urlData.description : "undefined"}
        </h2>
        <h3>{prop.url}</h3>
      </ContainerTextUrl>
      {prop.urlData.image ? <img src={prop.urlData.image} style={{objectFit:"cover"}}/> : <img src="no-image.png"/>}
    </UrlContainer>
  );
}
