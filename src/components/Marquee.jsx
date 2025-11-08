import { motion, useAnimationControls, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const items = [
  "آب‌وهوا", "ارز و طلا", "پومودورو", "طول عمر", "اوقات شرعی", "تودولیست", "بوکمارک", "والپیپر", "تقویم"
];

export default function Marquee() {
  const ref = useRef(null);
  const controls = useAnimationControls();
  const inView = useInView(ref, { amount: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start({ x: [0, -600] , transition: { duration: 10, repeat: Infinity, ease: "linear" } });
    } else {
      controls.stop();
    }
  }, [inView, controls]);

  return (
    <section className="relative py-12">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-transparent to-white/60" />
      <div ref={ref} className="overflow-hidden">
        <motion.div className="flex gap-10 whitespace-nowrap text-xl font-semibold text-gray-700" animate={controls}>
          {[...items, ...items, ...items].map((t, i) => (
            <span key={i} className="opacity-80">{t}</span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
