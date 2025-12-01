import React from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

// --- CẤU HÌNH ĐƯỜNG DẪN ẢNH ---
// Lấy đường dẫn gốc
const BASE_URL = import.meta.env.BASE_URL;

interface GiftModalProps {
  onClose: () => void;
}

const GiftModal: React.FC<GiftModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
      />
      <motion.div
        initial={{ scale: 0.8, opacity: 0, y: 50 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.8, opacity: 0, y: 50 }}
        className="relative bg-white w-full max-w-4xl rounded-3xl p-6 md:p-8 shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
      >
        <button 
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2 bg-slate-100 rounded-full hover:bg-slate-200 transition-colors"
        >
            <X size={20} className="text-slate-600" />
        </button>

        <div className="text-center mb-8 mt-2">
            <h3 className="font-script text-4xl text-sky-600 mb-2">Hộp Mừng Cưới</h3>
            <p className="text-slate-500 font-sans-clean text-sm">Cảm ơn tình cảm của bạn dành cho chúng mình</p>
        </div>

        {/* Two Picture Frames */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* Frame 1: Groom (Nhà Trai) */}
            <div className="flex flex-col items-center">
                <div className="w-full aspect-[3/4] md:aspect-[4/5] bg-slate-50 rounded-2xl shadow-inner border-2 border-slate-100 overflow-hidden relative group">
                     {/* SỬA ĐƯỜNG DẪN TẠI ĐÂY: thêm images/ */}
                     <img 
                        src={`${BASE_URL}images/QRRe.png`} 
                        alt="Mừng Chú Rể" 
                        className="w-full h-full object-contain p-2 bg-white transition-transform duration-500 group-hover:scale-105" 
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                        <span className="text-white font-serif text-xl tracking-wider">Mừng Chú Rể</span>
                     </div>
                </div>
                <h4 className="mt-4 text-xl font-serif text-slate-800 font-bold">Mừng Chú Rể</h4>
            </div>

            {/* Frame 2: Bride (Nhà Gái) */}
            <div className="flex flex-col items-center">
                <div className="w-full aspect-[3/4] md:aspect-[4/5] bg-slate-50 rounded-2xl shadow-inner border-2 border-slate-100 overflow-hidden relative group">
                     {/* SỬA ĐƯỜNG DẪN TẠI ĐÂY: thêm images/ */}
                     <img 
                        src={`${BASE_URL}images/QRDau.png`} 
                        alt="Mừng Cô Dâu" 
                        className="w-full h-full object-contain p-2 bg-white transition-transform duration-500 group-hover:scale-105" 
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                        <span className="text-white font-serif text-xl tracking-wider">Mừng Cô Dâu</span>
                     </div>
                </div>
                <h4 className="mt-4 text-xl font-serif text-slate-800 font-bold">Mừng Cô Dâu</h4>
            </div>
        </div>
      </motion.div>
    </div>
  );
};

export default GiftModal;