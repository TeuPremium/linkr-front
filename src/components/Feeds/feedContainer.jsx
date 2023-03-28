import { useForm } from "react-hook-form";
import TrendingTags from "./trendingBox";
import {
  ContainerFeed,
  Container,
  WritePostContainer,
  PostContainer,
} from "./styles";
import axios from "axios";
import { useEffect, useState } from "react";
import { UserPostContainer } from "./postContainer";
import UserPage from "../../pages/user/user";
import { buildTimeValue } from "@testing-library/user-event/dist/utils";
import InfiniteScroll from "react-infinite-scroller";
import ReactLoading from 'react-loading';

export default function (prop) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const url = `${process.env.REACT_APP_API_URL}/posts`;

  const [posting, setPosting] = useState(false);

  const [postArray, setPostArray] = useState([]);
  const [disable, setDisable] = useState(false);
  const [color, setColor] = useState("rgb(24, 119, 242)");
  const [numPosts, setNumPosts] = useState(10); //para controlar numero de postagens que vai aparecer
  const [loading, setLoading] = useState(false); //para aparecer loading quando carregar a pagina
  const isShown = true;

  const { userId, image } = localStorage;

  let userImage = image.replace('"', "");


  async function onSubmit(data) {
    data.userId = userId;
    setColor("grey");
    setDisable(true);
    setPosting(true);

    await axios
      .post(url, data)
      .catch((error) => {
        alert("there was en error publishing your link");
        console.log(error);
        setPosting(false);
      })
      .then((e) => {
        setColor("rgb(24, 119, 242)");
        setDisable(false);
        e.data.image = userImage;
        e.data.comment = data.comment;
        e.data.url = data.url;
        let array = [e.data].concat(postArray);
        setPostArray(array);
        setPosting(false);
      });
  }

  useEffect(() => {
    const promise = axios.get(`${url}/${numPosts}`);
    promise.then(
      (e) => setPostArray((prevArray) => prevArray.concat(e.data)),
      setLoading(false)
    );
    promise.catch((error) =>
      alert(
        "An error occured while trying to fetch the posts, please refresh the page"
      )
    );
  }, [numPosts]);

  window.addEventListener("scroll", () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    if (
      scrollTop + clientHeight >= scrollHeight - 10 &&
      postArray.length === numPosts
    ) {
      setLoading(true);
      setNumPosts(numPosts + 10);
    }
  });

  const timeline = prop.timeline;

  if (timeline && postArray) {
   
    return (
      <>
        <ContainerFeed>
          <Container>
            <h1>timeline</h1>

            <PostContainer>
              <div>
                <img src={userImage} />
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
                e={e}
                isShown={isShown}
                userId={userId}
              />
            ))}
            {loading && <p>Loading...</p>}
          </Container>

          <TrendingTags />
        </ContainerFeed>
      </>
    );
  } else if (!timeline && postArray.length !== 0) {
    return <UserPage />;
  } else {
    return (
      <div style={{display:"flex", justifyContent:"center", marginTop:"25vh"}}>
      <ReactLoading type="bubbles" color="#ffffff" height={667} width={375} />
     </div>
    );
  }
}