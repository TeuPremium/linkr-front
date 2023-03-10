import { useState } from "react";
import { Link } from "react-router-dom";
import PencilIcon from "../../assets/styles/pencilIcon";
import TrashIcon from "../../assets/styles/trashIcon";
import { PostContainer, LikeContainer, HeartIcon, UsersPosts, UserHeader, LinkContainer, CommentContainer } from "./styles";
import { useForm } from "react-hook-form";

export function UserPostContainer(prop){
    const [edit, setEdit] = useState(false)
    const [comment, setComment] = useState(prop.comment) 
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
      setEdit(false)
      setComment(data.comment);

    };


    function editChange(boolean){
      boolean ? setEdit(false) : setEdit(true) 
    }

    
   
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
            <div onClick={() => console.log(true)}>
            <TrashIcon />
            </div>
            <div onClick={() => editChange(edit)}>
            <PencilIcon/>
            </div>
          </div>
        </UserHeader>

        <CommentContainer>
        {edit ? <form onSubmit={handleSubmit(onSubmit)}><input defaultValue={comment} {...register("comment")}/></form>: <h4>{comment}</h4>}
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

