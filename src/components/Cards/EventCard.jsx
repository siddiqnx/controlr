import React from 'react'
import styled from 'styled-components'
import { tText_0_b, tLabel_s1, tText_s2_n, tText_s1_b } from 'style/typography';

const StyledCard = styled.div`
  position: relative;
  display: flex;
  background: ${({ theme }) => theme.cPrimary_925};
  padding: 16px 16px 16px 48px;
  width: 100%;
  max-width: ${({ maxWidth }) => maxWidth};

  &::after {
    content: '';
    position: absolute;
    top: 0;
    z-index: 1;
    left: 26px;
    background: ${({ theme }) => theme.cPrimary_700};
    width: 2px;
    height: 100%;
  }

  .signal {
    position: absolute;
    display: grid;
    z-index: 2;
    place-items: center;
    left: 19px;
    top: 19px;
    border-radius: 50%;
    width: 16px;
    height: 16px;
    background-color: ${({ stateChange, theme }) => stateChange ? theme.cPositive_100 : theme.cNegative_100};

    .ring {
      width: 50%;
      height: 50%;
      border-radius: inherit;
      border: 1px solid ${({ stateChange, theme }) => stateChange ? theme.cPositive_200 : theme.cNegative_200};
    }

  }

  .eventInfo {
    margin-left: 16px;
    min-width: 0;
    flex-shrink: 1;
    flex-grow: 1;
    .deviceName {
      ${tText_0_b};
    }

    .room {
      width: 100%;
      ${tLabel_s1};
      color: ${({ theme }) => theme.cPrimary_500};
      margin-top: 6px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    .event {
      color: ${({ theme }) => theme.cPrimary_400};
      ${tText_s2_n};
      margin-top: 12px;
    }

  }

  .time {
    width: max-content;
    text-align: right;
    margin-left: auto;
    flex-shrink: 0;

    ${tText_s1_b};
  }
`;

export const EventCard = ({
  deviceName,
  roomName,
  roomGroup,
  event,
  stateChange,
  time,
  icon: Icon,
  className,
  width = '328px'
}) => {
  return (
    <StyledCard className={className} maxWidth={width} stateChange={stateChange}>
      <span className='signal'>
        <span className='ring'></span>
      </span>
      <span className='icon'>
        <Icon width='22px' height='22px' />
      </span>
      <div className='eventInfo'>
        <div className='deviceName'>{deviceName}</div>
        <div className='room'>{roomName} • {roomGroup}</div>
        <div className='event'> — {event}</div>
      </div>
      <div className='time'>{time}</div>
    </StyledCard>
  )
}
