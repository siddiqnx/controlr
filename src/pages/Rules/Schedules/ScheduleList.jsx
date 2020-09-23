import React from 'react';
import styled from 'styled-components';
import { ScheduleCard } from 'components/Cards/ScheduleCard';
import Generic from 'images/deviceIcons/Generic';
import { useQuery } from 'react-query';
import { fetchScheduleList } from 'requests/schedules/fetchScheduleList';
import daysOfWeek from 'constants/daysOfWeek';
import { DateTime } from 'luxon';

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
  const { data: schedules } = useQuery(['schedules', {}], fetchScheduleList);
  return (
    <StyledList>
      {schedules?.map((schedule) => {
        const time = DateTime.fromISO(schedule.trigger_time).toLocaleString(DateTime.TIME_24_SIMPLE)
        return (
          <li key={schedule.id}>
            <ScheduleCard
              id={schedule.id}
              className='scheduleCard'
              deviceName={schedule.device_name}
              roomName={schedule.room_name}
              roomGroup={schedule.room_group_name}
              daysOfWeek={schedule.days_of_week.map((day) => daysOfWeek[day])}
              stateTrigger={schedule.state_change}
              time={time}
              scheduleState={schedule.state}
              icon={Generic}
            />
          </li>
        )
      }
      )}
    </StyledList>
  )
}
