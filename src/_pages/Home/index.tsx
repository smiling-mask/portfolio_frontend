import React, { FC } from 'react';

import CustomSlick from '_components/Common/CustomSlick';
import cat1 from '_resources/_images/cat1.jpeg';
import cat2 from '_resources/_images/cat2.jpeg';

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
  const slickImages = [cat1, cat2];

  return (
    <HomeContainer>
      <GreetingSection>
        <GreetingSectionTitle>Welcome to SM Dev Team site</GreetingSectionTitle>
        <GreetingSectionSubtitle>
          we will show you some information about us
        </GreetingSectionSubtitle>
        <RowFlexSection>
          <GreetingSectionColumnTextContainer>
            <GreetingSectionColumnTextTitle>Our Developers</GreetingSectionColumnTextTitle>
            <GreetingSectionColumnTextSubtitle>
              Swipe to show more
            </GreetingSectionColumnTextSubtitle>
          </GreetingSectionColumnTextContainer>
          <GreetingSectionSlickContainer>
            <CustomSlick
              button={{
                text: '더 보러가기',
                onClick: () => {
                  alert('테스트');
                },
              }}
              slideToShow={4}
              images={slickImages}
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
