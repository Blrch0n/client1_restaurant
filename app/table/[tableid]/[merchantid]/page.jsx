"use client";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import MainSection from "@/app/components/MainSection";
import { useParams } from "next/navigation";

export default function Home() {
  const { tableid, merchantid } = useParams();

  return (
    <>
      <Header tableid={tableid} merchantid={merchantid} />
      <MainSection tableid={tableid} merchantid={merchantid} />
      <Footer />
    </>
  );
}
