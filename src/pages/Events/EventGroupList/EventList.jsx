import React from 'react'
import styled from 'styled-components'
import { EventCard } from 'components/Cards/EventCard';

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
      {events.map((event, i) => (
        <li key={i}>
          <EventCard className='eventCard' width='100%' {...event} />
        </li>
      ))}
    </StyledList>
  )
}
