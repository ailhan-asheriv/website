import Image, { type ImageProps } from "next/image";

/** Pre-optimized layout WebPs: skip Next recompression to preserve sharpness. */
export default function LayoutImage({
  quality = 95,
  sizes = "100vw",
  unoptimized = true,
  alt = "",
  ...props
}: ImageProps) {
  return (
    <Image
      {...props}
      alt={alt}
      quality={quality}
      sizes={sizes}
      unoptimized={unoptimized}
    />
  );
}
