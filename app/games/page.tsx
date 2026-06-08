import type { Metadata } from "next";
import GamesContent from "./GamesContent";

export const metadata: Metadata = {
  title: "Cannabis Arcade Games — Pleasant Cannabis | Toronto",
  description: "Play free online cannabis-themed games like Flappy Bud and Snake Munchies while you wait at Pleasant Cannabis.",
  alternates: {
    canonical: "https://pleasantcannabis.ca/games",
  },
};

export default function GamesPage() {
  return <GamesContent />;
}
