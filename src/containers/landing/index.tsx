"use client";
import { Cube } from '@/components/models/cube';
import { Icosahedron } from '@/components/models/icosahedron';
import { useGSAP } from '@gsap/react';
import { Environment, OrbitControls, useProgress } from '@react-three/drei';
import { Canvas } from "@react-three/fiber";
import gsap from "gsap";
import CustomEase from "gsap/CustomEase";
import { SplitText } from "gsap/SplitText";


gsap.registerPlugin(CustomEase, SplitText);

export const LandingSection = () => {
  const { progress } = useProgress();
  console.log(progress)
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
    <section className="container">
      <div className="hero">
        <div className="overlay"></div>
        <div className="canvas-container">
          <CanvasModel />
        </div>
        <div className='hero-text'>
          <h1 className="title">
            Creative Developer
          </h1>
          <p className="subtitle">
            Hi, I&apos;m Iman, a Frontend Developer based in Indonesia, and I&apos;m passionate about works of art on digital platforms.
          </p>
        </div>
      </div>
    </section>
  )
}

export const CanvasModel = () => {

  return (
    <Canvas style={{ background: '' }}>
      <directionalLight intensity={2} position={[0, 2, 3]} />
      <Icosahedron />
      <Cube />
      <OrbitControls />
      <Environment preset="studio" />
    </Canvas>
  )
}