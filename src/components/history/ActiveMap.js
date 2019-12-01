import React from 'react'

export default ({ game }) => {
  return (
    <div className="relative w-full z-20">
      {game.map.map((row, r) => (
        <div key={r} className="flex flex-wrap justify-start items-start">
          {row.map((col, c) => (
            <span
              key={c}
              className="transition-200 transition-all flex justify-center items-center font-head text-gray-7"
              style={{ width: 25, height: 25 }}
            >
              {col === -1 ? game.activeMap[r][c] : null}
            </span>
          ))}
        </div>
      ))}
    </div>
  )
}
