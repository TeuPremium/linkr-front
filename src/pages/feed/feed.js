import FeedContainer from "../../components/Feeds/feedContainer";
import Header from "../../components/header/header";
import { tokenIsValid } from "../../hooks/auth";
import styled from "styled-components";

export default function Feed(prop) {
  tokenIsValid();

  return (
    <>
      {/* colocar imagem por prop no header */}
      <ViewPortContainer>
        <DeleteContainer>
          <div>
            <h2>Are you sure you want to delete this post?</h2>
          </div>
          <Container>
            <Button color="white">
              <div>No, go back!</div>
            </Button>
            <Button color="#1877F2">
              <div>Yes, delete!</div>
            </Button>
          </Container>
        </DeleteContainer>
      </ViewPortContainer>
      <Header />
      <FeedContainer timeline={prop.timeline} />
    </>
  );
}


const DeleteContainer = styled.div`
  width: 41vw;
  height: 300px;
  position: fixed;
  top: 35vh;
  left: 30vw;
  background-color: #333333;
  border-radius: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-left: 60px;
  padding-right: 60px;
  padding-bottom: 65px;
  h2{
    font-family: 'Lato';
    font-style: normal;
    font-weight: 700;
    font-size: 34px;
    line-height: 41px;
    text-align: center;
    color: #FFFFFF;
  }
 
`

const Button = styled.div`
width: 134px;
height: 37px;
box-sizing: border-box;
margin-left: 10px;
background-color: ${prop => prop.color};
border-radius: 5px;
`
const Container = styled.div`
display: flex;
width: 100%;
padding-left: 20px;
padding-right: 30px;
justify-content: space-between;

`

const ViewPortContainer = styled.div`
    width: 1500vh;
    height: 150vh;
    position: fixed;
    z-index: 3;
    background: rgba(255, 255, 255, 0.6)
`
