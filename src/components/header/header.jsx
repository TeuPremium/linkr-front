import styled from "styled-components";
import UserSearchInput from "../userSearchInput/UserSearchInput";
import ArrowDown from "./arrowDown";
import LinkrLogo from "./linkrLogo";

export default function (prop) {
  return (
    <>
      <Container>
        <LinkrLogo />
        <UserSearchInput />
        <UserContainer>
          <ArrowDown />
          <img src="https://imgs.search.brave.com/7KHxJqOc757ysQ-_b0Tcyzs67rTqJ4Bv5dKrE9P77Us/rs:fit:900:900:1/g:ce/aHR0cHM6Ly92aWdu/ZXR0ZS53aWtpYS5u/b2Nvb2tpZS5uZXQv/eW91dHViZS9pbWFn/ZXMvYi9iMy9HcmFu/ZGF5eS5qcGcvcmV2/aXNpb24vbGF0ZXN0/P2NiPTIwMTgwODAz/MDAyODU1" />
        </UserContainer>
      </Container>
    </>
  );
}

const Container = styled.div`
  background-color: #151515;
  height: 72px;
  width: 100%;
  padding-left: 28px;
  justify-content: space-between;
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
`;

const UserContainer = styled.div`
  display: flex;
  align-items: center;
  padding-top: 10px;
  margin-right: 38px;
  bottom: 5px;
  position: relative;
  img {
    margin-left: 16px;
    width: 53px;
    height: 53px;
    border-radius: 53px;
  }
`;
