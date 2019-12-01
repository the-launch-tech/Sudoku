import React from 'react'

export default ({ game }) => {
  return (
    <div className="absolute top-0 left-0 z-10">
      {game.bigMap.map((row, r) => (
        <div key={r} className="flex flex-wrap justify-start items-start m-auto">
          {row.map((col, c) => (
            <div
              key={c}
              style={{ width: 25 * game.boxSize, height: 25 * game.boxSize }}
              className="border border-solid border-gray-7"
            ></div>
          ))}
        </div>
      ))}
    </div>
  )
}
