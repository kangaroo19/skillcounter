"use client";

import { Layout } from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import SkillCard from "@/components/skillCard/SkillCard";

export default function Home() {
  return (
    <>
      <PageHeader>SKill Counter</PageHeader>
      <SkillCard value={50} />
    </>
  );
}
