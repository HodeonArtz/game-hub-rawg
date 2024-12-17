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
import { Skeleton } from "@chakra-ui/react";
import useGameQueryStore from "@/store";

const PlatformSelector = () => {
  const { data, error, isLoading } = usePlatforms();
  const selectedPlatform = useGameQueryStore((s) => s.gameQuery.platform);
  const filterPlatform = useGameQueryStore((s) => s.filterPlatform);

  if (error) return null;

  if (isLoading) {
    return (
      <MenuRoot>
        <MenuTrigger asChild>
          <Skeleton width="120px" height="40px" />
        </MenuTrigger>
      </MenuRoot>
    );
  }
  return (
    <MenuRoot positioning={{ placement: "bottom-start" }}>
      <MenuTrigger asChild>
        <Button>
          {selectedPlatform?.name || "Platforms"} <BsChevronDown />
        </Button>
      </MenuTrigger>
      <MenuContent width="fit-content">
        <MenuRadioItemGroup value={selectedPlatform?.slug}>
          {data.map((platform) => (
            <MenuRadioItem
              value={platform.slug}
              onClick={() =>
                filterPlatform(platform === selectedPlatform ? null : platform)
              }
            >
              {platform.name}
            </MenuRadioItem>
          ))}
        </MenuRadioItemGroup>
      </MenuContent>
    </MenuRoot>
  );
};

export default PlatformSelector;
