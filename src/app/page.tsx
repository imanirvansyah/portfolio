"use client"
import { Loading } from "@/components/loading";
import { Navbar } from "@/components/navbar";
import { useAnimate } from "@/hooks/useAnimate";
import dynamic from "next/dynamic";

const LandingSection = dynamic(() => import('@/containers/landing').then((mod) => mod.LandingSection),
  { ssr: false }
)


export default function Home() {
  const { timeline, setLoading } = useAnimate();

  return (
    <div>
      <Loading timeline={timeline} setLoading={setLoading} />
      <div className="content">
        <Navbar />
        <LandingSection />
      </div>
    </div>
  );
}
