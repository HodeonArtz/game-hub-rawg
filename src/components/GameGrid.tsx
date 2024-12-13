import useGames from "@/hooks/useGames";
import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardEskeleton from "./GameCardEskeleton";

const GameGrid = () => {
  const { games, error, isLoading } = useGames();
  const skeletons = Array.from({ length: 6 }, (_, i) => i + 1);

  return (
    <>
      <Text hidden={!error}>{error}</Text>
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        gap={10}
        padding="10px"
      >
        {isLoading &&
          skeletons.map((skeleton) => <GameCardEskeleton key={skeleton} />)}
        {games.map((game) => (
          <GameCard game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
