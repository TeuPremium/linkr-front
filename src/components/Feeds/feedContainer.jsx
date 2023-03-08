import styled from "styled-components";
import { useForm } from "react-hook-form";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

export default function(prop){
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    const userProfile = prop.userProfile
    console.log(userProfile)

    if(!userProfile){
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
                <input
                  placeholder="http://..."
                  {...register("url", { required: true })}
                />
                <input
                  placeholder="Awesome article about #javascript"
                  {...register("postCommentary", { required: true })}
                />
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

        <TrendingBoxContainer>


          <HeaderTrending>
            <h1>trending</h1>
          </HeaderTrending>

          <HashtagContainer>
            <h1># hashtag example</h1>
            <h1># hashtag example</h1>
            <h1># hashtag example</h1>
            <h1># hashtag example</h1>
            <h1># hashtag example</h1>
            <h1># hashtag example</h1>
            <h1># hashtag example</h1>
            <h1># hashtag example</h1>
            <h1># hashtag example</h1>
            <h1># hashtag example</h1>
          </HashtagContainer>

        </TrendingBoxContainer>

      </ContainerFeed>


    </>
  );
}
    //       <WritePostContainer>
    //         <h2>What are you going to share today?</h2>
            
    //             <form onSubmit={handleSubmit(onSubmit)}>
    //                 <input placeholder="http://..." {...register("url", {required:true})} />
    //                 <input placeholder="Awesome article about #javascript" {...register("comment", { required: true })} />
    //                 {errors.postCommentary && <span>This field is required</span>}
    //                 <div>
    //                 <input type="submit" />
    //                 </div>
    //             </form>
    //         </WritePostContainer>
    //     </PostContainer>
    //     <PostContainer color={"#171717"}>
    //       <div>
    //         <img src="https://imgs.search.brave.com/7KHxJqOc757ysQ-_b0Tcyzs67rTqJ4Bv5dKrE9P77Us/rs:fit:900:900:1/g:ce/aHR0cHM6Ly92aWdu/ZXR0ZS53aWtpYS5u/b2Nvb2tpZS5uZXQv/eW91dHViZS9pbWFn/ZXMvYi9iMy9HcmFu/ZGF5eS5qcGcvcmV2/aXNpb24vbGF0ZXN0/P2NiPTIwMTgwODAz/MDAyODU1" />
    //       </div>
    //       <UsersPosts>
    //         <h3>username</h3>
    //         <h4>
    //           Muito maneiro esse tutorial de Material UI com React, deem uma
    //           olhada!
    //         </h4>
    //         Placeholder box
    //       </UsersPosts>
    //     </PostContainer>
    //     </Container>
        
    // </>)
    // }
    else{
        return(
           <Container>
        <h1>timeline</h1>
        <PostContainer color={"#171717"}>
            <div>
            <img src="https://imgs.search.brave.com/7KHxJqOc757ysQ-_b0Tcyzs67rTqJ4Bv5dKrE9P77Us/rs:fit:900:900:1/g:ce/aHR0cHM6Ly92aWdu/ZXR0ZS53aWtpYS5u/b2Nvb2tpZS5uZXQv/eW91dHViZS9pbWFn/ZXMvYi9iMy9HcmFu/ZGF5eS5qcGcvcmV2/aXNpb24vbGF0ZXN0/P2NiPTIwMTgwODAz/MDAyODU1"/>
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

    


const PostContainer = styled.div`
  height: 209px;
  width: 100%;
  background-color: ${(props) => props.color};
  margin-top: 43px;
  border-radius: 16px;
  padding-top: 16px;
  display: flex;
  img {
    margin-left: 16px;
    width: 53px;
    height: 53px;
    border-radius: 53px;
  }
`;

const WritePostContainer = styled.div`
  width: 83%;
  height: 100%;
  padding-left: 18px;
  padding-right: 10px;
  box-sizing: border-box;
  form {
    div {
      width: 112px;
      input {
        background-color: #1877f2;
        color: white;
      }
    }
  }
  input {
    width: 100%;
    height: 30px;
    left: 501px;
    top: 313px;
    background: #efefef;
    border-radius: 5px;
    border-style: none;
    margin-top: 5px;
  }
`;
const UsersPosts = styled.div`
  height: 155px;
  left: 502px;
  top: 596px;
  background-color: white;
`;

const Container = styled.div`
  width: 42%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 150px;
`;


const TrendingBoxContainer = styled.div`
  height: 406px;
  width: 301px;
  background-color: #171717;
  border-radius: 16px;
  margin-top: 232px;
  margin-right: 150px;

`

const HeaderTrending = styled.div`
  width: 100%;
  height: 61px;
  border-radius: 16px 16px 0 0;
  border-bottom: 2px solid #484848;
  background-color: #171717;
  display: flex;
  align-items: center;
  h1{
    font-size: 27px;
    font-weight: 700;
    margin-left: 16px;
  }
`

const HashtagContainer = styled.div`
  width: 130px;
  height: 293px;
  margin-left: 16px;
  margin-top: 22px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #171717;
  h1{
    font-size: 19px;

  }
`

const LikeContainer = styled.div`
  height: 30px;
  width: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 22px;
  margin-top: 10px;
  h1{
    font-size: 11px;
    margin-top: 6px;
  }
`

const HeartIcon = styled(AiOutlineHeart)`
  color: #FFFFFF;
  scale: 2;
`


const ContainerFeed = styled.div`
  display: flex;
  justify-content: space-between;
  
`