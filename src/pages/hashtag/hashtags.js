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

export default function Hashtags() {
  tokenIsValid();

  const { hashtag } = useParams()

  return (
    <>
      <Header />

      <ContainerFeed>
        <Container>
          <h1># {hashtag}</h1>

          <UserPostContainer />
          <UserPostContainer />
          <UserPostContainer />
        </Container>

        <TrendingTags />
      </ContainerFeed>
    </>
  );
}
