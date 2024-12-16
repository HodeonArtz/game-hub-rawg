import { Text } from "@chakra-ui/react";

interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;
  const emojiMap: { [key: number]: string } = {
    3: "😑",
    4: "👍",
    5: "🎯",
  };
  return (
    <Text fontSize="4xl" height="fit-content">
      {emojiMap[rating]}
    </Text>
  );
};

export default Emoji;
