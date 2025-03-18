import type { Route } from "./+types/home";
import { Home as HomePage } from "~/../src/pages/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Vital Pass" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <HomePage />;
}
