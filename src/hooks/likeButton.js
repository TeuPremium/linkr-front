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

export function LikeButton({ postId, userId, setLikes, likes }) {
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
        await axios.delete(url, { ...config, data });
        setLikes(likes - 1);
        alert("descurtiu");
        setFilled(!filled);
      } catch {
        alert("Deu errado");
      }
    } else {
      try {
        await axios.post(url, data, config);
        setLikes(likes + 1);
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
