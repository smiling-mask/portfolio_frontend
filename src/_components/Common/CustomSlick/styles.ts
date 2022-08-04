import styled from 'styled-components';

import { Color } from 'Constants';

export const CustomSlickContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  .slick-slider {
    width: 100%;
  }
`;

export const CustomSlickTitle = styled.div`
  width: 100%;
  font-size: 1.25rem;
  margin-bottom: 1.25rem;
`;

export const CustomSlickImage = styled.div`
  position: relative;
  width: 100%;
  padding-top: 75%;
`;

export const CustomSlickButton = styled.div.attrs({ className: 'clickable' })`
  padding: 1.25rem 5rem;
  margin-top: 1.25rem;
  font-size: 1.25rem;
  font-weight: 700;
  background-color: ${Color.White};
  color: ${Color.Black};
  border-radius: 0.5rem;
`;
