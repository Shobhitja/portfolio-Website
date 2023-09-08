import React from "react"
import { Box, Container, Heading } from "@chakra-ui/react"
import Link from "next/link"

const AboutPage = () => {
  return (
    <Container maxW={"3xl"}>
      <h1>/about</h1>
      <Heading
        as="h2"
        _hover={{
          color: "brand",
          textDecoration: "none",
        }}
        size="h2"
      >
        Hello there!
      </Heading>
      <Box fontSize="md" my={3} pr={4} py={2}>
        <p leading-7>
          My name is Shobhit Jaguri and I am an aspiring Frontend Engineer.
          <br /> <br />
          I&apos;m a self-taught developer with a passion for computer science
          and programming. I&apos;ve been fascinated by computers and their
          nitty-gritty details about how they work since an early age, . In the past, I started with HTML5 & CSS and learned
          JavaScript and I&apos;ve worked extensively in the Web Development
          space with my personal projects. Currently, I am most interested in
          working with the stack of ReactJS and NextJS with Redux ToolKit.
          <br /> <br />
          Apart from programming, I am passionate about gaming. One of my
          favorite PC games is{" "}
          <Link href="https://store.steampowered.com/app/730/CounterStrike_Global_Offensive/">
            CSGO: Counter-Strike Global Offensive
          </Link>{" "}
          and I sometimes read non-fiction books with philosophy.
        </p>
      </Box>
    </Container>
  )
}

export default AboutPage
