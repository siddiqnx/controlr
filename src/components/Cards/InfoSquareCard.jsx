import React from 'react'
import styled, { css } from 'styled-components';
import { tLabel_s1, tText_l5_b } from 'style/typography';

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  width: ${({ width }) => width};
  border-radius: ${({ theme }) => theme.brRadius_1};
  padding: 34px 5px;
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
    text-align: center;
  }

  ${({ small }) => small && css`
    padding: 22px 8px;

    .value {
      ${tText_l5_b};
    }
  `}
  ${({ outline }) => outline && css`
    background: none;
    border: 1px solid ${({ theme }) => theme.cPrimary_650};
  `}
`;

export const InfoSquareCard = ({
  width = '100%',
  level = 2,
  value = 0,
  unit = null,
  text,
  highlight = false,
  small = false,
  outline = false,
  className
}) => {

  const H = 'h' + level;

  return (
    <StyledCard small={small} outline={outline} width={width} highlight={highlight} className={className}>
      <div className='value'>
        {value}
        {unit && <span className='unit'>{unit}</span>}
      </div>
      <H className='title'>{text}</H>
    </StyledCard>
  )
}
