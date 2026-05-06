import React, { useState, useMemo, useEffect, useRef } from "react";

// Animated counter component for hero stats
const AnimatedStat = ({ value, label }) => {
  const [display, setDisplay] = useState(value);
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (hasAnimated.current) return;
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !hasAnimated.current) {
        hasAnimated.current = true;
        // Parse numeric portion (e.g. "350+" -> 350, "4.9★" -> 4.9, "60s" -> 60, "10yr" -> 10)
        const match = value.match(/[\d.]+/);
        if (!match) return;
        const target = parseFloat(match[0]);
        const suffix = value.replace(match[0], "");
        const isDecimal = match[0].includes(".");
        let current = 0;
        const steps = 40;
        const stepValue = target / steps;
        let step = 0;
        const interval = setInterval(() => {
          step++;
          current = Math.min(stepValue * step, target);
          const formatted = isDecimal ? current.toFixed(1) : Math.floor(current).toString();
          setDisplay(formatted + suffix);
          if (step >= steps) clearInterval(interval);
        }, 25);
      }
    }, { threshold: 0.3 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div ref={ref}>
      <div className="font-display text-5xl text-emerald-400 leading-none drop-shadow-[0_0_20px_rgba(74,222,196,0.4)]">{display}</div>
      <div className="font-mono text-[11px] uppercase tracking-wider text-zinc-500 mt-2">{label}</div>
    </div>
  );
};
import { Search, ArrowRight, Phone, MessageCircle, Zap, MapPin, Check, Shield, Clock, ChevronRight } from "lucide-react";

const Sportbike = ({ className = "" }) => (
  <svg viewBox="0 0 400 220" className={className} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bike-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#4ade80" stopOpacity="1" />
        <stop offset="100%" stopColor="#0d9488" stopOpacity="0.6" />
      </linearGradient>
      <filter id="bike-glow"><feGaussianBlur stdDeviation="6" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
    </defs>
    <ellipse cx="200" cy="200" rx="140" ry="6" fill="#4ade80" opacity="0.15"/>
    <g filter="url(#bike-glow)" stroke="url(#bike-grad)" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="310" cy="160" r="36"/>
      <circle cx="310" cy="160" r="14" strokeWidth="1.5" opacity="0.6"/>
      <circle cx="90" cy="160" r="36"/>
      <circle cx="90" cy="160" r="14" strokeWidth="1.5" opacity="0.6"/>
      <path d="M 280 130 Q 310 100, 320 80 L 295 70 Q 270 75, 250 95 L 220 110 L 180 110 L 140 100 Q 110 95, 95 115 L 90 130"/>
      <path d="M 180 110 Q 200 75, 240 80 Q 250 95, 250 95"/>
      <path d="M 145 105 L 175 95 L 180 110"/>
      <path d="M 270 145 L 320 155" strokeWidth="3"/>
      <line x1="295" y1="80" x2="310" y2="160" strokeWidth="3"/>
      <circle cx="310" cy="78" r="6" fill="url(#bike-grad)" stroke="none"/>
    </g>
  </svg>
);

const UTV = ({ className = "" }) => (
  <svg viewBox="0 0 400 220" className={className} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="utv-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#4ade80" stopOpacity="1"/>
        <stop offset="100%" stopColor="#0d9488" stopOpacity="0.6"/>
      </linearGradient>
      <filter id="utv-glow"><feGaussianBlur stdDeviation="5" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
    </defs>
    <ellipse cx="200" cy="200" rx="150" ry="6" fill="#4ade80" opacity="0.15"/>
    <g filter="url(#utv-glow)" stroke="url(#utv-grad)" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="100" cy="170" r="32"/>
      <circle cx="100" cy="170" r="12" strokeWidth="1.5" opacity="0.6"/>
      <circle cx="300" cy="170" r="32"/>
      <circle cx="300" cy="170" r="12" strokeWidth="1.5" opacity="0.6"/>
      <path d="M 60 165 L 60 130 L 90 100 L 130 95 L 270 95 L 310 100 L 340 130 L 340 165"/>
      <path d="M 90 100 L 100 50 L 200 40 L 300 50 L 310 100"/>
      <line x1="200" y1="40" x2="200" y2="95"/>
      <line x1="100" y1="50" x2="300" y2="50"/>
      <path d="M 110 95 L 130 60 L 270 60 L 290 95"/>
      <circle cx="60" cy="135" r="5" fill="url(#utv-grad)" stroke="none"/>
      <line x1="55" y1="155" x2="55" y2="170" strokeWidth="3"/>
      <path d="M 130 165 L 270 165" strokeWidth="2"/>
    </g>
  </svg>
);

