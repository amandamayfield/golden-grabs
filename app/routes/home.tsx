import type { Route } from "./+types/home";
import { Link } from 'react-router';

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Golden Grabs: A nostalgic look at the Golden Girls" },
  ];
}

let mockData = [
  {
    name: 'Dorothy',
    id: 1
  },
   {
    name: 'Blanche',
    id: 2
  },
   {
    name: 'Rose',
    id: 3
  },
   {
    name: 'Sophia',
    id: 4
  }
]

export default function Home() {
  return (
    <div>
      <Link to='details/0'>Random</Link>
      {
        mockData.map((person) => 
          (
            <Link to={`details/${person.id}`} key={person.id}>{person.name}</Link>
          )
        )
      }
    </div>
  )
}
