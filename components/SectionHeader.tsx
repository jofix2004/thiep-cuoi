import React from 'react';
import { motion, Variants } from 'framer-motion';

interface SectionHeaderProps {
  subTitle: string;
  title: string;
  scriptText: string;
  description?: string;
  className?: string;
  inverted?: boolean;
  textColor?: string;
  accentColor?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ 
  subTitle, 
  title, 
  scriptText, 
  description,
  className = "",
  inverted = false,
  textColor = "text-rose-950",
  accentColor = "text-rose-300/80"
}) => {
  // Variants for the container to coordinate children
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Delay between each child animation
        delayChildren: 0.1,
      }
    }
  };

  // Variants for individual items: Slide up + Fade in + Blur in
  const itemVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: 40, 
      filter: 'blur(10px)' 
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: 'blur(0px)',
      transition: { 
        duration: 1, 
        ease: [0.22, 1, 0.36, 1] // Custom cubic-bezier for snappy yet smooth motion
      }
    }
  };

  const lineVariants: Variants = {
    hidden: { scaleY: 0, opacity: 0, transformOrigin: 'top' },
    visible: { 
      scaleY: 1, 
      opacity: 0.3, // Match the target opacity in CSS
      transition: { duration: 1.2, ease: "easeInOut" } 
    }
  };

  return (
    <div className={`relative text-center z-10 px-4 mb-16 md:mb-24 ${className}`}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }} // Trigger earlier
        className="flex flex-col items-center justify-center relative w-full"
      >
        {/* Subtitle */}
        <motion.span 
          variants={itemVariants}
          // Added mr-[-0.3em] to fix optical centering caused by wide letter-spacing
          className={`font-sans-clean text-xs md:text-sm tracking-[0.3em] uppercase mb-12 md:mb-20 opacity-70 relative z-30 ${textColor.replace('950', '800')} mr-[-0.3em]`}
        >
          {subTitle}
        </motion.span>
        
        {/* Main Composition */}
        <div className="relative w-full">
          {/* Main Serif Title */}
          <motion.h2 
            variants={itemVariants}
            className={`text-5xl md:text-8xl font-serif relative z-20 tracking-tight leading-none drop-shadow-sm ${textColor} mx-auto`}
          >
            {title}
          </motion.h2>
          
          {/* Script Text */}
          {/* Adjusted positioning:
              - Inverted (Top): Changed to POSITIVE top-6/top-10 to push it DOWN significantly closer to the title.
              - Standard (Bottom): Kept as is.
          */}
          <motion.span 
            variants={itemVariants}
            className={`absolute left-0 w-full text-center font-script text-5xl md:text-8xl z-10 whitespace-nowrap pointer-events-none select-none ${accentColor}
              ${inverted 
                ? 'top-12 md:top-20 rotate-[-4deg]'
                : '-bottom-12 md:-bottom-20 -rotate-3'
              }
            `}
          >
            {scriptText}
          </motion.span>
        </div>
        {/* Decorative Line */}
        <motion.div 
          variants={lineVariants}
          className={`w-[1px] h-16 md:h-20 mt-16 md:mt-20 bg-gradient-to-b from-transparent to-transparent mx-auto`} 
          style={{backgroundImage: `linear-gradient(to bottom, transparent, currentColor, transparent)`}}
        >
           <div className={`w-full h-full ${textColor.includes('rose') ? 'bg-rose-400' : 'bg-sky-400'}`}></div>
        </motion.div>
        
        {/* Description */}
        {description && (
          <motion.p 
            variants={itemVariants}
            className="mt-8 text-gray-500 font-serif italic text-lg md:text-xl max-w-lg mx-auto leading-relaxed"
          >
            "{description}"
          </motion.p>
        )}
      </motion.div>
    </div>
  );
};

export default SectionHeader;