import styled from "styled-components";

export const ContainerHome = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const BodyHome = styled.div`
  height: 100vh;
  background-color: #151515;
  width: 100%;
  h1 {
    padding-left: 15%;
    padding-top: 15%;

    font-family: "Passion One", cursive;
    font-size: 106px;
    font-weight: 700;
    line-height: 117px;
    letter-spacing: 0.05em;
    text-align: left;
    color: #ffffff;
  }
  h2 {
    padding-left: 15%;
    width: 442px;
    font-family: "Oswald", sans-serif;
    font-size: 43px;
    font-weight: 700;
    line-height: 64px;
    text-align: left;
    color: #ffffff;
  }
`;
