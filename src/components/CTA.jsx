import { Chrome } from "lucide-react";

const brand = "#A91859";

export default function CTA() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-24">
      <div className="overflow-hidden rounded-2xl border bg-gradient-to-br from-rose-50 via-white to-fuchsia-50 p-8 md:p-12">
        <div className="grid items-center gap-6 md:grid-cols-2" dir="rtl">
          <div>
            <h3 className="text-2xl font-bold text-gray-900">همین حالا با یک کلیک شروع کنید</h3>
            <p className="mt-2 text-gray-600">افزونه را نصب کنید و صفحه New Tab را به سریع‌ترین دستیار روزانه‌تان تبدیل کنید.</p>
            <ul className="mt-4 list-disc pr-5 text-sm text-gray-600">
              <li>نصب سریع و رایگان</li>
              <li>بدون نیاز به ساخت حساب</li>
              <li>قابل همگام‌سازی با Chrome</li>
            </ul>
          </div>
          <div className="flex justify-start md:justify-end">
            <a
              href="#"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-white shadow-lg transition hover:shadow-xl"
              style={{ backgroundColor: brand }}
            >
              <Chrome size={18} /> نصب از Chrome Web Store
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
