"use client"

import { Footer } from "@/components/footer";
import dynamic from "next/dynamic";

const Navbar = dynamic(() => import('@/components/navbar').then((mod) => mod.Navbar),
  { ssr: false }
)
const LandingSection = dynamic(() => import('@/containers/landing').then((mod) => mod.LandingSection),
  { ssr: false }
)
const ModalWIP = dynamic(() => import('@/components/modal-wip').then((mod) => mod.ModalWIP),
  { ssr: false }
)

export default function Home() {


  return (
    <>
      <Navbar />
      <LandingSection />
      <Footer />
      <ModalWIP />
    </>
  )
}


