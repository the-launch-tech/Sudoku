import React from 'react'

export default ({ game }) => {
  return (
    <div className="absolute top-0 left-0 w-full h-full z-0">
      {game.map.map((row, r) => (
        <div key={r} className="flex flex-wrap justify-start items-start w-full">
          {row.map((col, c) => (
            <span
              key={c}
              className="border border-solid border-gray-2 flex justify-center items-center font-head text-gray-7"
              style={{ width: 25, height: 25 }}
            >
              {col !== -1 ? col : null}
            </span>
          ))}
        </div>
      ))}
    </div>
  )
}
