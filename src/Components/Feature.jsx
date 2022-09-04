import { Container, SimpleGrid, Flex, Heading, Text, Stack, StackDivider, Icon, useColorModeValue } from "@chakra-ui/react";
import { IoAnalyticsSharp, IoLogoBitcoin, IoSearchSharp } from "react-icons/io5";
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
            Be a part of our online school to learn web design, no code and website & application development.
          </Text>
          <Stack spacing={4} divider={<StackDivider borderColor={useColorModeValue("gray.100", "gray.700")} />}>
            <Feature icon={<Icon as={IoAnalyticsSharp} color={"yellow.500"} w={5} h={5} />} iconBg={useColorModeValue("yellow.100", "yellow.900")} text={"Business Planning"} />
            <Feature icon={<Icon as={IoLogoBitcoin} color={"green.500"} w={5} h={5} />} iconBg={useColorModeValue("green.100", "green.900")} text={"Financial Planning"} />
            <Feature icon={<Icon as={IoSearchSharp} color={"purple.500"} w={5} h={5} />} iconBg={useColorModeValue("purple.100", "purple.900")} text={"Market Analysis"} />
          </Stack>
        </Stack>
        <Flex>
          <Player autoplay loop src="https://assets1.lottiefiles.com/packages/lf20_fkhbopzv.json" style={{ height: "100%", width: "100%"}}></Player>
        </Flex>
      </SimpleGrid>
    </Container>
  );
}
