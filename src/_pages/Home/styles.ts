import styled from 'styled-components';

import { Color } from 'Constants';

export const HomeContainer = styled.div`
  width: 80rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${Color.DeepBlue};
  color: ${Color.White};
`;

export const RowFlexSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const ColumnFlexSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  width: 100%;
  font-size: 1.75rem;
  font-weight: 700;
  text-align: center;
`;

const Subtitle = styled.div`
  width: 100%;
  font-size: 1.25rem;
  font-weight: 300;
  text-align: center;
`;

export const GreetingSection = styled(ColumnFlexSection)``;

export const DivisionBorder = styled.div`
  width: 100%;
  margin-top: 3.75rem;
  border: 0.0313rem solid ${Color.Gray};
`;

export const GreetingSectionTitle = styled(Title)`
  margin-top: 5rem;
`;

export const GreetingSectionSubtitle = styled(Subtitle)`
  margin: 2.5rem 0 3.75rem;
`;

export const GreetingSectionColumnTextContainer = styled(ColumnFlexSection)`
  width: 20%;
  justify-content: center;
`;

export const GreetingSectionColumnTextTitle = styled(Title)`
  font-size: 1.25rem;
  text-align: left;
`;

export const GreetingSectionColumnTextSubtitle = styled(Subtitle)`
  font-size: 1rem;
  margin-top: 1.25rem;
  text-align: left;
`;

export const GreetingSectionSlickContainer = styled.div`
  width: calc(80% - 1.25rem);
`;

export const InformationSection = styled(ColumnFlexSection)``;

export const LastSection = styled(ColumnFlexSection)``;
