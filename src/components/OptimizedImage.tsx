import React from "react";

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  eager?: boolean; // when true, load eagerly and increase fetch priority (for above-the-fold images)
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({ 
  src, 
  eager = false, 
  loading, 
  alt = "", 
  ...rest 
}) => {
  // Convert PNG/JPEG to WebP format for better compression
  const webpSrc = src.match(/\.(png|jpe?g)$/i) 
    ? src.replace(/\.(png|jpe?g)$/i, '.webp') 
    : undefined;
  
  // Determine loading strategy:
  // - If eager=true, load immediately (for hero/above-the-fold images)
  // - Otherwise, use lazy loading (for below-the-fold images)
  const finalLoading: "lazy" | "eager" = eager ? "eager" : (loading ?? "lazy");
  const fetchPriority = eager ? 'high' : 'auto';

  return (
    <picture>
      {/* WebP source for modern browsers (better compression) */}
      {webpSrc && (
        <source 
          srcSet={webpSrc} 
          type="image/webp"
          // Apply same loading strategy to source element
          {...(eager ? {} : { loading: 'lazy' })}
        />
      )}
      {/* Fallback to original format for older browsers */}
      <img 
        src={src} 
        alt={alt} 
        loading={finalLoading} 
        decoding="async" 
        fetchPriority={fetchPriority}
        // Add width/height hints if provided to prevent layout shift
        {...rest} 
      />
    </picture>
  );
};

export default OptimizedImage;
