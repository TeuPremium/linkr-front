import { useState } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import styled from "styled-components";

const HeartIcon = styled.div`
  color: ${(props) => (props.filled ? "red" : "white")};
  cursor: pointer;
  scale: 1.5;
`;

export function LikeButton() {
  const [filled, setFilled] = useState(false);

  const handleLikeClick = () => {
    setFilled(!filled);
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

// export async function LikeButton() {
//   //LikeButton({ postId })
//   const [filled, setFilled] = useState(false);
//   const [likesCount, setLikesCount] = useState(0);
//   const [likedBy, setLikedBy] = useState([]);

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
