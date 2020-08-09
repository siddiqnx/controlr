import React from 'react'
import styled, { css } from 'styled-components';
import { tLabel_s1 } from 'style/typography';

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  width: ${({ width }) => width};
  border-radius: ${({ theme }) => theme.brRadius_1};
  padding: 34px 22px;
  background: ${({ theme }) => theme.cPrimary_800};
  box-shadow: ${({ theme }) => theme.bsShadow_1};
  
  ${({ highlight }) => highlight && css`
    background: ${({ theme }) => theme.cGradient_1};
  `};

  .value {
    font-size: 38px;
  }

  .unit {
    color: ${({ theme }) => theme.cWhite_60};
    font-size: .631em;
  }

  .title {
    ${tLabel_s1};
    color: ${({ theme }) => theme.cPrimary_200};
    margin-top: 8px;
  }
`;

export const InfoSquareCard = ({
  width = '100%',
  level = 2,
  value = 0,
  unit = null,
  text,
  highlight = false,
  className
}) => {

  const H = 'h' + level;

  return (
    <StyledCard width={width} highlight={highlight} className={className}>
      <div className='value'>
        {value}
        {unit && <span className='unit'>{unit}</span>}
      </div>
      <H className='title'>{text}</H>
    </StyledCard>
  )
}
