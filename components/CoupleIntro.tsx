import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';

const CoupleIntro: React.FC = () => {
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
          
          {/* GROOM COLUMN */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center text-center"
          >
            {/* Image Frame */}
            <div className="relative w-72 md:w-96 aspect-[3/4] mb-8 group">
               {/* Decorative border offset */}
               <div className="absolute inset-0 border-2 border-rose-200 rounded-[3rem] translate-x-4 translate-y-4 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2"></div>
               
               {/* Main Image Container */}
               <div className="relative w-full h-full rounded-[3rem] overflow-hidden shadow-2xl">
                 <img 
                   src="https://picsum.photos/600/800?random=88" 
                   alt="Chú Rể" 
                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-rose-900/40 to-transparent opacity-60"></div>
               </div>
            </div>

            <h3 className="font-script text-5xl md:text-6xl text-rose-800 mb-2">Đức Mạnh</h3>
            <span className="font-sans-clean text-xs uppercase tracking-[0.3em] text-rose-500 font-bold mb-6">Chú Rể</span>
            
            <p className="font-serif text-lg text-slate-600 max-w-sm italic leading-relaxed">
              "Người đàn ông trưởng thành không phải là người không bao giờ vấp ngã, mà là người biết đứng dậy và che chở cho người mình yêu thương."
            </p>
          </motion.div>

          {/* BRIDE COLUMN */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col items-center text-center"
          >
            {/* Image Frame */}
            <div className="relative w-72 md:w-96 aspect-[3/4] mb-8 group">
               {/* Decorative border offset */}
               <div className="absolute inset-0 border-2 border-rose-200 rounded-[3rem] -translate-x-4 translate-y-4 transition-transform duration-500 group-hover:-translate-x-2 group-hover:translate-y-2"></div>
               
               {/* Main Image Container */}
               <div className="relative w-full h-full rounded-[3rem] overflow-hidden shadow-2xl">
                 <img 
                   src="https://picsum.photos/600/800?random=99" 
                   alt="Cô Dâu" 
                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-rose-900/40 to-transparent opacity-60"></div>
               </div>
            </div>

            <h3 className="font-script text-5xl md:text-6xl text-rose-800 mb-2">Thu Hà</h3>
            <span className="font-sans-clean text-xs uppercase tracking-[0.3em] text-rose-500 font-bold mb-6">Cô Dâu</span>
            
            <p className="font-serif text-lg text-slate-600 max-w-sm italic leading-relaxed">
              "Em không cần một tình yêu quá lớn lao, chỉ cần mỗi ngày mở mắt ra đều thấy anh bên cạnh, bình yên và ấm áp."
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default CoupleIntro;