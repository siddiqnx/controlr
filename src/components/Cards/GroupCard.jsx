import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import ThreeDot from 'images/icons/3DotMenuHorizontal';
import { tText_0_b, tText_s1_n } from 'style/typography';
const StyledCard = styled.div`
  padding: 22px 16px;
  border: 1px solid ${({ theme }) => theme.cPrimary_650};
  border-radius: ${({ theme }) => theme.brRadius_1};
  width: ${({ width }) => width};

  .titleGroup {
    display: flex;
    justify-content: space-between;

    .title {
      ${tText_0_b}
    }

    .icon {
      color: ${({ theme }) => theme.cPrimary_600};
    }
  }

  footer {
    ${tText_s1_n};
    color: ${({ theme }) => theme.cPrimary_500};
    margin-top: 5px;
  }
`;

export const GroupCard = ({
  width = '100%',
  title,
  numDevices = 0,
  className,
  link
}) => {
  return (
    <StyledCard className={className} width={width}>
      <Link to={link}>
        <div className='titleGroup'>
          <div className='title'>{title}</div>
          <div className='icon'>
            <Link to='/events'>
              <ThreeDot width='22px' />
            </Link>
          </div>
        </div>
        <footer>
          {numDevices} Devices
        </footer>
      </Link>
    </StyledCard>
  )
}
