"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Leaf, Globe2, MapPin, ArrowRight, ArrowLeft, Send, Phone, Mail, Building, CheckCircle2, Sun, Cherry, Carrot, Sprout, Ship, Plane, Truck, CalendarDays, Award, Package, ShieldCheck } from 'lucide-react';
import { Cairo, Inter } from 'next/font/google';

const cairo = Cairo({ subsets: ['arabic'], weight: ['400', '600', '700', '900'] });
const inter = Inter({ subsets: ['latin'], weight: ['400', '600', '700', '900'] });

const content = {
  en: {
    brand: "Khair Egypt",
    nav: [
      { name: "Home", href: "#home" },
      { name: "About", href: "#about" },
      { name: "Products", href: "#products" },
      { name: "Calendar", href: "#calendar" },
      { name: "Contact", href: "#contact" }
    ],
    hero: {
      badge: "Global Produce Export",
      title1: "Egypt's Green Soil..",
      title2: "To The World.",
      desc: "Discover and import the finest fruits and vegetables from the heart of Egyptian lands. Your premium B2B platform for guaranteed quality.",
      btn1: "Explore Products",
    },
    about: {
      title: "About Us",
      subtitle: "Egyptian Roots, Global Vision",
      desc: "Khair Egypt was founded to build a bridge between Egypt's fertile lands and global markets. We specialize in exporting premium fresh fruits and vegetables, carefully grown and harvested at the perfect time to ensure they reach you fresh.",
      points: ["Global GAP Certified Farms", "Advanced Cold Chain Logistics", "Strict Shipping Commitments"],
      badgeTop: "Trusted Export",
      badgeBottom: "From Egypt"
    },
    products: {
      title: "Premium Export Categories",
      items: [
        { name: "Premium Citrus", desc: "Oranges, Lemons & Mandarins", icon: <Sun className="w-7 h-7 text-white" />, iconBg: "bg-[#f59e0b]", blob: "bg-[#fef3c7]", hoverBorder: "hover:border-[#f59e0b]" },
        { name: "Fresh Fruits", desc: "Mangoes, Strawberries & Grapes", icon: <Cherry className="w-7 h-7 text-white" />, iconBg: "bg-[#f43f5e]", blob: "bg-[#ffe4e6]", hoverBorder: "hover:border-[#f43f5e]" },
        { name: "Root Vegetables", desc: "Premium Potatoes & Onions", icon: <Carrot className="w-7 h-7 text-white" />, iconBg: "bg-[#f97316]", blob: "bg-[#ffedd5]", hoverBorder: "hover:border-[#f97316]" },
        { name: "Green Produce", desc: "Cucumbers, Peppers & Beans", icon: <Sprout className="w-7 h-7 text-white" />, iconBg: "bg-[#22c55e]", blob: "bg-[#dcfce3]", hoverBorder: "hover:border-[#22c55e]" }
      ]
    },
    quality: {
      title: "Quality & Packaging",
      desc: "Uncompromising quality control from our farms to your global facilities. We adhere to the highest B2B international standards.",
      items: [
        { title: "Global Standards", desc: "Our farms are Global GAP certified, ensuring safe and sustainable agriculture.", icon: <Award className="w-8 h-8" />, colSpan: "md:col-span-2", bg: "bg-gradient-to-br from-[#0A1A11] to-[#153a25]" },
        { title: "Smart Packaging", desc: "Durable, eco-friendly cartons designed for maximum shelf life.", icon: <Package className="w-8 h-8" />, colSpan: "md:col-span-1", bg: "bg-[#112a1c]" },
        { title: "Rigorous Inspection", desc: "Multi-stage checks before any container is sealed for export.", icon: <ShieldCheck className="w-8 h-8" />, colSpan: "md:col-span-3", bg: "bg-gradient-to-r from-[#112a1c] to-[#0A1A11]" }
      ]
    },
    calendar: {
      title: "Export Availability Calendar",
      subtitle: "Plan Your Imports",
      desc: "This calendar highlights the peak harvest seasons for our main crops.",
      legend: "Available",
      months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      tempCol: "Storage",
      categories: ["Vegetables", "Fruits", "Citrus"],
      items: [
        [
          { name: "Green Beans", temp: "5°C", active: [1,1,1,1,1,1,1,1,1,1,1,1] },
          { name: "Peppers", temp: "7°C", active: [1,1,1,1,0,0,0,0,0,0,1,1] },
          { name: "Onions", temp: "1°C", active: [1,1,1,1,1,1,0,0,0,0,1,1] },
        ],
        [
          { name: "Strawberry", temp: "1°C", active: [1,1,1,1,1,0,0,0,0,0,1,1] },
          { name: "Grapes", temp: "1°C", active: [0,0,0,0,1,1,1,1,1,0,0,0] },
        ],
        [
          { name: "Orange", temp: "5°C", active: [1,1,1,1,1,0,0,0,0,0,1,1] },
          { name: "Lemons", temp: "10°C", active: [1,1,1,1,1,1,1,1,1,1,1,1] },
        ]
      ]
    },
    shipping: {
      title: "Global Logistics",
      subtitle: "Seamless Shipping Worldwide",
      items: [
        { title: "Ocean Freight", desc: "Cost-effective solutions with advanced refrigerated containers (Reefers).", icon: <Ship className="w-8 h-8" /> },
        { title: "Air Freight", desc: "Fastest transit for highly perishable goods ensuring farm-to-shelf freshness.", icon: <Plane className="w-8 h-8" /> },
        { title: "Ground Transport", desc: "Reliable distribution with modern temperature-controlled trucks.", icon: <Truck className="w-8 h-8" /> }
      ]
    },
    contact: {
      title: "Partner With Us",
      subtitle: "Let us supply you with the best",
      form: { name: "Company / Importer Name", email: "Email Address", phone: "Phone Number", needs: "Required Products", submit: "Submit Request" }
    },
    langToggle: "عربي",
    dir: "ltr" as const
  },
  ar: {
    brand: "خير مصر",
    nav: [
      { name: "الرئيسية", href: "#home" },
      { name: "من نحن", href: "#about" },
      { name: "منتجاتنا", href: "#products" },
      { name: "مواسم التصدير", href: "#calendar" },
      { name: "تواصل معنا", href: "#contact" }
    ],
    hero: {
      badge: "تصدير زراعي عالمي",
      title1: "أرضنا الخضراء..",
      title2: "لسفرة العالم.",
      desc: "اكتشف واستورد أجود الفواكه والخضروات من قلب الأراضي المصرية. منصتك الأولى لضمان الجودة والأسعار التنافسية.",
      btn1: "تصفح المنتجات",
    },
    about: {
      title: "من نحن",
      subtitle: "جذور مصرية، رؤية عالمية",
      desc: "تأسست 'خير مصر' لتبني جسراً بين خيرات الأراضي المصرية والأسواق العالمية. نحن نتخصص في تصدير الخضروات والفواكه الطازجة بجودة نثق بها، نزرعها بعناية، ونقطفها في الوقت المثالي.",
      points: ["مزارع معتمدة دولياً (Global GAP)", "سلسلة تبريد لوجستية متطورة", "التزام تام بمواعيد الشحن"],
      badgeTop: "تصدير موثوق",
      badgeBottom: "من قلب مصر"
    },
    products: {
      title: "فئات التصدير الرئيسية",
      items: [
        { name: "الموالح الفاخرة", desc: "برتقال، ليمون، ويوسفي", icon: <Sun className="w-7 h-7 text-white" />, iconBg: "bg-[#f59e0b]", blob: "bg-[#fef3c7]", hoverBorder: "hover:border-[#f59e0b]" },
        { name: "الفواكه الطازجة", desc: "مانجو، فراولة، وعنب", icon: <Cherry className="w-7 h-7 text-white" />, iconBg: "bg-[#f43f5e]", blob: "bg-[#ffe4e6]", hoverBorder: "hover:border-[#f43f5e]" },
        { name: "الخضروات الجذرية", desc: "بطاطس وبصل للتصدير", icon: <Carrot className="w-7 h-7 text-white" />, iconBg: "bg-[#f97316]", blob: "bg-[#ffedd5]", hoverBorder: "hover:border-[#f97316]" },
        { name: "الخضروات الطازجة", desc: "خيار، فلفل، وفاصوليا", icon: <Sprout className="w-7 h-7 text-white" />, iconBg: "bg-[#22c55e]", blob: "bg-[#dcfce3]", hoverBorder: "hover:border-[#22c55e]" }
      ]
    },
    quality: {
      title: "الجودة والتعبئة",
      desc: "رقابة صارمة على الجودة من مزارعنا وحتى وصول الشحنة لمرافقك. نلتزم بأعلى معايير التصدير العالمية B2B.",
      items: [
        { title: "معايير عالمية", desc: "مزارعنا معتمدة من Global GAP، لضمان زراعة آمنة ومستدامة للتصدير.", icon: <Award className="w-8 h-8" />, colSpan: "md:col-span-2", bg: "bg-gradient-to-br from-[#0A1A11] to-[#153a25]" },
        { title: "تعبئة ذكية", desc: "كراتين وتغليف صديق للبيئة مصمم خصيصاً لإطالة فترة الصلاحية.", icon: <Package className="w-8 h-8" />, colSpan: "md:col-span-1", bg: "bg-[#112a1c]" },
        { title: "فحص دقيق", desc: "مراحل فحص متعددة قبل إغلاق أي حاوية لضمان مطابقة الشحنة للمواصفات.", icon: <ShieldCheck className="w-8 h-8" />, colSpan: "md:col-span-3", bg: "bg-gradient-to-r from-[#112a1c] to-[#0A1A11]" }
      ]
    },
    calendar: {
      title: "مواسم التوفر للتصدير",
      subtitle: "خطط لاستيرادك بذكاء",
      desc: "يوضح هذا التقويم ذروة مواسم الحصاد لمحاصيلنا الرئيسية.",
      legend: "متاح",
      months: ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"],
      tempCol: "الحفظ",
      categories: ["الخضروات", "الفواكه", "الموالح"],
      items: [
        [
          { name: "فاصوليا", temp: "5°C", active: [1,1,1,1,1,1,1,1,1,1,1,1] },
          { name: "فلفل ألوان", temp: "7°C", active: [1,1,1,1,0,0,0,0,0,0,1,1] },
          { name: "بصل", temp: "1°C", active: [1,1,1,1,1,1,0,0,0,0,1,1] },
        ],
        [
          { name: "فراولة", temp: "1°C", active: [1,1,1,1,1,0,0,0,0,0,1,1] },
          { name: "عنب", temp: "1°C", active: [0,0,0,0,1,1,1,1,1,0,0,0] },
        ],
        [
          { name: "برتقال", temp: "5°C", active: [1,1,1,1,1,0,0,0,0,0,1,1] },
          { name: "ليمون مالح", temp: "10°C", active: [1,1,1,1,1,1,1,1,1,1,1,1] },
        ]
      ]
    },
    shipping: {
      title: "لوجستيات الشحن",
      subtitle: "شبكة تغطي العالم",
      items: [
        { title: "الشحن البحري", desc: "حلول اقتصادية للكميات الكبيرة مع حاويات مبردة تحافظ على سلسلة التبريد.", icon: <Ship className="w-8 h-8" /> },
        { title: "الشحن الجوي", desc: "أسرع طريقة لنقل المنتجات سريعة التلف لضمان النضارة.", icon: <Plane className="w-8 h-8" /> },
        { title: "الشحن البري", desc: "توزيع إقليمي موثوق عبر الحدود باستخدام أسطول مبرد.", icon: <Truck className="w-8 h-8" /> }
      ]
    },
    contact: {
      title: "ابدأ شراكتك معنا",
      subtitle: "دعنا نورد لك الأفضل",
      form: { name: "اسم الشركة / المستورد", email: "البريد الإلكتروني", phone: "رقم الهاتف", needs: "المنتجات المطلوبة", submit: "إرسال الطلب" }
    },
    langToggle: "English",
    dir: "rtl" as const
  }
};

