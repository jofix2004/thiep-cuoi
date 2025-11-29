import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';

// --- CẤU HÌNH ĐƯỜNG DẪN ẢNH ---
// Lấy đường dẫn gốc từ Vite (tự động hiểu /thiep-cuoi/ hoặc /)
const BASE = import.meta.env.BASE_URL;
// Hàm nhỏ giúp nối đường dẫn và xử lý tên file có dấu cách
const getImg = (name: string) => `${BASE}images/${name}`;

// HÀNG 1: Dùng dải ảnh Anh1 (Từ 1 đến 10)
// Lưu ý: Tên file phải y hệt trong thư mục (bao gồm dấu cách và .JPG viết hoa)
const ROW_1 = [
  getImg("Anh1 (1).JPG"),
  getImg("Anh1 (2).JPG"),
  getImg("Anh1 (3).JPG"),
  getImg("Anh1 (4).JPG"),
  getImg("Anh1 (5).JPG"),
  getImg("Anh1 (6).JPG"),
  getImg("Anh1 (7).JPG"),
  getImg("Anh1 (8).JPG"),
  getImg("Anh1 (9).JPG"),
  getImg("Anh1 (10).JPG"),
];

// HÀNG 2: Dùng dải ảnh Anh2 (Từ 1 đến 8)
const ROW_2 = [
  getImg("Anh2 (1).JPG"),
  getImg("Anh2 (2).JPG"),
  getImg("Anh2 (3).JPG"),
  getImg("Anh2 (4).JPG"),
  getImg("Anh2 (5).JPG"),
  getImg("Anh2 (6).JPG"),
  getImg("Anh2 (7).JPG"),
  getImg("Anh2 (8).JPG"),
];

interface MarqueeProps {
  images: string[];
  direction?: 'left' | 'right';
  speed?: number;
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
        {/* Lặp lại ảnh 4 lần để chạy mượt trên màn hình lớn */}
        {[...images, ...images, ...images, ...images].map((src, idx) => (
          <div 
            key={idx} 
            className="relative w-56 md:w-80 aspect-[3/4] flex-shrink-0 rounded-2xl overflow-hidden shadow-md hover:opacity-90 transition-opacity"
          >
            <div className="absolute inset-0 bg-black/5 mix-blend-overlay z-10" />
            <img 
              src={src} 
              alt={`Gallery ${idx}`} 
              className="w-full h-full object-cover" 
              loading="lazy" 
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const GalleryScroll: React.FC = () => {
  return (
    <section className="py-24 md:py-40 bg-transparent overflow-hidden relative">
       {/* Background Decoration */}
       <div className="absolute inset-0 flex items-start pt-20 justify-center pointer-events-none z-0 opacity-[0.03]">
           <h2 className="font-script text-[15rem] md:text-[25rem] text-slate-900 leading-none whitespace-nowrap">
             Memories
           </h2>
       </div>

       <SectionHeader 
          subTitle="Our Sweet Memories"
          title="ALBUM ẢNH"
          scriptText="Hạnh Phúc"
          description="Từng bức ảnh là một nhịp đập của trái tim, lưu giữ khoảnh khắc ta thuộc về nhau."
          textColor="text-slate-800"
          accentColor="text-sky-300"
       />

       {/* Marquee Rows */}
       <div className="flex flex-col gap-4 md:gap-8 -rotate-2 scale-[1.02] origin-center relative z-10">
          <MarqueeRow images={ROW_1} direction="left" speed={120} />
          <MarqueeRow images={ROW_2} direction="right" speed={150} />
       </div>

       {/* Overlay Gradients */}
       <div className="absolute inset-y-0 left-0 w-12 md:w-32 bg-gradient-to-r from-white to-transparent z-20 pointer-events-none" />
       <div className="absolute inset-y-0 right-0 w-12 md:w-32 bg-gradient-to-l from-white to-transparent z-20 pointer-events-none" />
    </section>
  );
};

export default GalleryScroll;