import styled from 'styled-components';

import { Color } from 'Constants';

export const CustomSlickContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const CustomSlickTitle = styled.div`
  width: 100%;
  font-size: 1.25rem;
  margin-bottom: 1.25rem;
`;

export const AbsoluteFill = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const CustomSlickImage = styled.div`
  width: 100%;
  padding-top: 120%;
`;

export const CustomSlickButton = styled.div.attrs({ className: 'clickable' })`
  font-size: 1.25rem;
  font-weight: 700;
  padding: 1.25rem 5rem;
  background-color: ${Color.White};
  color: ${Color.Black};
  border-radius: 0.5rem;
`;
