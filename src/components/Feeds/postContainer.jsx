import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PencilIcon from "../../assets/styles/pencilIcon";
import TrashIcon from "../../assets/styles/trashIcon";
import {
  UserPostContainertwo,
  LikeContainer,
  UsersPosts,
  UserHeader,
  LinkContainer,
  CommentContainer,
  DeleteContainer,
  Button,
  Container,
  ViewPortContainer,
  ButtonContainer
} from "./styles";
import { set, useForm } from "react-hook-form";
import styled from "styled-components";
import axios  from "axios";
import { LikeButton } from "../../hooks/likeButton";
import UrlData from "./dataUrl";
import { ReactTagify } from "react-tagify";
import { useNavigate } from "react-router-dom";




export function UserPostContainer(prop) {
  const {userId} = localStorage
  
  const navigate = useNavigate();
  
  const [edit, setEdit] = useState(false);
  const [deletePrompt, setDeletePrompt] = useState(false);
  const [likes, setLikes] = useState(0); //likes
  const [filled, setFilled] = useState(false); //altera o coração
  const [comment, setComment] = useState(prop.e.comment); //comentario
  const [deletedPost, setDeletedPost] = useState(false)
  const {postId} = prop.e

  const { register,handleSubmit,formState: { errors },watch } = useForm();
  
  const url = process.env.REACT_APP_API_URL;
  const urlData = {image: prop.e.postImage, description: prop.e.description, title: prop.e.title}
  
  const sameUser = (parseInt(userId) === parseInt(prop.e.id))
  // const [likers, setLikers] = useState([]); //salva as pessoas que curtiram
  
  const onSubmit = (data) => {
    console.log(data)
    const promise = axios.put(`${url}/posts/${postId}`, data)
      promise.then((e) => {setComment(data.comment); setEdit(false);})
      promise.catch((e) => {alert(e); setEdit(false);})
    
  };

  function editChange(boolean) {
    boolean ? setEdit(false) : setEdit(true);
  }

  function deletePost() {
      const promise = axios.delete(`${url}/posts/${postId}`)
      promise.then((e) => {setDeletePrompt(false); setDeletedPost(true)})
      promise.catch(alert)


    setDeletePrompt(false);
  }

  //para pegar numero de likes no servidor
  async function postLikes() {
    try {
      const response = await axios.get(`${url}/likes/${prop.e.id}`);
      setLikes(response.data.count);
      // setLikers(response.data.likedUsers);

      const userLikedPost = response.data.likedUsers.find(
        (user) => user.id == prop.userId
      );
      if (userLikedPost) {
        setFilled(true);
      }
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    postLikes();
  }, [filled, likes]);

  if(deletedPost){
    return(
      <>
      </>
    )
  }

  return (
    <>
      {deletePrompt ? (
        <ViewPortContainer>
          <DeleteContainer>
            <div>
              <h2>Are you sure you want to delete this post?</h2>
            </div>
            <ButtonContainer>
              <Button onClick={() => setDeletePrompt(false)} color="white">
                <div ><p style={{color:"#1877F2"}}>No, go back!</p></div>
              </Button>
              <Button onClick={() => deletePost()} color="#1877F2">
                <div><p>Yes, delete!</p></div>
              </Button>
            </ButtonContainer>
          </DeleteContainer>
        </ViewPortContainer>
      ) : (
        ""
      )}

      <UserPostContainertwo>
        <div>
          <img loading="lazy" src={prop.e.image} style={{objectFit:"cover"}}/>
          <LikeContainer>
            <LikeButton
              postId={prop.e.id}
              userId={prop.e.userId}
              setLikes={setLikes}
              likes={likes}
              filled={filled}
              setFilled={setFilled}
            />
          </LikeContainer>
          <p>{likes} likes</p>
        </div>

        <UsersPosts>
          <UserHeader>
            <h3>{prop.e.username}</h3>

            {sameUser ? (
              <div>
                <div onClick={() => setDeletePrompt(true)}>
                  <TrashIcon />
                </div>
                <div onClick={() => editChange(edit)}>
                  <PencilIcon />
                </div>
              </div>
            ) : (
              <div></div>
            )}
          </UserHeader>
            
          <CommentContainer>
            
            {edit ? (
              <form onSubmit={handleSubmit(onSubmit)}>
                <input
                  autoComplete="off"
                  defaultValue={prop.e.comment}
                  {...register("comment")}
                />
              </form>
            ) : (
              <ReactTagify colors="white" tagClicked={(tag)=> navigate(`/hashtag/${tag.replace('#', '')}`)}>
              <h4>{comment}</h4>
            </ReactTagify>
            )}
          </CommentContainer>

          <LinkContainer>
            <Link
              to={prop.e.url}
              target="_blank"
              style={{ textDecoration: "none", color: "#CECECE" }}
            >
              <UrlData urlData={urlData} url={prop.url}/>
            </Link>
          </LinkContainer>
        </UsersPosts>
      </UserPostContainertwo>
    </>
  );
}

