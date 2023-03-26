import styled from "styled-components";

export const SearchUserContainer = styled.div`
  position: relative;
  align-self: center;
  justify-self: center;
`;

export const UsersBoxContainer = styled.span`
  width: 565px;
  height: 120px;
  position: absolute;
  overflow-y: scroll;

  background-color: #E7E7E7;
  color: yellow;
`;

export const UserBoxContainer = styled.span`
  width: 565px;
  height: 60px;
  position: absolute;
  overflow-y: scroll;

  background-color: #E7E7E7;
  color: yellow;
`;

export const UserFound = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 60px;

  :hover {
    cursor: pointer;
    background-color: #b9b9b9;
  }

  img {
    margin-left: 16px;
    width: 50px;
    height: 50px;
    border-radius: 54px;
    margin-right: 12px;
  }

  p {
    font-size: 19px;
    font-weight: 400;
    line-height: 22.8px;
    color: #515151;
  }
`;

export const EmptyContainer = styled.span``;

export const InputContainer = styled.div`
  width: 565px;
  height: 47px;
  display: flex;
  align-items: center;
  justify-content: center;
  /* top: 12.5px; */
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
