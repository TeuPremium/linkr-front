import { useState } from "react";
import Logout from "../logout/logout";
import UserSearchInput from "../userSearchInput/UserSearchInput";
import ArrowDown from "./arrowDown";
import LinkrLogo from "./linkrLogo";
import { ContainerHeader, UserContainer } from "./styled";

export default function () {
  const [showLogout, setShowLogout] = useState(false);
  const [direction, setDirection] = useState("down");

  const handleClick = () => {
    setDirection(direction === "down" ? "up" : "down");
    setShowLogout(!showLogout);
  };

  return (
    <>
      <ContainerHeader>
        <LinkrLogo />
        <UserSearchInput />
        <UserContainer onClick={handleClick}>
          <ArrowDown direction={direction} />
          <img src="https://imgs.search.brave.com/7KHxJqOc757ysQ-_b0Tcyzs67rTqJ4Bv5dKrE9P77Us/rs:fit:900:900:1/g:ce/aHR0cHM6Ly92aWdu/ZXR0ZS53aWtpYS5u/b2Nvb2tpZS5uZXQv/eW91dHViZS9pbWFn/ZXMvYi9iMy9HcmFu/ZGF5eS5qcGcvcmV2/aXNpb24vbGF0ZXN0/P2NiPTIwMTgwODAz/MDAyODU1" />
        </UserContainer>
        {showLogout && <Logout />}
      </ContainerHeader>
    </>
  );
}
