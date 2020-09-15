import React from 'react';
import styled from 'styled-components';
import { ActiveTimerCard } from 'components/Cards/ActiveTimerCard';
import Generic from 'images/deviceIcons/Generic';
import { useQuery } from 'react-query';
import { fetchTimerList } from 'requests/timers/fetchTimerList';
import { DateTime, Interval } from 'luxon';

const StyledList = styled.ul`
  display: grid;
  grid-gap: 8px;
  grid-template-columns: repeat(auto-fill, minmax(312px, 1fr));

`;

export const ActiveTimerList = () => {
  const { data: timers } = useQuery(['timers', {}], fetchTimerList, {
    refetchInterval: 60000
  });
  return (
    <StyledList>
      {timers && timers.map((timer) => {
        const triggerTime = DateTime.fromISO(timer.trigger_time, { zone: 'Asia/Kolkata' })
        const now = DateTime.local();
        const { hours, minutes } = Interval.fromDateTimes(now, triggerTime).toDuration(['hours', 'minutes']).toObject();

        if (hours === undefined || minutes === undefined) {
          return;
        }

        return (<li key={timer.id}>
          <ActiveTimerCard
            className='activeTimerCard'
            deviceName={timer.device_name}
            roomName={timer.room_name}
            roomGroup={timer.room_group_name}
            stateTrigger={timer.state_change}
            icon={Generic}
            link={`/rooms/${timer.room}/devices/${timer.device}`}
            hours={hours}
            minutes={minutes && minutes.toFixed(0)}
          />
        </li>)
      })}
    </StyledList >
  )
}
