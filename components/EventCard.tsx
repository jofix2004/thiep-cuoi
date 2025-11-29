import React from 'react';
import { EventDetail } from '../types';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Clock } from 'lucide-react';

const EventCard: React.FC<{ event: EventDetail; index: number }> = ({ event, index }) => {
  // Desktop: Alternate sides. Mobile: Always content on right of line.
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: 0.1 }}
      className={`relative flex flex-col md:flex-row items-center w-full pl-12 md:pl-0 ${
        isEven ? 'md:flex-row' : 'md:flex-row-reverse'
      }`}
    >
      {/* TIMELINE DOT (Desktop) */}
      <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-rose-500 rounded-full border-[3px] border-[#fff0f3] outline outline-1 outline-rose-200 shadow-md z-10" />

      {/* TIMELINE DOT (Mobile) */}
      <div className="md:hidden absolute left-6 top-0 translate-y-8 -translate-x-1/2 w-4 h-4 bg-rose-500 rounded-full border-[3px] border-[#fff0f3] outline outline-1 outline-rose-200 shadow-md z-10" />

      {/* --- IMAGE BLOCK --- */}
      {/* Adjusted width to 40% for better balance */}
      <div className={`w-full md:w-[40%] max-w-sm md:max-w-none`}>
        {/* Changed from fixed height to aspect-[3/4] for portrait/vertical photos */}
        <div className="relative w-full aspect-[3/4] rounded-[2rem] overflow-hidden shadow-xl border-4 border-white group">
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors z-10 duration-500" />
          <img
            src={`https://picsum.photos/450/600?random=${index + 50}`}
            alt={event.title}
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
          />
          {/* Date Overlay */}
          <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm p-3 rounded-2xl text-center min-w-[80px] z-20 shadow-lg">
             <span className="block text-3xl font-serif text-rose-600 font-bold">{event.date.split('/')[0]}</span>
             <span className="block text-xs uppercase font-sans-clean tracking-wider text-gray-800 font-bold">Tháng 12</span>
          </div>
        </div>
      </div>

      {/* Spacer for Center Line (Desktop) - Adjusted to 10% */}
      <div className="hidden md:block w-[10%]" />

      {/* --- INFO BLOCK --- */}
      {/* Added padding (pl-12/pr-12) to create breathing room from the center line */}
      <div className={`w-full md:w-[50%] flex flex-col justify-center mt-6 md:mt-0 ${
         !isEven 
           ? 'md:text-right md:items-end md:pr-12' 
           : 'md:text-left md:items-start md:pl-12'
      }`}>
         
         {/* Title Group */}
         <div className="mb-6">
            <span className="inline-block px-3 py-1 bg-rose-100 rounded-full text-rose-600 font-sans-clean tracking-widest uppercase text-xs font-bold mb-3 shadow-sm">
                {event.type === 'groom' ? 'Nhà Trai' : event.type === 'bride' ? 'Nhà Gái' : 'Tiệc Mừng'}
            </span>
            <h3 className="text-4xl md:text-5xl font-script text-rose-950 drop-shadow-sm leading-tight">{event.title}</h3>
         </div>
         
         {/* Details Group */}
         <div className={`space-y-5 flex flex-col ${!isEven ? 'md:items-end' : 'md:items-start'}`}>
            {/* Time */}
            <div className={`flex items-start gap-4 ${!isEven && 'md:flex-row-reverse'}`}>
                <div className="p-2 bg-white border border-rose-100 rounded-full text-rose-500 mt-1 shadow-sm shrink-0">
                   <Clock size={18} />
                </div>
                <div className={`${!isEven && 'md:text-right'}`}>
                   <p className="font-bold text-gray-900 text-xl md:text-2xl">{event.time} - {event.date}</p>
                   <p className="text-gray-600 text-lg md:text-xl font-serif italic mt-1">Âm lịch: {event.lunarDate}</p>
                </div>
            </div>

            {/* Location */}
            <div className={`flex items-start gap-4 ${!isEven && 'md:flex-row-reverse'}`}>
                <div className="p-2 bg-white border border-rose-100 rounded-full text-rose-500 mt-1 shadow-sm shrink-0">
                   <MapPin size={18} />
                </div>
                <div className={`${!isEven && 'md:text-right'}`}>
                   <p className="font-bold text-gray-900 text-xl">{event.locationName}</p>
                   <p className="text-gray-600 text-lg leading-relaxed">{event.address}</p>
                   <a 
                     href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(event.address)}`} 
                     target="_blank" 
                     rel="noreferrer"
                     className="inline-block mt-2 text-xs font-bold text-rose-500 border-b border-rose-300 hover:text-rose-700 hover:border-rose-600 pb-0.5 transition-all uppercase tracking-wider"
                   >
                     Chỉ đường
                   </a>
                </div>
            </div>
         </div>
      </div>
    </motion.div>
  );
};

export default EventCard;