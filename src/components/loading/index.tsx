"use client"
import { motion, Variants } from "motion/react"

const containerVariants: Variants = {
  hidden: { y: "100%" },
  visible: {
    y: 0,
    transition: {
      duration: .5,
      delay: 1,
      when: "beforeChildren",
      staggerChildren: 0.1,
      ease: "easeIn"
    }
  },
  exit: {
    y: "100%",
    transition: {
      duration: .5,
      ease: "easeOut"
    }
  }
}


const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export const Loading: React.FC<{
  onComplete: () => void;
}> = ({ onComplete }) => {
  return (
    <motion.div
      key="loading"
      className="flex items-center gap-1 justify-center h-screen bg-brand"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      onAnimationComplete={onComplete}
    >
      <motion.div variants={itemVariants} className="w-3 h-12 bg-background"></motion.div>
      <motion.div variants={itemVariants} className="w-3 h-12 bg-background"></motion.div>
      <motion.div variants={itemVariants} className="w-3 h-12 bg-background"></motion.div>
      <motion.div variants={itemVariants} className="w-3 h-12 bg-background"></motion.div>
    </motion.div>
  )
}