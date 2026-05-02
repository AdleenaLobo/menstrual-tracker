"use client";
import { motion } from "motion/react";

export default function CircularSquare({
  color,
  placement,
  staggerValue
}: {
  color: string;
  placement: string;
  staggerValue:number;
}) {
  return (
    <motion.div
      className={`h-96 w-96 rounded-full ${color} absolute ${placement}`}
      
      animate={{
            y: [0, -20, 0, 10, 0],
      }}
      transition={{ repeat: Infinity,
        duration:12,
        ease: "linear",
        delay: staggerValue,
       }}
    >
    </motion.div>
  );
}
