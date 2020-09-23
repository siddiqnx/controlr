import React from 'react'
import styled from 'styled-components'
import { updateScheduleState } from 'requests/schedules/updateScheduleState';
import { useMutation, queryCache } from 'react-query';
import { tLabel_s2_b, tLabel_0 } from 'style/typography';
import SwitchBtn from 'react-switch';
import { tText_0_b } from 'style/typography';

const StyledCard = styled.div`
  width: ${({ width }) => width};
  background: ${({ theme }) => theme.cPrimary_925};
  border-radius: ${({ theme }) => theme.brRadius_1};
  padding: 16px;
  margin-right: 16px;
  height: 100%;

  header {
    display: flex;
    justify-content: space-between;
  }

  .days { 
    display: flex;
    flex-wrap: wrap;
    margin: 12px -4px 0;
    li {
      border: 1px solid ${({ theme }) => theme.cAccent1_300};
      color: ${({ theme }) => theme.cAccent1_200};
      padding: 4px 8px;
      border-radius: ${({ theme }) => theme.brRadius_1};
      ${tLabel_s2_b};
      text-align: center;
      flex-shrink: 0;
      margin: 4px;
    }
  }

  .state {
    color: ${({ theme, stateTrigger }) => stateTrigger ? theme.cPositive_100 : theme.cNegative_100};
    ${tText_0_b};
  }

  .time {
    display: block;
    color: ${({ theme }) => theme.cAccent1_200};
    ${tLabel_0};
    margin-top: 8px;
  }
`;

export const ScheduleCardSmall = ({
  id,
  className,
  deviceId,
  stateTrigger,
  scheduleState,
  time,
  daysOfWeek,
  width = '100%'
}) => {
  const [mutateScheduleState] = useMutation(updateScheduleState, {
    onSuccess: () => queryCache.invalidateQueries(['schedules', { deviceId: deviceId.toString() }])
  });
  return (
    <StyledCard width={width} stateTrigger={stateTrigger}>
      <header>
        <div className='info'>
          <span className='state'>{stateTrigger ? 'ON' : 'OFF'}</span>
          <span className='time'>{time}</span>
        </div>
        <div className='switch'>
          <SwitchBtn
            width={28}
            height={14}
            uncheckedIcon={false}
            checkedIcon={false}
            handleDiameter={10}
            offColor='#818DBA'
            onColor='#486EF6'
            checked={scheduleState}
            offHandleColor='#2B3045'
            onHandleColor='#2B3045'
            onChange={() => mutateScheduleState({ scheduleId: id, state_change: !scheduleState })}
          />
        </div>
      </header>
      <footer>
        <ul className='days'>
          {daysOfWeek.length === 7
            ? <li>Everyday</li>
            : daysOfWeek.map((day, i) => (
              <li key={i}>{day}</li>
            ))
          }
        </ul>
      </footer>
    </StyledCard>
  )
}
