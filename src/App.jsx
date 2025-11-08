import Hero from "./components/Hero";
import Features from "./components/Features";
import CalendarPreview from "./components/CalendarPreview";
import CTA from "./components/CTA";
import Marquee from "./components/Marquee";

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b">
        <div className="mx-auto max-w-6xl px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-md" style={{ backgroundColor: "#A91859" }} />
            <span className="font-bold">بـرهـه</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm" dir="rtl">
            <a href="#" className="text-gray-600 hover:text-gray-900">ویژگی‌ها</a>
            <a href="#calendar" className="text-gray-600 hover:text-gray-900">تقویم آنلاین</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">نصب افزونه</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <Marquee />
        <Features />
        <CalendarPreview />
        <CTA />
      </main>

      <footer className="border-t">
        <div className="mx-auto max-w-6xl px-6 py-8 text-center text-sm text-gray-500" dir="rtl">
          «بـرهـه» — ساخته‌شده با عشق — رنگ برند: #A91859
        </div>
      </footer>
    </div>
  );
}

export default App;
