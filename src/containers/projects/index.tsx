import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { useRef } from "react"

export type projectProps = {
  title: string;
  description: string;
  image: string;
  link: string;
}

export const ProjectSection = () => {
  return (
    <section className="section" id="project-section">
      <h1>SELECTED WORKS</h1>
      <div className="project-list">
        {data.map((project, index) => (
          <ProjectItem key={index} data={project} />
        ))}
      </div>
      <div className="overlay"></div>
    </section>
  )
}

const ProjectItem = ({ data }: { data: projectProps }) => {
  const ref = useRef<HTMLImageElement>(null);
  const refTitle = useRef<HTMLParagraphElement>(null);

  useGSAP(() => {
    const el = ref.current;
    if (!el) return null;

    const hover = gsap.timeline();
    const handleMouseEnter = () => {
      hover.to(".project-item", {
        opacity: 0.3,
        ease: "hop"
      })
        .to(el, {
          opacity: 1,
          scale: 1.1,
        }, "<")
        .to(".overlay", {
          opacity: 1,
          ease: "hop"
        }, "<")
        .to(refTitle.current, {
          y: -20,
          opacity: 1,
          ease: "hop",
          delay: 0.3
        }, "<")
    }
    const handleMouseLeave = () => {
      hover.to(".project-item", {
        opacity: 1,
        scale: 1,
        ease: "hop"
      })
        .to(".overlay", {
          opacity: 0,
          ease: "hop"
        }, "<")
        .to(refTitle.current, {
          y: 20,
          opacity: 0,
          ease: "hop"
        }, "<")
    }
    el.addEventListener("mouseenter", handleMouseEnter);
    el.addEventListener("mouseleave", handleMouseLeave);

  }, {})

  return (
    <>
      <div className="project-item" ref={ref}>
        <h2 ref={refTitle}>{data.title}</h2>
        <img src={data.image} alt={data.title} />
        {/* <div className="project-overlay" /> */}
      </div>
    </>
  )
}

const data: projectProps[] = [
  {
    title: 'Project1',
    description: 'Description of project 1',
    image: 'https://picsum.photos/600/800',
    link: '#'
  },
  {
    title: 'Project 2',
    description: 'Description of project 2',
    image: 'https://picsum.photos/600/800',
    link: '#'
  },
  {
    title: 'Project 3',
    description: 'Description of project 3',
    image: 'https://picsum.photos/600/800',
    link: '#'
  },
]