import { Link, useParams } from "react-router-dom";
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
    // const promise = axios.get(`http://localhost:5000/user/${id}`);
    promise.then((e) => setUserPostsArray(e.data));
    promise.catch((error) =>
      alert(
        "An error occured while trying to fetch the posts, please refresh the page"
      )
    );
  }, []);

  if (userPostsArray) {
    return (
      <>
        <Header />
        <>
          <ContainerFeed>
            <Container>
              <span>
                <img src={userPostsArray[0].image} />
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
  } else {
    return (
      <img src="https://imgs.search.brave.com/WXOcrQtv7vqv7kBbWX1VWRCCfW6u9gXYv6eKryV7_P4/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93d3cu/d3BmYXN0ZXIub3Jn/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDEz/LzA2L2xvYWRpbmct/Z2lmLmdpZg.gif" />
    );
  }
}
