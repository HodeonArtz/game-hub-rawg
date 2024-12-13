import { Button } from "./ui/button";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "@/hooks/usePlatforms";
import {
  MenuContent,
  MenuRadioItem,
  MenuRadioItemGroup,
  MenuRoot,
  MenuTrigger,
} from "./ui/menu";

const PlatformSelector = () => {
  const { data, error } = usePlatforms();

  if (error) return null;
  return (
    <MenuRoot positioning={{ placement: "bottom-start" }}>
      <MenuTrigger asChild>
        <Button>
          Platforms <BsChevronDown />
        </Button>
      </MenuTrigger>
      <MenuContent width="fit-content">
        <MenuRadioItemGroup>
          {data.map((platform) => (
            <MenuRadioItem value={platform.slug}>{platform.name}</MenuRadioItem>
          ))}
        </MenuRadioItemGroup>
      </MenuContent>
    </MenuRoot>
  );
};

export default PlatformSelector;
