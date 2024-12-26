import { motion } from "motion/react"
import "./style.css"
import { useState } from "react"
import { Icon } from "@iconify/react/dist/iconify.js"

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


  const handleTap = (index: number) => {
    setHoveredIndex(hoveredIndex === index ? null : index); // Toggle active state on tap
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {WORKS.map((item, i) => (
        <motion.div
          key={i}
          className="work-list uppercase cursor-default"
          variants={listVariant}
          onHoverStart={() => setHoveredIndex(i)} // Set hovered index
          onHoverEnd={() => setHoveredIndex(null)} // Clear hovered index
          onTap={() => handleTap(i)}
        >
          <div className="flex items-center gap-3">
            <p>
              {item.name}
            </p>
            {item.categories.map((category, idx) => <span key={category + idx} className="text-xs md:text-sm text-brand bg-background px-3 py-1">{category}</span>)}

          </div>
          <motion.div
            className="work-hover"
            variants={spanVariant}
            animate={hoveredIndex === i ? "hover" : "hidden"}
          >
            <div className="flex items-center gap-3">
              <p className="">
                {item.name}
              </p>
              {item.categories.map((category, idx) => <span key={category + idx} className="text-xs md:text-sm text-brand bg-background px-3 py-1">{category}</span>)}
            </div>
            <div className="flex gap-3 items-center">
              {!!item.links.github && (
                <a className="w-5 h-5 md:w-10 md:h-10 xl:w-20 xl:h-20 rounded-full cursor-pointer" href={item.links.github} target="_blank">
                  <Icon icon="mdi:github" className="w-full h-full" />
                </a>
              )}
              {!!item.links.website && (
                <a className="w-5 h-5 md:w-10 md:h-10 xl:w-20 xl:h-20 rounded-full cursor-pointer" href={item.links.website} target="_blank">
                  <Icon icon="cuida:open-in-new-tab-outline" className="w-full h-full" />
                </a>
              )}
            </div>
          </motion.div>
        </motion.div>
      ))}
    </motion.div>
  )
}

const WORKS = [
  {
    name: "mytens.co.id",
    categories: ["work"],
    links: {
      github: "",
      website: "https://mytens.co.id/"
    }
  },
  {
    name: "mezink",
    categories: ["work"],
    links: {
      github: "",
      website: "https://mez.ink/"
    }
  },
  {
    name: "realfood (awalmula)",
    categories: ["work"],
    links: {
      github: "",
      website: "https://realco.co.id/"
    }
  },
  {
    name: "Coba interview",
    categories: ["collab portfolio"],
    links: {
      github: "",
      website: "https://cobainterview.com/"
    }
  },
  // {
  //   name: "barberin",
  //   categories: ["portfolio"],
  //   links: {
  //     github: "#",
  //     website: ""
  //   }
  // },
  {
    name: "valorant info",
    categories: ["portfolio"],
    links: {
      github: "https://github.com/imanirvansyah/valorant-info",
      website: "https://valorant-info-dnn9ezm40-imanirvs-projects.vercel.app"
    }
  },
  {
    name: "color generator",
    categories: ["portfolio"],
    links: {
      github: "https://github.com/imanirvansyah/color-generator",
      website: ""
    }
  },
]