import React from 'react'

export default props => {
  return (
    <div className="absolute top-0 left-0 z-10">
      {props.bigMap.map((row, r) => (
        <div key={r} className="flex flex-wrap justify-start items-start m-auto">
          {row.map((col, c) => (
            <div
              key={c}
              style={{ width: 35 * props.boxSize, height: 35 * props.boxSize }}
              className="border border-solid border-gray-7"
            ></div>
          ))}
        </div>
      ))}
    </div>
  )
}
