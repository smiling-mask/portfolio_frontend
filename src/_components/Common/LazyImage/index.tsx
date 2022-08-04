import React, { FC, useEffect } from 'react';

import { useIsImgLoaded } from '_hooks/useIsImageLoaded';
import loadingImage from '_resources/_images/loading.jpeg';

import { LazyImageProps } from './types';

const LazyImage: FC<LazyImageProps> = ({ src, alt, lazy = true }) => {
  const { elementRef, isLoaded } = useIsImgLoaded(lazy);

  useEffect(() => {
    console.log(isLoaded);
  }, [isLoaded]);

  return (
    <img
      ref={elementRef}
      style={{
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        objectFit: 'fill',
      }}
      src={isLoaded ? src : loadingImage}
      alt={alt}
    />
  );
};

export default LazyImage;
