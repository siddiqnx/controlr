import React from 'react';
import styled, { css } from 'styled-components';
import MenuIcon from 'images/icons/3DotMenuHorizontal';
import TimerIcon from 'images/icons/Timer';

import { tText_0_b, tLabel_s1 } from 'style/typography';
import { Link } from 'react-router-dom';

const StyledCard = styled.div`

  .link {
    display: flex;
    background: ${({ theme }) => theme.cAccent4_100};
    border-radius: ${({ theme }) => theme.brRadius_1};
    padding: 14px 16px;
    color: ${({ theme }) => theme.cAccent4_400};
  }


  ${({ width }) => width && css`
    width: ${width};
  `};

  .icon {

  }

  .middle {
    padding: 0 16px;

    .device {
      ${tText_0_b};
    }

    .room {
      color: ${({ theme }) => theme.cAccent4_300};
      ${tLabel_s1};
      margin-top: 6px;
    }

    .timer {
      ${tLabel_s1}
      margin-top: 24px;

      span {
        display: inline-block;
        margin-left: 28px;

        .timerIcon {
          vertical-align: middle;
          margin-right: 6px;
        }
      }
    }
  }


  .menu {
    margin-left: auto;
  }
`;

export const ActiveTimerCard = ({
  deviceName,
  roomName,
  roomGroup,
  stateTrigger,
  hours,
  minutes,
  icon: Icon,
  width,
  link,
  className
}) => {
  return (
    <StyledCard width={width} className={className}>
      <Link className='link' to={link}>
        <div className='icon'>
          <Icon width='24px' height='24px' />
        </div>
        <div className='middle'>
          <div className='device'>{deviceName}</div>
          <div className='room'>{roomName} • {roomGroup}</div>
          <div className='timer'>
            {stateTrigger ? 'ON' : 'OFF'}
            <span><TimerIcon className='timerIcon' width='16px' height='16px' />{hours} hours {minutes && `${minutes} minutes`}</span>
          </div>
        </div>
        <div className='menu'>
          <MenuIcon />
        </div>
      </Link>
    </StyledCard>
  )
}
