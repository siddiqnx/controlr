import React from 'react'
import styled from 'styled-components'
import { RoomCard } from 'components/Cards/RoomCard';
import { useLocation } from 'react-router-dom';

const StyledList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(152px, 1fr));
  grid-gap: 16px;

`;

export const RoomList = ({ rooms }) => {
  const location = useLocation();

  return (
    <StyledList>
      {rooms.map((room, i) => (
        <li key={i}>
          <RoomCard
            title={room.roomName}
            numDevicesOn={room.numDevicesOn}
            numDevicesTotal={room.numDevicesTotal}
            link={`${location.pathname}/1`}
          />
        </li>
      ))}
    </StyledList>
  )
}
