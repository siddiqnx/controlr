import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import { tText_0_b, tLabel_s1, tLabel_s2_b, tLabel_0 } from 'style/typography';

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
`;

export const ScheduleCard = ({
  deviceName,
  roomName,
  roomGroup,
  days,
  onSchedule,
  time,
  state,
  width,
  icon: Icon,
  className
}) => {
  return (
    <StyledCard className={className} schedule={onSchedule}>
      <Link to='/rooms'>
        <header>
          <span className='icon'><Icon width='30px' height='30px' /></span>
          <div className='device'>
            <div className='deviceName'>{deviceName}</div>
            <div className='room'>{roomName} • {roomGroup}</div>
          </div>
          <span className='menu'></span>
        </header>
        <footer>
          <span className='schedule'>{onSchedule ? 'On' : 'Off'}</span>
          <ul className='days'>
            {days.length === 7
              ? <li>Everyday</li>
              : days.map((day, i) => (
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
