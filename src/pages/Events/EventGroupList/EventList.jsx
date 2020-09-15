import React from 'react'
import styled from 'styled-components'
import { EventCard } from 'components/Cards/EventCard';
import Generic from 'images/deviceIcons/Generic';
import { DateTime } from 'luxon';

const StyledList = styled.ul`
  li:first-of-type .eventCard {
    border-top-right-radius: ${({ theme }) => theme.brRadius_1};
    border-top-left-radius: ${({ theme }) => theme.brRadius_1};
  }
  li:last-of-type .eventCard {
    border-bottom-right-radius: ${({ theme }) => theme.brRadius_1};
    border-bottom-left-radius: ${({ theme }) => theme.brRadius_1};
  }
`;

export const EventList = ({ events }) => {
  return (
    <StyledList>
      {events.map((event) => (
        <li key={event.id}>
          <EventCard
            className='eventCard'
            width='100%'
            deviceName={event.device_name}
            roomName={event.room_name}
            roomGroup={event.room_group_name}
            event={event.description}
            stateChange={event.state_change}
            time={DateTime.fromISO(event.timestamp).toLocaleString(DateTime.TIME_24_SIMPLE)}
            icon={Generic}
          />
        </li>
      ))}
    </StyledList>
  )
}
