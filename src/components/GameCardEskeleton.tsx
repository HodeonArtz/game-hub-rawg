import { Card } from "@chakra-ui/react";
import { Skeleton, SkeletonText } from "./ui/skeleton";

const GameCardEskeleton = () => {
  return (
    <Card.Root>
      <Skeleton height="200px" />
      <Card.Body>
        <SkeletonText noOfLines={2} />
      </Card.Body>
    </Card.Root>
  );
};

export default GameCardEskeleton;
