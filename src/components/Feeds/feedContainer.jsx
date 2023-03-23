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
import { buildTimeValue } from "@testing-library/user-event/dist/utils";
import InfiniteScroll from "react-infinite-scroller";

export default function(prop){
    const { register, handleSubmit, formState: { errors } } = useForm();
    const url = `${process.env.REACT_APP_API_URL}/posts`;
    console.log(localStorage.userId)
    const [postArray, setPostArray] = useState("")
    
    const {auth, userId} = localStorage
    console.log(auth)
    async function onSubmit(data){
      
      data.userId = userId;
      const createPost = await axios.post(url, data).catch((error) => {alert("there was en error publishing your link")});     
      console.log(data)
      
    }
    useEffect( ()=>{
      const promise = axios.get(`${process.env.REACT_APP_API_URL}/posts`)
      promise.then((e) => setPostArray(e.data))
      promise.catch(console.log)
    } ,[])    
    
    const timeline = prop.timeline
    
    
    if(timeline && postArray){
      console.log(postArray)
      
      
    return(<>
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
                    <input
                      type="submit"
                      style={{ background: color }}
                      disabled={disable}
                    />
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
            {loading && <p>Loading...</p>}
          </Container>

          <TrendingTags />
        </ContainerFeed>
      </>
    );
  } else {
    return (
      <ContainerFeed>
        <Container>
          <h1>UserNamePlaceHolder</h1>

          <UserPostContainer />
        </Container>

        <TrendingTags />
      </ContainerFeed>
    );
  }
}
