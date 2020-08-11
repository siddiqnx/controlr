import React from 'react'
import styled, { css } from 'styled-components'
import ThreeDot from 'images/icons/3DotMenuHorizontal';
import { tText_0_b, tText_s1_n } from 'style/typography';
import { Button } from 'components/Buttons/Button';

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.cPrimary_750};
  border-radius: ${({ theme }) => theme.brRadius_1};
  box-shadow: ${({ theme }) => theme.bsShadow_1};
  padding: 24px 24px;

  ${({ width }) => width && css`
    width: ${width};
  `};
  
  .titleRow {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 48px;
    .title {
      ${tText_0_b};
    }
  }

  footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${({ theme }) => theme.cPrimary_600};
    ${tText_s1_n};

    .footer__left {
      div + div {
        margin-top: 4px;
      }
    }
  }
`;

export const SceneCard = ({
  width,
  title = '',
  numDevicesOn = 0,
  numDevicesOff = 0,
  small = true,
  large = false,
  className,
  link
}) => {

  return (
    <StyledCard width={width} className={className}>
      <div className='titleRow'>
        <div className='title'>{title}</div>
        {large && <div className='menuIcon'><ThreeDot width='22px' height='22px' /></div>}
      </div>
      <footer>
        <div className='footer__left'>
          <div>{numDevicesOn} Devices ON</div>
          <div>{numDevicesOff} Devices OFF</div>
        </div>
        {large && <Button md>Trigger </Button>}
      </footer>
    </StyledCard>
  )
}
