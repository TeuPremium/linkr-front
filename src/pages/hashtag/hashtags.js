import Header from "../../components/header/header";
import { Container, ContainerFeed, PostContainer, LikeContainer, HeartIcon, UsersPosts, TrendingBoxContainer, HeaderTrending, HashtagContainer } from "./styled";
import { UserPostContainer } from "../../components/Feeds/postContainer";
import TrendingTags from "../../components/Feeds/trendingBox";

export default function hashtags() {



  

  return (
    <>
      <Header />

      <ContainerFeed>
        <Container>

          <h1># hashtag</h1>

          <UserPostContainer />
          <UserPostContainer />
          <UserPostContainer />


        </Container>

        <TrendingTags/>

      </ContainerFeed>



    </>
  )
}


