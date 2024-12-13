import useGenres from "@/hooks/useGenres";
import getCroppedImageUrl from "@/services/image-url";
import { HStack, Image, List, Text } from "@chakra-ui/react";
import GenreItemSkeleton from "./GenreItemSkeleton";

const GenreList = () => {
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
            <Text fontSize="lg">{genre.name}</Text>
          </HStack>
        </List.Item>
      ))}
    </List.Root>
  );
};

export default GenreList;
