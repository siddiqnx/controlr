import React from 'react'
import styled from 'styled-components'
import { RoomGroupHeader } from 'components/Headers/RoomGroupHeader';
import { RoomList } from './RoomList';

const StyledList = styled.ul`
  .roomGroupHeader {
    margin: 28px 0 22px;
  }
`;

export const RoomGroupList = ({ rooms }) => {

  let roomGroups = {};

  rooms.forEach(room => {
    let { roomGroup, ...rest } = room;
    if (!roomGroups[roomGroup])
      roomGroups[roomGroup] = [];
    roomGroups[roomGroup].push(rest);
  });

  return (
    <StyledList>
      {Object.entries(roomGroups).map(([roomGroup, rooms], i) => (
        <li key={i}>
          <RoomGroupHeader className='roomGroupHeader'>{roomGroup}</RoomGroupHeader>
          <RoomList rooms={rooms} />
        </li>
      ))}
    </StyledList>
  )
}
