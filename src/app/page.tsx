"use client"
import { Loading } from "@/components/loading";
import { useAnimate } from "@/hooks/useAnimate";
import dynamic from "next/dynamic";
import { ModalEarlyAccess } from "@/components/modal-early-access";

const Navbar = dynamic(() => import('@/components/navbar').then((mod) => mod.Navbar),
  { ssr: false }
)
const LandingSection = dynamic(() => import('@/containers/landing').then((mod) => mod.LandingSection),
  { ssr: false }
)
const ProjectSection = dynamic(() => import('@/containers/projects').then((mod) => mod.ProjectSection),
  { ssr: false }
)


export default function Home() {
  const { timeline, wip, setWip, setLoading } = useAnimate();

  return (
    <div>
      <Loading timeline={timeline} setLoading={setWip} />
      <div className="content">
        <Navbar />
        <LandingSection />
        <ProjectSection />
      </div>
      {wip && <ModalEarlyAccess timeline={timeline} onClose={() => {
        setWip(false)
        setLoading(false)
      }} />}
    </div>
  );
}


