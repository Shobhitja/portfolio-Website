import {
  ButtonGroup,
  IconButton,
  Flex,
  Text,
  Box,
  useColorModeValue,
} from "@chakra-ui/react"
import * as React from "react"
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaSpotify,
  FaDiscord,
} from "react-icons/fa"

const Links = [
  {
    name: "Github",
    link: "https://github.com/Shobhitja",
    icon: <FaGithub />,
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/shobhit-jaguri-1b07a026a/",
    icon: <FaLinkedin />,
  },
]

const Footer = () => (
  <Box as="footer" role="contentinfo" py={{ base: "12", md: "16" }}>
    <Flex justify="center" direction="row" align="center">
      <ButtonGroup variant="ghost">
        {Links.map((link) => (
          <IconButton
            key={link.name}
            as="a"
            href={link.link}
            _hover={{
              bg: "transparent",
              color: "brand",
            }}
            aria-label={link.name}
            icon={link.icon}
          />
        ))}
      </ButtonGroup>
    </Flex>
    <Text
      fontSize={["xs", "sm"]}
      align="center"
      color={useColorModeValue("textMediumLight", "textMediumDark")}
    >
      Made with{" "}
      <a href="https://nextjs.org/" target="_blank" rel="noreferrer">
        NextJS
      </a>{" "}
      and{" "}
      <a href="https://chakra-ui.com/" target="_blank" rel="noreferrer">
        Chakra UI
      </a>
      . Forked from{" "}
      <a
        href="https://github.com/amankrx/portfolio"
        target="_blank"
        rel="noreferrer"
      >
       Shobhit Jaguri
      </a>
    </Text>
  </Box>
)

export default Footer
