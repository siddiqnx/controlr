import React from 'react'
import Generic from 'images/deviceIcons/Generic';
import groupByProperty from 'utils/groupByProperty';
import { GroupHeader } from 'components/Headers/GroupHeader';
import { EventList } from './EventList';
import styled from 'styled-components';

const events = [
  {
    deviceName: 'Television',
    roomName: 'Living Room',
    roomGroup: 'Ground Floor',
    event: 'Switched On',
    stateChange: true,
    time: '9:32 PM',
    day: 'today',
    icon: Generic
  },
  {
    deviceName: 'AC',
    roomName: 'Living Room',
    roomGroup: 'Ground Floor',
    event: 'Switched Off',
    stateChange: false,
    time: '12:05 PM',
    day: 'today',
    icon: Generic
  },
  {
    deviceName: 'Refridgirator',
    roomName: 'Living Room',
    roomGroup: 'First Floor',
    event: 'Switched On',
    stateChange: true,
    time: '1:32 PM',
    day: 'yesterday',
    icon: Generic
  },
  {
    deviceName: 'Bed Lamp',
    roomName: 'Bedroom',
    roomGroup: 'First Floor',
    event: 'Switched On',
    stateChange: true,
    time: '7:45 PM',
    day: 'yesterday',
    icon: Generic
  },
];

const StyledList = styled.ul`
  margin-top: 28px;

  > li + li {
    margin-top: 28px;
  }
`;

export const EventGroupList = () => {

  const eventGroups = groupByProperty(events, 'day')

  return (
    <StyledList>
      {Object.entries(eventGroups).map(([group, events], i) => (
        <li key={i}>
          <GroupHeader text={group} />
          <EventList events={events} />
        </li>
      ))}
    </StyledList>
  )
}
