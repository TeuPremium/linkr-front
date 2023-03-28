import styled from "styled-components";
import { AiOutlineHeart } from "react-icons/ai";

export const TrendingBoxContainer = styled.div`
  height: 406px;
  width: 301px;
  background-color: #171717;
  border-radius: 16px;
  margin-top: 232px;
  margin-right: 150px;
`;

export const HeaderTrending = styled.div`
  width: 100%;
  height: 61px;
  border-radius: 16px 16px 0 0;
  border-bottom: 2px solid #484848;
  background-color: #171717;
  display: flex;
  align-items: center;
  h1 {
    font-size: 27px;
    font-weight: 700;
    margin-left: 16px;
  }
`;

export const HashtagContainer = styled.div`
  width: 130px;
  height: 293px;
  margin-left: 16px;
  margin-top: 22px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #171717;
  h1 {
    font-size: 19px;
  }
`;

export const PostContainer = styled.div`
  height: 209px;
  width: 100%;
  background-color: white;
  margin-top: 43px;
  border-radius: 16px;
  padding-top: 16px;
  display: flex;
  img {
    margin-left: 16px;
    width: 53px;
    height: 53px;
    border-radius: 53px;
  }
`;

export const WritePostContainer = styled.div`
  width: 83%;
  height: 100%;
  padding-left: 18px;
  padding-right: 10px;
  box-sizing: border-box;
  form {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    div {
      width: 112px;
      position: static;
      right: 0;
      input {
        background-color: #1877f2;
        color: white;
      }
    }
  }
  input {
    width: 100%;
    height: 30px;
    left: 501px;
    top: 313px;
    background: #efefef;
    border-radius: 5px;
    border-style: none;
    margin-top: 5px;
  }
  input:nth-of-type(2) {
    height: 66px;
  }
`;

export const UserHeader = styled.div`
  display: flex;
  justify-content: space-between;
  div {
    width: 42px;
    display: flex;
    justify-content: space-between;
  }
`;

export const CommentContainer = styled.div`
  margin-top: 12px;
  height: 40px;
`;

export const LinkContainer = styled.div`
  margin-top: 12px;
`;

export const Container = styled.div`
  width: 42%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 150px;
  p {
    font-size: 50px;
    color: white;
  }
`;

export const LikeContainer = styled.div`
  height: 30px;
  width: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 22px;
  margin-top: 10px;
  h1 {
    font-size: 11px;
    margin-top: 6px;
  }
`;

export const HeartIcon = styled(AiOutlineHeart)`
  color: #ffffff;
  scale: 2;
`;

export const ContainerFeed = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 40px;
`;

//urldata styled

export const UserPostContainertwo = styled.div`
  height: 280px;
  width: 100%;
  background-color: #171717;
  margin-top: 43px;
  border-radius: 16px;
  padding-top: 16px;
  display: flex;
  img {
    margin-left: 16px;
    width: 53px;
    height: 53px;
    border-radius: 53px;
  }
  p {
    font-family: Lato;
    font-size: 11px;
    font-weight: 400;
    line-height: 13px;
    margin-left: 16px;
    color: #ffffff;
  }
`;

export const UsersPosts = styled.div`
  padding-left: 16px;
  height: 100%;
  width: 84%;
  background-color: #171717;
  h3 {
    color: white;
    font-family: Lato;
    font-size: 19px;
    font-weight: 400;
    line-height: 23px;
    text-align: left;
  }
  h4 {
    font-family: Lato;
    font-size: 17px;
    font-weight: 400;
    line-height: 20px;
    text-align: left;
    color: #b7b7b7;
  }
`;

export const UrlContainer = styled.div`
  width: 100%;
  height: 155px;
  background-color: #171717;
  border: 1px solid #4d4d4d;
  border-radius: 11px;
  display: flex;
  justify-content: space-between;
  img {
    height: 152px;
    width: 155px;
    border-radius: 0px;
    border-top-right-radius: 11px;
    border-bottom-right-radius: 11px;
  }
`;

export const ContainerTextUrl = styled.div`
  padding: 20px;
  width: 90%;
  overflow: hidden;
  h1 {
    font-family: Lato;
    font-size: 16px;
    font-weight: 400;
    line-height: 19px;
    text-align: left;
    color: #cecece;
    margin-bottom: 5px;
  }
  h2 {
    font-family: Lato;
    font-size: 11px;
    font-weight: 400;
    line-height: 13px;
    text-align: left;
    color: #9b9595;
    margin-bottom: 10px;
  }
  h3 {
    font-family: Lato;
    font-size: 11px;
    font-weight: 400;
    line-height: 13px;
    color: #cecece;
    text-align: left;
  }
`;

export const Button = styled.div`
  width: 134px;
  height: 37px;
  box-sizing: border-box;
  margin-left: 10px;
  background-color: ${(prop) => prop.color};
  border-radius: 5px;
`;


export const ViewPortContainer = styled.div`
  width: 1500vh;
  height: 150vh;
  position: fixed;
  top: -50%;
  left: -30%;
  z-index: 3;
  background: rgba(255, 255, 255, 0.6);
`;

export const DeleteContainer = styled.div`
  width: 41vw;
  height: 300px;
  position: fixed;
  top: 35vh;
  left: 30vw;
  background-color: #333333;
  border-radius: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-left: 60px;
  padding-right: 60px;
  padding-bottom: 65px;
  h2 {
    font-family: "Lato";
    font-style: normal;
    font-weight: 700;
    font-size: 34px;
    line-height: 41px;
    text-align: center;
    color: #ffffff;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  padding-left: 20px;
  padding-right: 30px;
  justify-content: space-between;
`