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
} from "./styles";
import { set, useForm } from "react-hook-form";
import styled from "styled-components";

import { LikeButton } from "../../hooks/likeButton";
import UrlData from "./dataUrl";

export function UserPostContainer(prop) {
  const [edit, setEdit] = useState(false);
  const [comment, setComment] = useState(prop.comment);
  const [deletePrompt, setDeletePrompt] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const url = process.env.REACT_APP_API_URL;
  const isShown = prop.isShown;

  const [likes, setLikes] = useState(0); //likes
  const [filled, setFilled] = useState(false); //altera o coração
  // const [likers, setLikers] = useState([]); //salva as pessoas que curtiram

  const onSubmit = (data) => {
    setEdit(false);
    setComment(data.comment);
  };

  function editChange(boolean) {
    boolean ? setEdit(false) : setEdit(true);
  }

  function deletePost() {
    // colocar funcao para deletar post com requisicao para apagar no back

    // useEffect(()=>{
    //   const promise = axios.delete(`${url}/posts`)
    //   promise.then((e) => setDeletePrompt(false))
    //   promise.catch(alert)
    // } ,[])

    setDeletePrompt(false);
  }

  //para pegar numero de likes no servidor
  async function postLikes() {
    try {
      const response = await axios.get(`${url}/likes/${prop.id}`);
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

  return (
    <>
      {deletePrompt ? (
        <ViewPortContainer>
          <DeleteContainer>
            <div>
              <h2>Are you sure you want to delete this post?</h2>
            </div>
            <Container>
              <Button onClick={() => setDeletePrompt(false)} color="white">
                <div>No, go back!</div>
              </Button>
              <Button onClick={() => deletePost()} color="#1877F2">
                <div>Yes, delete!</div>
              </Button>
            </Container>
          </DeleteContainer>
        </ViewPortContainer>
      ) : (
        ""
      )}

      <UserPostContainertwo>
        <div>
          <img src={prop.image} style={{ objectFit: "cover" }} />
          <LikeContainer>
            <LikeButton
              postId={prop.id}
              userId={prop.userId}
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
            <h3>{prop.username}</h3>

            {isShown ? (
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
                  defaultValue={comment}
                  {...register("comment")}
                />
              </form>
            ) : (
              <h4>{comment}</h4>
            )}
          </CommentContainer>

          <LinkContainer>
            <Link
              to={prop.url}
              target="_blank"
              style={{ textDecoration: "none", color: "#CECECE" }}
            >
              <UrlData urlData={prop.urlData} url={prop.url} />
            </Link>
          </LinkContainer>
        </UsersPosts>
      </UserPostContainertwo>
    </>
  );
}

const DeleteContainer = styled.div`
  width: 41vw;
  height: 300px;
  position: fixed;
  top: 35vh;
  left: 30vw;
  background-color: #333333;
  border-radius: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-left: 60px;
  padding-right: 60px;
  padding-bottom: 65px;
  h2 {
    font-family: "Lato";
    font-style: normal;
    font-weight: 700;
    font-size: 34px;
    line-height: 41px;
    text-align: center;
    color: #ffffff;
  }
`;

const Button = styled.div`
  width: 134px;
  height: 37px;
  box-sizing: border-box;
  margin-left: 10px;
  background-color: ${(prop) => prop.color};
  border-radius: 5px;
`;
const Container = styled.div`
  display: flex;
  width: 100%;
  padding-left: 20px;
  padding-right: 30px;
  justify-content: space-between;
`;

const ViewPortContainer = styled.div`
  width: 1500vh;
  height: 150vh;
  position: fixed;
  top: -50%;
  left: -30%;
  z-index: 3;
  background: rgba(255, 255, 255, 0.6);
`;
