import { useNavigate } from "react-router-dom";
import { ContainerLogout } from "./styled";

export default function Logout() {
  const navigate = useNavigate();
  function logoutclicked() {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    localStorage.removeItem("userId");
    navigate("/");
  }

  return (
    <ContainerLogout onClick={() => logoutclicked()}>Logout</ContainerLogout>
  );
}
