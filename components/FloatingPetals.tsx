import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const FloatingPetals: React.FC = () => {
  const [petals, setPetals] = useState<number[]>([]);
  const { scrollYProgress } = useScroll();
  
  // Transform color from Rose (Top) to White (Middle) to Sky Blue (Bottom)
  // Adjusted ranges [0, 0.15, 0.6] to make them turn white/blue much faster
  const petalColor = useTransform(
    scrollYProgress,
    [0, 0.15, 0.6], 
    ["rgba(253, 164, 175, 0.6)", "rgba(255, 255, 255, 0.8)", "rgba(186, 230, 253, 0.8)"]
    // Rose-300 -> White -> Sky-300
  );

  useEffect(() => {
    // Generate random petal IDs
    const petalArray = Array.from({ length: 20 }, (_, i) => i);
    setPetals(petalArray);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {petals.map((id) => (
        <motion.div
          key={id}
          className="absolute w-4 h-4 rounded-full blur-[1px]"
          initial={{
            x: Math.random() * window.innerWidth,
            y: -20,
            opacity: 0,
            rotate: 0,
          }}
          style={{
            backgroundColor: petalColor,
            clipPath: "polygon(50% 0%, 80% 10%, 100% 35%, 100% 70%, 80% 90%, 50% 100%, 20% 90%, 0% 70%, 0% 35%, 20% 10%)"
          }}
          animate={{
            y: window.innerHeight + 20,
            x: `calc(${Math.random() * 100}vw + ${Math.random() * 200 - 100}px)`,
            opacity: [0, 0.8, 0],
            rotate: 360,
          }}
          transition={{
            duration: 10 + Math.random() * 20,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 10,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingPetals;