import React from 'react'
import { MainPageHeader } from 'components/Headers/MainPageHeader';
import { Container } from 'components/Container/Container';
import { RoomGroupList } from './RoomGroupList';
import { HighestUsageTable } from './HighestUsageTable';
import { SectionHeader } from 'components/Headers/SectionHeader';
import styled from 'styled-components';

const rooms = [
  {
    roomName: 'Living Room',
    numDevicesOn: 4,
    numDevicesTotal: 10,
    roomGroup: 'Ground Floor'
  },
  {
    roomName: 'Bed Room',
    numDevicesOn: 4,
    numDevicesTotal: 10,
    roomGroup: 'First Floor'
  },
  {
    roomName: 'Kitchen',
    numDevicesOn: 4,
    numDevicesTotal: 10,
    roomGroup: 'Ground Floor'
  },
];

const highestUsage = [
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

const StyledContainer = styled(Container)`
  .sectionHeader {
    margin-top: 48px;
    margin-bottom: 28px;
  }
`;

export const Rooms = () => {
  return (
    <StyledContainer>
      <MainPageHeader text={'Rooms'} hamMenu />
      <RoomGroupList rooms={rooms} />
      <SectionHeader
        className='sectionHeader'
        text='Highest Usage'
        level={2}
      />
      <HighestUsageTable rooms={highestUsage} />
    </StyledContainer>
  )
}

