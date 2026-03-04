import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Award, ChevronLeft, ChevronRight, CheckCircle } from "lucide-react";

const PRODUCTS = [
    { src: "/credpage/Polypropylene chair.jpeg", name: "Polypropylene Chair" },
    { src: "/credpage/Single drawer table.jpeg", name: "Single Drawer Table" },
    { src: "/credpage/Slotted Angle Rack.jpeg", name: "Slotted Angle Rack" },
    { src: "/credpage/Steel bookcases.jpeg", name: "Steel Bookcases" },
    { src: "/credpage/Study table.jpeg", name: "Study Table" },
];

interface CredibilityCardProps {
    onClose?: () => void;
}

const CredibilityCard = ({ onClose }: CredibilityCardProps) => {
    const [isVisible, setIsVisible] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % PRODUCTS.length);
        }, 2800);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const t = setTimeout(() => setIsVisible(true), 800);
        return () => clearTimeout(t);
    }, []);

    const handleClose = () => {
        setIsVisible(false);
        if (onClose) setTimeout(onClose, 350);
    };

    const prev = () => setActiveIndex((i) => (i - 1 + PRODUCTS.length) % PRODUCTS.length);
    const next = () => setActiveIndex((i) => (i + 1) % PRODUCTS.length);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 40, opacity: 0, scale: 0.96 }}
                    animate={{ y: 0, opacity: 1, scale: 1 }}
                    exit={{ y: -20, opacity: 0, scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 280, damping: 24 }}
                    className="relative mb-8 w-[96vw] max-w-6xl mx-auto rounded-2xl"
                >
                    {/* Animated pulsing border glow */}
                    <motion.div
                        className="absolute inset-0 rounded-2xl pointer-events-none z-0"
                        animate={{
                            boxShadow: [
                                "0 0 0px 0px rgba(59,130,246,0.0)",
                                "0 0 20px 4px rgba(59,130,246,0.28)",
                                "0 0 0px 0px rgba(59,130,246,0.0)",
                            ],
                        }}
                        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                    />

                    <div className="relative z-10 bg-[#0A0A0B]/90 backdrop-blur-xl border border-white/[0.08] rounded-2xl overflow-hidden">
                        {/* Animated top bar */}
                        <motion.div
                            className="absolute top-0 left-0 h-[2px] bg-gradient-to-r from-blue-500 via-indigo-400 to-blue-500"
                            initial={{ width: "0%" }}
                            animate={{ width: "100%" }}
                            transition={{ duration: 1.4, ease: "easeOut", delay: 0.5 }}
                        />

                        {/* Close button — top-right, outside content area, high z-index */}
                        <button
                            onClick={handleClose}
                            className="absolute top-3 right-3 text-white/40 hover:text-white transition-colors p-1.5 rounded-full hover:bg-white/10 z-30 bg-[#0A0A0B]/60 backdrop-blur-sm border border-white/10"
                            aria-label="Close"
                        >
                            <X className="w-3.5 h-3.5" />
                        </button>

                        <div className="p-3 sm:p-4 pr-10 sm:pr-12">
                            <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6">

                                {/* ─── LEFT: Text Info ─── */}
                                <div className="flex-shrink-0 space-y-2 md:max-w-[280px] w-full md:w-auto text-center flex flex-col items-center">
                                    {/* Badge */}
                                    <motion.div
                                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-blue-500/10 border border-blue-500/20 mx-auto"
                                        animate={{ opacity: [0.7, 1, 0.7] }}
                                        transition={{ duration: 2.5, repeat: Infinity }}
                                    >
                                        <Award className="w-3 h-3 text-blue-400" />
                                        <span className="text-[10px] font-bold text-blue-400 tracking-widest uppercase">
                                            Recent Supply
                                        </span>
                                    </motion.div>

                                    {/* English */}
                                    <div className="space-y-1">
                                        <p className="text-[11px] font-semibold text-blue-300/70 uppercase tracking-widest">
                                        </p>
                                        <p className="text-sm sm:text-[15px] font-bold text-white/90 leading-snug">
                                            Library furniture available at reasonable prices for the Panchayat Raj Department of U.P.
                                        </p>
                                    </div>

                                    <div className="h-px w-full bg-white/[0.06]" />

                                    {/* Hindi */}
                                    <div className="space-y-1">
                                        <p className="text-[11px] font-semibold text-blue-300/70 uppercase tracking-widest">
                                        </p>
                                        <p className="text-sm font-bold text-white/80 leading-snug">
                                            उत्तर प्रदेश के पंचायत राज विभाग में लाइब्रेरी फर्नीचर आपूर्ति के लिए उचित मूल्य में उपलब्ध है |
                                        </p>
                                    </div>

                                    {/* Available chip */}
                                    <motion.div
                                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 mx-auto mt-2"
                                        animate={{ scale: [1, 1.03, 1] }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                    >
                                        <CheckCircle className="w-3 h-3 text-emerald-400" />
                                        <span className="text-[10px] font-bold text-emerald-400 tracking-wider">
                                            Available · उपलब्ध
                                        </span>
                                    </motion.div>
                                </div>

                                {/* Vertical Divider */}
                                <div className="hidden md:block w-px self-stretch bg-white/[0.06]" />

                                {/* ─── RIGHT: Images ─── */}
                                <div className="flex-1 w-full min-w-0 mt-2 md:mt-0">
                                    {/* Thumbnail strip */}
                                    <div className="flex gap-2 sm:gap-4 items-end flex-wrap sm:flex-nowrap justify-center md:justify-start">
                                        {PRODUCTS.map((product, i) => (
                                            <motion.button
                                                key={i}
                                                onClick={() => setActiveIndex(i)}
                                                animate={{ scale: i === activeIndex ? 1 : 0.88, opacity: i === activeIndex ? 1 : 0.45 }}
                                                whileHover={{ scale: 1, opacity: 1 }}
                                                transition={{ duration: 0.25 }}
                                                className="flex flex-col items-center gap-1.5 flex-shrink-0"
                                            >
                                                <div className={`relative w-[60px] h-[60px] md:w-[140px] md:h-[140px] rounded-2xl overflow-hidden border-2 transition-all duration-300 ${i === activeIndex
                                                    ? "border-blue-400 shadow-[0_0_14px_rgba(59,130,246,0.45)]"
                                                    : "border-white/10"
                                                    }`}>
                                                    <img
                                                        src={product.src}
                                                        alt={product.name}
                                                        className="w-full h-full object-cover"
                                                    />
                                                    {i === activeIndex && (
                                                        <motion.div
                                                            className="absolute inset-0 bg-blue-400/15"
                                                            animate={{ opacity: [0.1, 0.35, 0.1] }}
                                                            transition={{ duration: 2, repeat: Infinity }}
                                                        />
                                                    )}
                                                </div>
                                                <span className={`text-[8px] md:text-[11px] font-semibold tracking-wide text-center leading-tight w-[60px] md:w-[140px] transition-colors ${i === activeIndex ? "text-white/85" : "text-white/30"
                                                    }`}>
                                                    {product.name}
                                                </span>
                                            </motion.button>
                                        ))}
                                    </div>

                                    {/* Navigation dots + arrows */}
                                    <div className="flex items-center justify-center gap-3 mt-4 sm:mt-5">
                                        <button onClick={prev} className="text-white/30 hover:text-white/70 transition-colors">
                                            <ChevronLeft className="w-4 h-4" />
                                        </button>
                                        <div className="flex gap-1.5">
                                            {PRODUCTS.map((_, i) => (
                                                <motion.div
                                                    key={i}
                                                    onClick={() => setActiveIndex(i)}
                                                    animate={{ width: i === activeIndex ? 24 : 6, backgroundColor: i === activeIndex ? "rgb(96,165,250)" : "rgba(255,255,255,0.2)" }}
                                                    transition={{ duration: 0.3 }}
                                                    className="h-1 rounded-full cursor-pointer"
                                                />
                                            ))}
                                        </div>
                                        <button onClick={next} className="text-white/30 hover:text-white/70 transition-colors">
                                            <ChevronRight className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )
            }
        </AnimatePresence >
    );
};

export default CredibilityCard;
