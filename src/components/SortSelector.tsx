import {
  MenuRoot,
  MenuTrigger,
  Button,
  MenuContent,
  MenuRadioItemGroup,
  MenuRadioItem,
} from "@chakra-ui/react";

import { BsChevronDown } from "react-icons/bs";

const SortSelector = () => {
  return (
    <MenuRoot positioning={{ placement: "bottom-start" }}>
      <MenuTrigger asChild>
        <Button>
          Order by: Relevance <BsChevronDown />
        </Button>
      </MenuTrigger>
      <MenuContent width="fit-content">
        <MenuRadioItemGroup>
          <MenuRadioItem value="relevance">Relevance</MenuRadioItem>
          <MenuRadioItem value="date-added">Date added</MenuRadioItem>
          <MenuRadioItem value="name">Name</MenuRadioItem>
          <MenuRadioItem value="release-date">Release date</MenuRadioItem>
          <MenuRadioItem value="popularity">Popularity</MenuRadioItem>
          <MenuRadioItem value="average">Average</MenuRadioItem>
        </MenuRadioItemGroup>
      </MenuContent>
    </MenuRoot>
  );
};

export default SortSelector;
