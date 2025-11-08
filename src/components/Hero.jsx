import { Rocket, Star } from "lucide-react";

const brand = "#A91859";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-rose-50 via-white to-fuchsia-50" />
      <div className="relative mx-auto max-w-6xl px-6 py-20">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium" style={{ borderColor: brand, color: brand }}>
              <Star size={14} />
              تجربه‌ی جدید برای صفحه New Tab
            </span>
            <h1 className="mt-4 text-4xl font-extrabold leading-tight text-gray-900 md:text-5xl" dir="rtl">
              تقویم جامع + شخصی‌سازی کامل برای New Tab
            </h1>
            <p className="mt-4 text-gray-600 leading-relaxed" dir="rtl">
              با یک اکستنشن سبک و قدرتمند، آب‌وهوا، قیمت ارز و طلا، تایمر پومودورو، اوقات شرعی، تودولیست پیشرفته و بوکمارک‌های دلخواه‌تان را در یک صفحه‌ی شیک و سریع داشته باشید.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3" dir="rtl">
              <a
                href="#"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg px-5 py-3 text-white shadow transition hover:shadow-lg"
                style={{ backgroundColor: brand }}
              >
                <Rocket size={18} />
                نصب از Chrome Web Store
              </a>
              <a
                href="#calendar"
                className="inline-flex items-center gap-2 rounded-lg border px-5 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50"
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
          </div>
          <div>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border bg-white shadow-sm">
              <div className="absolute inset-0 bg-gradient-to-br from-rose-100/40 via-white to-fuchsia-100/40" />
              <div className="relative h-full w-full p-6" dir="rtl">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="rounded-xl border p-4">
                    <p className="text-gray-900 font-semibold">ویدجت‌ها</p>
                    <p className="mt-1 text-gray-500">آب‌وهوا، ارز و طلا، تایمر، اوقات شرعی</p>
                  </div>
                  <div className="rounded-xl border p-4">
                    <p className="text-gray-900 font-semibold">تقویم یکپارچه</p>
                    <p className="mt-1 text-gray-500">نمایش رویدادها و مناسبت‌ها</p>
                  </div>
                  <div className="rounded-xl border p-4">
                    <p className="text-gray-900 font-semibold">تودولیست حرفه‌ای</p>
                    <p className="mt-1 text-gray-500">پروژه‌ها، برچسب‌ها، یادآورها</p>
                  </div>
                  <div className="rounded-xl border p-4">
                    <p className="text-gray-900 font-semibold">شخصی‌سازی</p>
                    <p className="mt-1 text-gray-500">والپیپر، بوکمارک‌ها، طرح‌بندی</p>
                  </div>
                </div>
                <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-black/5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
