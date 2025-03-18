import type { Route } from "./+types/home";
import { About } from "../sections/about";
import { PlatformDetails } from "~/sections/platform-details";
import { Explore } from "~/sections/explore";
import { Market } from "~/sections/market";
import { SpecialistList } from "~/sections/specialist-list";
import { Protocols } from "~/sections/protocols";
import { StoryTelling } from "~/sections/story-telling";
import { Plans } from "~/sections/plans";
import { Growth } from "~/sections/growth";
import { Opportunities } from "~/sections/opportunities";
import { Strategies } from "~/sections/strategies";
import { Risks } from "~/sections/risks";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Vital Pass" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
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
