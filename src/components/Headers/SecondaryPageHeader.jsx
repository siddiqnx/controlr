import React, { useContext } from 'react'
import HamburgerIcon from 'images/icons/HamburgerMenu';
import styled from 'styled-components';
import { tHeading1_s1, tLabel_0 } from 'style/typography';
import { useHistory } from 'react-router-dom';
import LeftChevronIcon from 'images/icons/ChevronLeft';
import { SidebarContext } from 'contexts/SidebarContext';


const PageHeader = styled.header`
  width: 100%;
  color: ${({ theme }) => theme.cPrimary_400};

  header {
    display: flex;
    align-items: center;
  }

  .icon {
    display: grid;
    place-items: center;
  }

  .actionBtn {
    a {
      color: ${({ theme }) => theme.cPrimary_400};
    }
  }

  .subtitle {
    ${tLabel_0};
    color: ${({ theme }) => theme.cPrimary_500};
    margin-left: 32px;
    margin-top: 4px;
  }
`;

const MainPageH1 = styled.h1`
  ${tHeading1_s1};
  margin-left: 16px;
  color: ${({ theme }) => theme.cAccent1_200};
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;
  margin-left: auto;
`;

export const SecondaryPageHeader = ({
  title,
  actionBtn,
  hamMenu,
  subtitle,
  className
}) => {
  const history = useHistory();
  const { setOpen } = useContext(SidebarContext);

  const handleBack = () => {
    history.goBack();
  }

  return (
    <PageHeader className={className}>
      <header>
        <span className='icon' onClick={handleBack}>
          <LeftChevronIcon width='16px' height='16px' />
        </span>
        <MainPageH1>
          {title}
        </MainPageH1>
        <ButtonGroup>
          {actionBtn &&
            <span className='actionBtn'>{actionBtn}</span>
          }
          {hamMenu &&
            <button onClick={() => setOpen((open) => !open)}>
              <HamburgerIcon width='24px' height='24px' />
            </button>
          }
        </ButtonGroup>
      </header>
      <footer>
        <div className='subtitle'>{subtitle}</div>
      </footer>
    </PageHeader>
  )
}