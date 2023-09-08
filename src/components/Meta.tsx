import Head from "next/head"

interface Props {
  title?: string
  description?: string
  keywords?: string
  cover?: string
}

const Meta = ({ title, description, keywords, cover }: Props) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta name="cover" content={cover} />
    </Head>
  )
}

export default Meta

// let's set a default title
Meta.defaultProps = {
  title: "Shobhit Jaguri",
  description:
    "I'm a self-taught frontend engineer. I'm currently working on my projects and looking for new opportunities. I'm passionate about learning new technologies.",
  keywords: "Shobhit, Shobhit jaguri,  shobhitja",
  cover: "",
}
