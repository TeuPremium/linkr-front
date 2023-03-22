import styled from "styled-components";
import { useForm } from "react-hook-form";
import TrendingTags from "./trendingBox";
import {
  ContainerFeed,
  Container,
  WritePostContainer,
  PostContainer,
  LikeContainer,
  HeartIcon,
  UsersPosts,
} from "./styles";
import axios from "axios";
import { useEffect, useState } from "react";
import { UserPostContainer } from "./postContainer";
import UserPage from "../../pages/user/User";



export default function (prop) {
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const url = `${process.env.REACT_APP_API_URL}/posts`;
  // const url = `http://localhost:5000/posts`;

  const [postArray, setPostArray] = useState("");
  const [disable, setDisable] = useState(false)
  const [color, setColor] = useState("rgb(24, 119, 242)")
  const isShown = true;

  const { userId, image } = localStorage;

  const userImage = image.replace('"', '')
  console.log(userImage)
  

  async function onSubmit(data) {
    data.userId = userId;
    setColor("grey")
    setDisable(true)
    const createPost = await axios.post(url, data).catch((error) => {
      alert("there was en error publishing your link");
    }).then(()=>{setColor("rgb(24, 119, 242)"); setDisable(false)});
    
    console.log(data);
  }

  useEffect(() => {
    const promise = axios.get(`${url}`);
    promise.then((e) => setPostArray(e.data));
    promise.catch((error) =>
      alert(
        "An error occured while trying to fetch the posts, please refresh the page"
      )
    );
  }, []);

  const timeline = prop.timeline;
  
  

  if (timeline && postArray) {

    return (
      <>
        <ContainerFeed>
          <Container>
            <h1>timeline</h1>

            <PostContainer>
              <div>
                <img src={image} />
              </div>

              <WritePostContainer>
                <h2>What are you going to share today?</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <input
                    placeholder="http://..."
                    autoComplete="off"
                    {...register("url", { required: true })}
                  />
                  <input
                    placeholder="Awesome article about #javascript"
                    autoComplete="off"
                    {...register("comment")}
                  />
                  {errors.postCommentary && <span>This field is required</span>}
                  <div>
                    <input type="submit" style={{background:color}} disabled={disable}/>
                  </div>
                </form>
              </WritePostContainer>
            </PostContainer>

            {postArray.map((e) => (
              <UserPostContainer
                username={e.username}
                image={e.image}
                url={e.url}
                comment={e.comment}
                id={e.postId}
                urlData={e.urlData}
                isShown={isShown}
              />
            ))}
          </Container>

          <TrendingTags />
        </ContainerFeed>
      </>
    );
  } else if(!timeline && postArray){
        return(
          <UserPage />          
        )
    }
    else{
      return(
        <img src="https://imgs.search.brave.com/WXOcrQtv7vqv7kBbWX1VWRCCfW6u9gXYv6eKryV7_P4/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93d3cu/d3BmYXN0ZXIub3Jn/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDEz/LzA2L2xvYWRpbmct/Z2lmLmdpZg.gif"/>
      )
    }
    }
