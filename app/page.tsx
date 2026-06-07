"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Leaf, Globe2, MapPin, ArrowRight, ArrowLeft, Send, Phone, Mail, Building, CheckCircle2, Sun, Cherry, Carrot, Sprout, Ship, Plane, Truck, CalendarDays, Award, Package, ShieldCheck, TrendingUp } from 'lucide-react';
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
      points: [
        { title: "Global GAP Certified", desc: "Farms adhering to the highest international safety standards.", icon: <CheckCircle2 className="w-5 h-5 text-[#43ac35]" /> },
        { title: "Advanced Cold Chain", desc: "State-of-the-art logistics preserving peak freshness.", icon: <TrendingUp className="w-5 h-5 text-[#43ac35]" /> },
        { title: "Strict Commitments", desc: "Punctual shipping schedules you can rely on globally.", icon: <ShieldCheck className="w-5 h-5 text-[#43ac35]" /> }
      ],
      badgeTop: "Trusted Export",
      badgeBottom: "From Egypt"
    },
    products: {
      title: "Premium Export Categories",
      items: [
        { name: "Premium Citrus", desc: "Oranges, Lemons & Mandarins", icon: <Sun className="w-7 h-7 text-white" />, iconBg: "bg-gradient-to-br from-[#f59e0b] to-[#d97706]", hoverBorder: "hover:border-[#f59e0b]", shadow: "hover:shadow-[#f59e0b]/20" },
        { name: "Fresh Fruits", desc: "Mangoes, Strawberries & Grapes", icon: <Cherry className="w-7 h-7 text-white" />, iconBg: "bg-gradient-to-br from-[#f43f5e] to-[#e11d48]", hoverBorder: "hover:border-[#f43f5e]", shadow: "hover:shadow-[#f43f5e]/20" },
        { name: "Root Vegetables", desc: "Premium Potatoes & Onions", icon: <Carrot className="w-7 h-7 text-white" />, iconBg: "bg-gradient-to-br from-[#f97316] to-[#ea580c]", hoverBorder: "hover:border-[#f97316]", shadow: "hover:shadow-[#f97316]/20" },
        { name: "Green Produce", desc: "Cucumbers, Peppers & Beans", icon: <Sprout className="w-7 h-7 text-white" />, iconBg: "bg-gradient-to-br from-[#22c55e] to-[#16a34a]", hoverBorder: "hover:border-[#22c55e]", shadow: "hover:shadow-[#22c55e]/20" }
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
      points: [
        { title: "مزارع معتمدة دولياً", desc: "نلتزم بأعلى معايير السلامة العالمية Global GAP.", icon: <CheckCircle2 className="w-5 h-5 text-[#43ac35]" /> },
        { title: "سلسلة تبريد متطورة", desc: "لوجستيات حديثة تحافظ على النضارة من المزرعة للحاوية.", icon: <TrendingUp className="w-5 h-5 text-[#43ac35]" /> },
        { title: "التزام صارم بالشحن", desc: "جداول زمنية دقيقة يمكنك الاعتماد عليها في استيرادك.", icon: <ShieldCheck className="w-5 h-5 text-[#43ac35]" /> }
      ],
      badgeTop: "تصدير موثوق",
      badgeBottom: "من قلب مصر"
    },
    products: {
      title: "فئات التصدير الرئيسية",
      items: [
        { name: "الموالح الفاخرة", desc: "برتقال، ليمون، ويوسفي", icon: <Sun className="w-7 h-7 text-white" />, iconBg: "bg-gradient-to-br from-[#f59e0b] to-[#d97706]", hoverBorder: "hover:border-[#f59e0b]", shadow: "hover:shadow-[#f59e0b]/20" },
        { name: "الفواكه الطازجة", desc: "مانجو، فراولة، وعنب", icon: <Cherry className="w-7 h-7 text-white" />, iconBg: "bg-gradient-to-br from-[#f43f5e] to-[#e11d48]", hoverBorder: "hover:border-[#f43f5e]", shadow: "hover:shadow-[#f43f5e]/20" },
        { name: "الخضروات الجذرية", desc: "بطاطس وبصل للتصدير", icon: <Carrot className="w-7 h-7 text-white" />, iconBg: "bg-gradient-to-br from-[#f97316] to-[#ea580c]", hoverBorder: "hover:border-[#f97316]", shadow: "hover:shadow-[#f97316]/20" },
        { name: "الخضروات الطازجة", desc: "خيار، فلفل، وفاصوليا", icon: <Sprout className="w-7 h-7 text-white" />, iconBg: "bg-gradient-to-br from-[#22c55e] to-[#16a34a]", hoverBorder: "hover:border-[#22c55e]", shadow: "hover:shadow-[#22c55e]/20" }
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
        className="fixed top-4 md:top-6 left-4 right-4 lg:left-1/2 lg:-translate-x-1/2 lg:w-full lg:max-w-6xl z-50 bg-white/80 backdrop-blur-xl border border-white/20 shadow-sm rounded-full px-5 py-3 flex items-center justify-between"
      >
        <div className="flex items-center gap-3">
          <div className="bg-gradient-to-tr from-[#43ac35] to-[#5cdb4b] p-2 rounded-full shadow-sm">
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
          className="flex items-center gap-2 text-xs md:text-sm font-bold bg-white border border-gray-100 text-[#43ac35] px-4 py-2 md:px-5 md:py-2.5 rounded-full hover:shadow-md transition-all"
        >
          <Globe2 className="w-4 h-4" />
          {t.langToggle}
        </button>
      </motion.nav>

      {/* 1. Hero Section - Deep gradient flowing to next section */}
      <section id="home" className="relative pt-32 pb-12 md:pt-40 md:pb-16 px-6 bg-gradient-to-b from-[#eafaf0] via-[#f2fcf5] to-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="text-center lg:text-start">
            <motion.div initial="hidden" whileInView="whileInView" variants={smoothFade} className="mb-6 inline-flex items-center gap-2 px-4 py-2 bg-white text-[#43ac35] text-xs font-bold tracking-widest uppercase rounded-full border border-green-100 shadow-sm">
              <Globe2 className="w-4 h-4" /> {t.hero.badge}
            </motion.div>
            <motion.h1 initial="hidden" whileInView="whileInView" variants={smoothFade} className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-[1.1] tracking-tight">
              {t.hero.title1} <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#43ac35] to-[#22c55e]">{t.hero.title2}</span>
            </motion.h1>
            <motion.p initial="hidden" whileInView="whileInView" variants={smoothFade} className="text-gray-600 text-base md:text-lg max-w-xl mx-auto lg:mx-0 mb-8 md:mb-10 leading-relaxed font-medium">
              {t.hero.desc}
            </motion.p>
            <motion.div initial="hidden" whileInView="whileInView" variants={smoothFade}>
              <a href="#products" className="inline-flex bg-gradient-to-r from-[#0A1A11] to-[#153a25] text-white px-8 py-4 rounded-full font-bold text-center hover:scale-105 transition-all shadow-xl shadow-green-900/20 items-center justify-center gap-2">
                {t.hero.btn1} {isAr ? <ArrowLeft className="w-5 h-5" /> : <ArrowRight className="w-5 h-5" />}
              </a>
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }} className="relative w-full aspect-square max-w-[320px] md:max-w-[450px] mx-auto lg:block">
            <div className="relative w-full h-full rounded-[3rem] overflow-hidden border-[8px] border-white shadow-2xl bg-gradient-to-br from-[#eafaf0] to-[#dcfce3] rotate-3 hover:rotate-0 transition-transform duration-500">
              <motion.div animate={{ backgroundPosition: ["0% 50%", "100% 50%"] }} transition={{ duration: 50, repeat: Infinity, ease: "linear" }} className="absolute inset-0 w-full h-full opacity-30 bg-[url('https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg')] bg-[length:200%_auto] bg-repeat-x" style={{ filter: "brightness(0) invert(40%) sepia(80%) saturate(300%) hue-rotate(70deg)" }} />
              <div className="absolute inset-0 flex items-center justify-center z-30">
                <div className="bg-white/90 backdrop-blur-sm p-4 rounded-full shadow-lg animate-bounce">
                  <MapPin className="w-12 h-12 text-[#43ac35]" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. About Us Section - NEW BENTO BOX DESIGN */}
      <section id="about" className="relative py-12 md:py-20 px-6 bg-gradient-to-b from-white to-[#f4fcf6]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-[#0A1A11] mb-3 md:mb-4">{t.about.title}</h2>
            <div className="w-12 h-1.5 bg-gradient-to-r from-[#43ac35] to-[#22c55e] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            
            {/* Big Bento Card (Left) */}
            <motion.div initial="hidden" whileInView="whileInView" variants={smoothFade} className="lg:col-span-7 relative bg-gradient-to-br from-[#eef9f2] to-[#f8fdfa] rounded-[2rem] p-8 md:p-12 border border-green-50 shadow-sm overflow-hidden flex flex-col justify-center">
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#43ac35] rounded-full blur-[80px] opacity-20 pointer-events-none"></div>
              
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm mb-6 border border-green-100">
                  <Leaf className="w-4 h-4 text-[#43ac35]" />
                  <span className="text-sm font-bold text-[#0A1A11]">{t.about.badgeTop}</span>
                </div>
                <h3 className="text-2xl md:text-4xl font-black text-[#0A1A11] mb-4 leading-tight">{t.about.subtitle}</h3>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed font-medium">{t.about.desc}</p>
              </div>
            </motion.div>

            {/* Small Bento Cards Grid (Right) */}
            <motion.div initial="hidden" whileInView="whileInView" variants={smoothFade} className="lg:col-span-5 grid grid-rows-3 gap-4 md:gap-6">
              {t.about.points.map((point, idx) => (
                <div key={idx} className="bg-white rounded-[1.5rem] p-5 md:p-6 border border-gray-100 shadow-sm hover:shadow-md hover:border-green-200 transition-all flex items-start gap-4 group">
                  <div className="bg-[#f4fcf6] p-3 rounded-xl group-hover:scale-110 transition-transform">
                    {point.icon}
                  </div>
                  <div>
                    <h4 className="text-base md:text-lg font-bold text-[#0A1A11] mb-1">{point.title}</h4>
                    <p className="text-sm text-gray-500 font-medium">{point.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>

          </div>
        </div>
      </section>

      {/* 3. Products Section - Modern Cards with Glassmorphism */}
      <section id="products" className="relative py-12 md:py-20 px-6 bg-gradient-to-b from-[#f4fcf6] via-white to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div initial="hidden" whileInView="whileInView" variants={smoothFade} className="text-center mb-10 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-[#0A1A11] mb-3 md:mb-4">{t.products.title}</h2>
            <div className="w-12 h-1.5 bg-gradient-to-r from-[#43ac35] to-[#22c55e] mx-auto rounded-full"></div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.products.items.map((item, idx) => (
              <motion.div key={idx} initial="hidden" whileInView="whileInView" variants={smoothFade} className={`bg-white rounded-[2rem] p-8 border border-gray-100 ${item.hoverBorder} ${item.shadow} hover:-translate-y-2 transition-all duration-300 relative overflow-hidden group shadow-sm`}>
                <div className={`w-14 h-14 ${item.iconBg} rounded-[1.2rem] flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-black text-[#0A1A11] mb-2">{item.name}</h3>
                <p className="text-gray-500 text-sm font-medium">{item.desc}</p>
                <div className={`absolute bottom-0 ${isAr ? 'left-0' : 'right-0'} w-24 h-24 bg-gradient-to-tl from-gray-50 to-transparent rounded-tl-full opacity-50`}></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Quality Section (Dark Bento Box Style) */}
      <section id="quality" className="relative py-16 md:py-24 bg-[#050D08] text-white overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#43ac35] opacity-10 blur-[120px] rounded-full pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
            <motion.div initial="hidden" whileInView="whileInView" variants={smoothFade} className="lg:col-span-1 text-center lg:text-start">
              <h2 className="text-3xl md:text-5xl font-black mb-4 md:mb-6 leading-tight">{t.quality.title}</h2>
              <div className="w-12 h-1.5 bg-gradient-to-r from-[#43ac35] to-[#22c55e] mb-6 md:mb-8 mx-auto lg:mx-0 rounded-full"></div>
              <p className="text-gray-400 text-base md:text-lg leading-relaxed">{t.quality.desc}</p>
            </motion.div>
            
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
              {t.quality.items.map((item, idx) => (
                <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={`${item.colSpan} ${item.bg} border border-white/5 rounded-[2rem] p-8 hover:border-[#43ac35]/40 transition-all duration-300 group`}
                >
                  <div className="text-[#43ac35] mb-6 bg-white/5 w-14 h-14 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:bg-[#43ac35] group-hover:text-white transition-all">
                    {item.icon}
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-gray-400 text-sm md:text-base leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Calendar Section */}
      <section id="calendar" className="relative py-12 md:py-20 px-4 md:px-6 bg-gradient-to-b from-[#f9fdfa] to-white">
        <div className="max-w-5xl mx-auto">
          <motion.div initial="hidden" whileInView="whileInView" variants={smoothFade} className="flex flex-col items-center justify-center text-center mb-8 md:mb-10">
            <div className="flex items-center gap-3 mb-4">
              <CalendarDays className="w-10 h-10 text-[#43ac35]" />
              <h2 className="text-3xl md:text-4xl font-black text-[#0A1A11]">{t.calendar.title}</h2>
            </div>
            <p className="text-lg text-gray-500 font-bold">{t.calendar.subtitle}</p>
          </motion.div>
          
          <motion.div initial="hidden" whileInView="whileInView" variants={smoothFade} className="bg-white rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-10 border border-gray-100 shadow-xl shadow-green-900/5">
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {t.calendar.categories.map((cat, idx) => (
                <button key={idx} onClick={() => setActiveTab(idx)} className={`px-8 py-3 rounded-full font-bold text-sm transition-all duration-300 ${ activeTab === idx ? 'bg-gradient-to-r from-[#43ac35] to-[#22c55e] text-white shadow-md shadow-green-500/20' : 'bg-[#f4fcf6] text-gray-600 hover:bg-gray-100' }`}>
                  {cat}
                </button>
              ))}
            </div>
            <div className="overflow-x-auto pb-2">
              <div className="min-w-[650px]">
                <div className="grid grid-cols-[1.5fr_repeat(12,1fr)_1fr] pb-4 border-b border-gray-100 font-bold text-xs text-gray-400 uppercase tracking-wider">
                  <div></div>
                  {t.calendar.months.map((m, i) => <div key={i} className="text-center">{m}</div>)}
                  <div className="text-center">{t.calendar.tempCol}</div>
                </div>
                <div className="mt-4 space-y-3">
                  <AnimatePresence mode="wait">
                    <motion.div key={activeTab} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }} className="space-y-3">
                      {t.calendar.items[activeTab].map((item, idx) => (
                        <div key={idx} className="grid grid-cols-[1.5fr_repeat(12,1fr)_1fr] items-center p-3 bg-white rounded-2xl border border-gray-50 hover:border-green-200 transition-all shadow-sm">
                          <div className="font-bold text-[#0A1A11] text-sm pl-2">{item.name}</div>
                          {item.active.map((isActive, monthIdx) => (
                            <div key={monthIdx} className="flex justify-center">
                              <div className={`w-3 h-3 rounded-full transition-all duration-300 ${isActive ? 'bg-[#43ac35] shadow-[0_0_8px_rgba(67,172,53,0.5)]' : 'bg-gray-100'}`}></div>
                            </div>
                          ))}
                          <div className="flex justify-center">
                            <div className="font-bold text-[#0A1A11] bg-gray-50 border border-gray-100 rounded-lg px-3 py-1 text-xs">
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

      {/* 6. Shipping & Contact */}
      <section id="shipping" className="relative pt-12 md:pt-16 pb-16 md:pb-24 bg-gradient-to-b from-white to-[#f4fcf6]">
        <div className="max-w-7xl mx-auto px-4 md:px-6 mb-16">
          <motion.div initial="hidden" whileInView="whileInView" variants={smoothFade} className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-black text-[#0A1A11] mb-4">{t.shipping.title}</h2>
            <div className="w-12 h-1.5 bg-gradient-to-r from-[#43ac35] to-[#22c55e] mx-auto rounded-full"></div>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.shipping.items.map((method, idx) => (
              <motion.div key={idx} initial="hidden" whileInView="whileInView" variants={smoothFade} className="bg-white rounded-[2rem] p-8 shadow-sm border border-gray-100 hover:border-[#43ac35] hover:shadow-xl hover:shadow-green-900/5 transition-all text-center md:text-start flex flex-col items-center md:items-start group">
                <div className="w-14 h-14 bg-gradient-to-br from-[#eafaf0] to-[#dcfce3] text-[#43ac35] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {method.icon}
                </div>
                <h3 className="text-xl font-bold text-[#0A1A11] mb-3">{method.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed font-medium">{method.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div id="contact" className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="bg-gradient-to-br from-[#0A1A11] to-[#112a1c] text-white rounded-[3rem] p-8 md:p-12 shadow-2xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" whileInView="whileInView" variants={smoothFade} className="text-center md:text-start">
              <h2 className="text-4xl md:text-5xl font-black mb-4">{t.contact.title}</h2>
              <p className="text-[#43ac35] text-xl font-bold mb-10">{t.contact.subtitle}</p>
              <div className="space-y-5">
                <div className="flex items-center gap-5 bg-white/5 p-4 rounded-2xl border border-white/10 text-start hover:bg-white/10 transition-colors">
                  <div className="bg-[#43ac35] p-3 rounded-xl shrink-0"><Building className="w-6 h-6 text-white" /></div>
                  <p dir="ltr" className="text-base font-medium">Alexandria, Egypt</p>
                </div>
                <div className="flex items-center gap-5 bg-white/5 p-4 rounded-2xl border border-white/10 text-start hover:bg-white/10 transition-colors">
                  <div className="bg-[#43ac35] p-3 rounded-xl shrink-0"><Phone className="w-6 h-6 text-white" /></div>
                  <p dir="ltr" className="text-base font-medium tracking-wider">+20 106 553 3291</p>
                </div>
                <div className="flex items-center gap-5 bg-white/5 p-4 rounded-2xl border border-white/10 text-start hover:bg-white/10 transition-colors">
                  <div className="bg-[#43ac35] p-3 rounded-xl shrink-0"><Mail className="w-6 h-6 text-white" /></div>
                  <p className="text-base font-medium break-all">info@khairegypt.com</p>
                </div>
              </div>
            </motion.div>
            
            <motion.form initial="hidden" whileInView="whileInView" variants={smoothFade} className="bg-white text-[#0A1A11] p-8 md:p-10 rounded-[2.5rem] shadow-xl">
              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-bold mb-2 text-gray-700">{t.contact.form.name}</label>
                  <input type="text" className="w-full bg-[#f4fcf6] border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#43ac35] focus:ring-2 focus:ring-[#43ac35]/20 transition-all" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-bold mb-2 text-gray-700">{t.contact.form.email}</label>
                    <input type="email" className="w-full bg-[#f4fcf6] border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#43ac35] focus:ring-2 focus:ring-[#43ac35]/20 transition-all" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2 text-gray-700">{t.contact.form.phone}</label>
                    <input type="text" className="w-full bg-[#f4fcf6] border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#43ac35] focus:ring-2 focus:ring-[#43ac35]/20 transition-all" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2 text-gray-700">{t.contact.form.needs}</label>
                  <textarea rows={4} className="w-full bg-[#f4fcf6] border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#43ac35] focus:ring-2 focus:ring-[#43ac35]/20 transition-all resize-none"></textarea>
                </div>
                <button type="button" className="w-full bg-gradient-to-r from-[#43ac35] to-[#22c55e] text-white rounded-xl py-4 font-black text-base hover:scale-[1.02] transition-transform flex items-center justify-center gap-2 mt-4 shadow-lg shadow-[#43ac35]/30">
                  {t.contact.form.submit} <Send className="w-5 h-5" />
                </button>
              </div>
            </motion.form>
          </div>
        </div>
      </section>

    </div>
  );
} 