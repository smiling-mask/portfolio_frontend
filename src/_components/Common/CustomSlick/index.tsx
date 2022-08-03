import React, { FC } from 'react';
import Slider from 'react-slick';

import { CustomSlickButton, CustomSlickContainer, CustomSlickTitle } from './styles';
import { CustomSlickProps } from './types';

const CustomSlick: FC<CustomSlickProps> = ({
  title,
  button,
  infinite = false,
  slideToShow = 1,
  slideToScroll = 1,
  autoplay = false,
  autoplaySpeed,
}) => {
  return (
    <CustomSlickContainer>
      {title && <CustomSlickTitle>{title}</CustomSlickTitle>}
      <Slider
        infinite={infinite}
        slidesToShow={slideToShow}
        slidesToScroll={slideToScroll}
        autoplay={autoplay}
        autoplaySpeed={autoplaySpeed}
      />
      {button && <CustomSlickButton onClick={button.onClick}>{button.text}</CustomSlickButton>}
    </CustomSlickContainer>
  );
};

export default CustomSlick;
