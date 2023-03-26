import { InputContainer, SearchIcon, UserBoxContainer,  EmptyContainer, SearchUserContainer, UserFound, UsersBoxContainer } from "./styled";
import { AiOutlineSearch } from "react-icons/ai";
import { DebounceInput } from "react-debounce-input";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function UserSearchInput() {
  const [user, setUser] = useState();

  const url = `${process.env.REACT_APP_API_URL}/user`;

  async function handleDebounceInputChange(event) {
    console.log(event.target.value);
    
    if (event.target.value.length >= 3) {
    axios
      .post(url, { username: event.target.value })
      .then((response) => {
        const id = response.data.userId;
        console.log(user)
        setUser(response.data);
      })
      .catch((error) => {
        alert(`An error occurred while trying to fetch the user's posts, please refresh the page`);
      });
    } else {
      setUser(null)
    }
  }

  return (
    <SearchUserContainer>
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
      {
      user
       ? 
       (
        user.length === 1
         ?
         <UserBoxContainer>
         {user.map(e =>
           <Link to={`/user/${e.userId}`}>
             <UserFound>
               <img src={e.imageUrl} />
               <p>{e.username}</p>
             </UserFound>
           </Link>
           )}
       </UserBoxContainer>
         : 
       <UsersBoxContainer>
        {user.map(e =>
          <Link to={`/user/${e.userId}`}>
            <UserFound>
              <img src={e.imageUrl} />
              <p>{e.username}</p>
            </UserFound>
          </Link>
          )}
      </UsersBoxContainer>)
       : 
      <EmptyContainer></EmptyContainer>
      }
    </SearchUserContainer>
  );
}
