import React from 'react';
import styled from 'styled-components';
import { ScheduleCard } from 'components/Cards/ScheduleCard';
import Generic from 'images/deviceIcons/Generic';

const schedules = [
  {
    deviceName: 'Air Conditioner',
    roomName: 'Bedroom',
    roomGroup: 'Ground Floor',
    days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    onSchedule: true,
    time: '9:38 AM',
    state: true,
    icon: Generic
  },
  {
    deviceName: 'Refrigirator',
    roomName: 'Bedroom',
    roomGroup: 'Ground Floor',
    days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    onSchedule: false,
    time: '9:38 AM',
    state: false,
    icon: Generic
  },
  {
    deviceName: 'Outside Lamp',
    roomName: 'Parking Lot',
    roomGroup: 'Ground Floor',
    days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    onSchedule: false,
    time: '9:38 AM',
    state: true,
    icon: Generic
  },
];

const StyledList = styled.ul`
  display: grid;
  grid-gap: 8px;
  grid-template-columns: repeat(auto-fill, minmax(312px, 1fr));
  justify-items: stretch;

  .scheduleCard {
    height: 100%;
  }
`;

export const ScheduleList = () => {
  return (
    <StyledList>
      {schedules.map((schedule, i) => (
        <li key={i}>
          <ScheduleCard
            className='scheduleCard'
            {...schedule}
          />
        </li>
      ))}
    </StyledList>
  )
}
