import { Input } from "@chakra-ui/react";
import { InputGroup } from "./ui/input-group";
import { BsSearch } from "react-icons/bs";
import { useRef } from "react";
interface Props {
  onSearch: (searchText: string) => void;
}
const SearchInput = ({ onSearch }: Props) => {
  const searchRef = useRef<HTMLInputElement>(null);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (searchRef.current) onSearch(searchRef.current.value);
      }}
    >
      <InputGroup flex="1" startElement={<BsSearch />}>
        <Input
          ref={searchRef}
          borderRadius={20}
          placeholder="Search games.."
          variant="subtle"
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
