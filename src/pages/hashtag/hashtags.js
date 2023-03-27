import Header from "../../components/header/header";
import {
  Container,
  ContainerFeed,
  PostContainer,
  LikeContainer,
  HeartIcon,
  UsersPosts,
  TrendingBoxContainer,
  HeaderTrending,
  HashtagContainer,
} from "./styled";
import { UserPostContainer } from "../../components/Feeds/postContainer";
import TrendingTags from "../../components/Feeds/trendingBox";
import { tokenIsValid } from "../../hooks/auth";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Hashtags() {
  tokenIsValid();
  const url = `${process.env.REACT_APP_API_URL}/hashtag`;
  const { hashtag } = useParams()
  console.log(`${url}/${hashtag}`)
  const [posts, setPosts] = useState([])
  const [search, setSearch] = useState(null)

  useEffect(() => {
    if(search != hashtag){
      setSearch(hashtag)
    const promise = axios.get(`${url}/${hashtag}`).then((e) => setPosts(e.data))
    promise.catch((error) =>
      alert(
        "An error occured while trying to fetch the posts, please refresh the page"
      )
      );
    }
  }, );

  console.log(posts)
  return (
    <>
      <Header />

      <ContainerFeed>
        <Container>
          <h1 data-test="hashtag-title"># {hashtag}</h1>
          {posts.map((e) => (
              <UserPostContainer
                e={e}
                isShown={false}
              />
            ))}
          
        </Container>

        <TrendingTags />
      </ContainerFeed>
    </>
  );
}
