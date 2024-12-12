import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { HStack, Icon } from "@chakra-ui/react";
import { Platform } from "../hooks/useGames";
import { IconType } from "react-icons";
import { ReactElement } from "react";

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms = [] }: Props) => {
  const iconMap: { [key: string]: ReactElement } = {
    pc: <FaWindows />,
    playstation: <FaPlaystation />,
    xbox: <FaXbox />,
    nintendo: <SiNintendo />,
    mac: <FaApple />,
    linux: <FaLinux />,
    android: <FaAndroid />,
    ios: <MdPhoneIphone />,
    web: <BsGlobe />,
  };

  return (
    <HStack marginY={2.5}>
      {platforms.map((platform) => (
        <Icon key={platform.id} color="gray.500">
          {iconMap[platform.slug]}
        </Icon>
      ))}
    </HStack>
  );
};

export default PlatformIconList;
