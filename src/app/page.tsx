"use client"
import { Loading } from "@/components/loading";
import { Navbar } from "@/components/navbar";
import { useAnimate } from "@/hooks/useAnimate";
import { LandingSection } from "@/containers/landing";

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
