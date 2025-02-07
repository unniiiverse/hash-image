🛑 DEPRECATED: No longer supported 🛑

# Hash-image

![Hash image banner](./banner.png)

Simple react component which makes blurred placeholder for the image. You can upload initial hash or use default. When picture is loaded, it will became visible.

## Usage
```tsx
import React from 'react';
import { HashImage } from 'hash-image'
import 'hash-image/dist/style.css' // Required styles

const Component: React.FC = () => {
  return (
    <HashImage src="IMAGE SOURCE" alt="ALT" />
  );
}
```

## API

```tsx
export interface HashImageProps extends React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> {
  src: string,
  alt: string,
  width?: number, // Required if fill is false
  height?: number, // Required if fill is false
  fill?: boolean, // Fill the container
  className?: string, // img tag className
  parentClassName?: string, // Parent className
  initialHash?: string, // Initial hash processed by blurhash
  loading?: 'lazy' | 'eager',
}
```

Licensed under MIT <br />
unniiiverse 2024
