import { useParams } from "react-router-dom";
import Header from "../../components/header/header";
import TrendingTags from "../../components/Feeds/trendingBox";
import { useEffect, useState } from "react";
import { ContainerFeed, Container } from "./styled";
import axios from "axios";
import { UserPostContainer } from "../../components/Feeds/postContainer";

export default function UserPage() {
  const { id } = useParams();
  const [userPostsArray, setUserPostsArray] = useState("");
  const isShown = false;

  useEffect(() => {
    const promise = axios.get(`${process.env.REACT_APP_API_URL}/user/${id}`);
    promise.then((e) => {
      setUserPostsArray(e.data);
      console.log(e.data[0])
  });
    promise.catch((error) => alert(error.message));
  }, []);

  if (userPostsArray && Object.keys(userPostsArray[0]).length > 3) {
    return (
      <>
        <Header />
        <>
          <ContainerFeed>
            <Container>
              <span>
                <img src={userPostsArray[0].image} alt="" />
                <h1>{userPostsArray[0].username}'s Posts</h1>
              </span>

              {userPostsArray.map((e) => (
                <UserPostContainer
                  username={e.username}
                  image={e.image}
                  url={e.url}
                  comment={e.comment}
                  id={e.postId}
                  urlData={e.url}
                  isShown={isShown}
                />
              ))}
            </Container>

            <TrendingTags />
          </ContainerFeed>
        </>
      </>
    );
  } else if (userPostsArray && Object.keys(userPostsArray[0]).length === 3) {
    return (
      <>
        <Header />
        <>
          <ContainerFeed>
            <Container>
              <span>
                <img src={userPostsArray[0].image} alt="" />
                <h1>{userPostsArray[0].username}'s Posts</h1>
              </span>

            </Container>

            <TrendingTags />
          </ContainerFeed>
        </>
      </>
    );
  } else {
    return (
      <img
        src="https://imgs.search.brave.com/WXOcrQtv7vqv7kBbWX1VWRCCfW6u9gXYv6eKryV7_P4/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93d3cu/d3BmYXN0ZXIub3Jn/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDEz/LzA2L2xvYWRpbmct/Z2lmLmdpZg.gif"
        alt=""
      />
    );
  }
}
