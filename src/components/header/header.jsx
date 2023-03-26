import { useState } from "react";
import { Link } from "react-router-dom";
import Logout from "../logout/logout";
import UserSearchInput from "../userSearchInput/UserSearchInput";
import ArrowDown from "./arrowDown";
import LinkrLogo from "./linkrLogo";
import { ContainerHeader, UserContainer } from "./styled";

export default function () {
  const [showLogout, setShowLogout] = useState(false);
  const [direction, setDirection] = useState("down");


  const { userId, image } = localStorage;


  const userImage = image.replace('"', '')

  const handleClick = () => {
    setDirection(direction === "down" ? "up" : "down");
    setShowLogout(!showLogout);
  };

  return (
    <>
      <ContainerHeader>
        <Link to="/timeline">
        <LinkrLogo />
        </Link>
        <UserSearchInput />
        <UserContainer onClick={handleClick}>
          <ArrowDown direction={direction} />
          <img src={userImage} />
        </UserContainer>
        {showLogout && <Logout />}
      </ContainerHeader>
    </>
  );
}
