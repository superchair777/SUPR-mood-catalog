
'use client';

import * as React from 'react';
import { useState, useEffect, useRef, useMemo } from 'react';
import { Sheet, CatalogPage, Product, Client, Project, CategoryItem, MoodItem, Hotspot } from '../types';
import { ChevronLeft, ChevronRight, Sparkles, Scan, Globe, Award, Leaf, ShieldCheck, MapPin, Building2, ArrowRight, X, ZoomIn } from 'lucide-react';
import { generateMarketingCopy } from '../services/geminiService';

// --- Localized UI Strings ---
const UI_STRINGS: Record<string, any> = {
    en: {
        est: 'EST. 2010',
        catalogue: 'CATALOGUE 2026',
        architecture: 'The Architecture of Performance',
        directorsNote: "Director's Note",
        inventory: 'Inventory',
        swipe: 'SWIPE TO TURN',
        archive: 'ARCHIVE V4.2',
        system: 'SYSTEM V4.2',
        portfolio: 'SUPR_PORTFOLIO',
        procurement: 'Procurement Cycle',
        enterprise: 'ENTERPRISE PRESENCE',
        standard: 'THE SUPR',
        ethics: 'Ethics & Sustainability',
        warranty: '15 Year Warranty',
        circular: 'Circular System',
        standardSub: 'Standard',
        since: 'SINCE 2010',
        voice: 'Voice Line',
        archWork: 'Architecture of Work',
        aiConsulting: 'Consulting AI...',
        aiSpecs: 'AI Specifications',
        billboardTitle: 'GLOBAL',
        billboardSub: 'ADOPTERS',
        yearsExperience: '15+ YEARS',
        explore: 'EXPLORE'
    },
    th: {
        est: 'ก่อตั้งปี 2010',
        catalogue: 'แคตตาล็อก 2026',
        architecture: 'สถาปัตยกรรมแห่งประสิทธิภาพ',
        directorsNote: "บันทึกจากผู้อำนวยการ",
        inventory: 'สินค้าคงคลัง',
        swipe: 'ปัดเพื่อเปลี่ยนหน้า',
        archive: 'คลังข้อมูล V4.2',
        system: 'ระบบ V4.2',
        portfolio: 'SUPR_PORTFOLIO',
        procurement: 'วงจรการจัดซื้อ',
        enterprise: 'การปรากฏตัวระดับองค์กร',
        standard: 'SUPR',
        ethics: 'จริยธรรมและความยั่งยืน',
        warranty: 'รับประกัน 15 ปี',
        circular: 'ระบบหมุนเวียน',
        standardSub: 'มาตรฐาน',
        since: 'ตั้งแต่ 2010',
        voice: 'สายด่วน',
        archWork: 'สถาปัตยกรรมแห่งการทำงาน',
        aiConsulting: 'กำลังปรึกษา AI...',
        aiSpecs: 'ข้อมูลจำเพาะโดย AI',
        billboardTitle: 'ผู้ใช้งาน',
        billboardSub: 'ทั่วโลก',
        yearsExperience: 'มากกว่า 15 ปี',
        explore: 'ดูรายละเอียด'
    }
};

// --- Sub-Components ---

const ZoomOverlay = ({ src, onClose }: { src: string, onClose: () => void }) => {
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [onClose]);

    return (
        <div 
            className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/95 backdrop-blur-md p-4 animate-in fade-in duration-300"
            onClick={(e) => { e.stopPropagation(); onClose(); }}
            style={{ touchAction: 'none' }}
        >
            <button 
                onClick={onClose}
                className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors bg-white/10 p-2 rounded-full"
            >
                <X size={24} />
            </button>
            <img 
                src={src} 
                alt="Enlarged view" 
                className="max-w-full max-h-full object-contain shadow-2xl rounded-sm select-none"
                onClick={(e) => e.stopPropagation()}
            />
        </div>
    );
};

