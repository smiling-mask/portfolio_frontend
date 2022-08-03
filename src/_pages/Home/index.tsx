import React, { FC } from 'react';

import CustomSlick from '_components/Common/CustomSlick';

import {
  HomeContainer,
  GreetingSection,
  GreetingSectionTitle,
  GreetingSectionSubtitle,
  InformationSection,
  LastSection,
  RowFlexSection,
  GreetingSectionColumnTextContainer,
  GreetingSectionSlickContainer,
  GreetingSectionColumnTextTitle,
  GreetingSectionColumnTextSubtitle,
  DivisionBorder,
} from './styles';

const Home: FC = () => {
  return (
    <HomeContainer>
      <GreetingSection>
        <GreetingSectionTitle>Welcome to SM Dev Team site</GreetingSectionTitle>
        <GreetingSectionSubtitle>
          we will show you some information about us
        </GreetingSectionSubtitle>
        <RowFlexSection>
          <GreetingSectionColumnTextContainer>
            <GreetingSectionColumnTextTitle>Our developers</GreetingSectionColumnTextTitle>
            <GreetingSectionColumnTextSubtitle>
              Swipe to show more
            </GreetingSectionColumnTextSubtitle>
          </GreetingSectionColumnTextContainer>
          <GreetingSectionSlickContainer>
            <CustomSlick
              title='Dev Team'
              button={{
                text: '더 보러가기',
                onClick: () => {
                  alert('테스트');
                },
              }}
            />
          </GreetingSectionSlickContainer>
        </RowFlexSection>
        <DivisionBorder />
      </GreetingSection>
      <InformationSection></InformationSection>
      <LastSection></LastSection>

      {/* <HomeTitle>We provide our information and works, skills at here</HomeTitle>
      <HomeTitle>Click Contact button to with us, Thank you</HomeTitle> */}
    </HomeContainer>
  );
};

export default Home;
