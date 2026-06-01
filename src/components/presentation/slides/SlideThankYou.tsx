import { motion } from 'framer-motion';
import werkLogoAsset from '@/assets/werkandme-logo-reverse.png.asset.json';
import { Globe, Heart } from 'lucide-react';

export const SlideThankYou = () => {
  return (
    <div className="relative w-full h-full gradient-werk-dark flex items-center justify-center overflow-hidden">
      {/* Background glows */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-werk-cyan blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-werk-lime blur-3xl" />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center px-8">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <img
            src={werkLogoAsset.url}
            alt="WerkandMe"
            className="h-24 w-auto"
          />
        </motion.div>

        {/* Thank You */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-5xl md:text-7xl font-bold text-white leading-tight"
        >
          Thank You
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.6 }}
          className="mt-4 text-xl md:text-2xl text-white/60 max-w-xl"
        >
          Let's build a stronger culture, together.
        </motion.p>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="w-24 h-0.5 bg-gradient-to-r from-werk-cyan to-werk-lime rounded-full my-8"
        />

        {/* Contact info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.6 }}
          className="text-white/50"
        >
          <a
            href="https://werkandme.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-werk-lime transition-colors"
          >
            <Globe className="w-4 h-4" />
            <span>werkandme.com</span>
          </a>
        </motion.div>

        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.85, duration: 0.8 }}
          className="mt-12 flex items-center gap-2 text-white/30 text-sm"
        >
          <Heart className="w-3.5 h-3.5 text-werk-lime" />
          <span>Culture-first employee engagement for automotive dealerships</span>
        </motion.div>
      </div>
    </div>
  );
};