const Watercraft = ({ className = "" }) => (
  <svg viewBox="0 0 400 220" className={className} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="pwc-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#4ade80" stopOpacity="1"/>
        <stop offset="100%" stopColor="#0d9488" stopOpacity="0.6"/>
      </linearGradient>
      <filter id="pwc-glow"><feGaussianBlur stdDeviation="5" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
    </defs>
    <path d="M 30 180 Q 80 175, 130 180 T 230 180 T 330 180 T 380 180" stroke="#4ade80" strokeWidth="1.5" fill="none" opacity="0.4"/>
    <path d="M 30 195 Q 80 190, 130 195 T 230 195 T 330 195 T 380 195" stroke="#4ade80" strokeWidth="1" fill="none" opacity="0.25"/>
    <g filter="url(#pwc-glow)" stroke="url(#pwc-grad)" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d="M 50 165 Q 70 145, 110 140 L 290 140 Q 340 145, 360 165 Q 340 175, 300 178 L 100 178 Q 65 175, 50 165 Z"/>
      <path d="M 130 140 Q 150 115, 200 108 Q 260 110, 280 140"/>
      <path d="M 200 108 L 180 80 M 200 108 L 220 80"/>
      <line x1="170" y1="80" x2="190" y2="80" strokeWidth="3"/>
      <line x1="210" y1="80" x2="230" y2="80" strokeWidth="3"/>
      <path d="M 195 108 L 195 95 L 205 95 L 205 108"/>
      <line x1="60" y1="160" x2="90" y2="155" strokeWidth="2"/>
      <path d="M 110 155 L 290 155" strokeWidth="3" opacity="0.5"/>
      <path d="M 350 165 Q 365 155, 375 160" strokeWidth="1.5" opacity="0.6"/>
      <path d="M 360 170 Q 370 165, 378 168" strokeWidth="1" opacity="0.4"/>
    </g>
  </svg>
);

const ATV = ({ className = "" }) => {
  const treads = (cx, cy, r, prefix) => [0, 60, 120, 180, 240, 300].map(a => {
    const x1 = cx + Math.cos(a * Math.PI / 180) * (r - 4);
    const y1 = cy + Math.sin(a * Math.PI / 180) * (r - 4);
    const x2 = cx + Math.cos(a * Math.PI / 180) * r;
    const y2 = cy + Math.sin(a * Math.PI / 180) * r;
    return <line key={`${prefix}-${a}`} x1={x1} y1={y1} x2={x2} y2={y2} strokeWidth="1.5" opacity="0.5"/>;
  });
  return (
    <svg viewBox="0 0 400 220" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="atv-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4ade80" stopOpacity="1"/>
          <stop offset="100%" stopColor="#0d9488" stopOpacity="0.6"/>
        </linearGradient>
        <filter id="atv-glow"><feGaussianBlur stdDeviation="5" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
      </defs>
      <ellipse cx="200" cy="200" rx="150" ry="6" fill="#4ade80" opacity="0.15"/>
      <g filter="url(#atv-glow)" stroke="url(#atv-grad)" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="90" cy="165" r="38"/>
        <circle cx="90" cy="165" r="16" strokeWidth="1.5" opacity="0.6"/>
        <circle cx="310" cy="165" r="38"/>
        <circle cx="310" cy="165" r="16" strokeWidth="1.5" opacity="0.6"/>
        {treads(90, 165, 38, "l")}
        {treads(310, 165, 38, "r")}
        <path d="M 60 145 Q 80 110, 130 105 L 270 105 Q 320 110, 340 145"/>
        <path d="M 170 105 Q 200 75, 240 80 Q 245 95, 245 105"/>
        <path d="M 145 95 L 130 60 M 145 95 L 165 60"/>
        <line x1="120" y1="60" x2="140" y2="60" strokeWidth="3"/>
        <line x1="155" y1="60" x2="175" y2="60" strokeWidth="3"/>
        <circle cx="80" cy="125" r="5" fill="url(#atv-grad)" stroke="none"/>
        <line x1="65" y1="115" x2="105" y2="115" strokeWidth="2"/>
        <line x1="295" y1="115" x2="335" y2="115" strokeWidth="2"/>
      </g>
    </svg>
  );
};

const VehicleArt = ({ category, className }) => {
  switch (category) {
    case "sportbike": return <Sportbike className={className}/>;
    case "utv": return <UTV className={className}/>;
    case "watercraft": return <Watercraft className={className}/>;
    case "atv": return <ATV className={className}/>;
    default: return <Sportbike className={className}/>;
  }
};

