import { motion } from "framer-motion";

const brand = "#A91859";

function buildMonth(year, month) {
  const first = new Date(year, month, 1);
  const last = new Date(year, month + 1, 0);
  const days = [];
  let cur = new Date(first);
  cur.setDate(cur.getDate() - ((cur.getDay() + 6) % 7)); // start from Monday
  while (cur <= last || cur.getDay() !== 1) {
    days.push(new Date(cur));
    cur.setDate(cur.getDate() + 1);
  }
  return days;
}

export default function CalendarPreview() {
  const now = new Date();
  const days = buildMonth(now.getFullYear(), now.getMonth());
  const monthName = now.toLocaleDateString("fa-IR", { month: "long", year: "numeric" });

  return (
    <section id="calendar" className="mx-auto max-w-6xl px-6 pb-24">
      <motion.div
        className="mb-4 flex items-end justify-between"
        dir="rtl"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div>
          <h2 className="text-2xl font-bold text-gray-900">تقویم آنلاین</h2>
          <p className="mt-1 text-gray-600 text-sm">نمای ماه جاری با روزهای هفته</p>
        </div>
        <span className="rounded-md px-3 py-1 text-sm font-medium text-white" style={{ backgroundColor: brand }}>{monthName}</span>
      </motion.div>
      <motion.div
        className="overflow-hidden rounded-2xl border bg-white shadow-sm"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <div className="grid grid-cols-7 border-b bg-gray-50 text-center text-xs font-medium text-gray-600">
          {["د","س","چ","پ","ج","ش","ی"].map((d) => (
            <div key={d} className="px-2 py-2">{d}</div>
          ))}
        </div>
        <div className="grid grid-cols-7 text-center text-sm">
          {days.map((d, idx) => {
            const isCurMonth = d.getMonth() === now.getMonth();
            const isToday = d.toDateString() === now.toDateString();
            return (
              <div
                key={idx}
                className={`relative border-b border-r px-2 py-4 md:py-6 ${isCurMonth ? "bg-white" : "bg-gray-50"}`}
              >
                <span
                  className={`inline-flex h-7 w-7 items-center justify-center rounded-full text-xs ${isToday ? "text-white" : isCurMonth ? "text-gray-700" : "text-gray-400"}`}
                  style={isToday ? { backgroundColor: brand } : undefined}
                >
                  {d.toLocaleDateString("fa-IR", { day: "2-digit" })}
                </span>
              </div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
