import styled from 'styled-components';

import { Color } from 'Constants';
import '_resources/_fonts/index.css';

export const AppContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  min-height: 25rem;
  background-color: ${Color.DeepBlue};
  font-family: 'CustomFont';
  padding: 1.25rem 0;

  .clickable {
    width: -webkit-fit-content;
    height: -webkit-fit-content;
    width: -moz-fit-content;
    height: -moz-fit-content;
  }

  .clickable:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;
