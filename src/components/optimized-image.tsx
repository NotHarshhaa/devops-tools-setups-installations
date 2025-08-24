"use client";

import Image from "next/image";
import { useState } from "react";
import { Loader2Icon } from "lucide-react";

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  placeholder?: "blur" | "empty";
  blurDataURL?: string;
}

export function OptimizedImage({
  src,
  alt,
  width = 400,
  height = 300,
  className = "",
  priority = false,
  placeholder = "empty",
  blurDataURL
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div className={`flex items-center justify-center bg-muted rounded-lg ${className}`}>
        <div className="text-center p-4">
          <p className="text-sm text-muted-foreground">Failed to load image</p>
          <p className="text-xs text-muted-foreground/70">{alt}</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-muted">
          <Loader2Icon className="w-6 h-6 animate-spin text-muted-foreground" />
        </div>
      )}
      
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={`transition-opacity duration-300 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
        priority={priority}
        placeholder={placeholder}
        blurDataURL={blurDataURL}
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setIsLoading(false);
          setHasError(true);
        }}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  );
}

export function ResponsiveImage({
  src,
  alt,
  className = "",
  priority = false
}: Omit<OptimizedImageProps, "width" | "height">) {
  return (
    <OptimizedImage
      src={src}
      alt={alt}
      width={800}
      height={600}
      className={`w-full h-auto ${className}`}
      priority={priority}
    />
  );
}
