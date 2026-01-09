import type { Route } from "./+types/home";
import Header from "../components/Header.js";
import Quote from "../components/Quote.js";
import Gif from "../components/Gif.js";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <>
      <Header />
      <Quote />
      <Gif />
    </>
  )
}
