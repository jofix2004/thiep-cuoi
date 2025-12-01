import React from 'react';
import { motion, Variants } from 'framer-motion';
import SectionHeader from './SectionHeader';

// Lấy đường dẫn gốc để đảm bảo ảnh hiển thị đúng trên mọi môi trường (Local/GitHub Pages)
const BASE_URL = import.meta.env.BASE_URL;

const CoupleIntro: React.FC = () => {
  const columnVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.3 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30, filter: 'blur(5px)' },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: 'blur(0px)',
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9, filter: 'blur(5px)' },
    visible: { 
      opacity: 1, 
      scale: 1, 
      filter: 'blur(0px)',
      transition: { duration: 1, ease: "easeOut" }
    }
  };

  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <SectionHeader 
          subTitle="The Happy Couple"
          title="CÔ DÂU & CHÚ RỂ"
          scriptText="Nhân Vật Chính"
          description="Tình yêu là sự gặp gỡ của hai tâm hồn đồng điệu."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 mt-12 md:mt-20">
          
          {/* GROOM COLUMN (CHÚ RỂ) */}
          <motion.div 
            variants={columnVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col items-center text-center"
          >
            {/* Image Frame */}
            <motion.div variants={imageVariants} className="relative w-72 md:w-96 aspect-[3/4] mb-8 group">
               {/* Decorative border offset */}
               <div className="absolute inset-0 border-2 border-rose-200 rounded-[3rem] translate-x-4 translate-y-4 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2"></div>
               
               {/* Main Image Container */}
               <div className="relative w-full h-full rounded-[3rem] overflow-hidden shadow-2xl">
                 {/* ĐÃ SỬA: Đường dẫn ảnh Chú Rể */}
                 <img 
                   src={`${BASE_URL}images/Re.png`}
                   alt="Chú Rể" 
                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-rose-900/40 to-transparent opacity-60"></div>
               </div>
            </motion.div>

            <motion.h3 variants={itemVariants} className="font-script text-3xl md:text-5xl text-rose-800 mb-2">Phạm Văn Hợp</motion.h3>
            <motion.span variants={itemVariants} className="font-sans-clean text-xs uppercase tracking-[0.3em] text-rose-500 font-bold mb-6">Chú Rể</motion.span>
            
            <motion.p variants={itemVariants} className="font-serif text-lg text-slate-600 max-w-sm italic leading-relaxed">
              "Người đàn ông trưởng thành không phải là người không bao giờ vấp ngã, mà là người biết đứng dậy và che chở cho người mình yêu thương."
            </motion.p>
          </motion.div>

          {/* BRIDE COLUMN (CÔ DÂU) */}
          <motion.div 
            variants={columnVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col items-center text-center"
          >
            {/* Image Frame */}
            <motion.div variants={imageVariants} className="relative w-72 md:w-96 aspect-[3/4] mb-8 group">
               {/* Decorative border offset */}
               <div className="absolute inset-0 border-2 border-rose-200 rounded-[3rem] -translate-x-4 translate-y-4 transition-transform duration-500 group-hover:-translate-x-2 group-hover:translate-y-2"></div>
               
               {/* Main Image Container */}
               <div className="relative w-full h-full rounded-[3rem] overflow-hidden shadow-2xl">
                 {/* ĐÃ SỬA: Đường dẫn ảnh Cô Dâu */}
                 <img 
                   src={`${BASE_URL}images/Dau.png`}
                   alt="Cô Dâu" 
                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-rose-900/40 to-transparent opacity-60"></div>
               </div>
            </motion.div>

            <motion.h3 variants={itemVariants} className="font-script text-3xl md:text-5xl text-rose-800 mb-2">Phạm Thị Hậu</motion.h3>
            <motion.span variants={itemVariants} className="font-sans-clean text-xs uppercase tracking-[0.3em] text-rose-500 font-bold mb-6">Cô Dâu</motion.span>
            
            <motion.p variants={itemVariants} className="font-serif text-lg text-slate-600 max-w-sm italic leading-relaxed">
              "Em không cần một tình yêu quá lớn lao, chỉ cần mỗi ngày mở mắt ra đều thấy anh bên cạnh, bình yên và ấm áp."
            </motion.p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default CoupleIntro;