"use client"

import Image from "next/image";
import { useEffect, useState } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Loading = ({ timeline, setLoading }: any) => {
  const [count, setCount] = useState(0);

  const triggerAnimation = (tl: gsap.core.Timeline) => {
    tl.to(".loading-container h1", {
      duration: 1,
      ease: "hop",
      y: -100,
      opacity: 0
    })
      .to(".loading-container h1", {
        display: "none",
      }, "-0.01")
      .to(".loading-container img", {
        y: 0,
        opacity: 1,
        ease: "hop",
        duration: 1,
      }, "<")
      .to(".loading-container", {
        ease: "hop",
        opacity: 0,
        scale: 0.8,
        onComplete: () => {
          setLoading(true);
        }
      })
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if (count >= 100) {
        clearInterval(interval);
        return;
      }
      setCount((prevCount) => {
        if (prevCount >= 96) {
          if (!!timeline) triggerAnimation(timeline)
          return 100
        }
        return prevCount + 8
      });
    }, 100);
    return () => clearInterval(interval);
  }, [count]);

  return (
    <div className="loading-container" >
      <h1>{count}</h1>
      <Image src="/logo.svg" alt="website-logo" width={200} height={50} />
    </div>
  )
}