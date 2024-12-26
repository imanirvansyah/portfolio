"use client"
import { Loading } from "@/components/loading";
import { Works } from "@/components/works";
import { Icon } from "@iconify/react";
import { useState } from "react";
import { AnimatePresence } from "motion/react";

const WORDING = [
  <>Iman Irvansyah, <span className="font-bold text-brand">Frontend</span></>,
  <><span className="font-bold text-brand">Developer</span> based on Jakarta <Icon icon="twemoji:flag-indonesia" width={24} height={24} className="inline ml-1" /></>,
  <>Usually work with <span><Icon icon="logos:react" className="inline ml-1 animate-spin" /></span> environtment</>,
  <>and love to explore new potential of </>,
  "website"
]

export default function Home() {
  const [loading, setLoading] = useState(true);
  return (
    <AnimatePresence>
      {loading && <Loading onComplete={() => setLoading(false)} key="loading" />}
      {!loading && (
        <div className="flex flex-col md:flex-row md:items-center justify-start h-screen overflow-hidden p-3" key="content">
          <div className="md:p-12">
            <div>
              {WORDING.map((word, idx) => <p key={idx} className="font-extralight">{word}</p>)}
            </div>
            <div className="mt-12 ">
              <ul className="font-extralight uppercase">
                <li><a href="https://github.com/imanirvansyah" target="_blank">github</a></li>
                <li><a href="https://www.linkedin.com/in/iman-i-1bb97b11b/" target="_blank">linkedin</a></li>
                <li><a href="mailto:imanirvansyaah@gmail.com" target="_blank">email</a></li>
              </ul>
            </div>
          </div>
          <div className="flex-1 mt-12 md:mt-0">
            <h1 className="uppercase mb-3 font-extralight md:font-normal">portfolio / works .</h1>
            <Works />
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}

