"use client";
import { useParams, usePathname } from "next/navigation";
import ContentContainer from "@/components/ContentContainer";
import React from "react";
import AppLayout from "@/layout/AppLayout";

const Page = () => {
  const { content } = useParams(); // ✅ correct way in client component
  console.log("🚀 ~ Page ~ tab:", content);
  const tab: any = content?.[0] || "home"; // Extract route (e.g., "/about", "/projects")

  return (
    <>
      {" "}
      <AppLayout>
        <ContentContainer activeTab={tab} />
      </AppLayout>
    </>
  );
};

export default Page;
