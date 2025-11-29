import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX, ArrowDown, Gift, Heart, MapPin, Calendar } from 'lucide-react';
import FloatingPetals from './components/FloatingPetals';
import Section from './components/Section';
import SectionHeader from './components/SectionHeader';
import EventCard from './components/EventCard';
import Countdown from './components/Countdown';
import GalleryScroll from './components/GalleryScroll';
import GiftModal from './components/GiftModal';
import CoupleIntro from './components/CoupleIntro';
import { EventDetail } from './types';

// Constants
const WEDDING_DATE = new Date('2025-12-29T13:00:00');

const EVENTS: EventDetail[] = [
  {
    title: "Tiệc Nhà Gái",
    type: "party",
    date: "28/12/2025",
    lunarDate: "09/11 Ất Tỵ",
    time: "16:00",
    locationName: "Tư Gia Nhà Gái",
    address: "Thôn Phú Thôn, Xã Ân Thi, Hưng Yên"
  },
  {
    title: "Lễ Vu Quy",
    type: "bride",
    date: "29/12/2025",
    lunarDate: "10/11 Ất Tỵ",
    time: "07:30",
    locationName: "Tư Gia Nhà Gái",
    address: "Thôn Phú Thôn, Xã Ân Thi, Hưng Yên"
  },
  {
    title: "Lễ Thành Hôn",
    type: "groom",
    date: "29/12/2025",
    lunarDate: "10/11 Ất Tỵ",
    time: "13:00",
    locationName: "Tư Gia Nhà Trai",
    address: "Xóm Trung Tiến, Xã Hải Châu, Nghệ An"
  },
  {
    title: "Tiệc Nhà Trai",
    type: "party",
    date: "29/12/2025",
    lunarDate: "10/11 Ất Tỵ",
    time: "14:00",
    locationName: "Tư Gia Nhà Trai",
    address: "Xóm Trung Tiến, Xã Hải Châu, Nghệ An"
  }
];

