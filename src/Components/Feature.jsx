import { Container, SimpleGrid, Flex, Heading, Text, Stack, StackDivider, Icon, useColorModeValue } from "@chakra-ui/react";
import { IoLogoFigma, IoLogoReact, IoLogoWordpress } from "react-icons/io5";
import { Player } from "@lottiefiles/react-lottie-player";

const Feature = ({ text, icon, iconBg }) => {
  return (
    <Stack direction={"row"} align={"center"}>
      <Flex w={8} h={8} align={"center"} justify={"center"} rounded={"full"} bg={iconBg}>
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  );
};

export default function SplitWithImage() {
  return (
    <Container maxW={"5xl"}>
      <SimpleGrid columns={{ base: 1, md: 2 }} alignItems="center">
        <Stack spacing={4}>
          <Text textTransform={"uppercase"} color={"blue.400"} fontWeight={600} fontSize={"sm"} bg={useColorModeValue("blue.50", "blue.900")} p={2} alignSelf={"flex-start"} rounded={"md"}>
            Coming Soon
          </Text>
          <Heading>Designoper School</Heading>
          <Text color={"gray.500"} fontSize={"lg"}>
            Be a part of our online school to learn web design, web & application development for mobile, including no code design and development using Wordpress.
          </Text>
          <Stack spacing={4} divider={<StackDivider borderColor={useColorModeValue("gray.100", "gray.700")} />}>
            <Feature icon={<Icon as={IoLogoFigma} color={"yellow.500"} w={5} h={5} />} iconBg={useColorModeValue("yellow.100", "yellow.900")} text={"Website/Mobile Design"} />
            <Feature icon={<Icon as={IoLogoReact} color={"green.500"} w={5} h={5} />} iconBg={useColorModeValue("green.100", "green.900")} text={"Website/Mobile Development"} />
            <Feature icon={<Icon as={IoLogoWordpress} color={"purple.500"} w={5} h={5} />} iconBg={useColorModeValue("purple.100", "purple.900")} text={"No code Development"} />
          </Stack>
        </Stack>
        <Flex>
          <Player autoplay loop src="https://assets1.lottiefiles.com/packages/lf20_fkhbopzv.json" style={{ height: "100%", width: "100%"}}></Player>
        </Flex>
      </SimpleGrid>
    </Container>
  );
}
