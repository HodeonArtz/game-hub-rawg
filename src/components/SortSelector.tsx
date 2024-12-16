import {} from "@chakra-ui/react";

import { BsChevronDown } from "react-icons/bs";
import {
  MenuContent,
  MenuRadioItem,
  MenuRadioItemGroup,
  MenuRoot,
  MenuTrigger,
} from "./ui/menu";
import { Button } from "./ui/button";

interface Props {
  sortOrder: string;
  onSelectSortOrder: (sortOrder: string) => void;
}

const SortSelector = ({ onSelectSortOrder, sortOrder }: Props) => {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];

  const currentSortOrder = sortOrders.find(
    (order) => order.value === sortOrder
  );

  return (
    <MenuRoot positioning={{ placement: "bottom-start" }}>
      <MenuTrigger asChild>
        <Button>
          Order by: {currentSortOrder?.label || "Relevance"} <BsChevronDown />
        </Button>
      </MenuTrigger>
      <MenuContent width="fit-content">
        <MenuRadioItemGroup value={currentSortOrder?.value || ""}>
          {sortOrders.map((order) => (
            <MenuRadioItem
              value={order.value}
              key={order.value}
              onClick={() => onSelectSortOrder(order.value)}
            >
              {order.label}
            </MenuRadioItem>
          ))}
        </MenuRadioItemGroup>
      </MenuContent>
    </MenuRoot>
  );
};

export default SortSelector;