"use client";

import PageHeader from "@/components/PageHeader";
import SkillCard from "@/components/skillCard/SkillCard";
// import executeQuery from "@/lib/db";
export default async function Home() {
  const [rows] = await db.query('SELECT * FROM User');
  return (
    <>
      <PageHeader>SKill Counter</PageHeader>
      <SkillCard value={50} />
    </>
  );
}
