"use client"

import LinkPrimitive from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export const Link = ({ href, label }: { href: string; label: string }) => {
  const link = useRef<HTMLAnchorElement>(null);
  const hoveredRef = useRef<HTMLSpanElement>(null);
  const unhoveredRef = useRef<HTMLSpanElement>(null);

  useGSAP(() => {
    const el = link.current;
    if (!el) return;

    const hover = gsap.timeline()

    const handleMouseEnter = () => {
      hover.to(unhoveredRef.current, {
        y: -20,
        opacity: 0,
        duration: 0.3,
        ease: "power2.out",
      })
        .to(hoveredRef.current, {
          y: 0,
          opacity: 1,
          duration: 0.3,
          ease: "power2.out",
        }, "<")
    };

    const handleMouseLeave = () => {
      hover.to(unhoveredRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.3,
        ease: "power2.out",
      })
        .to(hoveredRef.current, {
          y: 20,
          opacity: 0,
          duration: 0.3,
          ease: "power2.out",
        }, "<")
    };

    el.addEventListener("mouseenter", handleMouseEnter);
    el.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      el.removeEventListener("mouseenter", handleMouseEnter);
      el.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, {})
  return (
    <LinkPrimitive href={href} passHref legacyBehavior>
      <a ref={link} className="link">
        <span className="unhovered" ref={unhoveredRef}>{label}</span>
        <span className="hovered" ref={hoveredRef}>{label}</span>
      </a>
    </LinkPrimitive>
  )
}