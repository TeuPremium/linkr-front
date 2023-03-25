import { InputContainer, SearchIcon } from "./styled";
import { AiOutlineSearch } from "react-icons/ai";
import { DebounceInput } from "react-debounce-input";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function UserSearchInput() {
  const navigate = useNavigate();
  const [userId, setUserId] = useState("");

  const url = `${process.env.REACT_APP_API_URL}/user`;

  async function handleDebounceInputChange(event) {
    console.log("Realizar ação após 500ms de inatividade");

    axios
      .post(url, { username: event.target.value })
      .then((response) => {
        const id = response.data.userId;
        setUserId(id);
        navigate(`/user/${id}`);
      })
      .catch((error) => {
        alert(`An error occurred while trying to fetch the user's posts, please refresh the page`);
      });
    
  }

  return (
    <InputContainer>
      <DebounceInput
        type="username"
        placeholder="Search for people"
        minLength={3}
        debounceTimeout={300}
        onChange={handleDebounceInputChange}
      />
      <SearchIcon>
        <AiOutlineSearch size={30} color="#C6C6C6" />
      </SearchIcon>
    </InputContainer>
  );
}
