import React from 'react'
import styled, { css } from 'styled-components';
import { tText_0_b, tLabel_s1 } from 'style/typography';
import { Link } from 'react-router-dom';

const StyledCard = styled.div`
  position: relative;
  width: ${({ width }) => width};
  background-color: ${({ theme }) => theme.cPrimary_900};
  border: 1px solid ${({ theme }) => theme.cPrimary_700};
  padding: 16px 14px;
  flex-shrink: 0;
  flex-grow: 0;
  overflow: hidden;
  white-space: nowrap;

  .icon {
    ${({ state }) => state && css`
      color: ${({ theme }) => theme.cAccent1_0};
    `}
  }

  .title {  
    ${tText_0_b};
    margin-top: 8px;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .subtitle {
    ${tLabel_s1};
    color: ${({ theme }) => theme.cPrimary_600};
    margin-top: 4px;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .state {
    position: absolute;
    top: 8px;
    right: 8px;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.cNegative_0};
    
    ${({ state }) => state && css`
      background-color: ${({ theme }) => theme.cPositive_0};
    `}
  }
`;

export const FavouriteCard = ({
  icon,
  title,
  subtitle,
  state,
  width = '100%',
  className,
  link
}) => {

  const SVGIcon = icon;

  return (
    <StyledCard width={width} state={state} className={className}>
      <Link to={link}>
        <div className='icon'><SVGIcon width='30px' height='30px' /></div>
        <div className='title'>{title}</div>
        <div className='subtitle'>{subtitle}</div>
        <span className='state'></span>
      </Link>
    </StyledCard>
  )
}
