import axios from "axios";
import { useState } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import styled from "styled-components";
import { authToken } from "./auth";

const HeartIcon = styled.div`
  color: ${(props) => (props.filled ? "red" : "white")};
  cursor: pointer;
  scale: 1.5;
`;

export function LikeButton({ postId, userId }) {
  const [filled, setFilled] = useState(false);
  //const [likedby, setLikedBy] = useState([]);
  //const [likeCount, setLikeCount] = useState(0);

  const handleLikeClick = async () => {
    const token = localStorage.token.replace(/"/g, "");
    const url = `${process.env.REACT_APP_API_URL}/likes`;

    const data = { postId, userId };

    const config = {
      headers: {
        authorization: `Bearer ${token}`,
      },
    };

    if (filled) {
      try {
        const response = await axios.delete(url, { ...config, data });
        alert("descurtiu");
        setFilled(!filled);
      } catch {
        alert("Deu errado");
      }
    } else {
      try {
        const response = await axios.post(url, data, config);
        alert("curtiu");
        setFilled(!filled);
      } catch (error) {
        alert("deu errado");
      }
    }
  };

  const heartIcon = filled ? <FaHeart /> : <FaRegHeart />;

  return (
    <HeartIcon data-test="like-btn" filled={filled} onClick={handleLikeClick}>
      {heartIcon}
    </HeartIcon>
  );
}

// import ReactTooltip from "react-tooltip";
// import axios from "axios";

//   const handleLikeClick = async () => {
//     const token = localStorage.getItem("token");

//     try {
//       if (filled) {
//         // const response = await axios.delete(
//         //   `${process.env.REACT_APP_API_URL}/likes`,
//         //   {
//         //     headers: {
//         //       Authorization: `Bearer ${token}`,
//         //     },
//         //     data: { postId },
//         //   }
//         // );

//         setLikesCount(likesCount + 1);
//         setFilled(false);
//       } else {
//         // const response = await axios.post(
//         //   `${process.env.REACT_APP_API_URL}/likes`,
//         //   { postId },
//         //   {
//         //     headers: {
//         //       Authorization: `Bearer ${token}`,
//         //     },
//         //   }
//         // );

//         setLikesCount(likesCount - 1);
//         setFilled(true);
//       }
//     } catch (error) {
//       console.error(error);
//       alert("Failed to like/unlike the post.");
//     }
//   };

//   const heartIcon = filled ? <FaHeart /> : <FaRegHeart />;

//   return (
//     <>
//       <HeartIcon data-test="like-btn" filled={filled} onClick={handleLikeClick}>
//         {heartIcon}
//       </HeartIcon>
//       <p>{likesCount}</p>
//     </>
//   );
// }
