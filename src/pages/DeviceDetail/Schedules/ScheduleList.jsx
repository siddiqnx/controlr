import React from 'react'
import styled from 'styled-components'
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { fetchScheduleList } from 'requests/schedules/fetchScheduleList';
import { ScheduleCardSmall } from 'components/Cards/ScheduleCardSmall';
import daysOfWeek from 'constants/daysOfWeek';

const StyledList = styled.ul`
  display: flex;
  overflow-x: scroll;
  flex-wrap: nowrap;
`;

export const ScheduleList = () => {
  const { deviceId } = useParams();
  const { data: schedules } = useQuery(['schedules', { deviceId }], fetchScheduleList);
  return (
    <StyledList>
      {schedules?.map((schedule) => (
        <li key={schedule.id}>
          <ScheduleCardSmall
            id={schedule.id}
            deviceId={schedule.device}
            stateTrigger={schedule.state_change}
            scheduleState={schedule.state}
            time={schedule.time}
            daysOfWeek={schedule.days_of_week.map((day) => daysOfWeek[day])}
            width='200px'
          />
        </li>
      ))}

    </StyledList>
  )
}


