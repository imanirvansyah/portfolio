"use client";

import { Button } from '@/components/button';
import { Card } from '@/components/card';
import { Cube } from '@/components/models/cube';
import { Icosahedron } from '@/components/models/icosahedron';
import { useGSAP } from '@gsap/react';
import { Environment, OrbitControls } from '@react-three/drei';
import { Canvas } from "@react-three/fiber";
import gsap from "gsap";
import CustomEase from "gsap/CustomEase";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(CustomEase, SplitText);

export const LandingSection = () => {
  // const { progress } = useProgress();
  useGSAP(() => {
    CustomEase.create("hop", "0.9, 0, 0.1, 1");
    const tl = gsap.timeline();
    const splitTitle = SplitText.create(".hero-text .title", {
      type: "words, chars, lines"
    })
    const splitsubtitle = SplitText.create(".hero-text .subtitle", {
      type: "words, lines"
    })

    const animate = () => {
      tl
        .to(".hero .overlay", {
          height: "100%",
          ease: "hop",
          duration: 1
        }, "<")
        .to(".hero-text .title", {
          opacity: 1,
          delay: .65
        }, "<")
        .to(splitTitle.chars, {
          ease: "hop",
          y: -50,
          stagger: 0.01,
          opacity: 1,
        }, "<")
        .to(".hero-text .subtitle", {
          opacity: 1
        }, "<")
        .to(splitsubtitle.lines, {
          ease: "hop",
          y: -50,
          stagger: 0.01,
          opacity: 1,
        }, "<")
        .to(".canvas-container", {
          opacity: 1,
          y: 0,
          ease: "power1.out",
        })

    }
    animate()
  }, {});


  return (
    <>
      <CanvasModel />
      <section>
        <h1 className='title'>
          <span>A Creative</span>
          <span> Mind in</span>
          <span>Developer</span>
          <span>Mode</span>
        </h1>
      </section >
      <section>
        <h1 className='title'>
          Works
        </h1>
        <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap", justifyContent: "center", marginTop: "100px" }}>
          <Card
            image="/images/valorant-thumbnail.png"
            title="valorant information website"
            categories={[{
              label: "Design",
              color: "#93C270"
            },
            {
              label: "Prototype",
              color: "#7083C2"
            }]}
            desc="A comprehensive website providing detailed information about Valorant, including game mechanics, character abilities, and strategies."
          />
          <Card
            image="/images/zeno-thumbnail.png"
            title="Zen O Smart Ring landing page"
            categories={[{
              label: "Design",
              color: "#93C270"
            },
            {
              label: "Prototype",
              color: "#7083C2"
            }]}
            desc="Zen O is a landing page concept for a futuristic smart ring featuring a 3D product showcase. Designed with a clean, modern layout."
          />
          <Card
            image="/images/brightever-thumbnail.png"
            title="Brightever Skincare Website"
            categories={[{
              label: "Design",
              color: "#93C270"
            },
            {
              label: "Prototype",
              color: "#7083C2"
            }]}
            desc="Everbright is a fictional skincare brand designed to reflect natural beauty, softness, and elegance. an e-commerce website with minimalist design"
          />
          <Card
            image="/images/sp-thumbnail.png"
            title="3D Sphere Pillards - Course Project"
            categories={[{
              label: "Web Development",
              color: "#c23232ff"
            }, {
              label: "Design",
              color: "#93C270"
            },
            {
              label: "Prototype",
              color: "#7083C2"
            }]}
            desc="A course project showcasing 3D sphere pillars, demonstrating advanced web development techniques and 3D modeling skills."
          />
        </div>
      </section>
      <section>
        <h1 className='title' style={{ marginBottom: "48px" }}>
          <span>Want to </span>
          <span>collaborate </span>
          <span>mentor, or </span>
          <span>or just connect?</span>
        </h1>
        <Button label='get in touch' />
      </section >
    </>
  )
}

export const CanvasModel = () => {
  return (
    <Canvas style={{ background: 'black', width: "100vw", height: "100vh", position: "fixed", top: 0, zIndex: -1 }}>
      <directionalLight intensity={2} position={[0, 2, 3]} />
      <Icosahedron />
      <Cube />
      <OrbitControls />
      <Environment preset="studio" />
    </Canvas>
  )
}