const CMS_INVENTORY = [
  { id: "yzf-r1-2024", category: "sportbike", make: "Yamaha", model: "YZF-R1", year: 2024, price: 18399, mileage: 0, status: "in-stock", color: "Team Yamaha Blue", featured: true, specs: { engine: "998cc inline-4", power: "200 hp", weight: "443 lbs" }, tagline: "Track-bred superbike, street-legal" },
  { id: "rzr-xp-2024", category: "utv", make: "Polaris", model: "RZR XP 1000", year: 2024, price: 24995, mileage: 0, status: "in-stock", color: "Indy Red", featured: true, specs: { engine: "999cc twin", power: "110 hp", seating: "2-seat" }, tagline: "Desert-ready performance UTV" },
  { id: "gti-130-2024", category: "watercraft", make: "Sea-Doo", model: "GTI 130", year: 2024, price: 11499, mileage: 0, status: "in-stock", color: "Coral Blast", featured: false, specs: { engine: "1630 ACE", power: "130 hp", capacity: "3 riders" }, tagline: "The bestselling rec watercraft" },
  { id: "outlander-850-2023", category: "atv", make: "Can-Am", model: "Outlander 850", year: 2023, price: 9899, mileage: 12, status: "in-stock", color: "Tundra Green", featured: false, specs: { engine: "854cc twin", power: "78 hp", towing: "1,650 lbs" }, tagline: "All-terrain workhorse" },
  { id: "ninja-zx10r-2024", category: "sportbike", make: "Kawasaki", model: "Ninja ZX-10R", year: 2024, price: 17399, mileage: 0, status: "incoming", color: "Lime Green", featured: false, specs: { engine: "998cc inline-4", power: "200 hp", weight: "456 lbs" }, tagline: "Championship pedigree" },
  { id: "spark-trixx-2024", category: "watercraft", make: "Sea-Doo", model: "Spark Trixx", year: 2024, price: 7799, mileage: 0, status: "in-stock", color: "Vapor Blue", featured: false, specs: { engine: "900 ACE", power: "90 hp", capacity: "2 riders" }, tagline: "Built to play" },
];

const CMS_CATEGORIES = [
  { slug: "all", label: "All Inventory" },
  { slug: "sportbike", label: "Sportbikes" },
  { slug: "utv", label: "UTVs / SxS" },
  { slug: "atv", label: "ATVs" },
  { slug: "watercraft", label: "Watercraft" },
];

const CMS_TESTIMONIALS = [
  { quote: "Walked in Friday, rode out Saturday on a brand new RZR. The credit app process was the smoothest I've ever experienced.", author: "Mike R.", role: "RZR XP owner" },
  { quote: "These guys actually know powersports. Not just bikes — they ride.", author: "Sarah L.", role: "Ninja 650 owner" },
];

