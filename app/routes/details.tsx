import type { Route } from "./+types/details";
import { useParams } from "react-router";
import Quote from "../components/Quote.js";
import Gif from "../components/Gif.js";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Golden Grabs: A nostalgic look at the Golden Girls" },
  ];
}

export default function Details() {
  const params = useParams();

  return (
    <div>
      <h2>{params.id}</h2>
      <Quote />
      <Gif />
    </div>
  )
}