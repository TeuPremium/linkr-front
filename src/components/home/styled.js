import styled from "styled-components";

export const BodyHome = styled.div`
  height: 100vh;
  background-color: #151515;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  @media (max-width: 900px) {
    height: 175px;
  }
  h1 {
    padding-left: 15%;
    font-family: "Passion One", cursive;
    font-size: 106px;
    font-weight: 700;
    line-height: 117px;
    letter-spacing: 0.05em;
    text-align: left;
    color: #ffffff;
    @media (max-width: 900px) {
      font-family: Passion One;
      font-size: 76px;
      font-weight: 700;
      line-height: 84px;
      letter-spacing: 0.05em;
      text-align: center;
      padding-left: 0;
    }
  }
  h2 {
    padding-left: 15%;
    width: 700px;
    font-family: "Oswald", sans-serif;
    font-size: 43px;
    font-weight: 700;
    line-height: 64px;
    text-align: left;
    color: #ffffff;
    box-sizing: border-box;
    @media (max-width: 1300px) {
      width: 100%;
    }
    @media (max-width: 900px) {
      padding-right: 15%;
      font-family: Oswald;
      font-size: 23px;
      font-weight: 700;
      line-height: 34px;
      text-align: center;
    }
  }
`;