const ProductGridItem: React.FC<{ product: Product, lang: string, onZoom?: (src: string) => void, isHighlighted?: boolean }> = ({ product, lang, onZoom, isHighlighted }) => {
  const [description, setDescription] = useState(product.description);
  const [loading, setLoading] = useState(false);
  const itemRef = useRef<HTMLDivElement>(null);
  const t = UI_STRINGS[lang];

  useEffect(() => {
    if (isHighlighted && itemRef.current) {
        // Force scroll with a slight delay to ensure layout is ready
        setTimeout(() => {
            itemRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 100);
    }
  }, [isHighlighted]);

  const handleEnhance = async (e: React.MouseEvent) => {
    e.stopPropagation();
    setLoading(true);
    const newDesc = await generateMarketingCopy(product.name, product.features, lang);
    setDescription(newDesc);
    setLoading(false);
  };

  const handleImageClick = (e: React.MouseEvent) => {
      e.stopPropagation();
      if (onZoom) {
          onZoom(product.image);
      }
  };

  return (
    <div 
        ref={itemRef}
        className={`flex flex-col items-center text-center p-2 group cursor-pointer transition-all duration-500 ease-out ${isHighlighted ? 'scale-105 z-20' : 'z-0'}`}
    >
      <div 
        className={`relative w-full aspect-[4/3] mb-3 overflow-hidden rounded-sm bg-slate-50 border transition-all duration-500 ${isHighlighted ? 'border-supr-gold shadow-[0_0_50px_rgba(212,175,55,0.6)] ring-4 ring-supr-gold ring-offset-4 ring-offset-white' : 'border-slate-100/50 group-hover:border-supr-gold/20'}`}
        onClick={handleImageClick}
      >
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500 p-4"
        />
        {/* Hover overlay hint */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100 pointer-events-none">
             <ZoomIn size={24} className="text-slate-900/40" />
        </div>

        <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity flex gap-1 z-10">
            <button 
                onPointerDown={(e) => e.stopPropagation()} 
                onClick={handleEnhance} 
                className="bg-slate-900 text-white p-1.5 rounded-full hover:bg-supr-gold transition-colors shadow-sm" 
                title={t.aiSpecs}
            >
                <Sparkles size={10} />
            </button>
        </div>
      </div>

      <div className="w-full flex flex-col gap-1 relative">
        {isHighlighted && (
            <div className="absolute -left-2 -right-2 top-0 bottom-0 bg-supr-gold/10 -z-10 rounded-lg blur-xl animate-pulse"></div>
        )}
        <div className="flex flex-col items-center">
            <span className="font-sans text-[10px] font-black text-slate-400 uppercase tracking-widest">{product.code}</span>
            <span className={`font-sans text-xs font-bold uppercase tracking-tight transition-colors duration-300 ${isHighlighted ? 'text-supr-gold' : 'text-slate-900'}`}>{product.name}</span>
            <p className="text-[10px] text-slate-500 leading-tight max-w-[90%] mx-auto line-clamp-2 h-6 mt-1">
               {loading ? t.aiConsulting : description}
            </p>
        </div>
      </div>
    </div>
  );
};

const MoodGridLayout = ({ moods, title, subtitle, pageNumber }: { moods: MoodItem[], title?: string, subtitle?: string, pageNumber?: number }) => {
    return (
        <div className="h-full w-full bg-white flex flex-col relative select-none">
             {/* Header */}
            <div className="px-6 pt-6 md:px-8 md:pt-8 pb-4 border-b border-slate-100 flex justify-between items-end">
                <div>
                    <h3 className="text-2xl md:text-3xl font-black text-slate-900 uppercase tracking-tighter leading-none">{title}</h3>
                    <span className="text-[10px] md:text-xs text-slate-400 font-mono uppercase tracking-[0.2em]">{subtitle}</span>
                </div>
                <div className="w-8 h-8 md:w-10 md:h-10 border border-slate-900 rounded-full flex items-center justify-center">
                    <Sparkles size={14} className="text-slate-900" />
                </div>
            </div>

            <div 
                className="flex-1 overflow-y-auto p-4 md:p-6 touch-pan-y"
                onPointerDown={(e) => e.stopPropagation()}
                onTouchStart={(e) => e.stopPropagation()}
            >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 h-full">
                    {moods.map((mood) => (
                        <div key={mood.id} className="group relative flex flex-col h-full min-h-[160px] bg-slate-50 border border-slate-100 hover:border-supr-gold/30 transition-all duration-300 rounded-sm overflow-hidden">
                            <div className="relative h-3/5 overflow-hidden">
                                <img src={mood.image} alt={mood.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter grayscale-[0.2] group-hover:grayscale-0" />
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
                            </div>
                            <div className="flex-1 p-4 flex flex-col justify-between bg-white relative">
                                <div>
                                    <h4 className="font-bold text-sm uppercase tracking-tight text-slate-900 mb-1 group-hover:text-supr-gold transition-colors">{mood.title}</h4>
                                    <p className="text-[9px] text-slate-500 leading-relaxed font-medium">{mood.description}</p>
                                </div>
                                <div className="w-full h-0.5 bg-slate-100 mt-3 group-hover:bg-supr-gold transition-colors"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="absolute bottom-4 right-6 text-slate-300 font-mono text-[10px] pointer-events-none">
                {pageNumber}
            </div>
        </div>
    );
};

const CategoriesLayout = ({ categories, title, subtitle, pageNumber, lang, onNavigate }: { categories: CategoryItem[], title?: string, subtitle?: string, pageNumber?: number, lang: string, onNavigate?: (page: number) => void }) => {
    const t = UI_STRINGS[lang];
    return (
        <div className="h-full w-full bg-white flex flex-col relative select-none">
            {/* Header */}
            <div className="px-6 pt-6 md:px-8 md:pt-8 pb-4 border-b border-slate-100">
                <h3 className="text-2xl md:text-3xl font-black text-slate-900 uppercase tracking-tighter leading-none">{title}</h3>
                <span className="text-[10px] md:text-xs text-slate-400 font-mono uppercase tracking-[0.2em]">{subtitle}</span>
            </div>

            {/* List */}
            <div 
                className="flex-1 overflow-y-auto touch-pan-y"
                onTouchStart={(e) => e.stopPropagation()}
            >
                {categories.map((cat, index) => (
                    <div 
                        key={cat.id} 
                        onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            if (cat.targetPage !== undefined && onNavigate) {
                                onNavigate(cat.targetPage);
                            }
                        }}
                        className="group flex items-stretch h-1/3 min-h-[140px] border-b border-slate-100 hover:bg-slate-50 transition-colors cursor-pointer relative overflow-hidden"
                    >
                         <div className="w-1/3 md:w-1/2 relative overflow-hidden">
                             <img 
                                src={cat.image} 
                                alt={cat.title} 
                                className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700" 
                             />
                             <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors"></div>
                         </div>
                         <div className="flex-1 p-6 flex flex-col justify-center relative">
                             <span className="text-[9px] font-mono text-slate-300 absolute top-4 right-4">0{index + 1}</span>
                             <h4 className="text-lg md:text-xl font-bold uppercase text-slate-900 mb-2">{cat.title}</h4>
                             <p className="text-[10px] md:text-xs font-serif text-slate-500 italic leading-relaxed max-w-[200px]">{cat.description}</p>
                             
                             <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                                 <div className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-widest text-supr-gold">
                                     {t.explore} <ArrowRight size={12} />
                                 </div>
                             </div>
                         </div>
                    </div>
                ))}
            </div>

            <div className="absolute bottom-4 left-6 text-slate-200 font-mono text-[10px] pointer-events-none">
                {pageNumber}
            </div>
        </div>
    );
};

const LOGO_URLS = [
    "https://ik.imagekit.io/lfzeyp6hte/clients%20logo%20SUPR/drive-download-20251226T045045Z-3-001/9.png?updatedAt=1766724887777",
    "https://ik.imagekit.io/lfzeyp6hte/clients%20logo%20SUPR/drive-download-20251226T045045Z-3-001/20.png?updatedAt=1766724887759",
    "https://ik.imagekit.io/lfzeyp6hte/clients%20logo%20SUPR/drive-download-20251226T045045Z-3-001/4.png?updatedAt=1766724887752",
    "https://ik.imagekit.io/lfzeyp6hte/clients%20logo%20SUPR/drive-download-20251226T045045Z-3-001/7.png?updatedAt=1766724887763",
    "https://ik.imagekit.io/lfzeyp6hte/clients%20logo%20SUPR/drive-download-20251226T045045Z-3-001/6.png?updatedAt=1766724887710",
    "https://ik.imagekit.io/lfzeyp6hte/clients%20logo%20SUPR/drive-download-20251226T045045Z-3-001/1.png?updatedAt=1766724887757",
    "https://ik.imagekit.io/lfzeyp6hte/clients%20logo%20SUPR/drive-download-20251226T045045Z-3-001/11.png?updatedAt=1766724887744",
    "https://ik.imagekit.io/lfzeyp6hte/clients%20logo%20SUPR/drive-download-20251226T045045Z-3-001/14.png?updatedAt=1766724887735",
    "https://ik.imagekit.io/lfzeyp6hte/clients%20logo%20SUPR/drive-download-20251226T045045Z-3-001/17.png?updatedAt=1766724887756",
    "https://ik.imagekit.io/lfzeyp6hte/clients%20logo%20SUPR/drive-download-20251226T045045Z-3-001/10.png?updatedAt=1766724887746",
    "https://ik.imagekit.io/lfzeyp6hte/clients%20logo%20SUPR/drive-download-20251226T045045Z-3-001/2.png?updatedAt=1766724887712",
    "https://ik.imagekit.io/lfzeyp6hte/clients%20logo%20SUPR/drive-download-20251226T045045Z-3-001/19.png?updatedAt=1766724887719",
    "https://ik.imagekit.io/lfzeyp6hte/clients%20logo%20SUPR/drive-download-20251226T045045Z-3-001/5.png?updatedAt=1766724887650",
    "https://ik.imagekit.io/lfzeyp6hte/clients%20logo%20SUPR/drive-download-20251226T045045Z-3-001/13.png?updatedAt=1766724887659",
    "https://ik.imagekit.io/lfzeyp6hte/clients%20logo%20SUPR/drive-download-20251226T045045Z-3-001/18.png?updatedAt=1766724887641",
    "https://ik.imagekit.io/lfzeyp6hte/clients%20logo%20SUPR/drive-download-20251226T045045Z-3-001/12.png?updatedAt=1766724887760",
    "https://ik.imagekit.io/lfzeyp6hte/clients%20logo%20SUPR/drive-download-20251226T045045Z-3-001/15.png?updatedAt=1766724887617",
    "https://ik.imagekit.io/lfzeyp6hte/clients%20logo%20SUPR/drive-download-20251226T045045Z-3-001/8.png?updatedAt=1766724887701"
];

const ScrollingLogoRow = ({ images, direction = 'normal', speed = '25s', theme = 'dark' }: { images: string[], direction?: 'normal' | 'reverse', speed?: string, theme?: 'dark' | 'light' }) => {
    const isDark = theme === 'dark';
    return (
        <div className="flex overflow-hidden relative w-full group py-4 space-x-8">
             <div className={`absolute inset-y-0 left-0 w-20 bg-gradient-to-r ${isDark ? 'from-[#121418]' : 'from-white'} to-transparent z-10`}></div>
             <div className={`absolute inset-y-0 right-0 w-20 bg-gradient-to-l ${isDark ? 'from-[#121418]' : 'from-white'} to-transparent z-10`}></div>
             
             <div 
                className={`flex shrink-0 items-center justify-around gap-8 min-w-full ${direction === 'reverse' ? 'animate-marquee-reverse' : 'animate-marquee'}`}
                style={{ animationDuration: speed }}
             >
                 {images.map((url, i) => (
                     <div key={`logo-1-${i}`} className={`w-32 h-24 md:w-48 md:h-32 flex items-center justify-center ${isDark ? 'bg-white/5 border-white/5 hover:bg-white/10' : 'bg-slate-900/5 border-slate-900/5 hover:bg-slate-900/10'} border rounded-sm p-4 transition-colors`}>
                         <img src={url} alt="Client Logo" className="w-full h-full object-contain transition-all" />
                     </div>
                 ))}
             </div>
             <div 
                className={`flex shrink-0 items-center justify-around gap-8 min-w-full ${direction === 'reverse' ? 'animate-marquee-reverse' : 'animate-marquee'}`}
                style={{ animationDuration: speed }}
             >
                 {images.map((url, i) => (
                     <div key={`logo-2-${i}`} className={`w-32 h-24 md:w-48 md:h-32 flex items-center justify-center ${isDark ? 'bg-white/5 border-white/5 hover:bg-white/10' : 'bg-slate-900/5 border-slate-900/5 hover:bg-slate-900/10'} border rounded-sm p-4 transition-colors`}>
                         <img src={url} alt="Client Logo" className="w-full h-full object-contain transition-all" />
                     </div>
                 ))}
             </div>
        </div>
    )
}

const ClientsLayout = ({ clients, pageNumber, lang }: { clients: Client[], pageNumber?: number, lang: string }) => {
  const t = UI_STRINGS[lang];
  return (
    <div className="h-full w-full bg-[#121418] flex flex-col relative overflow-hidden p-8 md:p-12 select-none">
       {/* Dot Grid Background */}
       <div className="absolute inset-0 opacity-[0.1] pointer-events-none" 
            style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
       </div>
       
       {/* Header section */}
       <div className="relative z-20 flex justify-between items-start mb-8">
            <div className="space-y-1">
                <div className="flex items-center gap-2 mb-2">
                    <div className="w-1.5 h-1.5 bg-supr-gold rounded-full"></div>
                    <span className="text-[10px] md:text-[12px] font-black text-supr-gold tracking-[0.3em] uppercase">{t.enterprise}</span>
                </div>
                <h3 className="text-4xl md:text-6xl font-[900] text-white italic tracking-tighter leading-none uppercase">
                    {t.billboardTitle}<br/>
                    <span className="text-supr-gold">{t.billboardSub}</span>
                </h3>
            </div>
            <div className="text-right flex flex-col items-end pt-2">
                <Globe size={24} className="text-white/20 mb-2" />
                <span className="block text-[10px] md:text-[12px] font-mono font-black text-slate-400 uppercase tracking-widest italic">{t.yearsExperience}</span>
            </div>
       </div>

       {/* Logo Grid - Billboard Style - REPLACED with Scrolling Rows */}
       <div className="relative z-20 flex-1 flex flex-col justify-center gap-4">
            <ScrollingLogoRow images={LOGO_URLS.slice(0, 5)} direction="normal" speed="35s" />
            <ScrollingLogoRow images={LOGO_URLS.slice(5, 10)} direction="reverse" speed="35s" />
            <ScrollingLogoRow images={LOGO_URLS.slice(10, 14)} direction="normal" speed="35s" />
            <ScrollingLogoRow images={LOGO_URLS.slice(14, 18)} direction="reverse" speed="35s" />
       </div>

        <div className="absolute bottom-4 right-8 text-white/10 font-mono text-[10px] z-20 font-black tracking-widest">
            {pageNumber && `ARCHIVE_REF: [${pageNumber}]`}
        </div>
    </div>
  );
}

const HotspotTag: React.FC<{ hotspot: Hotspot, onClick: (id: string) => void }> = ({ hotspot, onClick }) => {
    return (
        <button
            className="absolute z-[100] group cursor-pointer pointer-events-auto"
            style={{ top: `${hotspot.y}%`, left: `${hotspot.x}%` }}
            onPointerDown={(e) => { e.stopPropagation(); }}
            onMouseDown={(e) => { e.stopPropagation(); }}
            onTouchStart={(e) => { e.stopPropagation(); }}
            onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
                onClick(hotspot.targetId);
            }}
        >
            <div className="relative transform transition-transform duration-200 hover:scale-125 active:scale-95">
                 {/* Expanded hit area */}
                <div className="absolute -inset-3 bg-transparent rounded-full z-0"></div>
                <div className="relative z-10 w-4 h-4 md:w-5 md:h-5 bg-supr-gold rounded-full border-[3px] border-white shadow-[0_4px_10px_rgba(0,0,0,0.3)] animate-pulse hover:animate-none"></div>
                <div className="absolute top-1/2 left-full ml-3 -translate-y-1/2 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-sm shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap border-l-2 border-supr-gold">
                    <span className="text-[10px] md:text-xs font-bold text-slate-900 uppercase tracking-wider">{hotspot.label}</span>
                </div>
            </div>
        </button>
    );
};

const PageContent = ({ 
    page, 
    lang, 
    onNavigate, 
    onZoom,
    highlightedId,
    onTagClick
}: { 
    page: CatalogPage, 
    lang: string, 
    onNavigate?: (page: number) => void, 
    onZoom?: (src: string) => void,
    highlightedId?: string | null,
    onTagClick?: (id: string) => void
}) => {
  const t = UI_STRINGS[lang];
  // State to track which step is currently hovered for tooltip display
  const [hoveredStepId, setHoveredStepId] = useState<string | null>(null);

  if (!page || page.layout === 'empty') {
      return <div className="h-full w-full bg-white"></div>;
  }

  // ... (cover, intro, full-image, mood-grid, categories, clients, projects, process-strip layouts omitted for brevity, logic remains identical, will return standard div if matched but no changes needed)
  if (page.type === 'cover' || page.layout === 'intro' || page.layout === 'full-image' || page.layout === 'mood-grid' || page.layout === 'categories' || page.layout === 'clients' || page.layout === 'projects' || page.layout === 'process-strip' || page.layout === 'summary' || page.type === 'back-cover') {
      // Re-use existing render logic blocks from previous implementation 
      // NOTE: In a real refactor I would keep the code, but for XML output I must provide the FULL CONTENT.
      // So I will copy paste the previous implementations here.
      
      if (page.type === 'cover') {
        return (
          <div className="h-full w-full bg-[#0A0C10] relative overflow-hidden flex flex-col items-center justify-center text-white select-none">
              <img 
                src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=1200" 
                className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none"
                alt=""
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0F1115] via-transparent to-[#0F1115]/80 pointer-events-none"></div>
              
              <div className="absolute inset-0 opacity-[0.05] pointer-events-none"
                   style={{ backgroundImage: 'linear-gradient(45deg, #fff 1px, transparent 1px), linear-gradient(-45deg, #fff 1px, transparent 1px)', backgroundSize: '80px 80px' }}>
              </div>

              <div className="relative z-10 flex flex-col items-center text-center px-4 w-full pointer-events-none">
                  <div className="flex items-center gap-6 mb-16 opacity-60">
                      <div className="h-[1px] w-8 md:w-12 bg-supr-gold"></div>
                      <span className="text-[8px] md:text-[10px] font-mono tracking-[0.5em] text-supr-gold uppercase">{t.est}</span>
                      <div className="h-[1px] w-8 md:w-12 bg-supr-gold"></div>
                  </div>

                  <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-[0.2em] xs:tracking-[0.3em] sm:tracking-[0.4em] md:tracking-[0.6em] uppercase ml-[0.2em] xs:ml-[0.3em] sm:ml-[0.4em] md:ml-[0.6em] transition-all duration-1000 whitespace-nowrap">
                    SUPR
                  </h1>
                  
                  <div className="w-16 md:w-64 h-[1px] bg-slate-700/50 my-10 md:my-16"></div>
                  
                  <div className="space-y-4">
                      <span className="block text-[8px] md:text-[14px] font-mono text-slate-500 uppercase tracking-[0.8em] md:tracking-[1.5em]">
                        {t.catalogue}
                      </span>
                      <p className="text-[7px] md:text-[10px] font-sans font-medium text-supr-gold/40 uppercase tracking-[0.3em] italic">
                        {t.architecture}
                      </p>
                  </div>
              </div>

              <div className="absolute inset-8 md:inset-12 border border-white/5 pointer-events-none"></div>
              <div className="absolute top-8 left-8 md:top-12 md:left-12 w-4 h-4 md:w-6 md:h-6 border-t border-l border-supr-gold/20 pointer-events-none"></div>
              <div className="absolute bottom-8 right-8 md:bottom-12 md:right-12 w-4 h-4 md:w-6 md:h-6 border-b border-r border-supr-gold/20 pointer-events-none"></div>
          </div>
        );
      }

      if (page.layout === 'intro') {
        const hasBg = !!page.heroImage;
        return (
          <div className={`h-full w-full relative overflow-hidden p-8 md:p-12 flex flex-col justify-center select-none ${hasBg ? 'bg-slate-900' : 'bg-white'}`}>
              {hasBg && (
                  <>
                    <img src={page.heroImage} alt="Background" className="absolute inset-0 w-full h-full object-cover pointer-events-none" />
                    <div className="absolute inset-0 bg-black/70 pointer-events-none"></div>
                  </>
              )}

              <div className={`relative z-10 flex flex-col justify-center h-full w-full ${hasBg ? 'text-white' : 'text-slate-900'}`}>
                <h1 className={`text-4xl md:text-7xl font-sans font-bold tracking-tighter mb-2 leading-[0.8]`}>{page.title || 'SUPR'}</h1>
                <h2 className={`text-lg md:text-3xl font-serif italic ${hasBg ? 'text-white/80' : 'text-slate-500'}`}>{page.subtitle || 'Modernity'}</h2>
                <div className="w-12 md:w-24 h-1 bg-supr-gold mt-6 md:mt-8 mb-6 md:mb-8"></div>
                <div className="space-y-6 md:space-y-8 max-w-sm">
                    <div>
                        <h3 className={`text-[10px] md:text-sm font-bold uppercase tracking-wider border-b pb-2 mb-3 ${hasBg ? 'border-white/30' : 'border-slate-200'}`}>{t.directorsNote}</h3>
                        <p className={`text-[9px] md:text-xs leading-relaxed font-serif ${hasBg ? 'text-white/90' : 'text-slate-600'}`}>
                            {page.marketingCopy}
                        </p>
                    </div>
                </div>
             </div>
          </div>
        );
      }

      if (page.layout === 'full-image') {
        return (
           <div className="h-full w-full bg-slate-100 relative overflow-hidden select-none">
               <img 
                  src={page.heroImage} 
                  className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                  alt="Mood"
               />
               <div className="absolute bottom-6 left-6 text-white/50 text-[9px] font-mono tracking-widest">{t.portfolio}</div>
           </div>
        )
      }

      if (page.layout === 'mood-grid' && page.moods) {
          return <MoodGridLayout moods={page.moods} title={page.title} subtitle={page.subtitle} pageNumber={page.pageNumber} />;
      }

      if (page.layout === 'categories' && page.categories) {
          return <CategoriesLayout categories={page.categories} title={page.title} subtitle={page.subtitle} pageNumber={page.pageNumber} lang={lang} onNavigate={onNavigate} />;
      }

      if (page.layout === 'clients' && page.clients) {
          return <ClientsLayout clients={page.clients} pageNumber={page.pageNumber} lang={lang} />;
      }

      if (page.layout === 'projects' && page.projects) {
        return (
            <div className="h-full w-full bg-[#121418] flex flex-col relative select-none">
                <div className="px-6 pt-6 md:px-8 md:pt-8 pb-4 flex-shrink-0 z-10">
                    <div className="flex justify-between items-end mb-2 border-b-2 border-supr-gold pb-2">
                        <div>
                             <h3 className="text-xl md:text-3xl font-black text-white uppercase tracking-tighter">{page.title}</h3>
                             <span className="text-[10px] md:text-xs text-slate-500 font-mono uppercase tracking-[0.2em]">{page.subtitle}</span>
                        </div>
                        <div className="text-right">
                            <span className="font-mono text-[10px] text-supr-gold font-bold">{t.portfolio}</span>
                        </div>
                    </div>
                </div>

                <div 
                    className="flex-1 overflow-y-auto px-6 md:px-8 scrollbar-thin scrollbar-thumb-white/10 touch-pan-y" 
                    onPointerDown={(e) => e.stopPropagation()}
                    onTouchStart={(e) => e.stopPropagation()}
                >
                    <div className="space-y-6 md:space-y-10 pb-16">
                        {page.projects.map((proj) => (
                            <div key={proj.id} className="group relative w-full aspect-[16/9] overflow-hidden rounded-sm border border-white/5">
                                <img 
                                    src={proj.image} 
                                    alt={proj.title} 
                                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700 opacity-60 group-hover:opacity-100" 
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                                    <h4 className="font-bold text-sm md:text-lg tracking-tight">{proj.title}</h4>
                                    <span className="text-[8px] md:text-[10px] font-mono text-supr-gold uppercase tracking-widest">{proj.location}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                 <div className="absolute bottom-4 left-6 text-white/20 font-mono text-[10px] z-20 pointer-events-none">
                    [{page.pageNumber}]
                </div>
            </div>
        );
      }

      if (page.layout === 'process-strip' && page.steps) {
          return (
            <div className="h-full w-full flex flex-col bg-white p-6 md:p-12 relative select-none overflow-hidden">
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
                     style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
                </div>
                <div className="mb-6 md:mb-10 z-10 border-b-[1px] border-slate-900 pb-2 flex justify-between items-end">
                    <h3 className="text-xl md:text-2xl lg:text-3xl font-[900] font-sans uppercase tracking-tight text-slate-900 leading-none">{t.procurement}</h3>
                    <span className="text-[7px] md:text-[9px] font-mono text-slate-400 font-bold tracking-widest">SUPR_v4.2</span>
                </div>
                <div className="flex-1 flex flex-col justify-between relative z-10 py-1 md:py-2">
                    <div className="absolute left-[20px] md:left-[24px] lg:left-[28px] top-6 bottom-6 w-px border-l-[1px] border-dotted border-slate-300"></div>
                    {page.steps.map((step, index) => (
                        <div key={step.id} className="flex items-center gap-4 md:gap-6 lg:gap-8 group relative h-1/5 max-h-[110px]">
                            <div className="relative flex-shrink-0 z-20">
                                <div className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-full bg-white border-[1.5px] border-slate-900 flex flex-col items-center justify-center font-mono text-[12px] md:text-sm lg:text-base font-[900] text-slate-900 shadow-sm group-hover:bg-slate-900 group-hover:text-white transition-all duration-300">
                                    {String(index + 1).padStart(2, '0')}
                                </div>
                            </div>
                            <div 
                                className="flex-1 flex items-center gap-3 md:gap-4 lg:gap-6 p-3 md:p-4 bg-white border border-slate-100 shadow-[0_2px_15px_rgba(0,0,0,0.03)] rounded-sm hover:shadow-lg transition-all duration-500 group relative cursor-pointer"
                                onClick={() => onZoom?.(step.image)}
                                onMouseEnter={() => setHoveredStepId(step.id)}
                                onMouseLeave={() => setHoveredStepId(null)}
                            >
                                <div className="w-16 h-12 md:w-20 md:h-16 lg:w-24 lg:h-18 overflow-hidden bg-slate-100 flex-shrink-0 border border-slate-200 rounded-sm">
                                    <img src={step.image} alt="" className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-all duration-700" />
                                </div>
                                <div className="flex-1 min-w-0 pr-6">
                                <h4 className="font-[900] text-[10px] md:text-sm lg:text-base uppercase tracking-tight text-slate-900 mb-0.5">{step.title}</h4>
                                <p className="text-[7px] md:text-[9px] lg:text-[11px] text-slate-400 font-medium leading-tight max-w-[280px]">{step.description}</p>
                            </div>
                            <div className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 rounded-full border border-slate-100 flex items-center justify-center shadow-sm bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                                <ChevronRight size={14} className="text-slate-900" strokeWidth={3} />
                            </div>
                            {/* Render tooltip if this step is hovered (controlled by React state) */}
                            {hoveredStepId === step.id && (
                                <div className="absolute right-14 top-1/2 -translate-y-1/2 transition-all duration-300 pointer-events-none z-50">
                                    <div className="bg-slate-900 text-white text-[8px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-lg shadow-xl relative whitespace-nowrap animate-bounce">
                                        Click Me
                                        <div className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 bg-slate-900 rotate-45"></div>
                                    </div>
                                </div>
                            )}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="absolute bottom-4 right-6 font-mono text-[8px] md:text-[10px] text-slate-300 tracking-widest pointer-events-none">
                    [{page.pageNumber}]
                </div>
            </div>
          )
      }

      if (page.layout === 'summary') {
        return (
            <div className="h-full w-full bg-white flex flex-col p-8 md:p-12 relative overflow-hidden select-none">
                <div className="absolute top-0 right-0 w-64 h-64 opacity-[0.02] pointer-events-none">
                    <Award size={256} className="text-slate-900" />
                </div>

                <div className="flex-1 flex flex-col justify-center max-w-md relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-1.5 h-1.5 bg-supr-gold rounded-full"></div>
                        <span className="text-[9px] font-mono text-supr-gold tracking-[0.3em] uppercase block">{t.ethics}</span>
                    </div>
                    <h3 className="text-3xl md:text-5xl font-black text-slate-900 uppercase tracking-tighter leading-none mb-6">
                        {t.standard}<br/><span className="text-supr-gold italic underline decoration-1 underline-offset-8">{t.standardSub}</span>
                    </h3>
                    <div className="w-10 md:w-16 h-1 bg-slate-900 mb-8"></div>
                    
                    <p className="text-[10px] md:text-sm font-serif italic text-slate-600 leading-relaxed mb-10 border-l-2 border-slate-100 pl-4">
                        "{page.marketingCopy}"
                    </p>

                    <div className="grid grid-cols-1 xs:grid-cols-2 gap-4 md:gap-10">
                        <div className="space-y-2">
                            <div className="flex items-center gap-2 text-slate-900">
                                <Leaf size={14} className="text-supr-gold" />
                                <span className="text-[8px] font-bold uppercase tracking-wider">{t.circular}</span>
                            </div>
                            <p className="text-[8px] md:text-[10px] text-slate-500 leading-relaxed">
                                {lang === 'th' ? 'ทุกชิ้นส่วนถูกติดแท็กเพื่อการติดตามตลอดวงจรชีวิต' : 'Every component is tagged for lifecycle tracking.'}
                            </p>
                        </div>
                        <div className="space-y-2">
                            <div className="flex items-center gap-2 text-slate-900">
                                <ShieldCheck size={14} className="text-supr-gold" />
                                <span className="text-[8px] font-bold uppercase tracking-wider">{t.warranty}</span>
                            </div>
                            <p className="text-[8px] md:text-[10px] text-slate-500 leading-relaxed">
                                {lang === 'th' ? 'ความสมบูรณ์ของโครงสร้างผ่านการตรวจสอบสำหรับการใช้งานหนัก' : 'Structural integrity verified for high-traffic environments.'}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-10 left-8 right-8 flex justify-between items-end pt-6 border-t border-slate-50">
                    <div className="flex gap-4">
                        <div className="flex flex-col">
                            <span className="text-[7px] font-mono text-slate-400 uppercase mb-1">Service</span>
                            <span className="text-[9px] font-mono text-slate-900">service@supr.work</span>
                        </div>
                    </div>
                    <div className="text-right">
                        <span className="text-[8px] font-mono font-bold text-slate-300">[{page.pageNumber}]</span>
                    </div>
                </div>
            </div>
        );
      }

      if (page.type === 'back-cover') {
          return (
            <div className="h-full w-full flex flex-col items-center justify-between bg-[#0F1115] text-white p-10 md:p-16 relative select-none">
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
                <div className="w-full flex justify-between items-start relative z-10">
                    <div className="w-8 h-8 md:w-14 md:h-14 bg-white flex items-center justify-center text-[#0F1115] font-black text-lg md:text-2xl">S</div>
                    <div className="text-right">
                        <span className="block text-[7px] font-mono text-slate-500 uppercase tracking-[0.4em]">{t.since}</span>
                        <span className="block text-[8px] font-bold text-supr-gold uppercase tracking-[0.2em] mt-1 italic">{t.catalogue}</span>
                    </div>
                </div>
                <div className="text-center relative z-10">
                    <h2 className="text-3xl md:text-6xl font-black tracking-[1em] md:tracking-[1.2em] uppercase ml-[1em] md:ml-[1.2em]">SUPR</h2>
                    <div className="w-8 md:w-12 h-px bg-slate-700 mx-auto mt-6 md:mt-8 mb-4"></div>
                    <span className="text-[7px] md:text-[10px] font-mono text-slate-500 uppercase tracking-[0.4em] md:tracking-[0.6em]">{t.archWork}</span>
                </div>
                <div className="w-full relative z-10">
                    <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-8 md:mb-12 border-b border-white/5 pb-8 md:pb-12">
                        <div className="space-y-1">
                            <span className="flex items-center gap-1.5 text-[7px] text-supr-gold uppercase font-bold tracking-widest"><MapPin size={8}/> BANGKOK</span>
                        </div>
                        <div className="space-y-1">
                            <span className="flex items-center gap-1.5 text-[7px] text-supr-gold uppercase font-bold tracking-widest"><MapPin size={8}/> PHUKET</span>
                        </div>
                    </div>
                    <div className="flex-col md:flex-row justify-between items-center md:items-end gap-6 flex">
                        <div className="flex items-center gap-6">
                            <div className="flex flex-col">
                                <span className="text-[7px] text-slate-600 uppercase font-mono tracking-widest mb-1">{t.voice}</span>
                                <span className="text-[9px] text-white font-mono">+66 2 123 4567</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="flex flex-col items-end">
                                <div className="w-10 h-10 md:w-12 md:h-12 bg-white/5 border border-white/10 flex items-center justify-center rounded">
                                    <Scan size={20} className="text-white/20" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          )
      }
  }

  if (page.layout === 'hero') {
      return (
        <div className="h-full w-full bg-white relative overflow-hidden select-none">
            <div className="absolute inset-0">
                <img src={page.heroImage} className="w-full h-full object-cover pointer-events-none" alt="Hero" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60 pointer-events-none"></div>
            </div>
            
            {/* Render Hotspots if available */}
            {page.hotspots && page.hotspots.map((hotspot, idx) => (
                <HotspotTag key={idx} hotspot={hotspot} onClick={onTagClick || (() => {})} />
            ))}

            <div className="absolute bottom-10 md:bottom-16 left-6 md:left-8 right-6 md:right-8 text-white pointer-events-none">
                <h2 className="text-2xl md:text-5xl font-sans font-bold tracking-tight mb-2 drop-shadow-md leading-none">
                    {page.title}
                </h2>
                <h3 className="text-lg md:text-3xl font-serif italic font-light mb-4 opacity-90 text-supr-gold">
                    {page.subtitle}
                </h3>
                <div className="w-10 h-px bg-white/30 mb-4"></div>
                <p className="text-[9px] md:text-xs font-light max-w-[240px] leading-relaxed opacity-80">
                    {page.marketingCopy}
                </p>
            </div>
            <div className="absolute bottom-4 left-6 text-white/40 font-mono text-[10px]">
                {page.pageNumber}
            </div>
        </div>
      );
  }

  if (page.layout === 'grid') {
      return (
        <div className="h-full w-full bg-white flex flex-col relative select-none">
            <div className="px-6 pt-6 md:px-8 md:pt-8 pb-2 flex-shrink-0">
                <div className="flex justify-between items-end mb-4 border-b-2 border-slate-900 pb-2">
                    <div>
                         <h3 className="text-base md:text-2xl font-sans font-bold text-slate-900 leading-none">{page.title}</h3>
                         <span className="text-[9px] md:text-xs text-slate-500 font-medium uppercase tracking-wider">{page.subtitle}</span>
                    </div>
                    <div className="text-right flex flex-col">
                        <span className="text-[7px] text-slate-400 uppercase tracking-tighter">{t.inventory}</span>
                        <span className="font-mono text-xs md:text-lg font-bold text-slate-900">{page.id.substring(0,3).toUpperCase()}</span>
                    </div>
                </div>
            </div>

            <div 
                className="flex-1 overflow-y-auto px-6 md:px-8 scrollbar-thin scrollbar-thumb-slate-200 touch-pan-y" 
                onPointerDown={(e) => e.stopPropagation()}
                onTouchStart={(e) => e.stopPropagation()}
            >
                <div className="grid grid-cols-2 gap-x-3 md:gap-x-4 gap-y-6 md:gap-y-8 pb-8">
                    {page.items?.map((item) => (
                        <ProductGridItem 
                            key={item.id} 
                            product={item} 
                            lang={lang} 
                            onZoom={onZoom} 
                            isHighlighted={highlightedId === item.id}
                        />
                    ))}
                </div>
            </div>

             <div className="absolute bottom-4 right-6 text-slate-300 font-mono text-[10px] z-20 pointer-events-none">
                {page.pageNumber}
            </div>
        </div>
      );
  }

  return <div className="h-full w-full bg-white"></div>;
};

// ... MobileViewer ...
const MobileViewer = ({ pages, lang }: { pages: CatalogPage[], lang: string }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [flipState, setFlipState] = useState<'idle' | 'flipping-next' | 'flipping-prev'>('idle');
    const [touchStart, setTouchStart] = useState<number | null>(null);
    const [touchEnd, setTouchEnd] = useState<number | null>(null);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [zoomedImage, setZoomedImage] = useState<string | null>(null);
    const [highlightedId, setHighlightedId] = useState<string | null>(null);
    const t = UI_STRINGS[lang];

    const minSwipeDistance = 50;

    const navigate = (direction: 'next' | 'prev') => {
        if (isTransitioning || flipState !== 'idle') return;
        
        if (direction === 'next' && currentIndex < pages.length - 1) {
            setIsTransitioning(true);
            setFlipState('flipping-next');
            setTimeout(() => {
                setCurrentIndex(prev => prev + 1);
                setFlipState('idle');
                setIsTransitioning(false);
            }, 650);
        } else if (direction === 'prev' && currentIndex > 0) {
            setIsTransitioning(true);
            setFlipState('flipping-prev');
            setTimeout(() => {
                setCurrentIndex(prev => prev - 1);
                setFlipState('idle');
                setIsTransitioning(false);
            }, 650);
        }
    };

    const handleTouchStart = (e: React.TouchEvent) => {
        if (isTransitioning) return;
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientX);
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        if (isTransitioning) return;
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (isTransitioning || touchStart === null || touchEnd === null) return;
        const distance = touchStart - touchEnd;
        if (Math.abs(distance) < minSwipeDistance) return;

        if (distance > 0) navigate('next');
        else navigate('prev');

        setTouchStart(null);
        setTouchEnd(null);
    };

    const handleNavigate = (pageNumber: number) => {
        const index = pages.findIndex(p => p.pageNumber === pageNumber);
        if (index !== -1) {
            setCurrentIndex(index);
        }
    };

    const handleZoom = (src: string) => {
        setZoomedImage(src);
    };

    const handleTagClick = (id: string) => {
        // Find which page contains this product
        const targetPageIndex = pages.findIndex(page => page.items?.some(item => item.id === id));
        
        if (targetPageIndex !== -1) {
            // If on a different page, navigate there
            if (targetPageIndex !== currentIndex) {
                 setCurrentIndex(targetPageIndex);
            }
            // Trigger highlight
            setHighlightedId(id);
            setTimeout(() => setHighlightedId(null), 2500);
        }
    };

    const targetIndex = flipState === 'flipping-next' 
        ? Math.min(currentIndex + 1, pages.length - 1) 
        : (flipState === 'flipping-prev' ? Math.max(currentIndex - 1, 0) : currentIndex);

    return (
        <div 
            className="flex flex-col items-center justify-center w-full h-full bg-[#0F1115] overflow-hidden select-none relative"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
        >
            {zoomedImage && <ZoomOverlay src={zoomedImage} onClose={() => setZoomedImage(null)} />}

            <div className="absolute top-6 left-6 right-6 flex justify-center z-[50]">
                <div className="flex gap-1 w-full max-w-[240px]">
                    {pages.map((_, i) => (
                        <div 
                            key={i} 
                            className={`h-0.5 flex-1 rounded-full transition-all duration-500 ease-out ${i === currentIndex ? 'bg-supr-gold shadow-[0_0_8px_rgba(212,175,55,0.6)]' : 'bg-white/10'}`}
                            style={{ transform: i === currentIndex ? 'scaleY(2)' : 'scaleY(1)' }}
                        ></div>
                    ))}
                </div>
            </div>

            <div className="relative w-full flex-1 flex items-center justify-center p-1 z-10 perspective-2500 pb-12">
                <div className="relative w-[96%] aspect-[1/1.42] shadow-2xl max-w-xl">
                    <div className="absolute inset-0 bg-white rounded-sm overflow-hidden z-0">
                        <PageContent 
                            page={pages[targetIndex]} 
                            lang={lang} 
                            onNavigate={handleNavigate} 
                            onZoom={handleZoom} 
                            highlightedId={highlightedId}
                            onTagClick={handleTagClick}
                        />
                    </div>

                    {flipState !== 'idle' && (
                        <div 
                            className={`absolute inset-0 transform-style-3d origin-left z-20`}
                            style={{ 
                                animation: flipState === 'flipping-next' 
                                    ? 'flip-next-mobile 650ms cubic-bezier(0.45, 0.05, 0.55, 0.95) forwards' 
                                    : 'flip-prev-mobile 650ms cubic-bezier(0.45, 0.05, 0.55, 0.95) forwards'
                            }}
                        >
                            <div className="absolute inset-0 backface-hidden bg-white shadow-2xl border-l border-slate-100 overflow-hidden">
                                <PageContent 
                                    page={pages[flipState === 'flipping-next' ? currentIndex : Math.max(currentIndex - 1, 0)]} 
                                    lang={lang} 
                                    onNavigate={handleNavigate} 
                                    onZoom={handleZoom} 
                                    highlightedId={highlightedId}
                                    onTagClick={handleTagClick}
                                />
                                <div className="absolute inset-0 bg-black/5 pointer-events-none transition-opacity" style={{ animation: 'shading-fade-out 650ms ease-in-out' }}></div>
                            </div>

                            <div className="absolute inset-0 backface-hidden bg-white shadow-2xl border-r border-slate-100 overflow-hidden rotate-y-180">
                                <PageContent 
                                    page={pages[flipState === 'flipping-next' ? Math.min(currentIndex + 1, pages.length - 1) : currentIndex]} 
                                    lang={lang} 
                                    onNavigate={handleNavigate} 
                                    onZoom={handleZoom} 
                                    highlightedId={highlightedId}
                                    onTagClick={handleTagClick}
                                />
                                <div className="absolute inset-0 bg-black/5 pointer-events-none transition-opacity" style={{ animation: 'shading-fade-in 650ms ease-in-out' }}></div>
                            </div>
                        </div>
                    )}

                    <div className="absolute left-0 top-0 bottom-0 w-10 bg-gradient-to-r from-black/15 via-black/5 to-transparent z-30 pointer-events-none"></div>
                </div>
            </div>
            
            <div className="fixed bottom-0 left-0 right-0 h-12 bg-[#0A0C10]/95 backdrop-blur-2xl border-t border-white/10 flex items-center justify-between px-4 z-[200] pointer-events-auto shadow-[0_-10px_40px_rgba(0,0,0,0.8)] pb-safe">
                <button 
                    onPointerDown={(e) => { e.preventDefault(); e.stopPropagation(); navigate('prev'); }} 
                    disabled={currentIndex === 0 || isTransitioning}
                    className={`w-9 h-9 rounded-full flex items-center justify-center transition-all active:scale-90 ${currentIndex === 0 ? 'opacity-5 text-slate-700' : 'text-white bg-white/5 active:bg-supr-gold/80 active:shadow-lg'}`}
                >
                    <ChevronLeft size={18} />
                </button>
                
                <div className="flex flex-col items-center flex-1">
                    <span className="text-[7px] font-mono text-slate-500 uppercase tracking-[0.3em] mb-0.5 font-medium">{t.system}</span>
                    <div className="flex items-baseline gap-1.5">
                        <span className="font-mono text-sm font-black text-supr-gold tabular-nums tracking-tighter">{String(currentIndex + 1).padStart(2, '0')}</span>
                        <span className="text-slate-600 font-mono text-[9px] opacity-50">/</span>
                        <span className="text-slate-400 font-mono text-[9px] font-bold">{String(pages.length).padStart(2, '0')}</span>
                    </div>
                </div>

                <button 
                    onPointerDown={(e) => { e.preventDefault(); e.stopPropagation(); navigate('next'); }} 
                    disabled={currentIndex === pages.length - 1 || isTransitioning}
                    className={`w-9 h-9 rounded-full flex items-center justify-center transition-all active:scale-90 ${currentIndex === pages.length - 1 ? 'opacity-5 text-slate-700' : 'text-white bg-white/5 active:bg-supr-gold/80 active:shadow-lg'}`}
                >
                    <ChevronRight size={18} />
                </button>
            </div>
            
            <style dangerouslySetInnerHTML={{ __html: `
                @keyframes flip-next-mobile { 0% { transform: rotateY(0deg); } 100% { transform: rotateY(-180deg); } }
                @keyframes flip-prev-mobile { 0% { transform: rotateY(-180deg); } 100% { transform: rotateY(0deg); } }
                @keyframes shading-fade-in { 0% { opacity: 0; } 50% { opacity: 0.3; } 100% { opacity: 0; } }
                @keyframes shading-fade-out { 0% { opacity: 0; } 50% { opacity: 0.3; } 100% { opacity: 0; } }
                .rotate-y-180 { transform: rotateY(180deg); }
                .pb-safe { padding-bottom: env(safe-area-inset-bottom); }
            `}} />

            <div className="absolute bottom-14 text-[7px] font-mono text-white/20 uppercase tracking-[0.5em] pointer-events-none flex items-center gap-2">
                <div className="w-4 h-px bg-white/10"></div>
                {t.swipe}
                <div className="w-4 h-px bg-white/10"></div>
            </div>
        </div>
    );
};

export const Book = ({ sheets, currentLang }: { sheets: Sheet[], currentLang: string }) => {
  const [flippedIndex, setFlippedIndex] = useState(-1);
  const [isMobile, setIsMobile] = useState(false);
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);
  const [highlightedId, setHighlightedId] = useState<string | null>(null);
  const totalSheets = sheets.length;
  const containerRef = useRef<HTMLDivElement>(null);

  const flatPages = useMemo(() => {
    const pages: CatalogPage[] = [];
    sheets.forEach(sheet => {
        pages.push(sheet.front);
        pages.push(sheet.back);
    });
    return pages.filter(p => p.layout !== 'empty' || p.type === 'back-cover');
  }, [sheets]);

  useEffect(() => {
    const checkMobile = () => { setIsMobile(window.innerWidth < 768); };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const [dragState, setDragState] = useState<{
    sheetIndex: number; startX: number; currentX: number; rotation: number; isDragging: boolean;
  } | null>(null);

  const next = () => { if (flippedIndex < totalSheets - 1) setFlippedIndex(flippedIndex + 1); };
  const prev = () => { if (flippedIndex >= 0) setFlippedIndex(flippedIndex - 1); };

  const handleNavigate = (pageNumber: number) => {
    const sheetIndex = sheets.findIndex(s => s.front.pageNumber === pageNumber || s.back.pageNumber === pageNumber);
    if (sheetIndex !== -1) {
        const sheet = sheets[sheetIndex];
        if (sheet.front.pageNumber === pageNumber) {
            setFlippedIndex(sheetIndex - 1);
        } else {
            setFlippedIndex(sheetIndex);
        }
    }
  };

  const handleZoom = (src: string) => {
      setZoomedImage(src);
  };

  const handleTagClick = (id: string) => {
      // Find the sheet containing the target product
      const sheetIndex = sheets.findIndex(s => s.front.items?.some(i => i.id === id) || s.back.items?.some(i => i.id === id));
      
      if (sheetIndex !== -1) {
         const isFront = sheets[sheetIndex].front.items?.some(i => i.id === id);
         // If item is on Front page of sheet X, we need to see that front page.
         // Sheet X Front is visible on the RIGHT side when flippedIndex = X - 1.
         // Sheet X Back is visible on the LEFT side when flippedIndex = X.
         
         const targetFlippedIndex = isFront ? sheetIndex - 1 : sheetIndex;
         
         if (targetFlippedIndex !== flippedIndex) {
             setFlippedIndex(targetFlippedIndex);
         }
      }

      setHighlightedId(id);
      setTimeout(() => setHighlightedId(null), 2500);
  };

  useEffect(() => {
    if (isMobile) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [flippedIndex, isMobile]);

  const handlePointerDown = (e: React.PointerEvent) => {
    if (isMobile || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const clientX = e.clientX;
    const isRightSide = clientX > centerX;

    if ((isRightSide && flippedIndex >= totalSheets - 1) || (!isRightSide && flippedIndex < 0)) {
        return;
    }

    const sheetIndex = isRightSide ? flippedIndex + 1 : flippedIndex;
    const initialRotation = isRightSide ? 0 : -180;

    // Do NOT capture pointer immediately. Wait for movement threshold.
    setDragState({ 
        sheetIndex, 
        startX: clientX, 
        currentX: clientX, 
        rotation: initialRotation, 
        isDragging: false 
    });
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!dragState || !containerRef.current) return;

    let isNowDragging = dragState.isDragging;

    // If not yet dragging, check threshold
    if (!isNowDragging) {
        if (Math.abs(e.clientX - dragState.startX) > 10) {
            isNowDragging = true;
            (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
        } else {
            return; // Waiting for threshold
        }
    }

    const rect = containerRef.current.getBoundingClientRect();
    const pagePixelWidth = rect.width / 2;
    const deltaX = e.clientX - dragState.startX;
    
    let newRotation = 0;
    if (dragState.sheetIndex > flippedIndex) {
        newRotation = Math.min(0, Math.max(-1, deltaX / pagePixelWidth)) * 180;
    } else {
        newRotation = -180 + (Math.max(0, Math.min(1, deltaX / pagePixelWidth)) * 180);
    }
    setDragState({ ...dragState, isDragging: isNowDragging, currentX: e.clientX, rotation: newRotation });
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    if (!dragState) return;
    
    if (dragState.isDragging) {
        const threshold = 20;
        const { rotation, sheetIndex } = dragState;
        if (sheetIndex > flippedIndex && rotation < -threshold) setFlippedIndex(flippedIndex + 1);
        else if (sheetIndex <= flippedIndex && rotation > (-180 + threshold)) setFlippedIndex(flippedIndex - 1);
        
        (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId);
    }
    
    setDragState(null);
  };

  if (isMobile) return <MobileViewer pages={flatPages} lang={currentLang} />;

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center perspective-2500 overflow-hidden touch-none">
      {zoomedImage && <ZoomOverlay src={zoomedImage} onClose={() => setZoomedImage(null)} />}

      <button onClick={prev} disabled={flippedIndex === -1} className="hidden md:flex absolute left-8 top-1/2 -translate-y-1/2 z-40 p-4 rounded-full bg-white text-slate-900 shadow-xl border border-slate-100 hover:scale-110 hover:bg-supr-gold hover:text-white transition-all disabled:opacity-0 disabled:pointer-events-none"><ChevronLeft size={32} /></button>
      <button onClick={next} disabled={flippedIndex === totalSheets - 1} className="hidden md:flex absolute right-8 top-1/2 -translate-y-1/2 z-40 p-4 rounded-full bg-white text-slate-900 shadow-xl border border-slate-100 hover:scale-110 hover:bg-supr-gold hover:text-white transition-all disabled:opacity-0 disabled:pointer-events-none"><ChevronRight size={32} /></button>

      <div ref={containerRef} className="relative w-[900px] h-[600px] lg:w-[1100px] lg:h-[750px] shadow-2xl rounded-sm bg-transparent transform-style-3d transition-transform duration-1000 ease-in-out" style={{ transform: `translateX(${flippedIndex === -1 ? '-25%' : flippedIndex === totalSheets - 1 ? '25%' : '0'})` }} onPointerDown={handlePointerDown} onPointerMove={handlePointerMove} onPointerUp={handlePointerUp} onPointerCancel={handlePointerUp}>
        {sheets.map((sheet, index) => {
          const isFlipped = index <= flippedIndex;
          const isDraggingThis = dragState?.sheetIndex === index;
          const rotation = isDraggingThis ? dragState.rotation : (isFlipped ? -180 : 0);
          const foldIntensity = Math.max(0, (90 - Math.abs(Math.abs(rotation) - 90)) / 90); 
          const transitionClass = isDraggingThis ? 'transition-none' : 'transition-all duration-1000 cubic-bezier(0.25, 0.46, 0.45, 0.94)';
          return (
            <div key={sheet.id} className={`absolute top-0 left-1/2 w-1/2 h-full transform-style-3d origin-left cursor-grab active:cursor-grabbing ${transitionClass}`} style={{ zIndex: isDraggingThis ? 100 : (isFlipped ? index : totalSheets - index), transform: `rotateY(${rotation}deg)` }}>
              <div className={`absolute inset-0 backface-hidden bg-white shadow-sm overflow-hidden border-l border-slate-100 ${transitionClass}`} style={{ borderTopRightRadius: `${foldIntensity * 120}px`, borderBottomRightRadius: `${foldIntensity * 120}px` }}>
                 <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-black/20 to-transparent z-20 pointer-events-none mix-blend-multiply"></div>
                 <PageContent 
                    page={sheet.front} 
                    lang={currentLang} 
                    onNavigate={handleNavigate} 
                    onZoom={handleZoom} 
                    highlightedId={highlightedId}
                    onTagClick={handleTagClick}
                />
              </div>
              <div className={`absolute inset-0 backface-hidden bg-white shadow-sm overflow-hidden border-r border-slate-100 ${transitionClass}`} style={{ transform: 'rotateY(180deg)', borderTopLeftRadius: `${foldIntensity * 120}px`, borderBottomLeftRadius: `${foldIntensity * 120}px` }}>
                 <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-black/20 to-transparent z-20 pointer-events-none mix-blend-multiply"></div>
                 <PageContent 
                    page={sheet.back} 
                    lang={currentLang} 
                    onNavigate={handleNavigate} 
                    onZoom={handleZoom} 
                    highlightedId={highlightedId}
                    onTagClick={handleTagClick}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
