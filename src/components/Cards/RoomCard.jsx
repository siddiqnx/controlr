import React from 'react'
import styled, { css } from 'styled-components'
import { tText_l1_b, tText_l4_b, tText_s1_n } from 'style/typography';
import { Link } from 'react-router-dom';

const StyledCard = styled.div`
  background-color: ${({ theme }) => theme.cPrimary_750};
  border: 1px solid ${({ theme }) => theme.cPrimary_650};
  border-radius: ${({ theme }) => theme.brRadius_1};
  padding: 26px 16px;

  ${({ width }) => width && css`
    width: ${width};
  `}

  footer {
    margin-top: 48px;
  }

  .title {
    ${tText_l1_b};
  }

  .value {
    ${tText_s1_n};
    font-feature-settings: "tnum";
    color: ${({ theme }) => theme.cPrimary_600};

    span {
      ${tText_l4_b};
      color: ${({ theme }) => theme.cPrimary_400};
    }
  }
`;

export const RoomCard = ({
  width,
  title = '',
  numDevicesOn = 0,
  numDevicesTotal = 0,
  link
}) => {
  return (
    <StyledCard width={width}>
      <Link to={link}>
        <div className='title'>{title}</div>
        <footer>
          <div className='value'><span>{numDevicesOn}</span>/{numDevicesTotal}</div>

        </footer>
      </Link>
    </StyledCard>
  )
}
