import { useState } from 'react'
import { FaRegHeart, FaHeart } from 'react-icons/fa'
import styled from 'styled-components'

const HeartIcon = styled.div`
  color: ${(props) => (props.filled ? 'red' : 'white')};
  cursor: pointer;
  scale: 1.5;
`

export function LikeButton() {
  const [filled, setFilled] = useState(false)

  const handleLikeClick = () => {
    setFilled(!filled)
  }

  const heartIcon = filled ? <FaHeart /> : <FaRegHeart />

  return (
    <HeartIcon filled={filled} onClick={handleLikeClick}>
      {heartIcon}
    </HeartIcon>
  )
}

