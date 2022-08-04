import React, { FC, useMemo } from 'react';
import Slider from 'react-slick';

import LazyImage from '_components/Common/LazyImage';

import {
  CustomSlickButton,
  CustomSlickContainer,
  CustomSlickImage,
  CustomSlickTitle,
} from './styles';
import { CustomSlickProps } from './types';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CustomSlick: FC<CustomSlickProps> = ({
  title,
  button,
  infinite = false,
  slideToShow = 1,
  slideToScroll = 1,
  autoplay = false,
  autoplaySpeed,
  arrows = true,
  images,
}) => {
  const slickImageComponents = useMemo(
    () =>
      images.map((image, imageIndex) => (
        <CustomSlickImage key={imageIndex}>
          <LazyImage src={image} />
        </CustomSlickImage>
      )),
    [],
  );

  return (
    <CustomSlickContainer>
      {title && <CustomSlickTitle>{title}</CustomSlickTitle>}
      {slickImageComponents.length !== 0 && (
        <Slider
          infinite={infinite}
          slidesToShow={slideToShow}
          slidesToScroll={slideToScroll}
          autoplay={autoplay}
          autoplaySpeed={autoplaySpeed}
          arrows={arrows}
        >
          {slickImageComponents}
        </Slider>
      )}
      {button && <CustomSlickButton onClick={button.onClick}>{button.text}</CustomSlickButton>}
    </CustomSlickContainer>
  );
};

export default CustomSlick;
