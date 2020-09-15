import React, { useContext } from 'react'
import HamburgerIcon from 'images/icons/HamburgerMenu';
import styled from 'styled-components';
import { tHeading1_0 } from 'style/typography';
import { SidebarContext } from 'contexts/SidebarContext';


const PageHeader = styled.header`
  display: flex;
  width: 100%;
  justify-content: space-between;
  img {
    width: 24px;
    height: 24px;
  }
`;

const MainPageH1 = styled.h1`
  ${tHeading1_0};
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;
`;

export const MainPageHeader = ({
  text,
  actionBtn,
  hamMenu,
  className
}) => {
  const { setOpen } = useContext(SidebarContext);
  return (
    <PageHeader className={className}>
      <MainPageH1>{text}</MainPageH1>

      {/* <ActionButton /> */}
      <ButtonGroup>
        {actionBtn &&
          actionBtn
        }
        {hamMenu &&
          <button onClick={() => setOpen((open) => !open)}>
            <HamburgerIcon width='24px' height='24px' />
          </button>
        }
      </ButtonGroup>
    </PageHeader>
  )
}