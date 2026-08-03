import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/971559054601"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1, rotate: 5 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-[100] flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-[#25D366] rounded-full shadow-[0_10px_30px_rgba(37,211,102,0.5)] cursor-pointer group"
    >
      {/* 3D Depth Effect */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-black/20 to-transparent" />
      <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/20 to-transparent rounded-t-full" />
      
      <MessageCircle className="w-7 h-7 md:w-8 md:h-8 text-white relative z-10 group-hover:animate-pulse" />
      
      {/* Pulse Effect */}
      <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20 -z-10" />
    </motion.a>
  );
}
