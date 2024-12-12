import { HStack, Text } from "@chakra-ui/react";

import { useColorMode } from "./ui/color-mode";
import { Switch } from "./ui/switch";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <HStack>
      <Switch
        checked={colorMode === "dark"}
        onCheckedChange={toggleColorMode}
      />
      <Text>Dark Mode</Text>
    </HStack>
  );
};

export default ColorModeSwitch;
