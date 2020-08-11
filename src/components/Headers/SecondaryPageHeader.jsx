import React from 'react'
import HamburgerIcon from 'images/icons/HamburgerMenu';
import styled from 'styled-components';
import { tHeading1_s1 } from 'style/typography';
import { useHistory } from 'react-router-dom';
import LeftChevronIcon from 'images/icons/ChevronLeft';

const PageHeader = styled.header`
  display: flex;
  width: 100%;
  align-items: center;
  color: ${({ theme }) => theme.cPrimary_400};

  .icon {
    display: grid;
    place-items: center;
  }

  .actionBtn {
    a {
      color: ${({ theme }) => theme.cPrimary_400};
    }
  }
`;

const MainPageH1 = styled.h1`
  ${tHeading1_s1};
  margin-left: 16px;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;
  margin-left: auto;
`;

export const SecondaryPageHeader = ({
  text,
  actionBtn,
  hamMenu,
  className
}) => {
  const history = useHistory();

  const handleBack = () => {
    history.goBack();
  }

  return (
    <PageHeader className={className}>
      <span className='icon' onClick={handleBack}>
        <LeftChevronIcon width='16px' height='16px' />
      </span>
      <MainPageH1>{text}</MainPageH1>
      {/* <ActionButton /> */}
      <ButtonGroup>
        {actionBtn &&
          <span className='actionBtn'>{actionBtn}</span>
        }
        {hamMenu &&
          <HamburgerIcon width='24px' height='24px' />
        }
      </ButtonGroup>
    </PageHeader>
  )
}