import styled from 'styled-components';

export const RecentUsageContainer = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  margin-left: -24px;
  margin-right: -24px;

  .recentInfoCard {
    flex-grow: 0;
    flex-shrink: 0;
  }
`;

