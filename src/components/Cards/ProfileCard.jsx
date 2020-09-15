import React from 'react'
import styled from 'styled-components'
import ChevronDownIcon from 'images/icons/ChevronDown';
import { tHeading2_0 } from 'style/typography';
const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${tHeading2_0};
  text-align: center;

  .profileImg {
    width: 96px;
    height: 96px;
    border-radius: 100%;
    object-fit: cover;
    margin-bottom: 20px;
  }

  svg {
    vertical-align: middle;
  }

  .arrow {
    color: ${({ theme }) => theme.cPrimary_400};  
    padding-left: 6px;
  }
`;

export const ProfileCard = ({ imageLink, name, className }) => {
  return (
    <StyledCard className={className}>
      <img className='profileImg' src={imageLink} />
      <button>
        {name}
        <span className='arrow'>
          <ChevronDownIcon width='16px' height='16px' />
        </span>
      </button>
    </StyledCard>
  )
}
