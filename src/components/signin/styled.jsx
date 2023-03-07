import styled from "styled-components";
import { Link } from "react-router-dom";

export const BodySignin = styled.div`
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
    height: 58px;
    width: 326px;
    margin-bottom: 13px;
    border: 1px solid #d4d4d4;
    padding-left: 11px;
    box-sizing: border-box;
    border-radius: 5px;
    font-family: "Raleway", sans-serif;
    font-size: 20px;
    font-weight: 400;
    line-height: 26px;
    color: #000000;
  }
  input::placeholder {
    color: #9f9f9f;
  }
`;

export const Button = styled.button`
  background-color: #1877f2;
  border: none;
  margin-bottom: 36px;
  height: 46px;
  width: 326px;
  border-radius: 5px;
  color: #ffffff;
  font-family: "Raleway", sans-serif;
  font-size: 21px;
  font-weight: 700;
  line-height: 26px;
`;

export const StyledLink = styled(Link)`
  color: #ffffff;
  text-decoration: none;
  font-family: "Raleway", sans-serif;
  font-size: 15px;
  font-weight: 700;
  line-height: 18px;
`;
