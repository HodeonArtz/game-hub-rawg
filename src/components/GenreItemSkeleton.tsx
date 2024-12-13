import { HStack, List, Skeleton } from "@chakra-ui/react";
import { SkeletonText } from "./ui/skeleton";

const GenreItemSkeleton = () => {
  return (
    <List.Item>
      <HStack>
        <Skeleton width="32px" aspectRatio="1/1" />
        <SkeletonText noOfLines={1} />
      </HStack>
    </List.Item>
  );
};

export default GenreItemSkeleton;
