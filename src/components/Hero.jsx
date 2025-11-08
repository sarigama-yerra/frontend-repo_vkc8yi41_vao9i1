import { motion } from "framer-motion";
import { Rocket, Star } from "lucide-react";

const brand = "#A91859";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Soft gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-rose-50 via-white to-fuchsia-50" />

      {/* Floating orbs */}
      <motion.div
        className="absolute -top-10 -right-10 h-56 w-56 rounded-full opacity-40 blur-3xl"
        style={{ backgroundColor: brand }}
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-16 -left-10 h-72 w-72 rounded-full opacity-30 blur-3xl"
        style={{ backgroundColor: brand }}
        animate={{ y: [0, -25, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto max-w-6xl px-6 py-24">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <span
              className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium"
              style={{ borderColor: brand, color: brand }}
              dir="rtl"
            >
              <Star size={14} />
              «بـرهـه» — تجربه‌ی جدید برای صفحه New Tab
            </span>
            <h1 className="mt-4 text-4xl font-extrabold leading-tight text-gray-900 md:text-6xl" dir="rtl">
              یک تقویم یکپارچه و شخصی‌سازی کامل برای روز شما
            </h1>
            <p className="mt-5 text-gray-600 leading-relaxed text-lg" dir="rtl">
              با «بـرهـه» هر بار که مرورگرتان را باز می‌کنید، همه‌چیز در دسترس‌تان است: آب‌وهوا، قیمت ارز و طلا، تایمر پومودورو، اوقات شرعی، تودولیست حرفه‌ای، بوکمارک‌ها و والپیپرهای چشم‌نواز.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3" dir="rtl">
              <a
                href="#"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-white shadow-lg transition hover:shadow-xl"
                style={{ backgroundColor: brand }}
              >
                <Rocket size={18} />
                نصب از Chrome Web Store
              </a>
              <a
                href="#calendar"
                className="inline-flex items-center gap-2 rounded-xl border px-6 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50"
                style={{ borderColor: brand }}
              >
                مشاهده تقویم آنلاین
              </a>
            </div>
            <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-500" dir="rtl">
              <li>سریع و سبک</li>
              <li>حریم خصوصی محترم</li>
              <li>سازگار با همه نمایشگرها</li>
            </ul>
          </motion.div>

          {/* Product mock */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border bg-white shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-rose-100/40 via-white to-fuchsia-100/40" />
              <div className="relative h-full w-full p-6" dir="rtl">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <motion.div
                    className="rounded-2xl border p-4"
                    whileHover={{ y: -4 }}
                    transition={{ type: "spring", stiffness: 200, damping: 18 }}
                  >
                    <p className="text-gray-900 font-semibold">ویدجت‌ها</p>
                    <p className="mt-1 text-gray-500">آب‌وهوا، ارز و طلا، تایمر، اوقات شرعی</p>
                  </motion.div>
                  <motion.div className="rounded-2xl border p-4" whileHover={{ y: -4 }} transition={{ type: "spring", stiffness: 200, damping: 18 }}>
                    <p className="text-gray-900 font-semibold">تقویم یکپارچه</p>
                    <p className="mt-1 text-gray-500">نمایش رویدادها و مناسبت‌ها</p>
                  </motion.div>
                  <motion.div className="rounded-2xl border p-4" whileHover={{ y: -4 }} transition={{ type: "spring", stiffness: 200, damping: 18 }}>
                    <p className="text-gray-900 font-semibold">تودولیست حرفه‌ای</p>
                    <p className="mt-1 text-gray-500">پروژه‌ها، برچسب‌ها، یادآورها</p>
                  </motion.div>
                  <motion.div className="rounded-2xl border p-4" whileHover={{ y: -4 }} transition={{ type: "spring", stiffness: 200, damping: 18 }}>
                    <p className="text-gray-900 font-semibold">شخصی‌سازی</p>
                    <p className="mt-1 text-gray-500">والپیپر، بوکمارک‌ها، طرح‌بندی</p>
                  </motion.div>
                </div>
                <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-black/5" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
