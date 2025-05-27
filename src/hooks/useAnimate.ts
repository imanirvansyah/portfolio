import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import CustomEase from "gsap/CustomEase";
import { SplitText } from "gsap/SplitText";
import { useState } from "react";

gsap.registerPlugin(CustomEase, SplitText);

export const useAnimate = () => {

  const [timeline, setTimeline] = useState<gsap.core.Timeline | null>(null);
  const [loading, setLoading] = useState(true);
  const [wip, setWip] = useState(false);

  useGSAP(() => {
    CustomEase.create("hop", "0.9, 0, 0.1, 1");
    const tl = gsap.timeline();
    const split = SplitText.create(".content h1", {
      type: "words, chars",
    })
    setTimeline(tl);
    if (!loading && !!timeline) {
      tl.to(".content", {
        opacity: 1,
        ease: "hop"
      })
        .to(".content .navbar", {
          opacity: 1,
          y: 0,
          ease: "hop",
        }, "<")
        .to(".content .title h1", {
          opacity: 1,
          delay: 0.2
        }, "<")
      tl.to(split.chars, {
        ease: "hop",
        y: -50,
        stagger: 0.01,
      }, "<")
      tl.to(".content .title p", {
        ease: "hop",
        opacity: 1,
        y: -50,
        delay: 0.1
      }, "<")
      tl.to(".display-item", {
        ease: "hop",
        opacity: .3,
        scale: 1,
      }, "<")
    }
  }, [loading]);
  return {
    timeline,
    setTimeline,
    wip,
    loading,
    setWip,
    setLoading,
  }

}