export default function KhairEgyptHome() {
  const [lang, setLang] = useState<'ar' | 'en'>('en');
  const [activeTab, setActiveTab] = useState(0); 
  const t = content[lang];
  const isAr = lang === 'ar';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const smoothFade = {
    hidden: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className={`relative min-h-screen text-[#0A1A11] selection:bg-[#43ac35] selection:text-white overflow-x-hidden ${isAr ? cairo.className : inter.className}`} dir={t.dir}>
      
      {/* Navbar */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}
        className="fixed top-4 md:top-6 left-4 right-4 lg:left-1/2 lg:-translate-x-1/2 lg:w-full lg:max-w-6xl z-50 bg-white/90 backdrop-blur-md border border-gray-100 shadow-sm rounded-full px-5 py-3 flex items-center justify-between"
      >
        <div className="flex items-center gap-3">
          <div className="bg-[#43ac35] p-2 rounded-full shadow-sm">
            <Leaf className="w-4 h-4 md:w-5 md:h-5 text-white" />
          </div>
          <span className="text-lg md:text-xl font-black uppercase tracking-tight">{t.brand}</span>
        </div>
        
        <div className="hidden lg:flex gap-8 text-sm font-bold text-gray-600">
          {t.nav.map((item, idx) => (
            <a key={idx} href={item.href} className="hover:text-[#43ac35] transition-colors">{item.name}</a>
          ))}
        </div>

        <button 
          onClick={() => setLang(isAr ? 'en' : 'ar')}
          className="flex items-center gap-2 text-xs md:text-sm font-bold bg-white border border-gray-200 text-[#43ac35] px-4 py-2 md:px-5 md:py-2.5 rounded-full hover:bg-gray-50 transition-all"
        >
          <Globe2 className="w-4 h-4" />
          {t.langToggle}
        </button>
      </motion.nav>

      {/* 1. Hero Section - Gradient starts green and fades to white */}
      <section id="home" className="relative pt-32 pb-10 md:pt-40 md:pb-12 px-6 bg-gradient-to-b from-[#eef9f2] via-[#f4fcf6] to-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="text-center lg:text-start">
            <motion.div initial="hidden" whileInView="whileInView" variants={smoothFade} className="mb-6 inline-flex items-center gap-2 px-4 py-2 bg-white text-[#43ac35] text-xs font-bold tracking-widest uppercase rounded-full border border-green-100 shadow-sm">
              <Globe2 className="w-4 h-4" /> {t.hero.badge}
            </motion.div>
            <motion.h1 initial="hidden" whileInView="whileInView" variants={smoothFade} className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-[1.1] tracking-tight">
              {t.hero.title1} <br/>
              <span className="text-[#43ac35]">{t.hero.title2}</span>
            </motion.h1>
            <motion.p initial="hidden" whileInView="whileInView" variants={smoothFade} className="text-gray-600 text-base md:text-lg max-w-xl mx-auto lg:mx-0 mb-8 md:mb-10 leading-relaxed font-medium">
              {t.hero.desc}
            </motion.p>
            <motion.div initial="hidden" whileInView="whileInView" variants={smoothFade}>
              <a href="#products" className="inline-flex bg-[#0A1A11] text-white px-8 py-4 rounded-full font-bold text-center hover:bg-[#43ac35] transition-all shadow-lg items-center justify-center gap-2">
                {t.hero.btn1} {isAr ? <ArrowLeft className="w-5 h-5" /> : <ArrowRight className="w-5 h-5" />}
              </a>
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }} className="relative w-full aspect-square max-w-[320px] md:max-w-[400px] mx-auto lg:block">
            <div className="relative w-full h-full rounded-full overflow-hidden border-[6px] border-white shadow-xl bg-[#f4fcf6]">
              <motion.div animate={{ backgroundPosition: ["0% 50%", "100% 50%"] }} transition={{ duration: 50, repeat: Infinity, ease: "linear" }} className="absolute inset-0 w-full h-full opacity-40 bg-[url('https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg')] bg-[length:200%_auto] bg-repeat-x" style={{ filter: "brightness(0) invert(40%) sepia(80%) saturate(300%) hue-rotate(70deg)" }} />
              <div className="absolute top-[40%] left-[50%] z-30">
                <MapPin className="w-10 h-10 text-[#43ac35] drop-shadow-md animate-bounce" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. About Us Section - Takes white from hero, fades to very light green */}
      <section id="about" className="relative py-10 md:py-16 px-6 bg-gradient-to-b from-white to-[#f9fdfa]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
          <motion.div initial="hidden" whileInView="whileInView" variants={smoothFade} className="relative w-full h-[280px] md:h-[380px] bg-gradient-to-b from-[#e5fbf0] to-white rounded-[2rem] md:rounded-[2.5rem] overflow-hidden flex flex-col items-center justify-end pb-6 md:pb-8 border border-green-50 shadow-sm">
            <div className={`absolute top-4 md:top-6 ${isAr ? 'left-4 md:left-6' : 'right-4 md:right-6'} bg-white px-3 md:px-4 py-2 md:py-2.5 rounded-2xl shadow-sm flex items-center gap-2 md:gap-3 z-30`}>
              <div className="p-1 md:p-1.5 rounded-full border border-green-100"><Leaf className="w-3 h-3 md:w-4 md:h-4 text-[#43ac35]" /></div>
              <div className="flex flex-col">
                <span className="text-[8px] md:text-[9px] font-bold text-gray-500 uppercase tracking-widest">{t.about.badgeTop}</span>
                <span className="text-xs md:text-sm font-black text-[#0A1A11] leading-none">{t.about.badgeBottom}</span>
              </div>
            </div>
            <div className="absolute top-[10%] md:top-[15%] w-32 h-32 md:w-44 md:h-44 bg-[#fbbf24] rounded-full z-0"></div>
            <div className="absolute bottom-0 w-[140%] h-[40%] bg-gradient-to-t from-[#86efac] to-[#dcfce3] rounded-t-[100%] z-10 opacity-90"></div>
            <div className="absolute bottom-0 w-[120%] h-[25%] bg-gradient-to-t from-[#4ade80] to-[#bbf7d0] rounded-t-[100%] right-[-10%] z-10 opacity-95"></div>
            <div className="absolute bottom-0 w-12 md:w-16 h-[30%] bg-[#93c5fd] skew-x-12 z-20 opacity-80"></div>
            <div className="relative z-30 bg-white/95 backdrop-blur-md px-6 md:px-8 py-3 md:py-4 rounded-full shadow-lg border border-white/50 mb-2 md:mb-4">
              <p className="text-lg md:text-2xl font-black text-[#0A1A11]">{t.about.subtitle}</p>
            </div>
          </motion.div>

          <motion.div initial="hidden" whileInView="whileInView" variants={smoothFade} className="lg:pl-8">
            <h2 className="text-3xl md:text-4xl font-black text-[#0A1A11] mb-3 md:mb-4">{t.about.title}</h2>
            <div className="w-10 h-1.5 bg-[#43ac35] mb-5 md:mb-6 rounded-full"></div>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8 md:mb-10 font-medium">{t.about.desc}</p>
            
            <div className="space-y-3 md:space-y-4">
              {t.about.points.map((point, idx) => (
                <div key={idx} className="bg-white px-5 py-4 md:px-6 md:py-5 rounded-[1rem] md:rounded-[1.2rem] shadow-sm border border-gray-100 flex items-center gap-3 md:gap-4 hover:border-[#43ac35]/30 transition-colors">
                  <div className="rounded-full border border-green-200 p-0.5 shrink-0">
                    <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-[#43ac35]" />
                  </div>
                  <span className="text-base md:text-lg font-bold text-[#0A1A11]">{point}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. Products Section - Takes light green, fades back to white */}
      <section id="products" className="relative py-10 md:py-16 px-6 bg-gradient-to-b from-[#f9fdfa] to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div initial="hidden" whileInView="whileInView" variants={smoothFade} className="text-center mb-10 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-[#0A1A11] mb-3 md:mb-4">{t.products.title}</h2>
            <div className="w-12 h-1.5 bg-[#43ac35] mx-auto rounded-full"></div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {t.products.items.map((item, idx) => (
              <motion.div key={idx} initial="hidden" whileInView="whileInView" variants={smoothFade} className={`bg-white rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-8 shadow-sm border border-gray-100 ${item.hoverBorder} hover:-translate-y-1 hover:shadow-xl transition-all duration-300 relative overflow-hidden flex flex-col justify-start group`}>
                <div className={`absolute top-0 ${isAr ? 'left-0 rounded-br-full' : 'right-0 rounded-bl-full'} w-24 h-24 md:w-32 md:h-32 ${item.blob} opacity-60 z-0 transition-transform group-hover:scale-125 duration-500`}></div>
                <div className={`w-12 h-12 md:w-16 md:h-16 ${item.iconBg} rounded-[1rem] md:rounded-[1.2rem] flex items-center justify-center mb-4 md:mb-6 relative z-10 shadow-sm`}>
                  {item.icon}
                </div>
                <h3 className="text-lg md:text-xl font-black text-[#0A1A11] mb-1.5 md:mb-2 relative z-10">{item.name}</h3>
                <p className="text-gray-500 text-xs md:text-sm font-medium relative z-10">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Quality Section (Bento Box Style) - Dark premium break */}
      <section id="quality" className="relative py-12 md:py-20 bg-gradient-to-b from-[#0A1A11] via-[#050D08] to-[#0A1A11] text-white overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#43ac35] opacity-10 blur-[100px] rounded-full pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 md:gap-12 items-center">
            <motion.div initial="hidden" whileInView="whileInView" variants={smoothFade} className="lg:col-span-1 text-center lg:text-start">
              <h2 className="text-3xl md:text-5xl font-black mb-4 md:mb-6 leading-tight">{t.quality.title}</h2>
              <div className="w-12 h-1.5 bg-[#43ac35] mb-6 md:mb-8 mx-auto lg:mx-0 rounded-full"></div>
              <p className="text-gray-400 text-base md:text-lg leading-relaxed">{t.quality.desc}</p>
            </motion.div>
            
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
              {t.quality.items.map((item, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, y: 20 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={`${item.colSpan} ${item.bg} border border-white/5 rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-8 hover:border-[#43ac35]/50 transition-all duration-300 group`}
                >
                  <div className="text-[#43ac35] mb-4 md:mb-6 bg-white/5 w-14 h-14 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2 md:mb-3">{item.title}</h3>
                  <p className="text-gray-400 text-sm md:text-base leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Calendar Section - Starts white and fades to subtle green */}
      <section id="calendar" className="relative py-10 md:py-16 px-4 md:px-6 bg-gradient-to-b from-white to-[#f4fcf6]">
        <div className="max-w-5xl mx-auto">
          <motion.div initial="hidden" whileInView="whileInView" variants={smoothFade} className="flex flex-col items-center justify-center text-center mb-8 md:mb-12">
            <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
              <CalendarDays className="w-8 h-8 md:w-10 md:h-10 text-[#43ac35]" />
              <h2 className="text-3xl md:text-4xl font-black text-[#0A1A11]">{t.calendar.title}</h2>
            </div>
            <p className="text-base md:text-lg text-gray-500 font-bold">{t.calendar.subtitle}</p>
          </motion.div>
          
          <motion.div initial="hidden" whileInView="whileInView" variants={smoothFade} className="bg-white rounded-[1.5rem] md:rounded-[2.5rem] p-4 md:p-10 border border-gray-100 shadow-sm">
            <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-6 md:mb-8">
              {t.calendar.categories.map((cat, idx) => (
                <button key={idx} onClick={() => setActiveTab(idx)} className={`px-6 md:px-8 py-2 md:py-3 rounded-full font-bold text-xs md:text-sm transition-all duration-300 ${ activeTab === idx ? 'bg-[#43ac35] text-white shadow-md' : 'bg-[#f9fdfa] text-gray-600 border border-gray-100 hover:bg-gray-50' }`}>
                  {cat}
                </button>
              ))}
            </div>
            <div className="overflow-x-auto pb-2">
              <div className="min-w-[600px] md:min-w-[650px]">
                <div className="grid grid-cols-[1.5fr_repeat(12,1fr)_1fr] pb-3 md:pb-4 border-b border-gray-100 font-bold text-[10px] md:text-xs text-gray-400 uppercase tracking-wider">
                  <div></div>
                  {t.calendar.months.map((m, i) => <div key={i} className="text-center">{m}</div>)}
                  <div className="text-center">{t.calendar.tempCol}</div>
                </div>
                <div className="mt-3 md:mt-4 space-y-2 md:space-y-3">
                  <AnimatePresence mode="wait">
                    <motion.div key={activeTab} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }} className="space-y-2 md:space-y-3">
                      {t.calendar.items[activeTab].map((item, idx) => (
                        <div key={idx} className="grid grid-cols-[1.5fr_repeat(12,1fr)_1fr] items-center p-2.5 md:p-3 bg-white rounded-xl md:rounded-2xl border border-gray-50 hover:border-[#43ac35]/30 transition-all shadow-sm group">
                          <div className="font-bold text-[#0A1A11] text-xs md:text-sm pl-1 md:pl-2">{item.name}</div>
                          {item.active.map((isActive, monthIdx) => (
                            <div key={monthIdx} className="flex justify-center">
                              <div className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${isActive ? 'bg-[#43ac35] shadow-[0_0_8px_rgba(67,172,53,0.5)]' : 'bg-gray-100'}`}></div>
                            </div>
                          ))}
                          <div className="flex justify-center">
                            <div className="font-bold text-[#0A1A11] bg-gray-50 border border-gray-100 rounded-md md:rounded-lg px-2 py-0.5 md:px-3 md:py-1 text-[10px] md:text-xs">
                              {item.temp}
                            </div>
                          </div>
                        </div>
                      ))}
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 6. Shipping & Contact - Takes light green and fades smoothly to white at the end */}
      <section id="shipping" className="relative pt-10 md:pt-16 pb-12 md:pb-20 bg-gradient-to-b from-[#f4fcf6] to-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 mb-12 md:mb-16">
          <motion.div initial="hidden" whileInView="whileInView" variants={smoothFade} className="text-center mb-8 md:mb-10">
            <h2 className="text-3xl md:text-4xl font-black text-[#0A1A11] mb-3 md:mb-4">{t.shipping.title}</h2>
            <div className="w-12 h-1.5 bg-[#43ac35] mx-auto rounded-full"></div>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            {t.shipping.items.map((method, idx) => (
              <motion.div key={idx} initial="hidden" whileInView="whileInView" variants={smoothFade} className="bg-white rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-8 shadow-sm border border-gray-100 hover:border-[#43ac35] transition-all text-center md:text-start flex flex-col items-center md:items-start group">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-[#f4fcf6] text-[#43ac35] rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-6 group-hover:bg-[#43ac35] group-hover:text-white transition-colors">
                  {method.icon}
                </div>
                <h3 className="text-lg md:text-xl font-bold text-[#0A1A11] mb-2 md:mb-3">{method.title}</h3>
                <p className="text-gray-500 text-xs md:text-sm leading-relaxed font-medium">{method.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div id="contact" className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="bg-[#0A1A11] text-white rounded-[2rem] md:rounded-[3rem] p-6 md:p-12 shadow-2xl grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div initial="hidden" whileInView="whileInView" variants={smoothFade} className="text-center md:text-start">
              <h2 className="text-4xl md:text-5xl font-black mb-3 md:mb-4">{t.contact.title}</h2>
              <p className="text-[#43ac35] text-lg md:text-xl font-bold mb-8 md:mb-10">{t.contact.subtitle}</p>
              <div className="space-y-4 md:space-y-5">
                <div className="flex items-center gap-4 md:gap-5 bg-white/5 p-3 md:p-4 rounded-xl md:rounded-2xl border border-white/10 text-start">
                  <div className="bg-[#43ac35] p-2 md:p-3 rounded-lg md:rounded-xl shrink-0"><Building className="w-5 h-5 md:w-6 md:h-6 text-white" /></div>
                  <p dir="ltr" className="text-sm md:text-base font-medium">Alexandria, Egypt</p>
                </div>
                <div className="flex items-center gap-4 md:gap-5 bg-white/5 p-3 md:p-4 rounded-xl md:rounded-2xl border border-white/10 text-start">
                  <div className="bg-[#43ac35] p-2 md:p-3 rounded-lg md:rounded-xl shrink-0"><Phone className="w-5 h-5 md:w-6 md:h-6 text-white" /></div>
                  <p dir="ltr" className="text-sm md:text-base font-medium tracking-wider">+20 106 553 3291</p>
                </div>
                <div className="flex items-center gap-4 md:gap-5 bg-white/5 p-3 md:p-4 rounded-xl md:rounded-2xl border border-white/10 text-start">
                  <div className="bg-[#43ac35] p-2 md:p-3 rounded-lg md:rounded-xl shrink-0"><Mail className="w-5 h-5 md:w-6 md:h-6 text-white" /></div>
                  <p className="text-sm md:text-base font-medium break-all">info@khairegypt.com</p>
                </div>
              </div>
            </motion.div>
            
            <motion.form initial="hidden" whileInView="whileInView" variants={smoothFade} className="bg-white text-[#0A1A11] p-5 md:p-10 rounded-[1.5rem] md:rounded-[2.5rem] shadow-xl">
              <div className="space-y-4 md:space-y-5">
                <div>
                  <label className="block text-xs md:text-sm font-bold mb-1.5 md:mb-2 text-gray-700">{t.contact.form.name}</label>
                  <input type="text" className="w-full bg-[#f9fdfa] border border-gray-200 rounded-lg md:rounded-xl px-3 md:px-4 py-2.5 md:py-3 text-sm focus:outline-none focus:border-[#43ac35] focus:ring-2 focus:ring-[#43ac35]/20 transition-all" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
                  <div>
                    <label className="block text-xs md:text-sm font-bold mb-1.5 md:mb-2 text-gray-700">{t.contact.form.email}</label>
                    <input type="email" className="w-full bg-[#f9fdfa] border border-gray-200 rounded-lg md:rounded-xl px-3 md:px-4 py-2.5 md:py-3 text-sm focus:outline-none focus:border-[#43ac35] focus:ring-2 focus:ring-[#43ac35]/20 transition-all" />
                  </div>
                  <div>
                    <label className="block text-xs md:text-sm font-bold mb-1.5 md:mb-2 text-gray-700">{t.contact.form.phone}</label>
                    <input type="text" className="w-full bg-[#f9fdfa] border border-gray-200 rounded-lg md:rounded-xl px-3 md:px-4 py-2.5 md:py-3 text-sm focus:outline-none focus:border-[#43ac35] focus:ring-2 focus:ring-[#43ac35]/20 transition-all" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs md:text-sm font-bold mb-1.5 md:mb-2 text-gray-700">{t.contact.form.needs}</label>
                  <textarea rows={4} className="w-full bg-[#f9fdfa] border border-gray-200 rounded-lg md:rounded-xl px-3 md:px-4 py-2.5 md:py-3 text-sm focus:outline-none focus:border-[#43ac35] focus:ring-2 focus:ring-[#43ac35]/20 transition-all resize-none"></textarea>
                </div>
                <button type="button" className="w-full bg-[#43ac35] text-white rounded-lg md:rounded-xl py-3 md:py-4 font-black text-sm md:text-base hover:bg-[#0A1A11] transition-all flex items-center justify-center gap-2 mt-2 md:mt-4 shadow-lg shadow-[#43ac35]/30">
                  {t.contact.form.submit} <Send className="w-4 h-4 md:w-5 md:h-5" />
                </button>
              </div>
            </motion.form>
          </div>
        </div>
      </section>

    </div>
  );
}