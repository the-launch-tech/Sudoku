import React from 'react'
import ActiveMap from './ActiveMap'
import BaseMap from './BaseMap'
import BigMap from './BigMap'
import SolutionMap from './SolutionMap'

export default ({ game }) => {
  return (
    <div
      className="absolute flex flex-wrap justify-start items-start m-auto"
      style={{ width: game.size * 25, height: game.size * 25 }}
    >
      <SolutionMap game={game} />
      <ActiveMap game={game} />
      <BaseMap game={game} />
      <BigMap game={game} />
    </div>
  )
}
