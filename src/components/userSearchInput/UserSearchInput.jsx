import { InputContainer, SearchIcon } from "./styled";
import { AiOutlineSearch } from "react-icons/ai";

export default function UserSearchInput() {
    return (
        <InputContainer>
        <input placeholder="Search for people" />
        <SearchIcon><AiOutlineSearch size={30} color='#C6C6C6' /></SearchIcon>
        </InputContainer>
    )
}