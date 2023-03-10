import styled from "styled-components";
import { useForm } from "react-hook-form";
import TrendingTags from "./trendingBox";
import { ContainerFeed, Container, WritePostContainer, PostContainer, LikeContainer, HeartIcon, UsersPosts } from "./styles";
import axios from "axios";
import { useEffect, useState } from "react";
import { UserPostContainer } from "./postContainer";



export default function(prop){
    console.log(prop.delete)
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
      // precisa consertar o then/catch
      const promise = axios.get(`${url}`)
      promise.then((e) => setPostArray(e.data))
      promise.catch(alert("An error occured while trying to fetch the posts, please refresh the page"))
    } ,[])    
    
    
    const timeline = prop.timeline
    
    
    if(timeline && postArray){
      console.log(postArray)
      
      
    return(<>
        <ContainerFeed>
        <Container>
          <h1>timeline</h1>

          <PostContainer color={"white"}>
            <div>
              <img src="https://imgs.search.brave.com/7KHxJqOc757ysQ-_b0Tcyzs67rTqJ4Bv5dKrE9P77Us/rs:fit:900:900:1/g:ce/aHR0cHM6Ly92aWdu/ZXR0ZS53aWtpYS5u/b2Nvb2tpZS5uZXQv/eW91dHViZS9pbWFn/ZXMvYi9iMy9HcmFu/ZGF5eS5qcGcvcmV2/aXNpb24vbGF0ZXN0/P2NiPTIwMTgwODAz/MDAyODU1" />
            </div>

            <WritePostContainer>
              <h2>What are you going to share today?</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input placeholder="http://..." autoComplete="off" {...register("url", {required:true})} />
                    <input placeholder="Awesome article about #javascript" autoComplete="off" {...register("comment")} />
                    {errors.postCommentary && <span>This field is required</span>}
                    <div>
                    <input type="submit" />
                    </div>
                </form>
            </WritePostContainer>
          </PostContainer>

         { postArray.map((e) => <UserPostContainer 
          username={e.username}
          image={e.image}
          url={e.url}
          comment={e.comment}
          id={e.postId}
           />)}

        </Container>

        <TrendingTags/>

      </ContainerFeed>


    </>
  );
}

    else{
        return(
          <ContainerFeed>

            <Container>

              <h1>UserNamePlaceHolder</h1>

              <UserPostContainer/>

            </Container>

           <TrendingTags/>
   
         </ContainerFeed>
        )
    }
    }

    


