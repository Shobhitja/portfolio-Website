// pages/_document.js

import { ColorModeScript } from "@chakra-ui/react"
import NextDocument, { Html, Head, Main, NextScript } from "next/document"
import colorTheme from "../src/themes/colorTheme"

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Fira+Code&family=Lato:ital,wght@0,400;0,700;1,400&family=Noto+Serif:ital,wght@0,400;0,700;1,400&family=Poppins:ital,wght@0,400;0,700;1,400&display=swap"
            rel="stylesheet"
          />
          <link rel="icon" href="/icon.png" />
          <meta
            name="description"
            content="I'm an aspiring software engineer. I'm currently working on my projects and looking for new opportunities. I'm passionate about learning new technologies."
          />
          <meta
            name="keywords"
            content="Shobhit, Shobhit jaguri, Frontend, Webdev, Portfolio, Shobhitja"
          />
          <meta name="author" content="Aman Kumar" />
        </Head>
        <body>
          <ColorModeScript
            initialColorMode={colorTheme.config.initialColorMode}
          />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
