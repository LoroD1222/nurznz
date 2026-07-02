import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Zanzibar Experiences | NUR Zanzibar",
  description:
    "Browse NUR Zanzibar marine, nature, culture and coast experiences with practical pickup and partner-ready trip details.",
  alternates: { canonical: "/experience/mnemba-snorkeling" },
};

export default function ExperiencePage() {
  redirect("/experience/mnemba-snorkeling");
}
