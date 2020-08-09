import React from 'react'
import styled from 'styled-components'
import { RoomCard } from 'components/Cards/RoomCard';

const StyledList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(152px, 1fr));
  grid-gap: 16px;

`;

export const RoomList = ({ rooms }) => {
  return (
    <StyledList>
      {rooms.map((room, i) => (
        <li key={i}>
          <RoomCard
            title={room.roomName}
            numDevicesOn={room.numDevicesOn}
            numDevicesTotal={room.numDevicesTotal}
            link='/rules'
          />
        </li>
      ))}
    </StyledList>
  )
}
