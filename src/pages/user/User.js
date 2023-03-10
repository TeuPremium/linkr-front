import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { AiOutlineHeart } from "react-icons/ai";
import Header from "../../components/header/header";
import TrendingTags from "../../components/Feeds/trendingBox";
import { useEffect, useState } from "react";
import axios from "axios";

export default function UserPage() {
  const { id } = useParams();
  const [userPostsArray, setUserPostsArray] = useState("");

  console.log(id);

  useEffect(() => {
    const promise = axios.get(`${process.env.REACT_APP_API_URL}/user/${id}`);
    promise.then((e) => setUserPostsArray(e.data));
    promise.catch(console.log);
  }, []);

  return (
    <>
      <Header />

      <UserFeedContainer>
        <TituloContainer>
          <img src={userPostsArray[0].image} />
          <h1>{userPostsArray[0].username}'s Posts</h1>
        </TituloContainer>

        <ContainerFeed>
          <Container>
            {userPostsArray.map((e) => (
              <PostContainer color={"#171717"}>
                <div>
                  <img src={e.image} />
                  <LikeContainer>
                    <HeartIcon />
                    <h1>x likes</h1>
                  </LikeContainer>
                </div>
                <UsersPosts>
                  <h3>{e.username}</h3>
                  <h4>{e.comment}</h4>
                  <Link
                    to={e.url}
                    target="_blank"
                    style={{ textDecoration: "none", color: "#CECECE" }}
                  >
                    {e.url}
                  </Link>
                </UsersPosts>
              </PostContainer>
            ))}
          </Container>

          <TrendingTags />
        </ContainerFeed>
      </UserFeedContainer>
    </>
  );
}

const UserFeedContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 10%;
`;

const TituloContainer = styled.div`
  margin-top: 120px;
  margin-bottom: 40px;
  margin-left: 5%;
  display: flex;
  flex-direction: row;
  justify-self: flex-start;

  img {
    margin: 0 16px;
    width: 53px;
    height: 53px;
    border-radius: 53px;
  }
`;

const ContainerFeed = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const Container = styled.div`
  width: auto;
  margin-right: 25px;
`;

const PostContainer = styled.div`
  height: 276px;
  width: 611px;
  background-color: ${(props) => props.color};
  margin-bottom: 16px;
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

const LikeContainer = styled.div`
  height: 30px;
  width: 40px;
  display: flex;
  flex-direction: column;
  margin-left: 22px;
  margin-top: 10px;
  h1 {
    font-size: 11px;
    margin-top: 6px;
  }
`;

const HeartIcon = styled(AiOutlineHeart)`
  color: #ffffff;
  scale: 2;
`;

const UsersPosts = styled.div`
  height: 155px;
  left: 502px;
  top: 596px;
  background-color: white;
`;

const TrendingBoxContainer = styled.div`
  height: 406px;
  width: 301px;
  background-color: #171717;
  border-radius: 16px;
`;

const HeaderTrending = styled.div`
  width: 100%;
  height: 61px;
  border-radius: 16px 16px 0 0;
  border-bottom: 2px solid #484848;
  background-color: #171717;
  display: auto;
  h1 {
    font-size: 27px;
    font-weight: 700;
    margin-left: 16px;
  }
`;

const HashtagContainer = styled.div`
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
