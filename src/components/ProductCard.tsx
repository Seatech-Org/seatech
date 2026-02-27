import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FolderOpen, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { MouseEvent, useRef, useState } from "react";

export interface Product {
  id: string;
  name: string;
  brand?: string;
  model?: string;
  category: string;
  price: number;
  availability?: number;
  minQty?: number;
  images: { main: string; thumbnail: string }[];
  discount: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  specifications?: any[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  seller?: any;
  countryOfOrigin?: string;
}

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <motion.div
      ref={divRef}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="group h-full relative rounded-[1.5rem] overflow-hidden border border-slate-800 bg-slate-900"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Spotlight Overlay */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 z-10"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(59, 130, 246, 0.15), transparent 40%)`,
        }}
      />
      
      {/* Spotlight Border */}
      <div
        className="pointer-events-none absolute -inset-px rounded-[1.5rem] opacity-0 transition duration-300 z-10"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(59, 130, 246, 0.4), transparent 40%)`,
          maskImage: "linear-gradient(#000, #000), content-box linear-gradient(#000, #000)",
          maskComposite: "exclude",
          WebkitMaskComposite: "xor",
          padding: "1px", // Border width
        }}
      />

      <Link to={`/products/${product.id}`} className="block h-full relative z-20">
        <div className="flex flex-col h-full">
          
          {/* Image Container */}
          <div className="aspect-[4/3] bg-white relative p-8 flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/5 transition-colors duration-500"></div>
            
            {product.images && product.images.length > 0 ? (
              <motion.img 
                src={product.images[0].main} 
                alt={product.name} 
                className="w-full h-full object-contain mix-blend-multiply relative z-10"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5 }}
              />
            ) : (
              <div className="flex flex-col items-center justify-center w-full h-full text-slate-300">
                  <FolderOpen className="h-12 w-12 opacity-20 mb-2" />
                  <span className="text-xs font-medium opacity-50">No Image</span>
              </div>
            )}

            <div className="absolute bottom-4 right-4 translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 z-20">
              <div className="h-10 w-10 bg-slate-900 rounded-full flex items-center justify-center shadow-lg text-white hover:bg-blue-600 transition-colors border border-slate-700">
                <ArrowRight className="h-5 w-5" />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 flex flex-col flex-grow bg-slate-900 border-t border-slate-800">
            <div className="mb-4">
              <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1 line-clamp-1">
                {product.category}
              </p>
              <h3 className="font-bold text-slate-200 text-lg leading-tight line-clamp-2 group-hover:text-blue-400 transition-colors">
                {product.name}
              </h3>
            </div>

            <div className="mt-auto pt-4 flex items-center justify-between border-t border-slate-800">
              <div>
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">GeM ID</p>
                <p className="text-sm font-mono font-bold text-slate-300">{product.id}</p>
              </div>
              <Button size="sm" variant="ghost" className="rounded-full text-slate-400 group-hover:text-blue-400 hover:bg-slate-800 transition-all font-medium text-xs">
                View Details
              </Button>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};