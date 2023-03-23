import styled from "styled-components";
// import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

export const ContainerFeed = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Container = styled.div`
  width: 42%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 150px;
  span {
    display: flex;
    flex-direction: row;
    img {
    margin-left: 16px;
    margin-right: 18px;
    width: 53px;
    height: 53px;
    border-radius: 53px;
  }
  }
`;