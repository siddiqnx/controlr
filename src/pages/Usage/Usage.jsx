import React from 'react'
import styled from 'styled-components';

import { MainPageHeader } from 'components/Headers/MainPageHeader';
import { Container } from 'components/Container/Container';
import { InfoSquareCard } from 'components/Cards/InfoSquareCard';
import { RecentStats } from './RecentStats/RecentStats';
import { UsageToday } from './UsageToday/UsageToday';
import { HighestUsageOverall } from './HighestUsageOverall/HighestUsageOverall';

const StyledContainer = styled(Container)`

`;

const InfoSquares = styled.section`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  gap: 8px;

  .infoSquareCard {
    margin-top: 24px;
    flex-grow: 0;
    flex-shrink: 0;
  }
`;

export const Usage = () => {
  return (
    <StyledContainer>
      <MainPageHeader text={'Usage'} hamMenu />

      <InfoSquares>
        <InfoSquareCard
          small
          width='120px'
          className='infoSquareCard'
          level={2}
          value={13.93}
          unit='U'
          text='Power Usage'
          highlight
        />
        <InfoSquareCard
          small
          width='120px'
          className='infoSquareCard'
          level={2}
          value={44}
          unit='/52'
          text='Devices Online'
          outline
        />
        <InfoSquareCard
          small
          width='120px'
          className='infoSquareCard'
          level={2}
          value={5}
          unit='/9'
          text='Rooms Online'
          outline
        />
      </InfoSquares>

      <RecentStats />

      <UsageToday />

      <HighestUsageOverall />

    </StyledContainer>
  )
}


