import type { Route } from ".react-router/types/app/+types/root";
import {
  About,
  Explore,
  Growth,
  Market,
  Opportunities,
  Plans,
  PlatformDetails,
  Protocols,
  Risks,
  SpecialistList,
  StoryTelling,
  Strategies,
} from "./sections";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Vital Pass" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export function Home() {
  return (
    <>
      <About />
      <Explore />
      <PlatformDetails />
      <Market />
      <SpecialistList />
      <Protocols />
      <StoryTelling />
      <Plans />
      <Growth />
      <Opportunities />
      <Strategies />
      <Risks />
    </>
  );
}
