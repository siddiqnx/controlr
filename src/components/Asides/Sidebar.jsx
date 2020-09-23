import React, { useEffect, useLayoutEffect, useState } from 'react'
import styled, { css } from 'styled-components';
import { useContext } from 'react';
import { SidebarContext } from 'contexts/SidebarContext';
import { Container } from 'components/Container/Container';
import { tHeading1_0, tText_l1_b } from 'style/typography';
import CrossIcon from 'images/icons/Cross';
import { ProfileCard } from 'components/Cards/ProfileCard';
import { useLocalStorage } from 'hooks/useLocalStorage';
import { BuildingListItem } from 'components/ListItems/BuildingListItem';
import { queryCache, useQuery } from 'react-query';
import { fetchUserInfo } from 'requests/account/fetchUserInfo';
import PlusIcon from 'images/icons/Plus';
import { Link } from 'react-router-dom';

const StyledAside = styled.aside`
  position: fixed;
  top: 0;
  transform: translateX(${({ open }) => open ? '0%' : '-100%'});
  transition: transform .25s ease-out;
  width: 100%;
  height: 100vh;
  background: ${({ theme }) => theme.cPrimary_800};
  z-index: 99999;

  .profileCard {
    margin-top: 36px;
  }

  ${({ open }) => open && css`
    body {
      overflow: hidden;
    }
  `};
`;

const Heading = styled.h1`
  ${tHeading1_0};
  color: ${({ theme }) => theme.cPrimary_600};
`;

const HeaderGroup = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const BuildingsSection = styled.section`
  margin-top: 42px;
  header {
    display: flex;
    ${tText_l1_b};
    color: ${({ theme }) => theme.cPrimary_400};

    .addButton {
      margin-left: auto;
    }
  }
`;

const BuildingList = styled.ul`
  background: ${({ theme }) => theme.cPrimary_900};
  margin: 16px -24px 0;
  padding: 24px 0;
`;

export const Sidebar = () => {
  const { open, setOpen } = useContext(SidebarContext);
  const [{ first_name, last_name }] = useLocalStorage('userInfo', {
    first_name: null,
    last_name: null
  });
  const [buildings, setBuildings] = useState([])
  const { data: userInfo } = useQuery('userInfo', fetchUserInfo);

  useEffect(() => {
    setBuildings(() => queryCache.getQueryData('buildings'));
  }, [queryCache.getQueryData('buildings')])

  useLayoutEffect(() => {
    if (open) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll')
    }
  }, [open]);

  return (
    <StyledAside open={open}>
      <Container>
        <HeaderGroup>
          <Heading>Menu</Heading>
          <button onClick={() => setOpen(false)}>
            <CrossIcon width='28px' height='28px' />
          </button>
        </HeaderGroup>
        {userInfo &&
          <>
            <ProfileCard
              className='profileCard'
              name={`${userInfo.first_name} ${userInfo.last_name}`}
              imageLink='https://images.unsplash.com/photo-1497551060073-4c5ab6435f12?fit=crop&w=667&q=80'
            />
            <BuildingsSection>
              <header>
                Your Buildings
                <span className='addButton'>
                  <Link to='/buildings/add'><PlusIcon width='20px' height='20px' /></Link>
                </span>
              </header>
              <BuildingList className='buildingsList'>
                {buildings?.map((building) => <BuildingListItem
                  key={building.id}
                  name={building.name}
                />)}
              </BuildingList>
            </BuildingsSection>
          </>
        }

      </Container>
    </StyledAside>
  )
}
