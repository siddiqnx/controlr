import React from 'react'
import styled from 'styled-components'
import TimerIcon from 'images/icons/Timer';
import { tText_s1_n, tText_0_b } from 'style/typography';
import theme from 'style/theme';
import HorizontalMenuIcon from 'images/icons/3DotMenuHorizontal';

const StyledCard = styled.div`
  position: relative;
  width: ${({ width }) => width};
  background: ${({ theme }) => theme.cAccent1_300};
  border-radius: ${({ theme }) => theme.brRadius_1};
  padding: 16px;
  margin-right: 16px;

  header {
    display: flex;
    justify-content: space-between;
    ${tText_0_b};
  }

  .menuIcon {
    color: ${({ theme }) => theme.cAccent1_100};
  }

  footer {
    ${tText_s1_n};
    margin-top: 12px;
  }

  .icon {
    color: ${({ theme }) => theme.cAccent1_100};
    vertical-align: middle;
    margin-right: 8px;
  }

`;

export const ActiveTimerCardSmall = ({
  className,
  deviceId,
  stateTrigger,
  hours,
  minutes,
  width = '100%',
}, { ...rest }) => {
  return (
    <StyledCard className={className} width={width} {...rest}>
      <header>
        {stateTrigger ? 'ON' : 'OFF'}
        <span className="menuIcon"><HorizontalMenuIcon width='16px' height='16px' /></span>
      </header>
      <footer>
        <span className='icon'>
          <TimerIcon width='12px' height='12px' />
        </span>
        {`${hours}h ${minutes}m`}
      </footer>
    </StyledCard>
  )
}
