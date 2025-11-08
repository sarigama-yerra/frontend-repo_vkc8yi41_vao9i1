import { motion } from "framer-motion";
import { CheckCircle2, Clock, Cloud, Calendar, Bookmark, ListTodo } from "lucide-react";

const brand = "#A91859";

const features = [
  { icon: Cloud, title: "ویدجت آب‌وهوا", desc: "وضعیت لحظه‌ای، پیش‌بینی و مینیمال در هدر." },
  { icon: Calendar, title: "تقویم یکپارچه", desc: "نمای ماهانه/هفتگی با رویدادها و مناسبت‌ها." },
  { icon: ListTodo, title: "تودولیست پیشرفته", desc: "برچسب، اولویت، یادآور و زمان‌بندی." },
  { icon: Bookmark, title: "بوکمارک و والپیپر", desc: "میانبرهای دلخواه و پس‌زمینه‌های چشم‌نواز." },
  { icon: Clock, title: "پومودورو و طول عمر", desc: "تمرکز عمیق با تایمر و محاسبه پیشرفت عمر." },
  { icon: CheckCircle2, title: "اوقات شرعی", desc: "زمان‌بندی دقیق براساس موقعیت مکانی." },
];

export default function Features() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <h2 className="text-3xl font-bold text-gray-900" dir="rtl">چرا «بـرهـه»؟</h2>
        <p className="mt-2 text-gray-600" dir="rtl">همه چیز در یک نگاه برای شروع هر روز؛ سریع، دقیق و زیبا.</p>
      </motion.div>
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {features.map(({ icon: Icon, title, desc }, i) => (
          <motion.div
            key={title}
            className="group rounded-2xl border bg-white p-5 shadow-sm transition hover:shadow-md"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
          >
            <div className="flex items-center gap-3" dir="rtl">
              <span className="grid h-10 w-10 place-items-center rounded-full" style={{ backgroundColor: brand + "1A", color: brand }}>
                <Icon size={20} />
              </span>
              <h3 className="font-semibold text-gray-900">{title}</h3>
            </div>
            <p className="mt-3 text-sm leading-6 text-gray-600" dir="rtl">{desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
