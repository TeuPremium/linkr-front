import { PostContainer, LikeContainer, HeartIcon, UsersPosts } from "./styles";


export function UserPostContainer(prop){
  console.log(prop.image)
    return(
    <PostContainer color={"#171717"}>
    <div>
      <img src={prop.image} />
      <LikeContainer>
        <HeartIcon/>
        <h1>x likes</h1>
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