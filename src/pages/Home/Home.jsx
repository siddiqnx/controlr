import React from 'react'
import styled from 'styled-components';

import { MainPageHeader } from 'components/Headers/MainPageHeader';
import { Container } from 'components/Container/Container';
import { InfoSquareCard } from 'components/Cards/InfoSquareCard';
import { Favourites } from './Favourites/Favourites';
import { Scenes } from './Scenes/Scenes';
import { Groups } from './Groups/Groups';
import { InfoSquares } from 'components/SectionContainers/InfoSquares';

const StyledContainer = styled(Container)`
  .mainPageHeader {
    margin-bottom: 24px;
  }

  .sectionHeader {
    margin-top: 34px;
    margin-bottom: 28px;
  }
`;

export const Home = () => {
  return (
    <StyledContainer>

      <MainPageHeader className='mainPageHeader' text={'Albrin\'s Home'} hamMenu />

      <InfoSquares>
        <InfoSquareCard className='infoSquareCard' level={2} value='44' unit='/52' text='Devies Online' />
        <InfoSquareCard className='infoSquareCard' level={2} value='3.92' unit='U' text='Power Usage' highlight />
      </InfoSquares>

      <Favourites />
      <Scenes />
      <Groups />

    </StyledContainer>
  )
}
