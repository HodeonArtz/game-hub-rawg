import { Input } from "@chakra-ui/react";
import { InputGroup } from "./ui/input-group";
import { BsSearch } from "react-icons/bs";
import { useRef } from "react";
import useGameQueryStore from "@/store";

const SearchInput = () => {
  const searchRef = useRef<HTMLInputElement>(null);
  const searchGame = useGameQueryStore((s) => s.searchGame);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (searchRef.current) searchGame(searchRef.current.value);
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
