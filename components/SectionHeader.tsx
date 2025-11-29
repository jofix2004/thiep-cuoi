import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeaderProps {
  subTitle: string;
  title: string;
  scriptText: string;
  description?: string;
  className?: string;
  inverted?: boolean; // If true, swaps visual hierarchy slightly
  textColor?: string; // Optional: Override default rose text color
  accentColor?: string; // Optional: Override default script/accent color
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
  return (
    <div className={`relative text-center z-10 px-4 mb-16 md:mb-24 ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center justify-center relative"
      >
        {/* Subtitle (Overline) */}
        {/* Increased margin-bottom significantly to avoid overlap with floating script text */}
        <span className={`font-sans-clean text-xs md:text-sm tracking-[0.3em] uppercase mb-12 md:mb-20 opacity-70 relative z-30 ${textColor.replace('950', '800')}`}>
          {subTitle}
        </span>
        
        {/* Main Composition */}
        <div className="relative inline-block">
          {/* Main Serif Title - Placed on TOP (z-20) */}
          <h2 className={`text-5xl md:text-8xl font-serif relative z-20 tracking-tight leading-none drop-shadow-sm ${textColor}`}>
            {title}
          </h2>
          
          {/* Script Text - Placed BEHIND (z-10) and softer color */}
          <span 
            className={`absolute left-1/2 -translate-x-1/2 font-script text-5xl md:text-8xl z-10 whitespace-nowrap pointer-events-none select-none ${accentColor}
              ${inverted 
                ? '-top-8 md:-top-12 rotate-[-4deg]' // Adjusted position slightly lower
                : '-bottom-8 md:-bottom-14 -rotate-3' // Moved lower down
              }
            `}
          >
            {scriptText}
          </span>
        </div>
        
        {/* Decorative Line - Added margin top to account for script text */}
        <div className={`w-[1px] h-16 md:h-20 mt-16 md:mt-20 bg-gradient-to-b from-transparent to-transparent`} style={{backgroundImage: `linear-gradient(to bottom, transparent, currentColor, transparent)`}}>
           {/* We use currentColor to inherit from the wrapper, but let's enforce opacity via class if needed, or inline styles for gradient colors based on props is hard without arbitrary values. 
               Simplified: Use a div with opacity and standard bg class if not dynamic, but for dynamic we can just use the border or a generic color class.
           */}
           <div className={`w-full h-full opacity-30 ${textColor.includes('rose') ? 'bg-rose-400' : 'bg-sky-400'}`}></div>
        </div>
        
        {/* Description */}
        {description && (
          <p className="mt-8 text-gray-500 font-serif italic text-lg md:text-xl max-w-lg mx-auto leading-relaxed">
            "{description}"
          </p>
        )}
      </motion.div>
    </div>
  );
};

export default SectionHeader;