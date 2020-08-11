import React from 'react'
import styled from 'styled-components'
import { tText_l1_n } from 'style/typography';

const StyledCard = styled.div`
  display: flex;
  background: ${({ theme }) => theme.cPrimary_900};
  ${tText_l1_n};
  padding: 18px 24px;
  border-radius: ${({ theme }) => theme.brRadius_1};
  align-items: center;

  .icon {
    vertical-align: middle;
  }

  .switch {
    margin-left: auto
  }

  .deviceName {
    margin-left: 16px;
  }

`;

export const DeviceCard = ({
  deviceName,
  state,
  icon: Icon,
  width,
  className,
}) => {
  return (
    <StyledCard className={className} width={width}>
      <span><Icon width='28px' height='28px' /></span>
      <div className='deviceName'>{deviceName}</div>
      <span className='switch'></span>
    </StyledCard>
  )
}
