import React from 'react'
import groupByProperty from 'utils/groupByProperty';
import { GroupHeader } from 'components/Headers/GroupHeader';
import { EventList } from './EventList';
import styled from 'styled-components';
import { useQuery } from 'react-query';
import { fetchEventList } from 'requests/events/fetchEventList';
import { DateTime } from 'luxon';

const StyledList = styled.ul`
  margin-top: 28px;

  > li + li {
    margin-top: 28px;
  }
`;

export const EventGroupList = () => {
  let { data: events } = useQuery('events', fetchEventList);
  if (!events)
    return (<> </>);

  events = events.map((event) => {
    const date = event.timestamp.split('T')[0];
    return {
      ...event,
      date
    }
  })
  const eventGroups = groupByProperty(events, 'date')

  return (
    <StyledList>
      {Object.entries(eventGroups).map(([group, events]) => {
        const date = DateTime.fromISO(group);
        return (
          <li key={date}>
            <GroupHeader text={date.toLocaleString(DateTime.DATE_MED_WITH_WEEKDAY)} />
            <EventList events={events} />
          </li>
        )
      }
      )}
    </StyledList>
  )
}
