import React from 'react'
import styled from 'styled-components'
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { fetchTimerList } from 'requests/timers/fetchTimerList';
import { ActiveTimerCardSmall } from 'components/Cards/ActiveTimerCardSmall';
import { DateTime, Interval } from 'luxon';

const StyledList = styled.ul`
  display: flex;
  overflow-x: scroll;
  flex-wrap: nowrap;
`;

export const TimersList = () => {
  const { deviceId } = useParams();
  const { data: timers } = useQuery(['timers', { deviceId }], fetchTimerList);
  return (
    <StyledList>
      {timers?.map((timer) => {
        const triggerTime = DateTime.fromISO(timer.trigger_time, { zone: 'Asia/Kolkata' })
        const now = DateTime.local();
        const { hours, minutes } = Interval.fromDateTimes(now, triggerTime).toDuration(['hours', 'minutes']).toObject();

        if (hours === undefined || minutes === undefined) {
          return;
        }

        return (
          <li key={timer.id}>
            <ActiveTimerCardSmall
              deviceId={timer.device}
              key={timer.id}
              stateTrigger={timer.state_change}
              hours={hours && hours}
              minutes={minutes && minutes.toFixed(0)}
              width='115px'
            />
          </li>
        );
      })}
    </StyledList>
  )
}
