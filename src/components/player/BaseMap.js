import React from 'react'

export default props => {
  return (
    <div className="absolute top-0 left-0 w-full h-full z-0">
      {props.map.map((row, r) => (
        <div key={r} className="flex flex-wrap justify-start items-start w-full">
          {row.map((col, c) => (
            <span
              key={c}
              className="border border-solid border-gray-2 flex justify-center items-center font-head text-gray-7"
              style={{ width: 35, height: 35 }}
            >
              {col !== -1 ? col : null}
            </span>
          ))}
        </div>
      ))}
    </div>
  )
}
