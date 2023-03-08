import styled from "styled-components";

export const InputContainer = styled.div`
  width: 565px;
  height: 47px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  input {
    position: absolute;
    z-index: 0;
    display: flex;
    align-items: center;
    width: 563px;
    height: 45px;
    padding-left: 17px;
    padding-right: 47px;
    border-radius: 8px;
    background-color: #fff;

    border: 0px;
    font-family: "Lato", sans-serif;
    font-weight: 400;
    font-size: 19px;
    color: #c6c6c6;
    line-height: 23px;
    font-style: normal;
  }
`;

export const SearchIcon = styled.div`
  color: blue;
  position: absolute;
  z-index: 1;
  align-self: center;
  justify-self: flex-end;
  right: 11px;

  :hover {
    cursor: pointer;
  }
`;
