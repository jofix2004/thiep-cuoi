import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

const Section: React.FC<SectionProps> = ({ children, className = "", id }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [100, -50]);

  return (
    <motion.section
      ref={ref}
      id={id}
      style={{ opacity, y }}
      className={`relative py-20 md:py-32 px-4 md:px-8 w-full max-w-7xl mx-auto ${className}`}
    >
      {children}
    </motion.section>
  );
};

export default Section;