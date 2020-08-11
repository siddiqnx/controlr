import React from 'react'
import { MainPageHeader } from 'components/Headers/MainPageHeader';
import { Container } from 'components/Container/Container';
import { RoomGroupList } from './RoomGroupList/RoomGroupList';
import { HighestUsage } from 'pages/Common/HighestUsage/HighestUsage';
import styled from 'styled-components';
import { ActionButton } from 'components/Buttons/ActionButton';
import AddIcon from 'images/icons/Plus';

let highestUsage = [
  {
    roomName: 'Living Room',
    percentage: 52.5,
    value: 10.23,
    unit: 'U'
  },
  {
    roomName: 'Bedroom',
    percentage: 30.5,
    value: 10.23,
    unit: 'U'
  },
  {
    roomName: 'Kitchen',
    percentage: 10.5,
    value: 10.23,
    unit: 'U'
  }
];

highestUsage = highestUsage.map(usage => ({
  title: usage.roomName,
  percentage: usage.percentage,
  value: usage.value,
  unit: usage.unit
}))

const StyledContainer = styled(Container)`
  .sectionHeader {
    margin-top: 48px;
    margin-bottom: 28px;
  }
`;

const actionBtn = (<ActionButton link to='/events'><AddIcon width='20px' height='20px' /></ActionButton>);

export const Rooms = () => {
  return (
    <StyledContainer>
      <MainPageHeader text={'Rooms'} hamMenu actionBtn={actionBtn} />
      <RoomGroupList />
      <HighestUsage usage={highestUsage} />
    </StyledContainer>
  )
}

