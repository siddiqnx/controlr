import React from 'react'
import styled from 'styled-components'
import { GroupHeader } from 'components/Headers/GroupHeader';
import { RoomList } from './RoomList';
import groupByProperty from 'utils/groupByProperty';

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

const StyledList = styled.ul`
  .roomGroupHeader {
    margin: 28px 0 22px;
  }
`;

export const RoomGroupList = () => {

  const roomGroups = groupByProperty(rooms, 'roomGroup');

  return (
    <StyledList>
      {Object.entries(roomGroups).map(([roomGroup, rooms], i) => (
        <li key={i}>
          <GroupHeader lined className='roomGroupHeader' text={roomGroup} />
          <RoomList rooms={rooms} />
        </li>
      ))}
    </StyledList>
  )
}
