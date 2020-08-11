import React from 'react'
import { Container } from 'components/Container/Container';
import { SecondaryPageHeader } from 'components/Headers/SecondaryPageHeader';
import { ActionButton } from 'components/Buttons/ActionButton';
import AddIcon from 'images/icons/Plus';
import { InfoSquares } from 'components/SectionContainers/InfoSquares';
import { InfoSquareCard } from 'components/Cards/InfoSquareCard';
import styled from 'styled-components';
import { Devices } from './Devices/Devices';
import { RecentStats } from 'pages/Common/RecentStats/RecentStats';
import { HighestUsage } from 'pages/Common/HighestUsage/HighestUsage';

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
  percentage: usage.percentage,
  value: usage.value,
  unit: usage.unit
}));

const StyledContainer = styled(Container)`
  .secondaryPageHeader {
    margin-bottom: 24px;
  }
`;

const actionBtn = (<ActionButton link to='/events'><AddIcon width='20px' height='20px' /></ActionButton>);


export const RoomDetail = () => {
  return (
    <StyledContainer>
      <SecondaryPageHeader
        className='secondaryPageHeader'
        text='Living Room'
        actionBtn={actionBtn}
        hamMenu
      />
      <InfoSquares>
        <InfoSquareCard className='infoSquareCard' level={2} value={4} unit='/8' text='Devies Online' />
        <InfoSquareCard className='infoSquareCard' level={2} value={3.92} unit='U' text='Power Usage' highlight />
      </InfoSquares>

      <Devices />
      <RecentStats recentStats={recentStats} />
      <HighestUsage usage={highestUsage} />
    </StyledContainer>
  )
}
