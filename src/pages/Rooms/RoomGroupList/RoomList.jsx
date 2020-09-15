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
      {rooms.map((room) => (
        <li key={room.id}>
          <RoomCard
            title={room.name}
            numDevicesOn={room.num_devices_on}
            numDevicesTotal={room.num_devices_total}
            link={`${location.pathname}/${room.id}`}
          />
        </li>
      ))}
    </StyledList>
  )
}
