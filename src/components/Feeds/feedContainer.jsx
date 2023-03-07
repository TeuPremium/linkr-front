import styled from "styled-components";

export default function (prop) {
  return (
    <>
      <Container>
        <h1>timeline</h1>
        <CreatePost>
          <img src="https://imgs.search.brave.com/7KHxJqOc757ysQ-_b0Tcyzs67rTqJ4Bv5dKrE9P77Us/rs:fit:900:900:1/g:ce/aHR0cHM6Ly92aWdu/ZXR0ZS53aWtpYS5u/b2Nvb2tpZS5uZXQv/eW91dHViZS9pbWFn/ZXMvYi9iMy9HcmFu/ZGF5eS5qcGcvcmV2/aXNpb24vbGF0ZXN0/P2NiPTIwMTgwODAz/MDAyODU1" />
        </CreatePost>
      </Container>
    </>
  );
}

const CreatePost = styled.div`
  height: 209px;
  width: 100%;
  background-color: white;
  margin-top: 43px;
  border-radius: 16px;
  padding-top: 16px;
  img {
    margin-left: 16px;
    width: 53px;
    height: 53px;
    border-radius: 53px;
  }
`;

const Container = styled.div`
  width: 42%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 150px;
`;
