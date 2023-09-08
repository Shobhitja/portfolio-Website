import pic1 from "public/projects/pic1.jpg"
import pic2 from "public/projects/pic2.jpg"
import pic3 from "public/projects/pic3.jpg"
import pic4 from "public/projects/pic4.jpg"
import pic5 from "public/projects/pic5.png"

const projects = [
  {
    image: pic2,
    title: "Weather App",
    description:
      "This weather app provides weather conditions like humidity , pressure , windspeed etc of any place in the world",
    technologies: ["JavaScript", "ReactJS", "API", "Tailwind"],
    link: "https://weather-app-beta-lac.vercel.app/",
  },
  {
    image: pic3,
    title: "Food Recipe App",
    description:
      "This is a food recipe app created using React js.Here we can see different recipes of an item and can also see its ingredients and complete recipe ",
    technologies: ["JavaScript", "ReactJS", "API", "Tailwind"],
    link: "https://recipe-app-zeta-weld.vercel.app/",
  },
  {
    image: pic5,
    title: "BooksHub",
    description: "It is a book finding and reading application",
    technologies: ["JavaScript", "ReactJS", "API", "Tailwind"],
    link: "https://books-hub-topaz.vercel.app/",
  },
  {
    image: pic4,
    title: "Quote Generator",
    description: "This will help you generate random quotes easily and quickly",
    technologies: ["JavaScript", "ReactJS", "API", "CSS"],
    link: "https://quote-generator-lime-ten.vercel.app",
  },
  {
    image: pic1,
    title: "Early Bird News",
    description: "It is a News website which provides fresh daily news",
    technologies: ["JavaScript", "ReactJS", "API", "Bootstrap"],
    link: "https://news-website-six.vercel.app/",
  },
]

export default projects
