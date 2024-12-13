import useGenres, { Genre } from "@/hooks/useGenres";
import getCroppedImageUrl from "@/services/image-url";
import { HStack, Image, List } from "@chakra-ui/react";
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
    <List.Root listStyleType="none" gap="10px">
      {isLoading &&
        skeletons.map((skeleton) => <GenreItemSkeleton key={skeleton} />)}

      {data.map((genre) => (
        <List.Item key={genre.id}>
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Button
              fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
              onClick={() => onSelectGenre(genre)}
              fontSize="lg"
              variant="plain"
            >
              {genre.name}
            </Button>
          </HStack>
        </List.Item>
      ))}
    </List.Root>
  );
};

export default GenreList;
