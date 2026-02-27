import { useState } from "react";
import { cn } from "@/lib/utils";
import { ImageOff, Loader2 } from "lucide-react";

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: "square" | "video" | "wide" | "tall" | "auto";
}

const OptimizedImage = ({ 
  src, 
  alt, 
  className, 
  aspectRatio = "square",
  ...props 
}: OptimizedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);

  const aspectClasses = {
    square: "aspect-square",
    video: "aspect-video",
    wide: "aspect-[21/9]",
    tall: "aspect-[3/4]",
    auto: "h-auto"
  };

  return (
    <div className={cn(
      "relative overflow-hidden bg-transparent w-full h-full",
      aspectClasses[aspectRatio]
    )}>
      {/* Loading Spinner */}
      {!isLoaded && !error && (
        <div className="absolute inset-0 flex items-center justify-center bg-slate-800/20 z-10">
          <Loader2 className="h-6 w-6 text-blue-500/50 animate-spin" />
        </div>
      )}

      {/* Error State */}
      {error ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-100 text-slate-400 gap-2">
          <ImageOff className="h-8 w-8" />
          <span className="text-[10px] uppercase font-bold tracking-tighter">Image Unavailable</span>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          onLoad={() => setIsLoaded(true)}
          onError={() => setError(true)}
          className={cn(
            "w-full h-full object-contain transition-all duration-700 ease-in-out",
            isLoaded ? "opacity-100 blur-0" : "opacity-0 blur-xl",
            className
          )}
          loading="lazy"
          {...props}
        />
      )}
    </div>
  );
};

export default OptimizedImage;
