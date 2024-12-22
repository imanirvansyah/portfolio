import { motion } from "motion/react"
import "./style.css"
import { useState } from "react"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      ease: "easeIn",
      staggerChildren: 0.1,
    }
  },
}
const listVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}
const spanVariant = {
  hidden: {
    clipPath: "polygon(0 50%, 100% 50%, 100% 50%, 0 50%)",
  },
  hover: {
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
    transition: { duration: 0.4, ease: [0.1, 0.5, 0.5, 1] },
  }
}

export const Works = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {WORKS.map((item, i) => (
        <motion.div
          key={i}
          className="work-list uppercase"
          variants={listVariant}
          onHoverStart={() => setHoveredIndex(i)} // Set hovered index
          onHoverEnd={() => setHoveredIndex(null)} // Clear hovered index
        >
          {item.name}
          <motion.span
            variants={spanVariant}
            animate={hoveredIndex === i ? "hover" : "hidden"}
          >
            {item.name}
          </motion.span>
        </motion.div>
      ))}
    </motion.div>
  )
}

const WORKS = [
  {
    name: "mytens.co.id",
    links: {
      github: "#",
      website: "#"
    }
  },
  {
    name: "mezink",
    links: {
      github: "#",
      website: "#"
    }
  },
  {
    name: "realfood (awalmula)",
    links: {
      github: "#",
      website: "#"
    }
  },
  {
    name: "Coba interview",
    links: {
      github: "#",
      website: "#"
    }
  },
  {
    name: "barberin",
    links: {
      github: "#",
      website: "#"
    }
  },
  {
    name: "color generator",
    links: {
      github: "#",
      website: "#"
    }
  },
  {
    name: "valorant info",
    links: {
      github: "#",
      website: "#"
    }
  },
]