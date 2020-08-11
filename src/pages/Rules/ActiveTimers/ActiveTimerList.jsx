import React from 'react';
import styled from 'styled-components';
import { ActiveTimerCard } from 'components/Cards/ActiveTimerCard';
import Generic from 'images/deviceIcons/Generic';

const timers = [
  {
    deviceName: 'Television',
    roomName: 'Living Room',
    roomGroup: 'Ground Floor',
    onTimer: true,
    hours: 5,
    icon: Generic
  },
  {
    deviceName: 'Television',
    roomName: 'Living Room',
    roomGroup: 'Ground Floor',
    onTimer: true,
    hours: 5,
    icon: Generic
  },
  {
    deviceName: 'Television',
    roomName: 'Living Room',
    roomGroup: 'Ground Floor',
    onTimer: true,
    hours: 5,
    icon: Generic
  },
];

const StyledList = styled.ul`
  display: grid;
  grid-gap: 8px;
  grid-template-columns: repeat(auto-fill, minmax(312px, 1fr));
  .activeTimerCard {
    
  }
`;

export const ActiveTimerList = () => {
  return (
    <StyledList>
      {timers.map((timer, i) => (
        <li key={i}>
          <ActiveTimerCard
            link='/rooms/1'
            className='activeTimerCard'
            {...timer}
          />
        </li>
      ))}

    </StyledList >
  )
}
