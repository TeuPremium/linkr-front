import { useState } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import styled from "styled-components";

const HeartIcon = styled.div`
  color: ${(props) => (props.filled ? "red" : "white")};
  cursor: pointer;
  scale: 1.5;
`;

export function LikeButton(props) {
  const { postId, userId, setLikes, likes, setFilled, filled } = props;

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
        setFilled(!filled);
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        await axios.post(url, data, config);
        setLikes(likes + 1);
        setFilled(!filled);
      } catch (error) {
        console.log(error);
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
