import { SearchBarContainer } from "./style";
import Input from "../Input";
import Button from "../Button";

export default function SearchBar({ onClick, value, onChange }) {
    return (
        <SearchBarContainer>
            <Input value={value} onChange={onChange} />
            <Button onClick={onClick}>Search</Button>
        </SearchBarContainer>
    );
}
