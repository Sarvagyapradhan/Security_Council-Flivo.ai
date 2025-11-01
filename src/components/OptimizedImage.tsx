import React from "react";

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  eager?: boolean;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({ src, eager = false, loading, alt = "", ...rest }) => {
  const webpSrc = src.match(/\.(png|jpe?g)$/i) ? src.replace(/\.(png|jpe?g)$/i, '.webp') : undefined;
  const finalLoading: "lazy" | "eager" = eager ? "eager" : (loading as any) ?? "lazy";

  return (
    <picture>
      {webpSrc && <source srcSet={webpSrc} type="image/webp" />}
      <img src={src} alt={alt} loading={finalLoading} {...rest} />
    </picture>
  );
};

export default OptimizedImage;
