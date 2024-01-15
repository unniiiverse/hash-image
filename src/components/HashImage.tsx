import React, { useState, useEffect, useRef } from "react";
import { Blurhash } from 'react-blurhash';

import './styles.css'

export interface HashImageProps extends React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> {
  src: string,
  alt: string,
  width?: number,
  height?: number,
  fill?: boolean,
  className?: string,
  parentClassName?: string,
  initialHash?: string,
  loading?: 'lazy' | 'eager',
}

export const HashImage: React.FC<HashImageProps> = ({ src, alt, loading, initialHash, width, height, className, parentClassName, fill, ...props }) => {
  const [hash] = useState(initialHash || 'LRQ0XHWB?b%M~qofIURjWBt7j[M{');
  const [pictureLoaded, setPictureLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    if (!pictureLoaded || !imgRef.current) return;

    if (!fill) {
      if (!width || !height) {
        throw new Error('[hash-image]: In fill mode width and height are required')
      }
    }

    imgRef.current!.style.opacity = '100';
    imgRef.current!.style.visibility = 'visible';
  }, [pictureLoaded])

  return (
    <div className={`hash-image-parent ${parentClassName || ''}`} style={{ width: fill ? '100%' : width, height: fill ? '100%' : height }}>
      <Blurhash hash={hash} className="hash-image-hash" width={fill ? '100%' : width} height={fill ? '100%' : height} />
      <img src={src} alt={alt} ref={imgRef} loading={loading || 'lazy'} className={`hash-image-image ${className || ''}`} onLoad={() => setPictureLoaded(true)} {...props} />
    </div>
  );
}

export default HashImage;