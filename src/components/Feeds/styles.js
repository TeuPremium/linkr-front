import styled from "styled-components";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

export const TrendingBoxContainer = styled.div`
  height: 406px;
  width: 301px;
  background-color: #171717;
  border-radius: 16px;
  margin-top: 232px;
  margin-right: 150px;

`

export const HeaderTrending = styled.div`
  width: 100%;
  height: 61px;
  border-radius: 16px 16px 0 0;
  border-bottom: 2px solid #484848;
  background-color: #171717;
  display: flex;
  align-items: center;
  h1{
    font-size: 27px;
    font-weight: 700;
    margin-left: 16px;
  }
`

export const HashtagContainer = styled.div`
  width: 130px;
  height: 293px;
  margin-left: 16px;
  margin-top: 22px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #171717;
  h1{
    font-size: 19px;

  }
`

export const PostContainer = styled.div`
  height: 209px;
  width: 100%;
  background-color: ${(props) => props.color};
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
    div {
      width: 112px;
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
`;
export const UsersPosts = styled.div`
  height: 155px;
  left: 502px;
  top: 596px;
  background-color: white;
`;

export const Container = styled.div`
  width: 42%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 150px;
`;



export const LikeContainer = styled.div`
  height: 30px;
  width: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 22px;
  margin-top: 10px;
  h1{
    font-size: 11px;
    margin-top: 6px;
  }
`

export const HeartIcon = styled(AiOutlineHeart)`
  color: #FFFFFF;
  scale: 2;
`


export const ContainerFeed = styled.div`
  display: flex;
  justify-content: space-between;
  
`
