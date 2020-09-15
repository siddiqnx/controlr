import React from 'react'
import styled, { css } from 'styled-components'
import { tText_l1_b, tText_l4_b, tText_s1_n } from 'style/typography';
import { Link } from 'react-router-dom';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css'
const StyledCard = styled.div`
  background-color: ${({ theme }) => theme.cPrimary_750};
  border: 2px solid ${({ theme }) => theme.cPrimary_650};
  border-radius: ${({ theme }) => theme.brRadius_1};
  padding: 20px 16px;

  ${({ width }) => width && css`
    width: ${width};
  `}

  footer {
    margin-top: 48px;
    display: flex;
    justify-content: space-between;
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

  .meter {
    width: 26px;
    height: 26px;
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
          <span className='meter'>
            <CircularProgressbar
              value={numDevicesOn}
              minValue={0}
              maxValue={numDevicesTotal}
              styles={buildStyles({
                pathColor: '#1541E0',
                trailColor: '#818DBA'
              })}
              strokeWidth={15}
            />
          </span>
        </footer>
      </Link>
    </StyledCard>
  )
}
