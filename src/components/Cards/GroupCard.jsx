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

      button {
        color: inherit;
      }
    }
  }

  footer {
    ${tText_s1_n};
    color: ${({ theme }) => theme.cPrimary_500};
    margin-top: 5px;
  }
`;

export const GroupCard = ({
  id,
  title,
  className,
  width = '100%',
  numDevices = 0
}) => {
  return (
    <StyledCard className={className} width={width}>
      <Link to={`/groups/${id}`}>
        <div className='titleGroup'>
          <div className='title'>{title}</div>
          <div className='icon'>
            <button>
              <ThreeDot width='22px' />
            </button>
          </div>
        </div>
        <footer>
          {numDevices} Devices
        </footer>
      </Link>
    </StyledCard>
  )
}
