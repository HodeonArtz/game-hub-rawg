import useGenres, { Genre } from "@/hooks/useGenres";
import getCroppedImageUrl from "@/services/image-url";
import { Flex, Heading, HStack, Image, List } from "@chakra-ui/react";
import { Button } from "./ui/button";
import GenreItemSkeleton from "./GenreItemSkeleton";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
  const { data, error, isLoading } = useGenres();
  const skeletons = Array.from({ length: 16 }, (_, i) => i + 1);

  if (error) return null;
  return (
    <>
      <Heading fontSize="2xl">Genres</Heading>
      <List.Root listStyleType="none" gap="10px" width="fit-content">
        {isLoading &&
          skeletons.map((skeleton) => <GenreItemSkeleton key={skeleton} />)}

        {data.map((genre) => (
          <List.Item key={genre.id} width="fit-content">
            <Flex>
              <Image
                boxSize="32px"
                borderRadius={8}
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Button
                whiteSpace="normal"
                fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
                onClick={() => onSelectGenre(genre)}
                fontSize="lg"
                variant="plain"
              >
                {genre.name}
              </Button>
            </Flex>
          </List.Item>
        ))}
      </List.Root>
    </>
  );
};

export default GenreList;
