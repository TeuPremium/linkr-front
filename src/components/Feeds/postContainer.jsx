import { Link } from "react-router-dom";
import PencilIcon from "../../assets/styles/pencilIcon";
import TrashIcon from "../../assets/styles/trashIcon";
import { PostContainer, LikeContainer, HeartIcon, UsersPosts, UserHeader, LinkContainer, CommentContainer } from "./styles";


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
        <UserHeader>
          <h3>{prop.username}</h3>
          <div>
          <TrashIcon/>
          <PencilIcon/>
          </div>
        </UserHeader>

        <CommentContainer>
          <h4>
            {prop.comment}
          </h4>
        </CommentContainer>

        <LinkContainer>
          <Link to={prop.url} target="_blank" style={{textDecoration:"none", color:"#CECECE"}}>  
          {prop.url}
          </Link>
        </LinkContainer>

      </UsersPosts>
    </PostContainer>
  )
}