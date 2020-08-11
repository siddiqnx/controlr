import React from 'react'
import styled from 'styled-components';

import { MainPageHeader } from 'components/Headers/MainPageHeader';
import { Container } from 'components/Container/Container';
import { InfoSquareCard } from 'components/Cards/InfoSquareCard';
import { RecentStats } from 'pages/Common/RecentStats/RecentStats';
import { UsageToday } from './UsageToday/UsageToday';
import { HighestUsage } from '../Common/HighestUsage/HighestUsage';

const recentStats = [
  {
    period: 'Today',
    value: 1.13,
    unit: 'U',
  },
  {
    period: 'Last 7 days',
    value: 8.13,
    unit: 'U',
  },
  {
    period: 'Last 30 days',
    value: 80.13,
    unit: 'U',
  },
  {
    period: 'Last 60 days',
    value: 150.13,
    unit: 'U',
  },
];

let highestUsage = [
  {
    deviceName: 'Air Conditioner',
    roomName: 'Living Room',
    percentage: 52.5,
    value: 10.23,
    unit: 'U'
  },
  {
    deviceName: 'Refrigirator',
    roomName: 'Bedroom',
    percentage: 30.5,
    value: 10.23,
    unit: 'U'
  },
  {
    deviceName: 'TV',
    roomName: 'Kitchen',
    percentage: 10.5,
    value: 10.23,
    unit: 'U'
  }
];

highestUsage = highestUsage.map(usage => ({
  title: usage.deviceName,
  subtitle: usage.roomName,
  percentage: usage.percentage,
  value: usage.value,
  unit: usage.unit
}));

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

      <RecentStats recentStats={recentStats} />

      <UsageToday />

      <HighestUsage usage={highestUsage} />

    </StyledContainer>
  )
}