export default function Throttle() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState(null);
  const [leadOpen, setLeadOpen] = useState(false);

  const filtered = useMemo(() => CMS_INVENTORY.filter(v => {
    if (activeCategory !== "all" && v.category !== activeCategory) return false;
    if (search && !`${v.make} ${v.model} ${v.year}`.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  }), [activeCategory, search]);

  const featured = CMS_INVENTORY.filter(v => v.featured);

  return (
    <div className="min-h-screen bg-[#0a0e0d] text-zinc-100">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=JetBrains+Mono:wght@400;600&family=Space+Grotesk:wght@400;500;600;700&display=swap');
        .font-display { font-family: 'Bebas Neue', sans-serif; letter-spacing: 0.02em; }
        .font-sans { font-family: 'Space Grotesk', sans-serif; }
        .font-mono { font-family: 'JetBrains Mono', monospace; }
        .grid-bg { background-image: linear-gradient(rgba(74,222,196,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(74,222,196,0.04) 1px, transparent 1px); background-size: 56px 56px; }
        .diag-stripe { background: repeating-linear-gradient(45deg, rgba(74,222,196,0.08) 0 12px, transparent 12px 24px); }
        @keyframes slide-in { from { transform: translateY(20px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
        .slide-in { animation: slide-in 0.5s ease-out forwards; }
        @keyframes glow-pulse { 0%, 100% { box-shadow: 0 0 30px rgba(74, 222, 196, 0.2); } 50% { box-shadow: 0 0 60px rgba(74, 222, 196, 0.4); } }
        .hero-glow { animation: glow-pulse 3s ease-in-out infinite; }
        .marquee { display: inline-flex; animation: marquee 40s linear infinite; white-space: nowrap; }
        @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .vehicle-art-bg { background: radial-gradient(ellipse at 50% 60%, rgba(74,222,196,0.18) 0%, transparent 55%), radial-gradient(ellipse at 30% 30%, rgba(74,222,196,0.08) 0%, transparent 50%), linear-gradient(135deg, #111717 0%, #0a0e0d 100%); }
        .vehicle-art-bg-featured { background: radial-gradient(ellipse at 50% 50%, rgba(74,222,196,0.25) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(74,222,196,0.12) 0%, transparent 50%), linear-gradient(135deg, #131a19 0%, #0a0e0d 100%); }
        .vehicle-art-detail { background: radial-gradient(ellipse at 50% 55%, rgba(74,222,196,0.3) 0%, transparent 65%), linear-gradient(180deg, #131a19 0%, #0a0e0d 100%); }
        @keyframes vehicle-float { 0%, 100% { transform: translateY(0) scale(1); } 50% { transform: translateY(-4px) scale(1.01); } }
        .vehicle-float { animation: vehicle-float 4s ease-in-out infinite; }
        .scanlines::before { content: ''; position: absolute; inset: 0; background: repeating-linear-gradient(0deg, transparent 0, transparent 2px, rgba(74,222,196,0.03) 2px, rgba(74,222,196,0.03) 3px); pointer-events: none; opacity: 0; transition: opacity 0.3s; }
        .scanlines:hover::before { opacity: 1; }
      `}</style>

      <div className="font-sans">
        <div className="bg-emerald-400 text-black overflow-hidden">
          <div className="marquee py-1.5 text-xs font-mono font-semibold uppercase tracking-wider">
            {Array(2).fill(0).map((_, i) => (
              <span key={i} className="inline-flex items-center">
                <span className="mx-6">⚡ Spring sales event — 0% APR for 60 mo on select 2024 models</span>
                <span className="mx-6">·</span>
                <span className="mx-6">📍 Serving Tucson + the entire Southwest</span>
                <span className="mx-6">·</span>
                <span className="mx-6">🏁 Trade-in offers in 60 seconds</span>
                <span className="mx-6">·</span>
              </span>
            ))}
          </div>
        </div>

        <header className="border-b border-zinc-800 sticky top-0 z-30 bg-[#0a0e0d]/90 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-md bg-emerald-400 flex items-center justify-center -rotate-6 shadow-lg shadow-emerald-400/30">
                <Zap className="w-5 h-5 text-black" strokeWidth={3}/>
              </div>
              <div>
                <div className="font-display text-2xl leading-none">SAGUARO POWERSPORTS</div>
                <div className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest">Tucson, AZ · Est. 2014</div>
              </div>
            </div>
            <nav className="hidden md:flex items-center gap-7 text-sm">
              <a className="hover:text-emerald-400 transition" href="#inventory">Inventory</a>
              <a className="hover:text-emerald-400 transition" href="#financing">Financing</a>
              <a className="hover:text-emerald-400 transition" href="#about">About</a>
              <button onClick={() => setLeadOpen(true)} className="px-4 py-2 bg-emerald-400 text-black font-semibold rounded-md hover:bg-emerald-300 transition shadow-lg shadow-emerald-400/30">
                Get Pre-Approved
              </button>
            </nav>
          </div>
        </header>

        <section className="relative grid-bg overflow-hidden">
          <div className="absolute top-20 right-10 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-10 left-1/3 w-[500px] h-[500px] bg-emerald-400/5 rounded-full blur-3xl pointer-events-none"></div>
          <div className="max-w-7xl mx-auto px-6 py-20 md:py-32 relative">
            <div className="diag-stripe inline-block px-3 py-1 mb-6 border-l-2 border-emerald-400">
              <span className="font-mono text-xs uppercase tracking-widest text-emerald-400">2024 Models · In Stock Now</span>
            </div>
            <h1 className="font-display text-7xl md:text-9xl leading-[0.9] mb-6 max-w-5xl">
              GET <span className="text-emerald-400">DIRT</span> ON YOUR<br/>
              TIRES <span className="italic font-sans font-light text-4xl md:text-6xl text-zinc-500">— not paperwork on your desk.</span>
            </h1>
            <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mb-10 leading-relaxed">
              Arizona's most loved powersports dealer. Bikes, UTVs, ATVs, and watercraft —
              with a credit app you can finish in your driveway and a delivery process that
              gets you riding the same day.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#inventory" className="group inline-flex items-center gap-2 bg-emerald-400 hover:bg-emerald-300 text-black px-6 py-3.5 font-display text-xl rounded-md transition hero-glow">
                BROWSE INVENTORY
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition"/>
              </a>
              <button onClick={() => setLeadOpen(true)} className="inline-flex items-center gap-2 border border-zinc-700 hover:border-emerald-400 px-6 py-3.5 font-display text-xl rounded-md transition">
                APPLY FOR FINANCING
              </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 mt-20 pt-10 border-t border-zinc-900">
              {[
                { num: "350+", label: "Units sold annually" },
                { num: "60s", label: "Credit app turnaround" },
                { num: "4.9★", label: "1,200+ Google reviews" },
                { num: "10yr", label: "Tucson's home dealer" }
              ].map((s, i) => (
                <AnimatedStat key={i} value={s.num} label={s.label} />
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-zinc-900 bg-zinc-950/50">
          <div className="max-w-7xl mx-auto px-6 py-16">
            <div className="flex items-end justify-between mb-8">
              <div>
                <div className="font-mono text-xs uppercase tracking-widest text-emerald-400 mb-2">Featured This Week</div>
                <h2 className="font-display text-5xl">FRESH OFF THE TRUCK</h2>
              </div>
              <a href="#inventory" className="hidden md:flex items-center gap-1 text-sm text-zinc-400 hover:text-emerald-400 transition">
                See all <ChevronRight className="w-4 h-4"/>
              </a>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {featured.map(v => (
                <button key={v.id} onClick={() => setSelected(v)} className="group text-left bg-gradient-to-br from-zinc-900 to-[#0a0e0d] border border-zinc-800 hover:border-emerald-400/50 rounded-xl overflow-hidden transition-all hover:-translate-y-1">
                  <div className="relative vehicle-art-bg-featured aspect-[16/9] scanlines overflow-hidden">
                    <VehicleArt category={v.category} className="absolute inset-0 w-full h-full vehicle-float"/>
                    <div className="absolute top-4 left-4 px-2 py-1 bg-emerald-400/10 border border-emerald-400/30 backdrop-blur-sm text-emerald-400 text-[10px] font-mono uppercase tracking-widest rounded">
                      {v.year} · {v.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <div className="font-display text-3xl leading-none">{v.make}</div>
                        <div className="font-display text-3xl text-emerald-400">{v.model}</div>
                      </div>
                    </div>
                    <p className="text-sm text-zinc-400 mb-4">{v.tagline}</p>
                    <div className="flex items-end justify-between">
                      <div>
                        <div className="font-mono text-[10px] text-zinc-500 uppercase">Starting at</div>
                        <div className="font-display text-3xl">${v.price.toLocaleString()}</div>
                      </div>
                      <ArrowRight className="w-6 h-6 text-zinc-600 group-hover:text-emerald-400 group-hover:translate-x-1 transition"/>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>

        <section id="inventory" className="max-w-7xl mx-auto px-6 py-20">
          <div className="mb-10">
            <div className="font-mono text-xs uppercase tracking-widest text-emerald-400 mb-2">Live Inventory</div>
            <h2 className="font-display text-6xl">SHOP THE FLOOR</h2>
          </div>

          <div className="flex flex-col md:flex-row gap-3 mb-8">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500"/>
              <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search by make, model, year..." className="w-full bg-zinc-950 border border-zinc-800 focus:border-emerald-400 rounded-md pl-11 pr-4 py-3 text-sm focus:outline-none transition"/>
            </div>
            <div className="flex gap-2 overflow-x-auto">
              {CMS_CATEGORIES.map(c => (
                <button key={c.slug} onClick={() => setActiveCategory(c.slug)} className={`px-4 py-3 text-xs font-mono uppercase tracking-wider rounded-md whitespace-nowrap transition ${activeCategory === c.slug ? "bg-emerald-400 text-black shadow-lg shadow-emerald-400/30" : "bg-zinc-950 border border-zinc-800 text-zinc-400 hover:border-emerald-400/50"}`}>
                  {c.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((v, i) => (
              <button key={v.id} onClick={() => setSelected(v)} className="group text-left bg-zinc-950/60 border border-zinc-800 hover:border-emerald-400 rounded-lg overflow-hidden transition-all hover:-translate-y-1 slide-in" style={{ animationDelay: `${i * 50}ms` }}>
                <div className="aspect-[16/10] vehicle-art-bg relative scanlines overflow-hidden">
                  <VehicleArt category={v.category} className="absolute inset-0 w-full h-full"/>
                  {v.status === "incoming" && <div className="absolute top-3 right-3 px-2 py-1 bg-amber-400/20 border border-amber-400/40 backdrop-blur-sm text-amber-400 text-[10px] font-mono uppercase tracking-wider rounded">Incoming</div>}
                  {v.status === "in-stock" && <div className="absolute top-3 right-3 px-2 py-1 bg-emerald-400/20 border border-emerald-400/40 backdrop-blur-sm text-emerald-400 text-[10px] font-mono uppercase tracking-wider rounded">In Stock</div>}
                </div>
                <div className="p-5">
                  <div className="font-mono text-[10px] uppercase tracking-widest text-zinc-500 mb-1">{v.year} {v.category}</div>
                  <div className="font-display text-2xl leading-tight mb-1">{v.make} {v.model}</div>
                  <div className="text-sm text-zinc-500 mb-4">{v.color}</div>
                  <div className="flex items-end justify-between pt-3 border-t border-zinc-900">
                    <div className="font-display text-2xl">${v.price.toLocaleString()}</div>
                    <span className="text-xs text-emerald-400 group-hover:underline">View →</span>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {filtered.length === 0 && <div className="text-center py-20 text-zinc-500 font-mono text-sm">No matching units. Try adjusting your filters.</div>}
        </section>

        <section id="financing" className="border-t border-zinc-900 bg-zinc-950/40">
          <div className="max-w-7xl mx-auto px-6 py-20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="font-mono text-xs uppercase tracking-widest text-emerald-400 mb-2">The Saguaro Way</div>
                <h2 className="font-display text-6xl mb-6">FINANCING THAT<br/>DOESN'T <span className="text-emerald-400">SUCK</span>.</h2>
                <p className="text-zinc-400 text-lg leading-relaxed mb-8">
                  We send your credit app to multiple lenders simultaneously. Most customers
                  hear back in under 5 minutes. No retyping the same info into seven portals.
                  No "I'll call you back tomorrow." Just a price, a payment, and the keys.
                </p>
                <button onClick={() => setLeadOpen(true)} className="inline-flex items-center gap-2 bg-emerald-400 text-black px-6 py-3 font-display text-xl rounded-md hover:bg-emerald-300 transition shadow-lg shadow-emerald-400/30">
                  START PRE-APPROVAL <ArrowRight className="w-5 h-5"/>
                </button>
              </div>
              <div className="space-y-3">
                {[
                  { icon: Clock, title: "5-minute credit apps", body: "Submit once. We push to every lender that fits your profile." },
                  { icon: Shield, title: "No-impact pre-qual", body: "Soft pull lets you see your real rate before committing." },
                  { icon: MessageCircle, title: "Text-to-pay", body: "Down payment, deposits, and final payment — all by secure link." },
                  { icon: Check, title: "Trade-in offers in 60s", body: "Snap a few photos, get a real number from our buying team." },
                ].map((f, i) => (
                  <div key={i} className="flex gap-4 p-5 border border-zinc-800 rounded-lg hover:border-emerald-400/40 transition bg-gradient-to-br from-zinc-950/60 to-transparent">
                    <div className="shrink-0 w-10 h-10 rounded-md bg-emerald-400/10 border border-emerald-400/30 flex items-center justify-center">
                      <f.icon className="w-5 h-5 text-emerald-400"/>
                    </div>
                    <div>
                      <div className="font-display text-xl leading-tight mb-1">{f.title}</div>
                      <div className="text-sm text-zinc-400">{f.body}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 py-20">
          <div className="font-mono text-xs uppercase tracking-widest text-emerald-400 mb-2">From the Riders</div>
          <h2 className="font-display text-6xl mb-10">REAL CUSTOMERS. REAL RIDES.</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {CMS_TESTIMONIALS.map((t, i) => (
              <div key={i} className="p-8 border border-zinc-800 rounded-lg bg-gradient-to-br from-zinc-950 to-[#0a0e0d]">
                <div className="text-emerald-400 text-3xl font-display mb-3">"</div>
                <p className="text-lg text-zinc-200 mb-6 leading-relaxed">{t.quote}</p>
                <div className="font-mono text-xs uppercase tracking-wider">
                  <span className="text-zinc-100">{t.author}</span>
                  <span className="text-zinc-500"> · {t.role}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Service Department */}
        <section id="service" className="border-t border-zinc-900 bg-gradient-to-b from-[#0a0e0d] to-zinc-950/40">
          <div className="max-w-7xl mx-auto px-6 py-20">
            <div className="grid md:grid-cols-3 gap-8 items-start">
              <div className="md:col-span-1">
                <div className="font-mono text-xs uppercase tracking-widest text-emerald-400 mb-2">Service Department</div>
                <h2 className="font-display text-6xl mb-4 leading-none">KEEP IT<br/><span className="text-emerald-400">RIPPING.</span></h2>
                <p className="text-zinc-400 leading-relaxed">
                  Factory-trained techs. OEM parts. Online scheduling.
                  Most service jobs out the door same day or next.
                </p>
              </div>
              <div className="md:col-span-2 grid sm:grid-cols-2 gap-3">
                {[
                  { title: "Routine Service", body: "Oil changes, valve adjustments, belt service, tune-ups." },
                  { title: "Tire & Wheel", body: "Mount, balance, alignment. We stock most popular sizes." },
                  { title: "Performance Mods", body: "Exhausts, intake, suspension, ECU tunes — installed and dyno-tested." },
                  { title: "Winterization", body: "Storage prep for watercraft, UTVs, and ATVs. Pickup available." },
                ].map((s, i) => (
                  <div key={i} className="p-5 border border-zinc-800 rounded-lg hover:border-emerald-400/40 transition bg-zinc-950/40">
                    <div className="font-display text-2xl mb-2">{s.title}</div>
                    <div className="text-sm text-zinc-400 leading-relaxed">{s.body}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-10 pt-8 border-t border-zinc-900 flex flex-wrap items-center justify-between gap-4">
              <div className="font-mono text-xs uppercase tracking-widest text-zinc-500">Service hotline · 7am - 6pm Mon-Sat</div>
              <a href="tel:5205557433" className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 font-display text-2xl">
                <Phone className="w-5 h-5"/> (520) 555-RIDE
              </a>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="about" className="border-t border-zinc-900">
          <div className="max-w-7xl mx-auto px-6 py-20">
            <div className="bg-emerald-400 text-black rounded-2xl p-10 md:p-16 relative overflow-hidden shadow-2xl shadow-emerald-400/20">
              <div className="diag-stripe absolute inset-0 opacity-30 pointer-events-none"></div>
              <div className="relative">
                <div className="font-mono text-xs uppercase tracking-widest mb-3">Ready when you are</div>
                <h2 className="font-display text-6xl md:text-8xl leading-[0.9] mb-6 max-w-3xl">
                  STOP SCROLLING.<br/>START RIDING.
                </h2>
                <p className="text-lg max-w-xl mb-8">
                  Visit our showroom in Tucson, or knock the credit app out from your phone.
                  We'll have your unit prepped, registered, and ready to roll.
                </p>
                <div className="flex flex-wrap gap-3">
                  <button onClick={() => setLeadOpen(true)} className="inline-flex items-center gap-2 bg-black text-emerald-400 px-6 py-3 font-display text-xl rounded-md hover:bg-zinc-900 transition">
                    GET PRE-APPROVED <ArrowRight className="w-5 h-5"/>
                  </button>
                  <a href="tel:5205557433" className="inline-flex items-center gap-2 border-2 border-black px-6 py-3 font-display text-xl rounded-md hover:bg-black hover:text-emerald-400 transition">
                    <Phone className="w-5 h-5"/> (520) 555-RIDE
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="border-t border-zinc-900 bg-[#070908]">
          <div className="max-w-7xl mx-auto px-6 py-10">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div className="md:col-span-2">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-7 h-7 rounded-md bg-emerald-400 flex items-center justify-center -rotate-6">
                    <Zap className="w-4 h-4 text-black" strokeWidth={3}/>
                  </div>
                  <div className="font-display text-xl">SAGUARO POWERSPORTS</div>
                </div>
                <p className="text-sm text-zinc-500 max-w-md">
                  Family-owned powersports dealership serving Southern Arizona since 2014.
                </p>
              </div>
              <div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-zinc-500 mb-3">Visit</div>
                <div className="text-sm text-zinc-300 flex items-start gap-2">
                  <MapPin className="w-4 h-4 mt-0.5 text-emerald-400 shrink-0"/>
                  <span>4500 E Speedway Blvd<br/>Tucson, AZ 85712</span>
                </div>
              </div>
              <div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-zinc-500 mb-3">Hours</div>
                <div className="text-sm text-zinc-300 font-mono">
                  <div>Mon–Fri · 9–7</div>
                  <div>Sat · 9–5</div>
                  <div>Sun · Closed</div>
                </div>
              </div>
            </div>
            <div className="pt-6 border-t border-zinc-900 flex flex-col md:flex-row gap-2 justify-between text-[10px] font-mono uppercase tracking-widest text-zinc-600">
              <div>© 2026 Saguaro Powersports — Demo site by Zoriah Cocio</div>
              <div>Built with Next.js + Headless CMS · github.com/codejupiter/throttle</div>
            </div>
          </div>
        </footer>
      </div>

      {selected && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4" onClick={() => setSelected(null)}>
          <div className="bg-[#0a0e0d] border border-zinc-800 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
            <div className="aspect-[16/9] vehicle-art-detail relative overflow-hidden">
              <VehicleArt category={selected.category} className="absolute inset-0 w-full h-full vehicle-float"/>
              <div className="absolute top-4 left-4 px-3 py-1.5 bg-emerald-400/10 border border-emerald-400/30 backdrop-blur-sm text-emerald-400 text-xs font-mono uppercase tracking-widest rounded">
                {selected.year} · {selected.category} · {selected.color}
              </div>
              <button onClick={() => setSelected(null)} className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/60 hover:bg-black flex items-center justify-center text-zinc-400 hover:text-white transition">×</button>
            </div>
            <div className="p-8">
              <h2 className="font-display text-5xl mb-2">{selected.make} {selected.model}</h2>
              <p className="text-zinc-400 mb-6">{selected.tagline}</p>

              <div className="grid grid-cols-3 gap-3 mb-6 p-4 bg-zinc-950 rounded-lg border border-zinc-900">
                {Object.entries(selected.specs).map(([k, val]) => (
                  <div key={k}>
                    <div className="font-mono text-[10px] uppercase tracking-widest text-zinc-500 mb-1">{k}</div>
                    <div className="font-display text-xl">{val}</div>
                  </div>
                ))}
              </div>

              <div className="flex items-end justify-between mb-6 pt-4 border-t border-zinc-900">
                <div>
                  <div className="font-mono text-xs text-zinc-500 uppercase">Sale price</div>
                  <div className="font-display text-5xl text-emerald-400 drop-shadow-[0_0_20px_rgba(74,222,196,0.4)]">${selected.price.toLocaleString()}</div>
                </div>
                <div className="text-right">
                  <div className="font-mono text-xs text-zinc-500 uppercase">Estimated</div>
                  <div className="font-display text-2xl">${Math.round(selected.price / 60).toLocaleString()}<span className="text-sm text-zinc-500">/mo*</span></div>
                </div>
              </div>

              <div className="flex gap-3">
                <button onClick={() => { setSelected(null); setLeadOpen(true); }} className="flex-1 bg-emerald-400 hover:bg-emerald-300 text-black px-6 py-3 font-display text-xl rounded-md transition shadow-lg shadow-emerald-400/30">
                  APPLY FOR FINANCING
                </button>
                <button className="px-6 py-3 border border-zinc-700 hover:border-emerald-400 font-display text-xl rounded-md transition">
                  TEXT US
                </button>
              </div>
              <div className="font-mono text-[10px] text-zinc-600 mt-4 leading-relaxed">
                * Estimated payment based on 60-month term. Actual rate depends on credit. APR, taxes, and fees not included.
              </div>
            </div>
          </div>
        </div>
      )}

      {leadOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4" onClick={() => setLeadOpen(false)}>
          <div className="bg-[#0a0e0d] border border-emerald-400/40 rounded-2xl max-w-md w-full shadow-2xl shadow-emerald-400/20" onClick={e => e.stopPropagation()}>
            <div className="p-8">
              <div className="font-mono text-[10px] uppercase tracking-widest text-emerald-400 mb-1">Pre-Qualification</div>
              <h2 className="font-display text-4xl mb-2">GET PRE-APPROVED</h2>
              <p className="text-sm text-zinc-400 mb-6">Soft credit pull — won't impact your score. Takes about 60 seconds.</p>

              <div className="space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <input placeholder="First name" className="bg-zinc-950 border border-zinc-800 focus:border-emerald-400 rounded-md px-4 py-3 text-sm focus:outline-none transition"/>
                  <input placeholder="Last name" className="bg-zinc-950 border border-zinc-800 focus:border-emerald-400 rounded-md px-4 py-3 text-sm focus:outline-none transition"/>
                </div>
                <input placeholder="Email" type="email" className="w-full bg-zinc-950 border border-zinc-800 focus:border-emerald-400 rounded-md px-4 py-3 text-sm focus:outline-none transition"/>
                <input placeholder="Phone" type="tel" className="w-full bg-zinc-950 border border-zinc-800 focus:border-emerald-400 rounded-md px-4 py-3 text-sm focus:outline-none transition"/>
                <select className="w-full bg-zinc-950 border border-zinc-800 focus:border-emerald-400 rounded-md px-4 py-3 text-sm focus:outline-none transition">
                  <option>What are you shopping for?</option>
                  <option>Sportbike / Street motorcycle</option>
                  <option>UTV / Side-by-side</option>
                  <option>ATV</option>
                  <option>Watercraft</option>
                  <option>Just browsing</option>
                </select>

                <button onClick={() => setLeadOpen(false)} className="w-full bg-emerald-400 hover:bg-emerald-300 text-black py-3.5 font-display text-xl rounded-md transition mt-2 shadow-lg shadow-emerald-400/30">
                  SUBMIT APPLICATION
                </button>
                <button onClick={() => setLeadOpen(false)} className="w-full text-zinc-500 text-xs hover:text-zinc-300 transition">Cancel</button>
              </div>

              <div className="mt-6 pt-4 border-t border-zinc-900 text-[10px] font-mono text-zinc-600 leading-relaxed">
                Your info is encrypted. We share with lenders only after you confirm. By continuing you agree to our Privacy Policy.
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}