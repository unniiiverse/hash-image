import React, { useState, useEffect, useRef } from "react";
import { Blurhash } from 'react-blurhash';

import './styles.scss'

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
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!fill) {
      if (!width || !height) {
        throw new Error('[hash-image]: Width and height are required in not fill mode.')
      }
    }
  }, [])

  useEffect(() => {
    if (pictureLoaded && ref.current) {
      const image = ref.current.querySelector('img')!;

      image.classList.add('hash-image--loaded')
    }
  }, [ref, pictureLoaded])

  useEffect(() => {
    if (!ref.current) return;

    if (ref.current.querySelector('img')?.complete) setPictureLoaded(true);
  }, [ref])

  return (
    <div className={`hash-image-parent bg-red-200 ${parentClassName ? parentClassName : ''}`} ref={ref} style={{ width: width || 'auto', height: height || 'auto' }}>
      <picture className="hash-image-picture">
        <Blurhash hash={hash} width={width || '100%'} height={height || '100%'} className="hash-image-placeholder" />
        <img src={src} alt={alt} loading={loading || 'lazy'} {...props} className={`hash-image ${className ? className : ''}`} onLoad={() => setPictureLoaded(true)} />
      </picture>
    </div>
  );
}

export default HashImage;