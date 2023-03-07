import styled from "styled-components";
import { Link } from "react-router-dom";

export const BodySignup = styled.div`
  width: 535px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  form {
    display: flex;
    flex-direction: column;
    margin-top: 24px;
  }
  input {
    margin-left: 50px;
    margin-right: 50px;
    height: 65px;
    width: 429px;
    margin-bottom: 13px;
    padding-left: 17px;
    box-sizing: border-box;
    border-radius: 6px;
    font-family: "Oswald", sans-serif;
    font-size: 27px;
    font-weight: 700;
    line-height: 40px;
    color: #000000;
  }
  input::placeholder {
    color: #9f9f9f;
  }
`;

export const Button = styled.button`
  margin-left: 50px;
  margin-right: 50px;
  background-color: #1877f2;
  border: none;
  margin-bottom: 36px;
  height: 65px;
  width: 429px;
  border-radius: 5px;
  color: #ffffff;
  font-family: "Oswald", sans-serif;
  font-size: 21px;
  font-weight: 700;
  line-height: 26px;
`;

export const StyledLink = styled(Link)`
  color: #ffffff;
  font-family: "Lato", sans-serif;
  font-size: 20px;
  font-weight: 400;
  line-height: 24px;
`;
