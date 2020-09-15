import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import { tText_0_b, tLabel_s1, tLabel_s2_b, tLabel_0 } from 'style/typography';
import SwitchBtn from 'react-switch';
import { useMutation, queryCache } from 'react-query';
import { updateScheduleState } from 'requests/schedules/updateScheduleState';

const StyledCard = styled.div`
  background: ${({ theme }) => theme.cPrimary_925};
  padding: 16px 16px;

  .link {
  }

  header {
    display: flex;
    padding-bottom: 10px;
    border-bottom: 1px solid ${({ theme }) => theme.cPrimary_800};

    .device {
      margin-left: 16px;
    }

    .deviceName {
      ${tText_0_b}
    }

    .room {
      ${tLabel_s1};
      color: ${({ theme }) => theme.cPrimary_600};
      margin-top: 6px;
    }
  }

  footer {
    display: flex;
    padding-top: 10px;

    .schedule {
      flex: 0 0;
      ${tLabel_0};
      color: ${({ theme, schedule }) => schedule ? theme.cPositive_100 : theme.cNegative_100};
    }

    .days { 
      display: flex;
      flex-wrap: wrap;
      margin-left: 16px;
      margin: -4px 0 -4px 16px;
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

    .time {
      margin-left: auto;
      color: ${({ theme }) => theme.cAccent1_200};
      ${tLabel_s1};
      flex-shrink: 0;
    }

  }

  .switch {
    margin-left: auto;
  }
`;

export const ScheduleCard = ({
  id,
  deviceName,
  roomName,
  roomGroup,
  daysOfWeek,
  stateTrigger,
  time,
  scheduleState,
  width,
  icon: Icon,
  className
}) => {
  const [mutateScheduleState] = useMutation(updateScheduleState, {
    onSuccess: () => queryCache.invalidateQueries(['schedules', {}])
  });
  return (
    <StyledCard className={className} schedule={stateTrigger}>
      <Link to='/rooms'>
        <header>
          <span className='icon'><Icon width='30px' height='30px' /></span>
          <div className='device'>
            <div className='deviceName'>{deviceName}</div>
            <div className='room'>{roomName} • {roomGroup}</div>
          </div>
          <span className='switch'>
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
          </span>
        </header>
        <footer>
          <span className='schedule'>{stateTrigger ? 'On' : 'Off'}</span>
          <ul className='days'>
            {daysOfWeek.length === 7
              ? <li>Everyday</li>
              : daysOfWeek.map((day, i) => (
                <li key={i}>{day}</li>
              ))
            }
          </ul>
          <span className='time'>{time}</span>
        </footer>
      </Link>
    </StyledCard>
  )
}
