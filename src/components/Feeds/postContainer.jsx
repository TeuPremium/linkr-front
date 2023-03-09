import { PostContainer, LikeContainer, HeartIcon, UsersPosts } from "./styles";
import { LikeButton } from "../../hooks/likeButton";






export function UserPostContainer(prop) {


  console.log(prop.image)
  return (
    <PostContainer color={"#171717"}>
      <div>
        <img src={prop.image} />
        <LikeContainer>
          <LikeButton/>
        </LikeContainer>
      </div>
      <UsersPosts>
        <h3>{prop.username}</h3>
        <h4>
          {prop.comment}
        </h4>
        Placeholder box
      </UsersPosts>
    </PostContainer>
  )
}


