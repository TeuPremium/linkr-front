import styled from "styled-components";
import { useForm } from "react-hook-form";
import TrendingTags from "./trendingBox";
import { ContainerFeed, Container, WritePostContainer, PostContainer, LikeContainer, HeartIcon, UsersPosts } from "./styles";


export default function(prop){
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    const timeline = prop.timeline

    console.log(timeline)

    if(timeline){
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
                    <input placeholder="http://..." {...register("url", {required:true})} />
                    <input placeholder="Awesome article about #javascript" {...register("comment", { required: true })} />
                    {errors.postCommentary && <span>This field is required</span>}
                    <div>
                    <input type="submit" />
                    </div>
                </form>
            </WritePostContainer>
          </PostContainer>
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


        </Container>

        <TrendingTags/>

      </ContainerFeed>


    </>
  );
}

    else{
        return(
           <Container>
        <h1>timeline</h1>
        <PostContainer color={"#171717"}>
            <div>
            <img src="https://imgs.search.brave.com/7KHxJqOc757ysQ-_b0Tcyzs67rTqJ4Bv5dKrE9P77Us/rs:fit:900:900:1/g:ce/aHR0cHM6Ly92aWdu/ZXR0ZS53aWtpYS5u/b2Nvb2tpZS5uZXQv/eW91dHViZS9pbWFn/ZXMvYi9iMy9HcmFu/ZGF5eS5qcGcvcmV2/aXNpb24vbGF0ZXN0/P2NiPTIwMTgwODAz/MDAyODU1"/>
            <LikeContainer>
                <HeartIcon/>
                <h1>x likes</h1>
              </LikeContainer>
            </div>
            <UsersPosts>    
            <h3>username</h3>
            <h4>Muito maneiro esse tutorial de Material UI com React, deem uma olhada!</h4>
                Placeholder box
            </UsersPosts>   
        </PostContainer>
        </Container>
         
        )
    }
    }

    


