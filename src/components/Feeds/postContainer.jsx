import { PostContainer, LikeContainer, HeartIcon, UsersPosts } from "./styles";


export function UserPostContainer(prop){
    return(
    <PostContainer color={"#171717"}>
    <div>
      <img src="https://imgs.search.brave.com/7KHxJqOc757ysQ-_b0Tcyzs67rTqJ4Bv5dKrE9P77Us/rs:fit:900:900:1/g:ce/aHR0cHM6Ly92aWdu/ZXR0ZS53aWtpYS5u/b2Nvb2tpZS5uZXQv/eW91dHViZS9pbWFn/ZXMvYi9iMy9HcmFu/ZGF5eS5qcGcvcmV2/aXNpb24vbGF0ZXN0/P2NiPTIwMTgwODAz/MDAyODU1" />
      <LikeContainer>
        <HeartIcon/>
        <h1>x likes</h1>
      </LikeContainer>
    </div>
    <UsersPosts>
      <h3>username</h3>
      <h4>
        Muito maneiro esse tutorial de Material UI com React, deem uma
        olhada!
      </h4>
      Placeholder box
    </UsersPosts>
  </PostContainer>
  )
}