const App: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showGiftModal, setShowGiftModal] = useState(false);
  const { scrollY } = useScroll();
  
  // Parallax & Opacity transforms
  const heroTextY = useTransform(scrollY, [0, 500], [0, 250]);
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0]);
  const bgScale = useTransform(scrollY, [0, 1000], [1, 1.1]);

  // Audio Button Color Transforms (Pink -> Slate)
  const buttonBorderColor = useTransform(scrollY, [0, 800], ["rgba(255, 255, 255, 0.4)", "rgba(148, 163, 184, 0.4)"]);
  const buttonIconColor = useTransform(scrollY, [0, 800], ["#be123c", "#334155"]); // rose-700 -> slate-700
  const buttonBgColor = useTransform(scrollY, [0, 800], ["rgba(255, 255, 255, 0.3)", "rgba(255, 255, 255, 0.8)"]);

  return (
    // Replaced solid background with a gradient handled in index.html, but we add classes here for text selection and fallback
    <div className="min-h-screen text-rose-950 selection:bg-rose-300 selection:text-white overflow-x-hidden font-serif">
      <FloatingPetals />
      
      {/* Audio Control - Now Animates Color */}
      <motion.button 
        onClick={() => setIsPlaying(!isPlaying)}
        style={{ 
          backgroundColor: buttonBgColor,
          borderColor: buttonBorderColor,
          color: buttonIconColor
        }}
        className="fixed top-6 right-6 z-50 p-3 backdrop-blur-md rounded-full hover:bg-white/50 transition-all duration-500 border shadow-lg"
      >
        {isPlaying ? (
           <Volume2 className="w-6 h-6 animate-pulse" />
        ) : (
           <VolumeX className="w-6 h-6 opacity-70" />
        )}
      </motion.button>

      {/* --- HERO SECTION: Full Screen, Cinematic (PINK THEME) --- */}
      <header className="relative h-screen w-full overflow-hidden flex flex-col items-center justify-center">
        {/* Background Layer */}
        <motion.div 
          style={{ scale: bgScale }}
          className="absolute inset-0 z-0"
        >
          {/* Light overlay to brighten image and make dark text readable */}
          <div className="absolute inset-0 bg-white/20 z-10" />
          
          <img 
            src="https://picsum.photos/1920/1080?random=1" 
            alt="Wedding Couple" 
            className="w-full h-full object-cover"
          />
          {/* Grain overlay for vintage feel */}
          <div className="absolute inset-0 opacity-20 pointer-events-none z-10 mix-blend-multiply" style={{backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")'}}></div>
          {/* Gradient to blend smoothly into the next section */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#fff0f3] via-transparent to-transparent z-20" />
        </motion.div>

        {/* Hero Content */}
        <motion.div 
          style={{ y: heroTextY, opacity: heroOpacity }}
          className="relative z-30 text-center px-4 w-full max-w-4xl mx-auto flex flex-col items-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "circOut" }}
            className="border-b border-rose-800/40 pb-4 mb-6"
          >
            <span className="text-rose-900 text-lg md:text-xl font-sans-clean uppercase tracking-[0.5em] drop-shadow-sm font-semibold">
              The Wedding Of
            </span>
          </motion.div>

          <h1 className="text-7xl md:text-[10rem] font-script text-rose-950 leading-none drop-shadow-sm filter">
            Đức Mạnh
          </h1>
          <span className="text-4xl md:text-6xl font-script text-rose-600 my-2 drop-shadow-sm">&</span>
          <h1 className="text-7xl md:text-[10rem] font-script text-rose-950 leading-none drop-shadow-sm mb-8">
            Thu Hà
          </h1>

          {/* New Countdown Component */}
          <div className="mt-8">
             <Countdown targetDate={WEDDING_DATE} />
          </div>
        </motion.div>

        <motion.div 
          animate={{ y: [0, 15, 0], opacity: [0.5, 1, 0.5] }}
          transition={{ repeat: Infinity, duration: 2.5 }}
          className="absolute bottom-10 z-30 text-rose-900"
        >
          <ArrowDown className="w-6 h-6 md:w-10 md:h-10 opacity-70" />
        </motion.div>
      </header>

      {/* --- STORY / INTRO (PINK THEME) --- */}
      <Section className="text-center py-20 md:py-32 relative">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-rose-500/5 font-script text-[20rem] whitespace-nowrap z-0 select-none">
            True Love
         </div>
         
         <SectionHeader 
           subTitle="Save The Date"
           title="VỀ CHUNG"
           scriptText="Một Nhà"
           inverted={true}
           className="mb-12"
         />

         <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 max-w-3xl mx-auto space-y-6"
         >
           <h2 className="text-4xl md:text-5xl font-serif text-rose-950 leading-tight">
             29 . 12 . 2025
           </h2>
           <p className="text-xl text-rose-700 italic font-serif">
             (Tức ngày 10 tháng 11 năm Ất Tỵ)
           </p>

           <p className="text-lg md:text-2xl text-gray-700 font-light leading-relaxed font-sans-clean px-6 mt-8">
             "Tình yêu không phải là tìm thấy một người hoàn hảo, mà là học cách nhìn thấy những điều tuyệt vời từ một người không hoàn hảo."
             <br/>
             Chúng mình trân trọng kính mời bạn đến chung vui trong ngày hạnh phúc nhất.
           </p>
         </motion.div>
      </Section>

      {/* --- NEW COUPLE INTRO SECTION --- */}
      <CoupleIntro />

      {/* --- TIMELINE / EVENTS (TRANSITION TO WHITE) --- */}
      <section className="py-24 bg-white/80 backdrop-blur-sm relative">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
           
           <SectionHeader 
             subTitle="Wedding Schedule"
             title="SỰ KIỆN"
             scriptText="Trọng Đại"
             description="Những khoảnh khắc quan trọng nhất mà chúng tôi mong muốn có sự hiện diện của bạn."
           />

           <div className="relative mt-20">
              {/* Central Timeline Line (Desktop) */}
              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-rose-200 -translate-x-1/2 hidden md:block" />
              
              {/* Left Timeline Line (Mobile) */}
              <div className="absolute left-6 top-0 bottom-0 w-px bg-rose-200 md:hidden" />

              <div className="flex flex-col gap-24 md:gap-32">
                  {EVENTS.map((event, index) => (
                    <EventCard key={index} event={event} index={index} />
                  ))}
              </div>
           </div>
        </div>
      </section>

      {/* --- CINEMATIC GALLERY SCROLL (TRANSITION AREA) --- */}
      {/* Background is now handled by body gradient, essentially white -> very light blue */}
      <GalleryScroll />

      {/* --- GIFT BOX & WISHES (BLUE/OUTDOOR THEME) --- */}
      {/* Reduced padding to bring elements closer (pt-32->pt-16, pb-32->pb-24) */}
      <section className="pt-16 pb-24 relative overflow-hidden text-slate-800">
         {/* Decorative Background - Changed to Sky Blue/Green tones */}
         <div className="absolute top-0 right-0 w-96 h-96 bg-sky-200/30 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
         <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-200/20 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>
         
         <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
            
            <SectionHeader 
              subTitle="Best Wishes"
              title="GỬI TRAO"
              scriptText="Yêu Thương"
              description="Sự hiện diện của bạn là món quà quý giá nhất. Nếu muốn gửi chút quà mừng, bạn có thể sử dụng hộp quà bên dưới."
              // Force override margin-bottom with !mb-4 to reduce gap to buttons
              className="!mb-4"
              textColor="text-slate-800"
              accentColor="text-sky-300/80"
            />

            {/* Reduced margin-top (mt-12 -> mt-6) */}
            <div className="flex flex-col items-center justify-center gap-6 mt-8">
               
               {/* FRAMED GIFT TRIGGER - BUTTON STYLE */}
               <motion.div
                 onClick={() => setShowGiftModal(true)}
                 className="relative cursor-pointer group mt-4 select-none"
                 whileHover={{ scale: 1.02 }}
                 whileTap={{ scale: 0.98 }}
               >
                 {/* Outer Glow */}
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-sky-200/40 blur-xl rounded-[3rem] -z-10 group-hover:bg-sky-300/50 transition-colors duration-500"></div>

                 {/* The Frame / Button */}
                 <div className="relative z-10 bg-white/60 backdrop-blur-xl border border-sky-100 shadow-xl shadow-sky-100/50 px-10 py-6 md:px-14 md:py-8 rounded-[2rem] flex flex-col items-center gap-2 hover:border-sky-300 transition-colors duration-300">
                    
                    {/* 'HỘP' - Modern Sans, wide spacing */}
                    <span className="font-sans-clean text-xs md:text-sm tracking-[0.4em] text-slate-500 font-bold uppercase group-hover:text-slate-700 transition-colors">
                       HỘP
                    </span>
                    
                    {/* 'Mừng Cưới' - CHANGED to Serif Italic (Playfair Display), NOT Script (Great Vibes) */}
                    <span className="font-serif italic text-3xl md:text-5xl text-sky-900 font-medium tracking-wide drop-shadow-sm group-hover:text-sky-700 transition-colors">
                       Mừng Cưới
                    </span>
                    
                    {/* Visual Hint Divider */}
                    <div className="w-16 h-[1px] bg-slate-300 my-2 group-hover:w-24 transition-all duration-300"></div>

                    {/* Click Action Hint */}
                    <div className="flex items-center gap-2 text-slate-500">
                        <Gift size={16} />
                        <span className="text-[10px] uppercase tracking-widest font-sans-clean">Chạm để mở</span>
                    </div>
                 </div>
               </motion.div>

            </div>

            {/* Wishes Form Area - Reduced margin-top (mt-16 -> mt-8) */}
            <div id="wishes-form" className="mt-12 bg-white/60 backdrop-blur-sm p-8 md:p-12 rounded-[2rem] border border-white max-w-2xl mx-auto shadow-lg relative z-20">
                <h3 className="text-2xl font-serif text-slate-700 mb-6">Lưu Bút</h3>
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <input type="text" placeholder="Tên của bạn" className="w-full bg-white/70 border border-slate-200 p-4 rounded-xl focus:outline-none focus:border-sky-300 font-sans-clean text-slate-900 placeholder:text-slate-400" />
                  <textarea rows={4} placeholder="Lời chúc chân thành..." className="w-full bg-white/70 border border-slate-200 p-4 rounded-xl focus:outline-none focus:border-sky-300 font-sans-clean resize-none text-slate-900 placeholder:text-slate-400" />
                  <button className="w-full py-3 bg-sky-200/50 hover:bg-sky-200 text-sky-900 rounded-xl transition-colors font-serif uppercase tracking-widest text-sm font-semibold">Gửi đi</button>
                </form>
            </div>
         </div>
      </section>

      {/* --- FOOTER (DARK SLATE THEME) --- */}
      <footer className="bg-slate-900 text-slate-200 py-12 text-center relative overflow-hidden">
        <div className="relative z-10">
          <h2 className="font-script text-5xl md:text-6xl mb-4 text-sky-100">Hẹn gặp lại!</h2>
          <p className="font-serif text-xl opacity-80">29 . 12 . 2025</p>
          <p className="font-sans-clean text-xs mt-8 opacity-40 uppercase tracking-widest">Designed with Love</p>
        </div>
      </footer>

      {/* --- MODALS --- */}
      <AnimatePresence>
        {showGiftModal && <GiftModal onClose={() => setShowGiftModal(false)} />}
      </AnimatePresence>

    </div>
  );
}

export default App;