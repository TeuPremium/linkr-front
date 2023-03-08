import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 23px;
  height: 17px;
  transform: rotate(
    ${(props) => (props.direction === "up" ? "180deg" : "0deg")}
  );
`;

export const ContainerHeader = styled.div`
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

export const UserContainer = styled.div`
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
