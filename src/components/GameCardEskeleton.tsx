import { Card } from "@chakra-ui/react";
import { Skeleton, SkeletonText } from "./ui/skeleton";

const GameCardEskeleton = () => {
  return (
    <Card.Root width="300px" borderRadius={10}>
      <Skeleton height="200px" />
      <Card.Body>
        <SkeletonText noOfLines={2} />
      </Card.Body>
    </Card.Root>
  );
};

export default GameCardEskeleton;
