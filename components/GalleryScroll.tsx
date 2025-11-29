import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';

// Sample image sets - URLs updated to request portrait dimensions
const ROW_1 = [
  "https://picsum.photos/450/600?random=10",
  "https://picsum.photos/400/600?random=11",
  "https://picsum.photos/500/650?random=12",
  "https://picsum.photos/450/600?random=13",
  "https://picsum.photos/400/600?random=14",
  "https://picsum.photos/500/650?random=15",
];

const ROW_2 = [
  "https://picsum.photos/400/600?random=20",
  "https://picsum.photos/450/600?random=21",
  "https://picsum.photos/500/650?random=22",
  "https://picsum.photos/400/600?random=23",
  "https://picsum.photos/450/600?random=24",
  "https://picsum.photos/500/650?random=25",
];

const ROW_3 = [
  "https://picsum.photos/500/650?random=30",
  "https://picsum.photos/400/600?random=31",
  "https://picsum.photos/450/600?random=32",
  "https://picsum.photos/500/650?random=33",
  "https://picsum.photos/400/600?random=34",
  "https://picsum.photos/450/600?random=35",
];

interface MarqueeProps {
  images: string[];
  direction?: 'left' | 'right';
  speed?: number; // duration in seconds
}

const MarqueeRow: React.FC<MarqueeProps> = ({ images, direction = 'left', speed = 30 }) => {
  return (
    <div className="flex w-full overflow-hidden py-2 md:py-4 select-none pointer-events-none mask-gradient">
      <motion.div
        className="flex gap-4 md:gap-8 flex-shrink-0"
        initial={{ x: direction === 'left' ? 0 : '-50%' }}
        animate={{ x: direction === 'left' ? '-50%' : 0 }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {/* Render images multiple times to ensure seamless loop on large screens */}
        {[...images, ...images, ...images, ...images].map((src, idx) => (
          <div 
            key={idx} 
            // Changed dimensions to vertical portrait (w-56/80 and aspect-[3/4])
            className="relative w-56 md:w-80 aspect-[3/4] flex-shrink-0 rounded-2xl overflow-hidden shadow-md hover:opacity-90 transition-opacity"
          >
            {/* Removed pink overlay so outdoor blue/white photos look natural */}
            <div className="absolute inset-0 bg-black/5 mix-blend-overlay z-10" />
            <img src={src} alt="" className="w-full h-full object-cover" loading="lazy" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const GalleryScroll: React.FC = () => {
  return (
    <section className="py-24 md:py-40 bg-transparent overflow-hidden relative">
       {/* Background Title Decoration - Changed color to neutral slate */}
       <div className="absolute inset-0 flex items-start pt-20 justify-center pointer-events-none z-0 opacity-[0.03]">
           <h2 className="font-script text-[15rem] md:text-[25rem] text-slate-900 leading-none whitespace-nowrap">
             Memories
           </h2>
       </div>

       {/* Replaced with consistent SectionHeader with Outdoor/Slate Colors */}
       <SectionHeader 
          subTitle="Our Sweet Memories"
          title="ALBUM ẢNH"
          scriptText="Hạnh Phúc"
          description="Từng bức ảnh là một nhịp đập của trái tim, lưu giữ khoảnh khắc ta thuộc về nhau."
          textColor="text-slate-800"
          // Changed from text-slate-200 to text-sky-300 to make it visible
          accentColor="text-sky-300"
       />

       {/* Marquee Rows with rotation for artistic effect */}
       <div className="flex flex-col gap-4 md:gap-8 -rotate-2 scale-[1.02] origin-center relative z-10">
          <MarqueeRow images={ROW_1} direction="left" speed={120} />
          <MarqueeRow images={ROW_2} direction="right" speed={150} />
          <MarqueeRow images={ROW_3} direction="left" speed={130} />
       </div>

       {/* Overlay Gradients for smooth edges - kept neutral white */}
       <div className="absolute inset-y-0 left-0 w-12 md:w-32 bg-gradient-to-r from-white to-transparent z-20 pointer-events-none" />
       <div className="absolute inset-y-0 right-0 w-12 md:w-32 bg-gradient-to-l from-white to-transparent z-20 pointer-events-none" />
    </section>
  );
};

export default GalleryScroll;