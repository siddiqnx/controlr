import React from 'react'
import styled from 'styled-components'
import { SceneCard } from 'components/Cards/SceneCard';

const scenes = [
  {
    sceneName: 'Bed Time',
    numDevicesOn: 4,
    numDevicesOff: 3,
  },
  {
    sceneName: 'Back from Office',
    numDevicesOn: 4,
    numDevicesOff: 3,
  },
  {
    sceneName: 'Washing Room',
    numDevicesOn: 4,
    numDevicesOff: 3,
  },
  {
    sceneName: 'Vacation',
    numDevicesOn: 4,
    numDevicesOff: 3,
  },
]

const StyledList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  grid-gap: 16px;

  .sceneCard {
    height: 100%;
  }
`;

export const SceneList = () => {
  return (
    <StyledList>
      {scenes.map((scene, i) => (
        <li key={i}>
          <SceneCard
            className='sceneCard'
            link='/rooms'
            title={scene.sceneName}
            numDevicesOff={scene.numDevicesOff}
            numDevicesOn={scene.numDevicesOn}
          />
        </li>
      ))}
    </StyledList>
  )
}
